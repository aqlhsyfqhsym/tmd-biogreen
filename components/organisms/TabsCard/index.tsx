"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ImageTabButton from "@/components/molecules/ImageTabButton";
import AbstractBg from "@/components/atoms/AbstractBg";

interface Tab {
  name: string;
  defaultImage: string;
  activeImage: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  {
    name: "Strategy",
    defaultImage: "/images/default.svg",
    activeImage: "/images/active.svg",
    content: (
      <div className="flex flex-col md:flex-row items-start gap-12">
        <Image
          src="/images/home/stratergy.png"
          alt="Strategy"
          width={300}
          height={410}
          priority
          className="w-full lg:w-6/12 h-full object-cover"
        />
        <div>
          <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
            TMD's strategy involves diversifying into the green energy sector
            through the establishment of TMD BioGreen. This is driven by the
            increasing demand for biofuels in the marine sector, indicating a
            strategic response to market trends.
          </p>
          <div className="flex items-start mb-4">
            <Image
              src="/icons/banks.svg"
              alt="Converting Waste Cooking Oil"
              width={24}
              height={24}
              className="mt-1 mr-3 flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Transforms</h3>
              <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
                A key element of their strategy is converting waste to green
                energy, specifically focusing on used cooking oil (UCO) as a
                feedstock for biofuels
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Image
              src="/icons/home.svg"
              alt="Production of Sustainable Biofuel Products"
              width={24}
              height={24}
              className="mt-1 mr-3 flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                A Sustainable Vision
              </h3>
              <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
                Their belief that “Every drop of oil collected will be recycled
                to value-add for sustainable synergy production in the marine
                industry and energy sector” underpins their strategic vision for
                resource utilisation and value creation.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Leading",
    defaultImage: "/images/default.svg",
    activeImage: "/images/active.svg",
    content: (
      <div className="flex flex-col md:flex-row items-start gap-12">
        <Image
          src="/images/home/leading.png"
          alt="Strategy"
          width={300}
          height={410}
          priority
          className="w-full lg:w-6/12 h-full object-cover"
        />
        <div>
          <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
           Tumpuan Megah Development Sdn Bhd (TMD) is described as a leading marine services company in Malaysia, primarily providing ship-to-ship bunkering services. This established leadership in the marine sector provides a strong foundation for TMD BioGreen.
          </p>
          <div className="flex items-start mb-4">
            <Image
              src="/icons/banks.svg"
              alt="Converting Waste Cooking Oil"
              width={24}
              height={24}
              className="mt-1 mr-3 flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Marine Fuel Solutions</h3>
              <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
             TMD possesses significant experience and infrastructure in the fuel supply chain, positioning them as a knowledgeable player entering the biofuel market.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Image
              src="/icons/home.svg"
              alt="Production of Sustainable Biofuel Products"
              width={24}
              height={24}
              className="mt-1 mr-3 flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                Pioneering the Future of Biofuel Solutions
              </h3>
              <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
              By proactively responding to the increasing demand for biofuels and establishing TMD BioGreen, they are demonstrating leadership in adapting to evolving industry needs and environmental concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Solutions",
    defaultImage: "/images/default.svg",
    activeImage: "/images/active.svg",
    content: (
      <div className="flex flex-col md:flex-row items-start gap-12">
        <Image
          src="/images/home/cooking.png"
          alt="Strategy"
          width={300}
          height={410}
          priority
          className="w-full lg:w-6/12 h-full object-cover"
        />
        <div>
          <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
          TMD BioGreen's core solution is converting waste (primarily used cooking oil) into green energy in the form of biofuels
          </p>
          <div className="flex items-start mb-4">
            <Image
              src="/icons/banks.svg"
              alt="Converting Waste Cooking Oil"
              width={24}
              height={24}
              className="mt-1 mr-3 flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Converting Waste Cooking Oil</h3>
              <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
             TMD BioGreen repurposes used cooking oil into biofuels. This process collects and refines UCO for industries like aviation and marine, promoting sustainable alternatives to fossil fuels.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Image
              src="/icons/home.svg"
              alt="Production of Sustainable Biofuel Products"
              width={24}
              height={24}
              className="mt-1 mr-3 flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
               Production of Sustainable Biofuel Products
              </h3>
              <p className="mb-4 text-gray-700 font-kumbh text-xs font-normal leading-5">
             TMD BioGreen's refinery produces biofuel oils and refined vegetable oils. These "Bio Energies" serve as Sustainable Aviation Fuel, marine fuel, biodiesel feed, and burning fuel. They can reduce GHG emissions by up to 90% compared to commercial fuel.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const TabsWithImageButtons: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <div className="mx-auto flex flex-col">
      {/* Tabs */}
      <div className="flex flex-col items-center gap-2 sm:flex-row mb-6 overflow-x-auto bg-green-primary justify-center">
        {tabs.map((tab) => (
          <ImageTabButton
            key={tab.name}
            active={activeTab.name === tab.name}
            defaultImage={tab.defaultImage}
            activeImage={tab.activeImage}
            alt={tab.name}
            label={tab.name}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
       {/* <AbstractBg/> */}

      {/* Card */}
      <section className="relative bg-white shadow-xl rounded-2xl p-6 mx-auto">
      
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default TabsWithImageButtons;
