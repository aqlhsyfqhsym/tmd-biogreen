import React from "react";
import Image from "next/image";

const Abstract: React.FC = () => {
  return (
  <div className="relative max-w-[1380px] h-32 md:block hidden 2xl-plus:hidden">
  <Image
    src="/icons/ollie.svg"
    alt="ollie"
    width={200}
    height={200}
    className="absolute right-0 -top-16"
  />
</div>

  );
};

export default Abstract;
