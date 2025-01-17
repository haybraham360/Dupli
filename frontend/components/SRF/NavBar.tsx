'use client'

import Image from 'next/image';
import React from 'react'
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { GoBell } from "react-icons/go";
import waveEmoji from '../../assets/Vector-wave.png'
import { IoMdArrowDropdown } from 'react-icons/io';
import { useAuth } from '@/lib/auth-context';

interface NavBarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  active: string;
}

export const NavBar: React.FC<NavBarProps> = ({ toggleSidebar, isSidebarOpen, active }) => {

    const { user } = useAuth()

  return (
    <div className='top-0 p-5 pl-6 flex w-full items-center justify-between bg-[#FDFDFD] border-b'>
      <div className='flex items-center w-full gap-16 max-sm:gap-2'>
        {/* Hamburger menu for mobile */}
        <button 
          className='md:hidden mr-4'
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        { active === 'dashboard' && (
            <div className='flex flex-col gap-0'>
                <h3 className='flex items-center gap-2 text-[#003366] font-bold  text-[0.9rem]'>Hey there 
                    <Image
                        src={waveEmoji}
                        alt='hello'
                    />
                </h3>
                <h3 className='text-[#656565] font-normal text-[0.9rem]'>Welcome back, {user?.firstName}</h3>
            </div>
        ) }
        {
            active === 'leads' && (
                <h2 className='text-[#003366] font-bold text-[0.95rem]'>Leads & Opportunities</h2>
            )
        }
        {
            active === 'clients' && (
                <h2 className='text-[#003366] font-bold text-[0.95rem]'>Clients & Accounts</h2>
            )
        }
        {
            active === 'ads' && (
                <h2 className='text-[#003366] font-bold text-[0.95rem]'>Ad Sales & Campaign Management</h2>
            )
        }
        {
            active === 'pipeline' && (
                <h2 className='text-[#003366] font-bold text-[0.95rem]'>Pipelines & Campaign management</h2>
            )
        }
        {
            active === 'reports' && (
                <h2 className='text-[#003366] font-bold text-[0.95rem]'>Reports & Analytics</h2>
            )
        }
        {
            active === 'products' && (
                <h2 className='text-[#003366] font-bold text-[0.95rem]'>Products</h2>
            )
        }
      </div>
      <div className='flex gap-4 items-center w-[20vw] max-sm:w-[30vw]'>
        <button title='notification'>
          <GoBell size={18} />
        </button>
        <button title='User' className='flex gap-1 items-center'>
          <div className='w-10 h-10 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
            <FaUser />
          </div>
            <h3 className='font-semibold mr-4 ml-2 text-[0.84rem] max-sm:text-sm'>{user?.firstName} {user?.lastName}</h3>
          <div>
            <IoMdArrowDropdown />
          </div>
        </button>
      </div>
    </div>
  )
}

