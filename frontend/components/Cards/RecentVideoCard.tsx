'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

interface CardProps {
    image: string | StaticImageData;
    title: string;
    desc: string;
}

export const RecentVideoCard:React.FC<CardProps> = ({image, title, desc}) => {

    const [ view, setView ] = useState<boolean>(false);

  return (
    <div className={`flex gap-4 max-md:gap-2 `}>
        <Image
            src={image}
            alt=''
            className='h-[100px] object-contain'
        />
        <div className={`flex flex-col gap-1 w-full ${view ? 'mb-8' : ''} `}>
                <div className="flex items-center gap-2">
                    <span className='font-semibold'>{title}</span>
                    <div className="text-sm">
                        <FaPencilAlt />
                    </div>
                </div>
                <button className='text-left' onClick={() => setView(!view)} >
                 <h4 className={`text-[0.65rem] text-wrap max-md:w-[50vw] ${view ? '' : 'line-clamp-4 mb-4'} `}>{desc}</h4>
                </button>
        </div>
    </div>
  )
}
