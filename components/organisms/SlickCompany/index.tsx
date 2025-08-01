"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const SlickCompany: React.FC = () => {
  useEffect(() => {
    // Dynamically load slick CSS
    const slickCSS = document.createElement("link");
    slickCSS.rel = "stylesheet";
    slickCSS.type = "text/css";
    slickCSS.href =
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css";
    document.head.appendChild(slickCSS);

    // Dynamically load slick theme CSS
    const slickThemeCSS = document.createElement("link");
    slickThemeCSS.rel = "stylesheet";
    slickThemeCSS.type = "text/css";
    slickThemeCSS.href =
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css";
    document.head.appendChild(slickThemeCSS);

    // Dynamically load jQuery
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-1.11.0.min.js";
    jqueryScript.onload = () => {
      // Load slick.js after jQuery is loaded
      const slickScript = document.createElement("script");
      slickScript.src =
        "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
      slickScript.onload = () => {
        // Initialize slick with center mode for company logos
        (
          window as typeof window & {
            $: (selector: string) => {
              slick: (options: Record<string, unknown>) => void;
            };
          }
        )
          .$(".company-slider")
          .slick({
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: "40px",
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: "40px",
                  slidesToShow: 1,
                },
              },
            ],
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

  const companyImages = [
    "/images/slick/company1.png",
    "/images/slick/company2.png",
    "/images/slick/company3.png",
    "/images/slick/company4.png",
    "/images/slick/company1.png", // Repeat to have more slides
    "/images/slick/company2.png",
  ];

  return (
    <div className="mt-12 mb-12">
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[rgba(255,255,255,0.2)] to-white pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-white pointer-events-none" />
        <div className="company-slider">
          {companyImages.map((imageSrc, index) => (
            <div key={index} className="px-4">
              <div className="relative w-full h-24 md:h-32 lg:h-40 flex items-center justify-center">
                <Image
                  src={imageSrc}
                  alt={`Company Partner ${(index % 4) + 1}`}
                  fill
                  className="object-contain"
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

export default SlickCompany;
