import VideoBanner from "@/components/molecules/VideoBanner";
import SlickAbout from "@/components/organisms/SlickAbout";
import CardWhyUs from "@/components/organisms/CardWhyUs";
import CardRefinery from "@/components/organisms/CardRefinery";
import services from "@/data/services.json";
import MainTitle from "@/components/atoms/Heading";
import CardStep from "@/components/organisms/CardStep";

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

        <div className="text-center mb-8 mt-20">
          <MainTitle heading={services.coreValues.heading3} />
        </div>
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription3}
        </p>

        {/* Slick Carousel */}
        <SlickAbout />
      </div>
    </div>
  );
}
