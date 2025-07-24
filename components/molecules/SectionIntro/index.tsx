import React, { ReactNode } from "react";
import Image from "next/image";

interface SectionIntroProps {
  iconSrc: string;
  label: string;
heading: ReactNode;
  description?: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  iconSrc,
  label,
  heading,
  description,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Image src={iconSrc} alt="icon" width={14} height={14} />
        <p className="text-green-secondary font-semibold uppercase text-xs tracking-widest font-kumbh">
          {label}
        </p>
      </div>

      <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-green-primary mb-4">
        {heading}
      </h2>

      {description && (
        <p
          className="text-gray-600 mb-6 font-kumbh font-normal text-[clamp(0.25rem,2.5vw,0.75rem)] capitalize"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      )}
    </div>
  );
};

export default SectionIntro;
