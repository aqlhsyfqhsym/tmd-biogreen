import React from "react";
import Image from "next/image";

const Abstract: React.FC = () => {
  return (
    <div className="relative w-full h-[120px]">
      <Image
        src="/icons/ollie.svg"
        alt="Frying oil used for recycling"
        width={200}
        height={200}
        className="absolute right-0 -top-[80px] object-cover"
      />
    </div>
  );
};

export default Abstract;
