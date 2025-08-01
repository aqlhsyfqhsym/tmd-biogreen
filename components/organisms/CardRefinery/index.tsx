import Image from "next/image";

interface RefineryCard {
  title: string;
  icon: string;
  items: string[];
}

interface CardRefineryProps {
  cards: RefineryCard[];
}

export default function CardRefinery({ cards }: CardRefineryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col p-8 green-primary text-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl"
        >
          {/* Icon and Title Row */}
          <div className="flex items-start justify-between mb-6">
            <Image
              src={card.icon}
              alt={card.title}
              width={40}
              height={40}
              className="h-12 w-12"
            />
            <h3 className="text-white font-bold text-4xl flex-1 ml-4">
              {card.title}
            </h3>
          </div>

          {/* Items List */}
          <div className={card.items.length > 6 ? "grid grid-cols-2 gap-x-6 gap-y-2" : "space-y-2"}>
            {card.items.map((item, itemIndex) => (
              <div key={itemIndex} className="text-white text-sm flex items-start">
                <span className="mr-2 text-xs">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
