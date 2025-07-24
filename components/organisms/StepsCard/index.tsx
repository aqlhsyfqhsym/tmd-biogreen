"use client";

import React from "react";
import Image from "next/image";
import UcoCard from "@/components/molecules/Steps";

const StepCard = () => {
  const steps = [
    {
      stepNumber: 1,
      iconSrc: "/icons/fuel.svg",
      title: "Collection of UCO",
      description:
        "Collecting used cooking oil helps reduce waste and supports eco-friendly energy solutions. It’s a simple way to contribute to sustainability.",
    },
    {
      stepNumber: 2,
      iconSrc: "/icons/refine.svg",
      title: "Refinery Processes",
      description:
        "Refining used cooking oil filters and heats it into biodiesel, minimizing waste and creating renewable energy.",
    },
    {
      stepNumber: 3,
      iconSrc: "/icons/paint.svg",
      title: "End of Products",
      description:
        "We transform used cooking oil into biodiesel, reducing waste and promoting sustainability. This fuel powers vehicles and supports green energy.",
    },
  ];

  return (
    <section className="bg-green-primary py-12 px-4 flex flex-col justify-center ">
      <div>
      <div className="flex items-center justify-center gap-2  mb-2">
        <Image src="/icons/square.svg" alt="square" width={14} height={14} />
        <p className="text-green-secondary font-semibold uppercase text-xs tracking-widest font-kumbh">
          Our Solutions
        </p>
      </div>
      <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-white mb-4 text-center">
        Converting waste to green energy
      </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <UcoCard key={step.stepNumber} {...step} />
        ))}
      </div>
    </section>
  );
};

export default StepCard;
