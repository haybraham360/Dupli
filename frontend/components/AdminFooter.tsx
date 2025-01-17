'use client'

import Link from 'next/link';
import React from 'react'
// import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';



export const AdminFooter: React.FC = () => {
  return (
    <div className='py-5 px-20 max-md:p-6 bg-[#1B3664] max-lg:px-10 flex items-center justify-between text-white text-[0.72rem] '>
        <div className='flex gap-8 max-md:gap-3'>
            <div className="flex items-center max-md:items-start max-md:flex-col justify-around max-md:justify-normal max-md:w-[5rem] gap-4 max-md:gap-2 font-normal">
                <Link href={`/admin/creator-dashboard`}>Contact Us</Link>
                <Link href={`/admin/creator-dashboard`}>Terms of Service</Link>
                <Link href={`/admin/creator-dashboard`}>Privacy Policy</Link>
            </div>
            <div className="flex items-center justify-around gap-3 max-md:gap-2 max-md:mr-4">
                <Link href={`/admin/creator-dashboard`}>
                    <div className='w-8 h-8 rounded-full bg-white bg-opacity-25 flex items-center justify-center'>
                        <FaFacebookF />
                    </div>
                </Link>
                <Link href={`/admin/creator-dashboard`}>
                    <div className='w-8 h-8 rounded-full bg-white bg-opacity-25 flex items-center justify-center'>
                        <BsTwitterX />
                    </div>
                </Link>
                <Link href={`/admin/creator-dashboard`}>
                    <div className='w-8 h-8 rounded-full bg-white bg-opacity-25 flex items-center justify-center'>
                        <FaInstagram />
                    </div>
                </Link>
                <Link href={`/admin/creator-dashboard`}>
                    <div className='w-8 h-8 rounded-full bg-white bg-opacity-25 flex items-center justify-center'>
                        <IoLogoYoutube />
                    </div>
                </Link>
            </div>
        </div>
        <div className='font-semibold'> &copy;2023 Rights are Reserved by HOSOptima.com </div>
    </div>
  )
}

