'use client'

import { useAuth } from '@/lib/auth-context';
import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { GoBell } from "react-icons/go";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface NavBarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ toggleSidebar, isSidebarOpen }) => {
    const { user, logout } = useAuth()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    // Handle click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleLogout = async () => {
        try {
            await logout()
            router.push('/admin-login')
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <div className='top-0 p-10 flex w-full items-center justify-between'>
            <div className='flex items-center w-full gap-16 max-sm:gap-2'>
                {/* Hamburger menu for mobile */}
                <button 
                    className='md:hidden mr-4'
                    onClick={toggleSidebar}
                    aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
                <h2 className='text-[1.4rem] max-sm:text-[1.1rem] font-bold'>
                    Hello {user?.firstName}
                </h2>
                <div className='w-[38%] bg-black h-0.5 hidden md:block max-sm:hidden'></div>
            </div>
            <div className='flex gap-4 items-center w-[20vw] max-sm:w-[30vw]'>
                <button title='notification'>
                    <GoBell width={16} />
                </button>
                <h3 className='font-semibold max-sm:text-sm'>
                    {user?.firstName} {user?.lastName}
                </h3>
                <div className='relative' ref={dropdownRef}>
                    <button 
                        title='User menu' 
                        className='flex gap-1 items-center'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className='w-12 h-12 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
                            <FaUser />
                        </div>
                        <div>
                            {isDropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                        </div>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                            <div className='py-1'>
                                <button
                                    onClick={handleLogout}
                                    className='flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                >
                                    <FiLogOut className="text-gray-500" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}