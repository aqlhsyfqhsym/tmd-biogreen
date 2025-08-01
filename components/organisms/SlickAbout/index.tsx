'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    $: {
      (selector: string): {
        slick: (options: Record<string, unknown>) => void;
        length: number;
        hasClass: (className: string) => boolean;
      };
    };
    jQuery: unknown;
  }
}

interface SlickAboutProps {
  images: string[];
}

const loadStylesheet = (href: string): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = href;
  document.head.appendChild(link);
  return link;
};

const loadScript = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(`Failed to load script: ${src}`);
    document.head.appendChild(script);
  });

const initializeSlick = (): void => {
  const checkAndInit = (attempts = 0): void => {
    const $slider = window.$('.your-class');
    
    if ($slider.length && !$slider.hasClass('slick-initialized')) {
      try {
        $slider.slick({
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
              },
            },
          ],
        });
      } catch (error) {
        console.error('Slick initialization failed:', error);
      }
    } else if ($slider.length === 0 && attempts < 10) {
      // DOM not ready yet, try again
      setTimeout(() => checkAndInit(attempts + 1), 200);
    }
  };
  
  checkAndInit();
};

const SlickAbout: React.FC<SlickAboutProps> = ({ images }) => {
  useEffect(() => {
    const slickCSS = loadStylesheet('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    const slickThemeCSS = loadStylesheet('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css');

    loadScript('https://code.jquery.com/jquery-1.11.0.min.js')
      .then(() => {
        window.$ = window.jQuery = (window as typeof window & { jQuery: unknown }).jQuery as typeof window.$;
        return loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
      })
      .then(() => {
        // Wait for React to render the DOM elements first
        setTimeout(() => {
          initializeSlick();
        }, 500);
      })
      .catch(console.error);

    return () => {
      if (document.head.contains(slickCSS)) document.head.removeChild(slickCSS);
      if (document.head.contains(slickThemeCSS)) document.head.removeChild(slickThemeCSS);
    };
  }, [images]); // Add images dependency to reinitialize when images change

  return (
    <div className="mt-12 mb-12">
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[rgba(255,255,255,0.2)] to-white pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-white pointer-events-none" />

        <div className="your-class">
          {images.map((imageSrc, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlickAbout;
