'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const TriviaModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#003F2D] text-white w-[90%] max-w-md rounded-xl p-6 relative overflow-hidden">
        <button
          className="absolute top-4 right-4 text-white hover:text-green-300"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>

        <p className="text-green-400 tracking-widest text-sm mb-2">TRIVIA QUESTIONS</p>
        <h2 className="text-xl font-bold mb-4 leading-tight">
          Which is better for <br /> the environment?
        </h2>

        <div className="flex gap-4 mb-4">
          <button className="bg-[#1CB59F] text-white text-sm px-4 py-2 rounded-lg font-semibold">
            THROWING IT INTO THE SINK
          </button>
          <button className="bg-[#1CB59F] text-white text-sm px-4 py-2 rounded-lg font-semibold">
            RECYCLING USED COOKING OIL
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-24 h-24 relative">
            {/* <img
              src="/icons/character.svg"
              alt="Happy Character"
              className="absolute inset-0 w-full h-full object-contain"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriviaModal;
