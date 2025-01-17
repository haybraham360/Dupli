// import React from 'react'

import { BiSpreadsheet } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GiAtomicSlashes } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi2";

export default function Dashboard() {
    return (
     <div className="max-md:mx-5 gap-8 p-5 overflow-auto bg-[#F1F0F2] flex items-center justify-center">
        <div className="bg-white relative w-full scroll-m-4 p-5">
            <div className="flex w-full text-[0.75rem] mb-5 justify-between items-center">
                <button className="px-6 py-2 rounded-md border border-[#003366] text-[#003366] font-semibold shadow-sm">Add new lead</button>
                <div className="flex gap-4">
                    <button className="px-5 py-2 rounded-md border border-[#003366] text-[#003366] font-semibold shadow-sm">Create new campaign</button>
                    <button className="px-5 py-2 rounded-md border border-[#003366] text-[#003366] font-semibold shadow-sm">Schedule Meeting</button>
                </div>
            </div>
            <div className="w-full h-full flex items-center gap-3">
                <div className="w-full h-full gap-3 flex flex-col">
                    <div className='h-[94px] text-[#56575A] font-medium w-full flex gap-2'>
                        <div className="w-full border shadow-sm h-full justify-between bg-[#F6FAFF] border-[#B7D2FF] rounded-md p-2 flex flex-col">
                            <div className="flex w-full items-center gap-2">
                                <BiSpreadsheet size={18} />
                                <span className="text-[0.68rem]">Total Training package</span>
                            </div>
                            <div className="h-[1px] w-full border"></div>
                            <span>478</span>
                        </div>
                        <div className="w-full border shadow-sm h-full justify-between bg-[#F6FAFF] border-[#B7D2FF] rounded-md p-2 flex flex-col">
                            <div className="flex w-full items-center gap-2">
                                <GiAtomicSlashes size={18} />
                                <span className="text-[0.68rem]">Total Ad sales</span>
                            </div>
                            <div className="h-[1px] w-full border"></div>
                            <span>478</span>
                        </div>

                    </div>
                    <div className="h-full gap-3 w-full flex flex-col">
                        <div className="h-[50%] p-2 w-full rounded-md shadow-sm space-y-2 border">
                            <div className="flex gap-2">
                                <HiOutlineUser size={16} />
                                <span className="text-[0.7rem] font-medium">Total number of leads for Individual sales</span>
                            </div>
                            <div className="h-[1px] border w-full"></div>
                            <div className="flex flex-col space-y-12 pb-6" >
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#003366] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `40%` }}
                                    />
                                    <span className="text-[0.6rem]">New lead - 34</span>
                                </div>
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#00FF66] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `55%` }}
                                    />
                                    <span className="text-[0.6rem]">Qualified - 34</span>
                                </div>
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#CA7CFF] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `68%` }}
                                    />
                                    <span className="text-[0.6rem]">Proposal sent - 34</span>
                                </div>
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#49E2FF] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `80%` }}
                                    />
                                    <span className="text-[0.6rem]">Closed - 34</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[50%] p-2 rounded-md shadow-sm w-full space-y-2 border">
                            <div className="flex gap-2">
                                <HiOutlineUser size={16} />
                                <span className="text-[0.7rem] font-medium">Total number of leads for Enterprise client sales</span>
                            </div>
                            <div className="h-[1px] border w-full"></div>
                            <div className="flex flex-col space-y-12 pb-6" >
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#003366] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `40%` }}
                                    />
                                    <span className="text-[0.6rem]">New lead - 34</span>
                                </div>
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#00FF66] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `55%` }}
                                    />
                                    <span className="text-[0.6rem]">Qualified - 34</span>
                                </div>
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#CA7CFF] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `68%` }}
                                    />
                                    <span className="text-[0.6rem]">Proposal sent - 34</span>
                                </div>
                                <div className="w-full bg-[#F0F7FF] rounded-full h-2">
                                    <div 
                                        className="bg-[#49E2FF] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `80%` }}
                                    />
                                    <span className="text-[0.6rem]">Closed - 34</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] h-full flex flex-col space-y-2 ">
                    <h3 className="text-[#101828] text-[0.8rem] font-medium">Ad Campaign Overview - Top Ads</h3>
                    <div className="p-2 flex rounded-md flex-col w-full border space-y-2 shadow-sm">
                        <div className="flex gap-2">
                            <GiAtomicSlashes size={18} />
                            <span className="text-[0.8rem] font-medium">Coca cola campaign</span>
                        </div>
                        <div className="h-[1px] w-full border"></div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Client</span>
                                <span className="text-[0.72rem] font-semibold">Coca cola</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Status</span>
                                <div className="text-[0.6rem] bg-green-100 py-1 px-2 rounded-lg flex gap-1 items-center font-semibold">
                                    <div className="h-1 w-1 rounded-full -mt-0.5 bg-green-500"></div>
                                    <span className="text-green-500">Active</span>
                                </div>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Spend</span>
                                <span className="text-[0.72rem] font-semibold">$456</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Impressions</span>
                                <span className="text-[0.72rem] font-semibold">8,456</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex rounded-md flex-col w-full border space-y-2 shadow-sm">
                        <div className="flex gap-2">
                            <GiAtomicSlashes size={18} />
                            <span className="text-[0.8rem] font-medium">Coca cola campaign</span>
                        </div>
                        <div className="h-[1px] w-full border"></div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Client</span>
                                <span className="text-[0.72rem] font-semibold">Coca cola</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Status</span>
                                <div className="text-[0.6rem] bg-green-100 py-1 px-2 rounded-lg flex gap-1 items-center font-semibold">
                                    <div className="h-1 w-1 rounded-full -mt-0.5 bg-green-500"></div>
                                    <span className="text-green-500">Active</span>
                                </div>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Spend</span>
                                <span className="text-[0.72rem] font-semibold">$456</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Impressions</span>
                                <span className="text-[0.72rem] font-semibold">8,456</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex rounded-md flex-col w-full border space-y-2 shadow-sm">
                        <div className="flex gap-2">
                            <GiAtomicSlashes size={18} />
                            <span className="text-[0.8rem] font-medium">Coca cola campaign</span>
                        </div>
                        <div className="h-[1px] w-full border"></div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Client</span>
                                <span className="text-[0.72rem] font-semibold">Coca cola</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Status</span>
                                <div className="text-[0.6rem] bg-green-100 py-1 px-2 rounded-lg flex gap-1 items-center font-semibold">
                                    <div className="h-1 w-1 rounded-full -mt-0.5 bg-green-500"></div>
                                    <span className="text-green-500">Active</span>
                                </div>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Spend</span>
                                <span className="text-[0.72rem] font-semibold">$456</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Impressions</span>
                                <span className="text-[0.72rem] font-semibold">8,456</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex rounded-md flex-col w-full border space-y-2 shadow-sm">
                        <div className="flex gap-2">
                            <GiAtomicSlashes size={18} />
                            <span className="text-[0.8rem] font-medium">Coca cola campaign</span>
                        </div>
                        <div className="h-[1px] w-full border"></div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Client</span>
                                <span className="text-[0.72rem] font-semibold">Coca cola</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Status</span>
                                <div className="text-[0.6rem] bg-green-100 py-1 px-2 rounded-lg flex gap-1 items-center font-semibold">
                                    <div className="h-1 w-1 rounded-full -mt-0.5 bg-green-500"></div>
                                    <span className="text-green-500">Active</span>
                                </div>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Spend</span>
                                <span className="text-[0.72rem] font-semibold">$456</span>
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#727376] text-[0.7rem]">Impressions</span>
                                <span className="text-[0.72rem] font-semibold">8,456</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col space-y-2">
                    <h3 className="text-[#101828] text-[0.8rem] font-medium">My Activities</h3>
                    <div className="w-full h-full flex flex-col space-y-1">
                        <div className="flex space-x-2 text-[0.78rem] text-[#717B8C]">
                            <button className={`px-3 py-2`}>Recent</button>
                            <button className={`px-3 py-2`}>Upcoming</button>
                            <button className={`px-3 py-2`}>Completed</button>
                        </div>
                        <div className="border p-4 flex items-center space-x-3 rounded-md shadow-md">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center bg-[#E1F0FF] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#003366]"></div>
                                    <span className="text-[0.62rem] text-[#003366]">Call</span>
                                </div>
                                <h3  className="text-[0.78rem] font-semibold">09:30 AM</h3>
                                <h3  className="text-[0.6rem] font-light">30 mins ago</h3>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col w-[36%] space-y-1">
                                <div className="flex -space-x-3">
                                    <div className='w-9 h-9 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
                                     <FaUser />
                                    </div>
                                    <div className='w-9 h-9 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
                                     <FaUser />
                                    </div>
                                </div>
                                <span className="text-[0.67rem] font-medium">Vivian, Sarah</span>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col space-y-1">
                                <h3  className="text-[0.7rem] font-light">Thursday</h3> 
                                <h3  className="text-[0.78rem] font-semibold">12 June, 2023</h3>
                                <div className="flex items-center bg-[#ECFDF3] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#12B76A]"></div>
                                    <span className="text-[0.62rem] text-[#12B76A]">Completed</span>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 flex items-center space-x-3 rounded-md shadow-md">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center bg-[#E1F0FF] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#003366]"></div>
                                    <span className="text-[0.62rem] text-[#003366]">Email</span>
                                </div>
                                <h3  className="text-[0.78rem] font-semibold">09:30 AM</h3>
                                <h3  className="text-[0.6rem] font-light">30 mins ago</h3>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col w-[36%] space-y-1">
                                <div className="flex -space-x-3">
                                    <div className='w-9 h-9 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
                                     <FaUser />
                                    </div>
                                </div>
                                <span className="text-[0.67rem] font-medium">To: Vivian</span>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col space-y-1">
                                <h3  className="text-[0.7rem] font-light">Thursday</h3> 
                                <h3  className="text-[0.78rem] font-semibold">12 June, 2023</h3>
                                <div className="flex items-center bg-[#FDF6E8] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#FFAA00]"></div>
                                    <span className="text-[0.62rem] text-[#FFAA00]">Follow up</span>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 flex items-center space-x-3 rounded-md shadow-md">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center bg-[#E1F0FF] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#003366]"></div>
                                    <span className="text-[0.62rem] text-[#003366]">Proposal</span>
                                </div>
                                <h3  className="text-[0.78rem] font-semibold">09:30 AM</h3>
                                <h3  className="text-[0.6rem] font-light">30 mins ago</h3>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col w-[36%] space-y-1">
                                <div className="flex -space-x-3">
                                    <div className='w-9 h-9 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
                                     <FaUser />
                                    </div>
                                </div>
                                <span className="text-[0.67rem] font-medium">To: Vivian</span>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col space-y-1">
                                <h3  className="text-[0.7rem] font-light">Thursday</h3> 
                                <h3  className="text-[0.78rem] font-semibold">12 June, 2023</h3>
                                <div className="flex items-center bg-[#FFF4F6] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#F43D54]"></div>
                                    <span className="text-[0.62rem] text-[#F43D54]">Urgent</span>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 flex items-center space-x-3 rounded-md shadow-md">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center bg-[#E1F0FF] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#003366]"></div>
                                    <span className="text-[0.62rem] text-[#003366]">Proposal</span>
                                </div>
                                <h3  className="text-[0.78rem] font-semibold">09:30 AM</h3>
                                <h3  className="text-[0.6rem] font-light">30 mins ago</h3>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col w-[36%] space-y-1">
                                <div className="flex -space-x-3">
                                    <div className='w-9 h-9 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
                                     <FaUser />
                                    </div>
                                </div>
                                <span className="text-[0.67rem] font-medium">To: Vivian</span>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col space-y-1">
                                <h3  className="text-[0.7rem] font-light">Thursday</h3> 
                                <h3  className="text-[0.78rem] font-semibold">12 June, 2023</h3>
                                <div className="flex items-center bg-[#FFF4F6] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#F43D54]"></div>
                                    <span className="text-[0.62rem] text-[#F43D54]">Urgent</span>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 flex items-center space-x-3 rounded-md shadow-md">
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center bg-[#E1F0FF] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#003366]"></div>
                                    <span className="text-[0.62rem] text-[#003366]">Proposal</span>
                                </div>
                                <h3  className="text-[0.78rem] font-semibold">09:30 AM</h3>
                                <h3  className="text-[0.6rem] font-light">30 mins ago</h3>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col w-[36%] space-y-1">
                                <div className="flex -space-x-3">
                                    <div className='w-9 h-9 max-sm:w-10 max-sm:h-10 bg-slate-100 rounded-full text-white items-center text-2xl max-sm:text-lg justify-center flex border'>
                                     <FaUser />
                                    </div>
                                </div>
                                <span className="text-[0.67rem] font-medium">To: Vivian</span>
                            </div>
                            <div className="w-[0.1px] h-[62px] border"></div>
                            <div className="flex flex-col space-y-1">
                                <h3  className="text-[0.7rem] font-light">Thursday</h3> 
                                <h3  className="text-[0.78rem] font-semibold">12 June, 2023</h3>
                                <div className="flex items-center bg-[#FFF4F6] justify-center px-2 py-1 gap-1 rounded-xl">
                                    <div className="w-1 h-1 rounded-full bg-[#F43D54]"></div>
                                    <span className="text-[0.62rem] text-[#F43D54]">Urgent</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    )
}
