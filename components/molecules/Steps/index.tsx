'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface StepProp {
  stepNumber: number;
  iconSrc: string;
  iconSrcHover: string;
  title: string;
  description: string;
}

const UcoCard: React.FC<StepProp> = ({ stepNumber, iconSrc, iconSrcHover, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-white rounded-lg p-6 text-center max-w-xs mx-auto">
      <div
        className="relative flex justify-center mb-4 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center transition-colors duration-300 group-hover:bg-green-600">
          <Image
            src={isHovered ? iconSrcHover : iconSrc}
            alt="icon"
            width={28}
            height={28}
          />
        </div>
        <div className="absolute -top-1 left-[6.5rem] bg-white border border-green-900 text-green-900 w-5 h-5 text-xs rounded-full flex items-center justify-center font-semibold">
          {stepNumber}
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default UcoCard;
