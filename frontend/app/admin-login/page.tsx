'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import back from '../../assets/Vector 398-login-back.png'
import logo from '../../assets/hos white logo.png'
import backline from '../../assets/Vector 399-login-back.png'
import backImage from '../../assets/Ellipse 139-login-back.png'
import backImage2 from '../../assets/Ellipse 140-login-back.png'
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formError, setFormError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { login, isAuthenticated, error: authError } = useAuth()
    const router = useRouter()

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/")
        }
    }, [isAuthenticated, router])

    const validateForm = () => {
        if (!email.trim()) {
            setFormError("Email is required")
            return false
        }
        if (!password.trim()) {
            setFormError("Password is required")
            return false
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFormError("Please enter a valid email address")
            return false
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormError("")
        
        if (!validateForm()) {
            return
        }

        setIsLoading(true)

        try {
            await login(email, password)
            // Router.push is handled by the useEffect above
        } catch (err) {
            setFormError(
                err instanceof Error 
                    ? err.message 
                    : "Login failed. Please check your credentials."
            )
        } finally {
            setIsLoading(false)
        }
    }

    const ErrorMessage = ({ message }: { message: string | null }) => (
        <div className="bg-red-50 border border-red-200 text-red-500 text-[0.7rem] p-2 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {message}
        </div>
    )

    return (
        <div className='w-full h-[100vh] flex flex-col relative'>
            <div className="h-[45%] w-full relative">
                <div className="flex flex-col space-y-4 absolute top-4 left-4 z-10">
                    <Image 
                        src={logo}
                        alt="HOS Logo"
                        className="h-[30px] w-auto object-contain"
                        priority
                    />
                    <h3 className="text-white text-[1.2rem] font-semibold ml-8">Welcome back, Admin!</h3>
                </div>
                <div className="flex absolute right-[10rem] top-6 -space-x-[13.4rem] max-md:hidden space-y-6">
                    <Image
                        src={backline}
                        alt="back line"
                        className="h-[350px] w-[320px] object-contain"
                        priority 
                    />
                    <div className="flex flex-col">
                        <Image
                            src={backImage}
                            alt="back image"
                            className="h-[100px] w-[100px] object-contain"
                            priority 
                        />
                        <Image
                            src={backImage2}
                            alt="back image"
                            className="h-[60px] w-[60px] ml-[8rem] object-contain"
                            priority 
                        />
                    </div>
                </div>
                <Image
                    src={back}
                    alt="background"
                    className="h-full w-full object-fill"
                    priority
                />
            </div>
            
            <div className="flex w-full justify-end pr-[6rem] max-md:pr-[1rem] -mt-14 max-sm:-mt-32">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6 px-12 p-10 rounded-md shadow-lg relative z-10 bg-white transition-all duration-200 hover:shadow-xl">
                    <h3 className="text-[0.8rem] text-center font-semibold text-gray-800">Admin Account</h3>
                    
                    {(formError || authError) && (
                        <ErrorMessage message={formError || authError} />
                    )}
                    
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-[0.75rem] font-medium text-gray-700">
                                Email
                            </label>
                            <input 
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setFormError("")
                                }}
                                className="text-[0.7rem] p-2.5 bg-[#F0F0F0] rounded-sm w-[260px] outline-none border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] transition-all duration-200" 
                                placeholder="Please input your email"
                                disabled={isLoading}
                                required 
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="password" className="text-[0.75rem] font-medium text-gray-700">
                                Password
                            </label>
                            <input 
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setFormError("")
                                }}
                                className="text-[0.7rem] p-2.5 bg-[#F0F0F0] rounded-sm w-[260px] outline-none border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] transition-all duration-200" 
                                placeholder="Please input your password"
                                disabled={isLoading}
                                required 
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="bg-[#003366] text-white text-[0.7rem] rounded-sm p-3 disabled:opacity-50 hover:bg-[#004080] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Logging in...
                            </span>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
            </div>
            
            <footer className="w-full text-[0.7rem] font-semibold h-10 fixed bottom-0 px-8 flex items-center justify-between bg-white/80 backdrop-blur-sm">
                <div className="flex gap-3">
                    <Link href={``} className="hover:text-[#003366] transition-colors">Contact Us</Link>
                    <Link href={``} className="hover:text-[#003366] transition-colors">Terms of Service</Link>
                    <Link href={``} className="hover:text-[#003366] transition-colors">Privacy Policy</Link>
                </div>
                <h3 className="text-gray-600">&copy;2025 Rights are Reserved by HOSOptima.com</h3>
            </footer>
        </div>
    )
}