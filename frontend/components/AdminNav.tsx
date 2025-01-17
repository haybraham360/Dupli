'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import logo from '../assets/hos logo (2).png'
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export const AdminNav: React.FC = () => {
    const { user, logout } = useAuth()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const router = useRouter()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        function handleEscapeKey(event: KeyboardEvent) {
            if (event.key === 'Escape' && isDropdownOpen) {
                setIsDropdownOpen(false)
                menuButtonRef.current?.focus()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscapeKey)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEscapeKey)
        }
    }, [isDropdownOpen])

    const handleLogout = async () => {
        try {
            await logout()
            router.push('/admin-login')
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

    return (
        <nav className='top-0 py-3 px-20 max-md:px-4 max-lg:px-10 flex items-center justify-between' role="navigation">
            <div className='flex items-center w-full gap-16 max-sm:gap-2'>
                <Link href="/admin/creator-dashboard">
                    <Image
                        src={logo}  
                        alt='HOS Logo'
                        className='w-40'
                        priority
                    />
                </Link>
                <input 
                    type="search"
                    placeholder="Search" 
                    className="border bg-[#EFEFEF] w-48 px-2 py-1 text-xs outline-none rounded-sm" 
                    aria-label="Search"
                />
            </div>
            <div className='flex gap-4 items-center justify-between max-md:justify-end w-48'>
                <h3 className='font-semibold max-sm:text-sm space-x-2 gap-2 flex max-md:hidden text-[0.9rem]'>
                    <span>{user?.firstName}</span>
                    <span>{user?.lastName}</span>
                </h3>
                <div className="relative" ref={dropdownRef}>
                    <button 
                        ref={menuButtonRef}
                        onClick={toggleDropdown}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                        aria-controls="user-menu"
                        className='flex gap-1 items-center p-1 rounded-full hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                        <span className="sr-only">Open user menu</span>
                        <div className='w-11 h-11 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-lg max-sm:text-base justify-center flex border'>
                            <FaUser />
                        </div>
                        <HiMiniBars3BottomRight className="text-gray-600" aria-hidden="true" />
                    </button>

                    {isDropdownOpen && (
                        <div 
                            id="user-menu"
                            role="menu"
                            className='absolute right-0 mt-2 w-48 rounded-sm shadow-lg bg-white border border-gray-100'
                        >
                            <div className='py-1'>
                                <button
                                    role="menuitem"
                                    onClick={handleLogout}
                                    className='flex items-center gap-2 w-full px-4 py-2 text-xs text-gray-700 hover:bg-[#EFEFEF] focus:bg-[#EFEFEF] focus:outline-none transition-colors duration-150'
                                >
                                    <FiLogOut className="text-gray-500" aria-hidden="true" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default AdminNav;