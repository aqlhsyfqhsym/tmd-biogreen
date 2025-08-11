'use client';

import React from 'react';
import Image from 'next/image';


interface ImageBannerProps {
  imageSrc: string;
 
}

const ImageBanner: React.FC<ImageBannerProps> = ({
    imageSrc,
 
}) => {
  return (
    <>
 {/* <img
  className="relative w-full max-w-[1220px] h-auto object-center mx-auto outline-none border-none"
  src={imageSrc}
/> */}

    <Image
        src={imageSrc}
        alt="Banner Image"
        width={1220}
        height={500}  
        className="relative w-full max-w-[1220px] h-auto object-center mx-auto outline-none border-none"
      />

 
      </>
   );
};

export default ImageBanner;
