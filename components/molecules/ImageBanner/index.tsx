'use client';

import React from 'react';

interface ImageBannerProps {
  imageSrc: string;
 
}

const ImageBanner: React.FC<ImageBannerProps> = ({
    imageSrc,
 
}) => {
  return (
    <>
 <img
  className="relative w-full max-w-[1220px] h-auto object-center mx-auto outline-none border-none"
  src={imageSrc}
/>

 
      </>
   );
};

export default ImageBanner;
