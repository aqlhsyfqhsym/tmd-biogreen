import Image from "next/image";

interface WhyUsCard {
  title: string;
  icon: string;
  description: string;
}

interface CardWhyUsProps {
  cards: WhyUsCard[];
}

export default function CardWhyUs({ cards }: CardWhyUsProps) {
  return (
    <div className="grid justify-center md:grid-cols-3 gap-6 mt-12 xl:max-w-[750px] mx-auto items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[232px] md:w-auto h-[282px] group relative flex flex-col items-start text-left p-6 border border-[#00A99D] rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
        >
          {/* Card content */}
          <div className="relative z-10">
            <div className="mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </div>

            <h3 className="text-green-primary font-semibold text-lg mb-3 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
              {card.description}
            </p>
          </div>

          {/* Overlay sliding down */}
          <div
            className="pointer-events-none absolute inset-0 bg-transparent max-h-96 bg-opacity-50
             transition-transform duration-1000 ease-in-out -translate-y-full group-hover:translate-y-0 scale-custom transform"
            style={{
              backgroundImage: "url('/images/hover-slide/slide-down.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
           </div>
        </div>
      ))}
    </div>
  );
}
