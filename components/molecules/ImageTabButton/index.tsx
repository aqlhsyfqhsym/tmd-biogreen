'use client';

import React from 'react';
import Image from 'next/image';

interface ImageTabButtonProps {
  active: boolean;
  defaultImage: string;
  activeImage: string;
  alt?: string;
  label: string;
  onClick?: () => void;
}

const ImageTabButton: React.FC<ImageTabButtonProps> = ({
  active,
  defaultImage,
  activeImage,
  alt = '',
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative flex-shrink-0"
    >
     
      <Image
        src={active ? activeImage : defaultImage}
        alt={alt}
        width={120}     
        height={40}
        priority
        className="w-full"
      />

     
      <span
        className={`absolute inset-0 flex items-center justify-center text-lg font-semibold
          ${active ? 'text-white' : 'text-black'}
        `}
      >
        {label}
      </span>
    </button>
  );
};

export default ImageTabButton;
