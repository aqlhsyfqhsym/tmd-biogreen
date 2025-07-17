'use client';

import React from 'react';

interface VideoBannerProps {
  videoSrc: string;
  poster?: string;
 
}

const VideoBanner: React.FC<VideoBannerProps> = ({
  videoSrc,
  poster,
 
}) => {
  return (
    <>
       <video
        className="relative w-[1440px] h-auto object-center mx-auto"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
      />
 
      </>
   );
};

export default VideoBanner;
