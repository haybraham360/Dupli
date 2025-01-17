// components/AdvertCard.tsx
import React from 'react';
import Image from 'next/image';
import { RiCamera2Fill } from 'react-icons/ri';

interface AdvertCardProps {
  title: string;
  description: string;
  image?: string;
}

const AdvertCard: React.FC<AdvertCardProps> = ({ title, description, image }) => {
  const DefaultImage = () => (
    <div className="bg-gray-200 flex items-center justify-center h-24">
      <RiCamera2Fill className="text-gray-500 w-8 h-8" />
    </div>
  );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
      <div className="h-24 w-24 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={96}
            height={96}
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
          />
        ) : (
          <DefaultImage />
        )}
      </div>
      <div className="p-4 flex-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="flex justify-end mt-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm">
            <RiCamera2Fill className="w-4 h-4 mr-1 inline-block" />
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;