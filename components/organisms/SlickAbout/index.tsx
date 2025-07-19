'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const SlickAbout: React.FC = () => {
    useEffect(() => {
        // Dynamically load slick CSS
        const slickCSS = document.createElement('link');
        slickCSS.rel = 'stylesheet';
        slickCSS.type = 'text/css';
        slickCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
        document.head.appendChild(slickCSS);

        // Dynamically load slick theme CSS
        const slickThemeCSS = document.createElement('link');
        slickThemeCSS.rel = 'stylesheet';
        slickThemeCSS.type = 'text/css';
        slickThemeCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css';
        document.head.appendChild(slickThemeCSS);

        // Dynamically load jQuery
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
        jqueryScript.onload = () => {
            // Load slick.js after jQuery is loaded
            const slickScript = document.createElement('script');
            slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
            slickScript.onload = () => {
                // Initialize slick with center mode
                (window as any).$('.your-class').slick({
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
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            };
            document.head.appendChild(slickScript);
        };
        document.head.appendChild(jqueryScript);

        // Cleanup function
        return () => {
            document.head.removeChild(slickCSS);
            document.head.removeChild(slickThemeCSS);
            document.head.removeChild(jqueryScript);
        };
    }, []);

    const images = [
        '/images/slick/slick2.png',
        '/images/slick/slick3.png',
        '/images/slick/slick4.png',
        '/images/slick/slick2.png', // Repeat to have more slides
        '/images/slick/slick3.png',
        '/images/slick/slick4.png'
    ];

    return (
        <div className="mt-12 mb-12">
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
    );
};

export default SlickAbout;
