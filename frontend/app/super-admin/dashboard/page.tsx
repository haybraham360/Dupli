// import React from 'react'

import AcquisitionChart from "@/components/Graphs/AcquisitionChart";
import RevenueChart from "@/components/Graphs/RevenueChart";
import RevenuePieChart from "@/components/Graphs/RevenuePieChart";

export default function Dashboard() {
    return (
     <div className="my-2 mx-20 max-md:mx-5 grid gap-8 pb-10">
        <div className="flex flex-col gap-1">
            <h3>Revenue</h3>
            <div className="border shadow-md rounded-md flex max-lg:grid max-lg:grid-cols-1 gap-6 max-lg:gap-2 px-8 max-md:px-2 py-2 items-start">
                <div className="w-[60%] max-lg:w-full ">
                    <RevenueChart />
                </div>
                <div className="w-[38%] max-lg:w-full h-full py-10 max-lg:py-2 px-1 grid grid-cols-2">
                    <div className="grid gap-6">
                        <div className="flex gap-2">
                            <div className="rounded-full w-6 h-6 bg-[#4AEDD9]"></div>
                            <div className="grid">
                                <h3 className="text-[0.65rem]">EBOOK SALES</h3>
                                <h2 className='text-[1.4rem] font-semibold'>24%</h2>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="rounded-full w-6 h-6 bg-[#FF7E78]"></div>
                            <div className="grid">
                                <h3 className="text-[0.65rem]">HOS AUDITS</h3>
                                <h2 className='text-[1.4rem] font-semibold'>32.34%</h2>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="rounded-full w-6 h-6 bg-[#8738FF]"></div>
                            <div className="grid">
                                <h3 className="text-[0.65rem]">AD CUSTOMERS</h3>
                                <h2 className='text-[1.4rem] font-semibold'>32.34%</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="flex gap-2">
                            <div className="rounded-full w-6 h-6 bg-[#FFD66E]"></div>
                            <div className="grid">
                                <h3 className="text-[0.65rem]">COURSE ENROLLMENT</h3>
                                <h2 className='text-[1.4rem] font-semibold'>5%</h2>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="rounded-full w-6 h-6 bg-[#FFB067]"></div>
                            <div className="grid">
                                <h3 className="text-[0.65rem]">AD REVENUE</h3>
                                <h2 className='text-[1.4rem] font-semibold'>28%</h2>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="rounded-full w-6 h-6 bg-[#67FF88]"></div>
                            <div className="grid">
                                <h3 className="text-[0.65rem]">ENTERPRISE PACKAGES</h3>
                                <h2 className='text-[1.4rem] font-semibold'>28%</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
            <div className="w-full shadow-md rounded-md border">
                <div className="flex px-8 py-6 flex-col gap-2 border-b-2">
                    <h3 className="font-semibold opacity-50 text-[0.85rem]">Revenue Breakdown</h3>
                    <h2 className="font-semibold text-[1.8rem]">5,987.34</h2>
                </div>
                <div className="flex flex-col gap-2 w-full h-[55vh] items-center justify-center">
                    <RevenuePieChart />
                    <div className="hidden max-lg:grid grid-cols-2 gap-4">
                        <div className="flex gap-1 items-center">
                            <div className="w-3 h-3 rounded-full bg-[#00b8d4]"></div>
                            <h3>Product 1</h3>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
                            <h3>Product 2</h3>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="w-3 h-3 rounded-full bg-[#9b59b6]"></div>
                            <h3>Product 3</h3>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="w-3 h-3 rounded-full bg-[#3498db]"></div>
                            <h3>Product 4</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full shadow-md rounded-md border">
                <div className="flex px-8 py-6 flex-col gap-2 border-b-2">
                    <h3 className="font-semibold opacity-50 text-[0.85rem]">Customer Acquisition</h3>
                    <h2 className="font-semibold text-[1.8rem]">512,565</h2>
                    <h3 className="opacity-50 text-[0.75rem]">Total Customer</h3>
                </div>
                <div className="flex flex-col gap-1 w-full h-[55vh] items-center justify-center">
                    <AcquisitionChart />
                    <div className="max-lg:grid grid-cols-2 gap-4">
                        <div className="flex gap-1 items-center text-sm">
                            <div className="w-3 h-3 rounded-full bg-[#00b8d4]"></div>
                            <h3>Product 1</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>   
    )
}
