'use client';

import React from 'react';
import Image from 'next/image';

interface StepProp {
  stepNumber: number;
  iconSrc: string;
  title: string;
  description: string;
}

const UcoCard: React.FC<StepProp> = ({ stepNumber, iconSrc, title, description }) => {
  return (
    <div className="text-white rounded-lg p-6 text-center max-w-xs mx-auto">
      <div className="relative flex justify-center mb-4">
        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
          <Image src={iconSrc} alt="icon" width={28} height={28} />
        </div>
        <div className="absolute -top-1  left-[6.5rem] bg-white border border-green-900 text-green-900 w-5 h-5 text-xs rounded-full flex items-center justify-center font-semibold">
          {stepNumber}
        </div>
      </div>

       <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default UcoCard;
