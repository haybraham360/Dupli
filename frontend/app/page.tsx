// import React from 'react'

import Link from "next/link";
import Image from 'next/image';
import  background from '../assets/Rectangle 9670.png'
// import { FiUpload } from "react-icons/fi";
// import { LuPenTool } from "react-icons/lu";
// import { RiContactsBookUploadLine } from "react-icons/ri";
import { coursesData } from "@/mock data/coursesData";
import CoursesCard from "@/components/Cards/CoursesCard";
import { bookData } from "@/mock data/bookData";
import BookCard from "@/components/Cards/BookCard";
import { articlesData } from "@/mock data/articlesData";
import { AdminNav } from "@/components/AdminNav";
import { AdminFooter } from "@/components/AdminFooter";
import UploadIcon from "@/components/Icons/UploadIcon";

export default function CreatorDashboard() {
    return (
        <div className="overflow-x-hidden">  
            <AdminNav />
            <div className="overflow-y-auto px-20 max-md:px-4 max-sm:mx-4 my-2 pb-12 max-md:overflow-x-hidden">
                <h5 className='text-[0.7rem] mb-3 max-md:mb-2 text-gray-600'>Homepage &gt; <span className="text-[#6694c2] font-medium">Creator Dashboard</span> </h5>
                <div className="w-full">
                    <Image 
                        src={background}
                        alt="Background Image"
                        className="my-6"
                    />
                </div>

                <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 items-center gap-4 max-md:gap-2 mb-6">
                    <Link href={`/admin/creator-dashboard/upload-video`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm" >
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <FiUpload  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload Course</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-book`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <RiContactsBookUploadLine className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload E-book</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-blog`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <LuPenTool  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Write a Blog</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-HOS-assessment-questions`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <LuPenTool  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload HOS <br /> Assessment Questions</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-blog`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <LuPenTool  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload Webinar</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-blog`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <LuPenTool  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload Case study</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-blog`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <LuPenTool  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload Media</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-blog`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <LuPenTool  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload Whitepapers</h3>
                        </div>
                    </Link>
                    <Link href={`/admin/creator-dashboard/upload-FAQ`} className="flex items-center justify-center  h-[160px] w-full bg-[#F7F7F7] shadow-sm">
                        <div className="flex flex-col items-center gap-2 max-md:gap-2">
                            {/* <LuPenTool  className="text-5xl max-md:text-3xl"/> */}
                            <UploadIcon />
                            <h3 className="text-[0.92rem] text-center  max-md:text-[0.82rem] font-medium text-[#1A1A1A]">Upload FAQs</h3>
                        </div>
                    </Link>
                </div>

                <div className="flex gap-2 items-center w-full">
                    <h3 className="text-[0.96rem] font-bold w-[6.5rem] max-md:w-[8rem]">My Courses</h3>
                    <div className="h-0.5 w-full bg-black"></div>
                </div>

                <div className="py-6 flex gap-4 max-md:gap-2 max-md:mb-2 w-full overflow-x-auto items-center">
                    {
                        coursesData.map((data, index) => (
                            <div key={index} >
                                <CoursesCard video={data.video} title={data.title} name={data.name} time={data.time}  />
                            </div>
                        ))
                    }
                </div>
                
                <div className="flex gap-2 items-center w-full">
                    <h3 className="text-[0.96rem] font-bold w-[6.5rem]">My Books</h3>
                    <div className="h-0.5 w-full bg-black"></div>
                </div>

                <div className="py-6 flex gap-4 max-md:gap-2  max-md:mb-2 overflow-x-auto w-full items-center">
                    {
                        bookData.map((data, index) => (
                            <div key={index} >
                                <BookCard image={data.image} title={data.title} desc={data.desc}  />
                            </div>
                        ))
                    }
                </div>

                <div className="flex gap-2 items-center w-full">
                    <h3 className="text-[0.96rem] font-bold w-[6.5rem] max-md:w-[8rem]">My Articles</h3>
                    <div className="h-0.5 w-full bg-black"></div>
                </div>

                <div className="py-6 flex gap-4 max-md:gap-2  max-md:mb-2 overflow-x-auto w-full items-center">
                    {
                        articlesData.map((data, index) => (
                            <div key={index} >
                                <BookCard image={data.image} title={data.title} desc={data.desc}  />
                            </div>
                        ))
                    }
                </div>
            </div>
            <AdminFooter />
        </div>
    )
}
