 import Card from "@/components/molecules/Card";
import React from "react";

export default function OurStoryCard() {
  const cardData = [
    {
      title: "Eco-friendly oil reuse",
      icon: "/icons/eco.svg",
      description:
        "Transforming used cooking oil into biodiesel powers vehicles and reduces greenhouse gas emissions. It's a win-win!",
    },
    {
      title: "Sustainable delivery",
      icon: "/icons/hard-hat.svg",
      description:
        "Our delivery methods are optimized to reduce carbon footprint and promote green logistics.",
    },
    {
      title: "Clean energy innovation",
      icon: "/icons/laundry.svg",
      description:
        "We innovate with clean energy technologies that make recycling oil safer and more efficient.",
    },
    {
      title: "Community impact",
      icon: "/icons/oil.svg",
      description:
        "Empowering local communities to participate in environmental protection through responsible oil disposal.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-[940px] mx-auto ">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          icon={card.icon}
          description={card.description}
        />
      ))}
    </div>
  );
}
