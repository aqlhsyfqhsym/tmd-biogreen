'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-300 rounded-3xl overflow-hidden transition-all duration-300 bg-[#00A99D]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-2 text-left text-sm text-white font-medium transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="px-4 pb-4 pt-2  text-white">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
