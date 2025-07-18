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
  className="block w-full max-w-[1220px] h-auto object-center mx-auto outline-none border-none"
  src={videoSrc}
  autoPlay
  muted
  playsInline
  poster={poster}
/>

 
      </>
   );
};

export default VideoBanner;
