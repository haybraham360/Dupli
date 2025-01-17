// import React from 'react'
import AdvertCard from "@/components/Cards/AdvertCard";
import advertContent from "@/mock data/advertContent";

export default function AdvertisementManagement() {
    return (
    <div className='mx-20 max-sm:mx-4 my-2'>
        <div className="grid grid-cols-1 gap-4">
            {advertContent.map((card, index) => (
                <AdvertCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image ? card.image : ''}
                />
            ))}
        </div>
    </div>   
    )
}
