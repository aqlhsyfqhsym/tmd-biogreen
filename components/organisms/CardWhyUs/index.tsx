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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-left text-left p-6 border border-cyan-200 rounded-lg bg-gradient-to-b from-cyan-50 to-white shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Icon */}
          <div className="mb-4">
            <Image
              src={card.icon}
              alt={card.title}
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </div>

          {/* Title */}
          <h3 className="text-green-primary font-semibold text-lg mb-3">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
