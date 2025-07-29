import VideoBanner from "@/components/molecules/VideoBanner";
import CardWhyUs from "@/components/organisms/CardWhyUs";
import SlickCompany from "@/components/organisms/SlickCompany";
import CardRefinery from "@/components/organisms/CardRefinery";
import CardGetInTouch from "@/components/organisms/CardGetInTouch";
import CardContact from "@/components/organisms/CardContact";
import CardSuggest from "@/components/organisms/CardSuggest";
import SlickFactory from "@/components/organisms/SlickFactory";
import services from "@/data/services.json";
import MainTitle from "@/components/atoms/Heading";
import CardStep from "@/components/organisms/CardStep";
import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] min-h-screen">
      <VideoBanner videoSrc="/video/biogreen_video.mp4" />

      <div className="xl:px-64 lg:px-40 md:px-20 sm:px-10 mt-12">
        <div className="text-center mb-8">
          <MainTitle heading={services.coreValues.heading} />
        </div>
        <p className="xl:px-60 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription}
        </p>
        {/* Why Us Cards */}
        <CardWhyUs cards={services.whyUs} />

        <div className="text-center mb-8 mt-20">
          <MainTitle heading={services.coreValues.heading2} />
        </div>
        
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription2}
        </p>
      
        {/* Refinery Process Cards */}
        <CardRefinery cards={services.refineryProcess} />

        {/* Steps Cards */}
        <CardStep steps={services.steps} />

        <div className="text-center mb-8 mt-36">
          <MainTitle heading={services.coreValues.heading3} />
        </div>
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription3}
        </p>

        {/* Company Partners Carousel */}
        <SlickCompany />
          
        <div className="text-center mb-8 mt-36">
          <MainTitle heading={services.coreValues.heading4} />
        </div>
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription4}
        </p>

        {/* Get In Touch Cards */}
        <CardGetInTouch />

        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription5}
        </p>

        {/* Staff Contact Cards */}
        <CardContact />

        {/* Suggestion Form */}
        <CardSuggest />

        <div className="flex items-left gap-2 xl:pr-52 pl-0 lg:pr-40 pl-0 md:pr-20 pl-0 sm:pr-10 pl-0 pt-20 pb-2">
          <Image src="/icons/square.svg" alt="square" width={14} height={14} />
          <p className="text-green-secondary font-semibold uppercase text-xs tracking-widest font-kumbh">
            Latest Gallery
          </p>
        </div>

        <p className="xl:pr-52 pl-0 lg:pr-40 pl-0 md:pr-20 pl-0 sm:pr-10 pl-0 text-green-primary text-3xl font-medium leading-relaxed">
          {services.tmdDescription6}
        </p>
      </div>

      {/* Factory Gallery Carousel */}
      <SlickFactory />
    </div>
  );
}
