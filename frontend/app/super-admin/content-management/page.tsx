// import React from 'react'

import Link from "next/link";

export default function ContentManagement() {
    return (
     <div className='mx-20 max-sm:mx-4 my-2'>
        <div className="flex gap-3 max-lg:grid max-lg:w-full">
            <div className='shadow-md rounded-lg border w-[50%] max-lg:w-full grid gap-4 py-5 px-6' >
                <div className="w-full h-[10rem] grid gap-4">
                    <div className="w-full border rounded-md"></div>
                    <div className="w-full border rounded-md"></div>
                </div>
                <div className="flex w-full justify-between font-semibold text-[0.9rem]">
                    <Link href={ `/super-admin/content-management`}>Manage Forum </Link>
                    <Link href={ `/super-admin/content-management`}>View All</Link>
                </div>
            </div>
            <div className='shadow-md rounded-lg border w-[50%] max-lg:w-full grid gap-4 py-5 px-6' >
                <div className="w-[76%] h-[10rem] flex gap-4">
                    <div className="h-full w-full border rounded-md"></div>
                    <div className="h-full w-full border rounded-md"></div>
                </div>
                <div className="flex w-full justify-between font-semibold text-[0.9rem]">
                    <Link href={ `/super-admin/content-management`}>Manage Library </Link>
                    <Link href={ `/super-admin/content-management`}>View All</Link>
                </div>
            </div>
        </div>
    </div>   
    )
}
