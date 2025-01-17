import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/hos logo (2).png'
import { FaTimes } from 'react-icons/fa';


interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
export const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Dark overlay */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-[250px] 
        px-10 py-8 border flex flex-col justify-between 
        transform transition-transform duration-300 ease-in-out
        bg-white z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:w-auto md:flex
      `}>
        <div className='flex flex-col gap-6 w-full max-sm:w-[50vw] max-md:text-sm'>
          <div className='flex justify-between items-center md:hidden'>
            <Image
              src={logo}  
              alt='HOS Logo'
              className='w-[10rem]'
            />
            <button onClick={toggleSidebar} title='toggle side bar' className='md:hidden'>
              <FaTimes />
            </button>
          </div>
          
          <Image
            src={logo}  
            alt='HOS Logo'
            className='w-[10rem] hidden md:block'
          />
          
          <div className='flex flex-col gap-3 text-[0.95rem]'>
            <Link 
              href={`/super-admin/dashboard`} 
              className='hover:bg-gray-100 p-2 rounded'
              onClick={toggleSidebar}
            >
              Dashboard
            </Link>
            <Link 
              href={`/super-admin/user-management`} 
              className='hover:bg-gray-100 p-2 rounded'
              onClick={toggleSidebar}
            >
              User Management
            </Link>
            <Link 
              href={`/super-admin/content-management`} 
              className='hover:bg-gray-100 p-2 rounded'
              onClick={toggleSidebar}
            >
              Content Management
            </Link>
            <Link 
              href={`/super-admin/advertisement-management`} 
              className='hover:bg-gray-100 p-2 rounded'
              onClick={toggleSidebar}
            >
              Advertisement Management
            </Link>
            <Link 
              href={`/super-admin/financials`} 
              className='hover:bg-gray-100 p-2 rounded'
              onClick={toggleSidebar}
            >
              Financials
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4 text-[0.9rem]'>
          <button 
            className='border-2 py-[0.3rem] hover:bg-gray-100'
            onClick={toggleSidebar}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  )
}
