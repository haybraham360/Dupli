import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import logo from '../../assets/hos logo (2).png'
import { FaTimes } from 'react-icons/fa';
import { CiGrid41, CiUser } from 'react-icons/ci';
import { FiLayers } from 'react-icons/fi';
import { TbChartArcs3 } from 'react-icons/tb';
import { BsBoxSeam } from 'react-icons/bs';
import { GiAtomicSlashes } from 'react-icons/gi';


interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}
export const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar, active, setActive }) => {
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
        fixed top-0 left-0 h-full w-[300px] md:w-[350px] lg:w-[380px] 
        pr-3 pl-3 py-8 border flex flex-col justify-between 
        transform transition-transform duration-300 ease-in-out
        bg-white z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:w-auto md:flex
      `}>
        <div className='flex flex-col gap-6 w-full max-sm:w-[70vw] max-md:text-sm'>
          <div className='flex justify-between items-center md:hidden'>
            <Image
              src={logo}  
              alt='HOS Logo'
              className='w-[10rem] pl-2'
            />
            <button onClick={toggleSidebar} title='toggle side bar' className='md:hidden'>
              <FaTimes />
            </button>
          </div>
          
          <Image
            src={logo}  
            alt='HOS Logo'
            className='w-[9rem] hidden md:block pl-3'
          />
          
          <div className='flex flex-col gap-1 text-[0.75rem] border-t pt-5'>
          <div className={`
              ${active === 'dashboard' 
                ? 'bg-[#E5EBF0] text-[#003366] font-semibold peer-hover:bg-white peer-hover:font-medium' 
                : 'hover:bg-white hover:shadow-sm hover:text-[#003366] hover:font-semibold'
              } 
              p-3 rounded transition-colors duration-200
            `}>
              <Link 
                href={`/sales-rep-flow/i`} 
                className="flex items-center gap-[0.3rem] w-full"
                onClick={() => {
                    toggleSidebar();
                    setActive('dashboard');
                }}
              >
                <CiGrid41 size={18} />
                <span>Dashboard</span>
              </Link>
            </div>

            <div className={`
              ${active === 'leads' 
                ? 'bg-[#E5EBF0] text-[#003366] font-semibold peer-hover:bg-white peer-hover:font-medium' 
                : 'hover:bg-white hover:shadow-sm hover:text-[#003366] hover:font-semibold'
              } 
              p-3 rounded transition-colors duration-200
            `}>
              <Link 
                href={`/sales-rep-flow/i/leads`}
                className="flex items-center gap-[0.3rem] w-full"
                onClick={() => {
                    toggleSidebar();
                    setActive('leads')
                }}
              >
                <CiUser size={20} />
                <span>Leads & Opportunities</span>
              </Link>
            </div>

            <div className={`
              ${active === 'clients' 
                ? 'bg-[#E5EBF0] text-[#003366] font-semibold peer-hover:bg-white peer-hover:font-medium' 
                : 'hover:bg-white hover:shadow-sm hover:text-[#003366] hover:font-semibold'
              } 
              p-3 rounded transition-colors duration-200
            `}>
              <Link 
                href={`/sales-rep-flow/i/clients`}
                className="flex items-center gap-[0.3rem] w-full"
                onClick={() => {
                    toggleSidebar();
                    setActive('clients')
                }}
              >
                <CiUser size={20} />
                <span>Clients & Accounts</span>
              </Link>
            </div>

            <div className={`
              ${active === 'ads' 
                ? 'bg-[#E5EBF0] text-[#003366] font-semibold peer-hover:bg-white peer-hover:font-medium' 
                : 'hover:bg-white hover:shadow-sm hover:text-[#003366] hover:font-semibold'
              } 
              p-3 rounded transition-colors duration-200
            `}>
              <Link 
                href={`/sales-rep-flow/i/ads`}
                className="flex items-center gap-[0.375rem] w-full"
                onClick={() => {
                    toggleSidebar();
                    setActive('ads')
                }}
              >
                <GiAtomicSlashes size={18} />
                <span>Ad Sales & Campaign Management</span>
              </Link>
            </div>

            <div className={`
              ${active === 'pipeline' 
                ? 'bg-[#E5EBF0] text-[#003366] font-semibold peer-hover:bg-white peer-hover:font-medium' 
                : 'hover:bg-white hover:shadow-sm hover:text-[#003366] hover:font-semibold'
              } 
              p-3 rounded transition-colors duration-200
            `}>
              <Link 
                href={`/sales-rep-flow/i/pipeline`}
                className="flex items-center gap-[0.375rem] w-full"
                onClick={() => {
                    toggleSidebar();
                    setActive('pipeline')
                }}
              >
                <FiLayers size={18} />
                <span>Pipelines & Campaign management</span>
              </Link>
            </div>

            <div className={`
              ${active === 'reports' 
                ? 'bg-[#E5EBF0] text-[#003366] font-semibold peer-hover:bg-white peer-hover:font-medium' 
                : 'hover:bg-white hover:shadow-sm hover:text-[#003366] hover:font-semibold'
              } 
              p-3 rounded transition-colors duration-200
            `}>
              <Link 
                href={`/sales-rep-flow/i/reports`}
                className="flex items-center gap-[0.375rem] w-full"
                onClick={() => {
                    toggleSidebar();
                    setActive('reports')
                }}
              >
                <TbChartArcs3 size={18} />
                <span>Reports & Analytics</span>
              </Link>
            </div>

            <div className={`
              ${active === 'products' 
                ? 'bg-[#E5EBF0] text-[#003366] font-semibold peer-hover:bg-white peer-hover:font-medium' 
                : 'hover:bg-white hover:shadow-sm hover:text-[#003366] hover:font-semibold'
              } 
              p-3 rounded transition-colors duration-200
            `}>
              <Link 
                href={`/sales-rep-flow/i/products`}
                className="flex items-center gap-[0.45rem] w-full"
                onClick={() => {
                    toggleSidebar();
                    setActive('products')
                }}
              >
                <BsBoxSeam size={16} />
                <span>Products</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 text-[0.9rem]'>
          {/* <button 
            className='border-2 py-[0.3rem] hover:bg-[#E5EBF0] hover:text-[#003366] hover:font-semibold'
            onClick={toggleSidebar}
          >
            Sign Out
          </button> */}
        </div>
      </div>
    </>
  )
}
