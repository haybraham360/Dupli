'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface User {
  email: string
  firstName: string
  lastName: string
  isAdmin: boolean
  createdAt: string
}

interface AuthResponse {
  message: string
  data: {
    email: string
    firstName: string
    lastName: string
    isAdmin: boolean
    token: string
    refreshToken: string
    createdAt: string
  }
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | null>(null)

const API_BASE_URL = 'https://api.hosoptima.com/api/v1'

export function AuthProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const authCheckComplete = useRef(false)

  // Function to set cookies with expiration
  const setCookie = useCallback((name: string, value: string, expiryHours: number = 1) => {
    try {
      const date = new Date()
      date.setTime(date.getTime() + expiryHours * 60 * 60 * 1000)
      const expires = `expires=${date.toUTCString()}`
      document.cookie = `${name}=${value}; ${expires}; path=/; secure; samesite=strict`
    } catch (error) {
      console.error('Error setting cookie:', error)
      throw new Error('Failed to set authentication cookie')
    }
  }, [])

  // Function to get cookie value with error handling
  const getCookie = useCallback((name: string): string | null => {
    try {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null
      return null
    } catch (error) {
      console.error('Error reading cookie:', error)
      return null
    }
  }, [])

  // Function to remove cookie with error handling
  const removeCookie = useCallback((name: string) => {
    try {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
    } catch (error) {
      console.error('Error removing cookie:', error)
    }
  }, [])

  // Helper function to make authenticated API calls
  const makeAuthenticatedRequest = async (url: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error occurred' }))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      return response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Request failed: ${error.message}`)
      }
      throw error
    }
  }

  async function login(email: string, password: string) {
    setIsLoading(true)
    setError(null)
    
    try {
      const { data }: AuthResponse = await makeAuthenticatedRequest(
        `${API_BASE_URL}/admin/auth/login`,
        {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        }
      )

      const userData: User = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        isAdmin: data.isAdmin,
        createdAt: data.createdAt,
      }

      setUser(userData)
      setToken(data.token)
      setRefreshToken(data.refreshToken)

      setCookie('token', data.token, 1)
      setCookie('refresh-token', data.refreshToken, 168)
      setCookie('user-role', 'admin', 1)
      setCookie('user-data', JSON.stringify(userData), 1)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = useCallback(() => {
    setIsLoading(true)
    setUser(null)
    setToken(null)
    setRefreshToken(null)
    setError(null)
    removeCookie('token')
    removeCookie('refresh-token')
    removeCookie('user-role')
    removeCookie('user-data')
    authCheckComplete.current = false
    setIsLoading(false)
  }, [removeCookie])

  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) {
      throw new Error('No refresh token available')
    }

    try {
      // const data = await makeAuthenticatedRequest(`${API_BASE_URL}/admin/auth/refresh`, {
      //   method: 'POST',
      //   body: JSON.stringify({ refreshToken }),
      // })

      // setToken(data.token)
      // setCookie('token', data.token)
      // return data.token
    } catch (error) {
      console.error('Token refresh failed:', error)
      await logout()
      throw error
    }
  }, [refreshToken, setCookie, logout])

  const checkAuth = useCallback(async () => {
    // Skip if we've already done the initial check
    if (authCheckComplete.current) {
      return;
    }
    
    const storedToken = getCookie('token')
    const storedRefreshToken = getCookie('refresh-token')

    if (!storedToken || !storedRefreshToken) {
      setIsLoading(false)
      authCheckComplete.current = true
      return
    }

    try {
      setToken(storedToken)
      setRefreshToken(storedRefreshToken)

      const response = await fetch(`${API_BASE_URL}/admin/auth`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Authentication failed: ${response.status}`)
      }

      const responseText = await response.text()
      
      if (responseText.includes('This action returns all admin')) {
        const storedUserData = getCookie('user-data')
        
        if (storedUserData) {
          try {
            const userData: User = JSON.parse(storedUserData)
            setUser(userData)
          } catch (error) {
            console.error('Failed to parse stored user data:', error)
            await logout()
            throw new Error('Invalid user data format')
          }
        } else {
          await logout()
          throw new Error('User data not found')
        }
      } else {
        await logout()
        throw new Error('Invalid authentication response')
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      const errorMessage = error instanceof Error ? error.message : 'Session verification failed'
      setError(errorMessage)
      await logout()
    } finally {
      setIsLoading(false)
      authCheckComplete.current = true
    }
  }, [getCookie, logout])

  // Watch for pathname changes to trigger auth check
  useEffect(() => {
    authCheckComplete.current = false
    checkAuth()
  }, [pathname, checkAuth])

  // Initial auth check
  useEffect(() => {
    if (!authCheckComplete.current) {
      checkAuth()
    }
  }, [checkAuth])

  useEffect(() => {
    const setupFetchInterceptor = () => {
      const originalFetch = window.fetch
      window.fetch = async (...args) => {
        try {
          const response = await originalFetch(...args)
          
          if (response.status === 401 && refreshToken) {
            const newToken = await refreshAccessToken()
            const [resource, config] = args
            
            if (config && typeof config === 'object') {
              const newConfig = {
                ...config,
                headers: {
                  ...config.headers,
                  Authorization: `Bearer ${newToken}`,
                },
              }
              return originalFetch(resource, newConfig)
            }
          }
          return response
        } catch (error) {
          console.error('Fetch interceptor error:', error)
          throw error
        }
      }

      // Cleanup function to restore original fetch
      return () => {
        window.fetch = originalFetch
      }
    }

    const cleanup = setupFetchInterceptor()
    return () => cleanup()
  }, [refreshToken, refreshAccessToken])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        token, 
        login,
        logout, 
        isLoading,
        isAuthenticated: !!user && !!token,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}