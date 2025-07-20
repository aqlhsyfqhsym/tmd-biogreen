"use client";

import React from "react";
import Image from "next/image";


const ContactBanner: React.FC = () => {
  return (
    <section className="bg-[#0DB14B] px-12 py-8 max-w-[1000px] mx-auto  ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Block */}
        <div>
          <div className="flex items-center gap-2  mb-2">
            <Image
              src="/icons/square.svg"
              alt="square"
              width={14}
              height={14}
            />
            <p className="text-white font-normal uppercase text-xs tracking-widest font-kumbh">
              TMD BIOGREEN: Waste to Energy.
            </p>
          </div>

          <blockquote className="text-white text-xl md:text-2xl font-normal leading-relaxed">
            “Every drop of oil drives innovation in marine and energy sectors.”
          </blockquote>
        </div>

        {/* Right Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-primary text-white p-3 rounded-md flex items-center justify-center gap-2"
          >
            Send Message
            <span className="text-xl">&rsaquo;</span> {/* right arrow › */}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactBanner;
