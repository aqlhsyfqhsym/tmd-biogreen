 import Card from "@/components/molecules/Card";
import React from "react";

export default function OurStoryCard() {
  const cardData = [
    {
      title: "Eco-friendly oil reuse.",
      icon: "/icons/eco.svg",
      description:
        "Transforming used cooking oil into biodiesel powers vehicles and reduces greenhouse gas emissions. It's a win-win!",
    },
    {
      title: "Recycle oil, create jobs",
      icon: "/icons/hard-hat.svg",
      description:
        "Our delivery methods are optimized to reduce carbon footprint and promote green logistics.",
    },
    {
      title: "Recycling cooking oil creates soap and feed.",
      icon: "/icons/laundry.svg",
      description:
        "We innovate with clean energy technologies that make recycling oil safer and more efficient.",
    },
    {
      title: "Eco-friendly fuel.",
      icon: "/icons/oil.svg",
      description:
        "Empowering local communities to participate in environmental protection through responsible oil disposal.",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:w-[1200px] mx-auto bg-white mt-0">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          icon={card.icon}
          description={card.description}
        />
      ))}
    </section>
  );
}
