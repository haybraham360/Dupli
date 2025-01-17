'use client'

import Image from 'next/image'
import logo from '../../assets/hos white logo.png'
import backgroundImage from '../../assets/Frame 1984079541-login.png'
import facebookLogo from '../../assets/Vector-facebook.png'
import twiterLogo from '../../assets/Group-twitter.png'
import instagramLogo from '../../assets/Group 190-instagram.png'
import youtubeLogo from '../../assets/Vector-youtube.png'
import smsLogo  from '../../assets/sms.png'
import lockLogo from '../../assets/lock.png'
import hideEye from '../../assets/eye-slash.png'
import googleLogo from '../../assets/image 37-google.png'
import Link from 'next/link'
// import dynamic from 'next/dynamic';
import { JSX, useState } from 'react'


export default function SRFLogin(): JSX.Element {

    const [ hidePassword, setHidePassword ] = useState<boolean>(false)

    return (
        <div className="w-full h-screen p-[14px]">
            <div className="w-full h-full border-[20px] border-[#003366] rounded-lg">
                <div className="w-full h-full rounded-lg flex">
                    <div className="w-[48%] h-full bg-[#003366] px-12 pt-5 pb-8 justify-between flex flex-col">
                        <div>
                            <Image
                                src={logo}  
                                alt='HOS Logo'
                                className='w-[9rem]'
                            />
                        </div>
                        <div>
                            <Image
                                src={backgroundImage}
                                alt='background image' 
                                className='w-[20rem] h-[20rem]'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3'>
                                <Link
                                    href={`/`}
                                    className='w-8 h-8 bg-white bg-opacity-20 flex items-center justify-center rounded-full hover:bg-opacity-10 hover:border-[#667dc5] hover:border'
                                >
                                    <Image
                                        src={facebookLogo}
                                        alt='facebook logo'
                                        className='w-[0.9rem] h-[0.9rem]'
                                    />
                                </Link>
                                <Link
                                    href={`/`}
                                    className='w-8 h-8 bg-white bg-opacity-20 flex items-center justify-center rounded-full hover:bg-opacity-10 hover:border-[#667dc5] hover:border'
                                >
                                    <Image
                                        src={twiterLogo}
                                        alt='twitter logo'
                                        className='w-[0.9rem] h-[0.9rem]'
                                    />
                                </Link>
                                <Link
                                    href={`/`}
                                    className='w-8 h-8 bg-white bg-opacity-20 flex items-center justify-center rounded-full hover:bg-opacity-10 hover:border-[#667dc5] hover:border'
                                >
                                    <Image
                                        src={instagramLogo}
                                        alt='instagram logo'
                                        className='w-[1.08rem] h-[0.9rem]'
                                    />
                                </Link>
                                <Link
                                    href={`/`}
                                    className='w-8 h-8 bg-white bg-opacity-20 flex items-center justify-center rounded-full hover:bg-opacity-10 hover:border-[#667dc5] hover:border'
                                >
                                    <Image
                                        src={youtubeLogo}
                                        alt='youtube logo'
                                        className='w-[1.1rem] h-[0.9rem]'
                                    />
                                </Link>
                            </div>
                            <h3 className='text-white text-[0.8rem] font-semibold'>&copy; 2025 Rights are Reserved by HOSOptima.com</h3>
                        </div>
                    </div>
                    <div className="w-[52%] h-full flex items-center justify-center">
                        <form action="" className='flex flex-col gap-4 w-[70%]'>
                            <div className='flex flex-col gap-[0.15rem]'>
                                <h2 className='font-bold'>Sign in</h2>
                                <h3 className='font-extralight text-[0.88rem]'>Welcome back! Please enter your details below</h3>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='relative'>
                                    <input type="email" placeholder='Email' className='border w-full p-[0.96rem] pl-[2.2rem] text-[0.86rem]' />
                                    <Image
                                        src={smsLogo}
                                        alt='sms'
                                        className='absolute left-3 top-[36%] w-4 h-4' 
                                    />
                                </div>
                                <div className='relative'>
                                    <input type={ !hidePassword ? `password` : `text`} placeholder='Password' className='border w-full p-[0.96rem] pl-[2.2rem] text-[0.86rem]' />
                                    <Image
                                        src={lockLogo}
                                        alt='lock'
                                        className='absolute left-3 top-[36%] w-4 h-4'
                                    />
                                    <button title='hide' className='absolute right-3 top-[32%]' onClick={(e) => {
                                            e.preventDefault();
                                            setHidePassword(!hidePassword);
                                        }}>
                                        <Image
                                            src={hideEye}
                                            alt='hide'
                                            className='w-4 h-4'
                                        />
                                    </button>
                                </div>
                                <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" name="remember" id="remember" title='remember' className='w-4 h-4' />
                                            <h3 className='text-[0.82rem]'>Remember me</h3>
                                        </div>
                                        <Link
                                            href={``} 
                                            className='text-[0.9rem] text-[#003366]'
                                        >
                                            Forgot Password?
                                        </Link>
                                </div>
                            </div>
                            <button className='border p-[0.96rem] bg-[#003366] text-white rounded-md border-none font-medium'>Sign in</button>
                            <button className='border p-[0.96rem] border-[#003366] text-[#003366] rounded-md font-medium flex items-center justify-center gap-3'>
                                <Image
                                    src={googleLogo}
                                    alt='google' 
                                    className='w-4 h-4'
                                />
                                Sign in with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
