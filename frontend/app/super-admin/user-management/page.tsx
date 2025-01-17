// import React from 'react'

import employees from "@/mock data/employees";
import { FaPencil } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

export default function UserManagement() {
    return (
     <div className="pt-2 pb-10 mx-20 max-md:mx-5 grid gap-8">
        <input placeholder="Search Drivers" className="border bg-[#EFEFEF] w-[12rem] px-2 py-1 text-[0.75rem] outline-none rounded-sm" />
        <table className="text-[0.9rem]">
            <thead>
                <tr className="font-semibold">
                    <td className="px-3 py-1">mark</td>
                    <td className="px-3 py-1">#</td>
                    <td className="px-3 py-1">Name</td>
                    <td className="px-3 py-1">Employee ID</td>
                    <td className="px-3 py-1">Department</td>
                    <td className="px-3 py-1">Role</td>
                    <td className="px-3 py-1">Select Exam</td>
                    <td className="px-3 py-1">Communication</td>
                    <td className="px-3 py-1">Action</td>
                </tr>
            </thead>
            <tbody>
                {

                    employees.map((employee, index) =>            
                        <tr 
                            key={index} 
                            className={`${
                                index % 2 === 0 
                                    ? 'bg-[#F0F0F0]'  // Even row
                                    : 'bg-[#F8F8F8]'     // Odd row
                            } text-[0.84rem]`}
                        >
                            <td className="px-3 py-1"> mark </td>
                            <td className="px-3 py-1"> 1 </td>
                            <td className="px-3 py-1">
                                <div className="flex items-center gap-2">
                                    <span>
                                    { employee.name }
                                    </span>
                                    <button title='edit' className='text-[0.65rem]'><FaPencil /></button>
                                </div> 
                            </td>
                            <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span>
                                    { employee.employeeId }
                                    </span>
                                    <button title='edit' className='text-[0.65rem]'><FaPencil /></button>
                                </div> 
                            </td>
                            <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span>
                                    { employee.department }
                                    </span>
                                    <button title='edit' className='text-[0.65rem]'><FaPencil /></button>
                                </div> 
                            </td>
                            <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span>
                                    { employee.role } 
                                    </span>
                                    <button title='edit' className='text-[0.65rem]'><FaPencil /></button>
                                </div> 
                            </td>
                            <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span>
                                    { employee.exam } 
                                    </span>
                                    <button title='see more'><IoMdArrowDropdown /></button>
                                </div> 
                            </td>
                            <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span>
                                    { employee.communication } 
                                    </span>
                                    <button title='see more'><IoMdArrowDropdown /></button>
                                </div> 
                            </td>
                            <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span>
                                    { employee.action } 
                                    </span>
                                    <button title='see more'><IoMdArrowDropdown /></button>
                                </div> 
                            </td>
                        </tr> 
                        
                    )
                }
            </tbody>
        </table>
     </div>   
    )
}
