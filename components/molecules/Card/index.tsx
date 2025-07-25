// components/Card.tsx
import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  description: string;
}

export default function Card({ title, icon, description }: CardProps) {
  return (
    <div className="flex flex-col shadow-md p-4 gap-3">
 
      <div className="flex flex-row items-center gap-2 mb-2 justify-between">
        <h2 className="text-green-primary font-semibold text-base">
          {title}
        </h2>
        <Image src={icon} alt={title} width={48} height={48} className="h-10"/>
      </div>
      <p className="text-gray-500 font-kumbh font-normal text-xs">
        {description}
      </p>
    </div>
  );
}
