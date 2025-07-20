import VideoBanner from "@/components/molecules/VideoBanner";
import CardAbout from "@/components/organisms/CardAbout";
import ListingAbout from "@/components/organisms/ListingAbout";
import CardVisionMission from "@/components/organisms/CardVisionMission";
import CardCoreValues from "@/components/organisms/CardCoreValues";
import SlickAbout from "@/components/organisms/SlickAbout";
import MainTitle from "@/components/atoms/Heading";
import about from "@/data/about.json";
import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] min-h-screen">
      <VideoBanner videoSrc="/video/biogreen_video.mp4" />

      <div className="p-5 xl:px-32 xl:py-8">
        <p className="xl:px-64 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl font-medium leading-relaxed mb-12">
          {about.tmdDescription}
        </p>

        <div className="xl:px-64 lg:px-40 md:px-20 sm:px-10">
          <CardAbout statistics={about.statistics} />
        </div>

        <div className="xl:px-64 lg:px-40 md:px-20 sm:px-10 mt-12">
          {about.detailedDescription.map((paragraph, index) => (
            <p key={index} className="text-green-primary text-lg font-normal leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="xl:px-64 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl font-medium leading-relaxed mb-12">
          {about.tmdDescription2}
        </p>

        <div className="xl:px-64 lg:px-40 md:px-20 sm:px-10">
          <ListingAbout listings={about.listings} />
        </div>

        <div className="xl:px-64 lg:px-40 md:px-20 sm:px-10 mt-12">
          <CardVisionMission visionMission={about.visionMission} />
        </div>

        <div className="xl:px-64 lg:px-40 md:px-20 sm:px-10 mt-12">
          <div className="text-center mb-8">
            <MainTitle heading={about.coreValues.heading} />
          </div>
          <p className="text-green-primary text-lg font-normal leading-relaxed mb-8">
            {about.coreValues.description}
          </p>

          <CardCoreValues coreValuesCards={about.coreValuesCards} />
        </div>

        <div className="flex items-center gap-2 xl:px-64 lg:px-40 md:px-20 sm:px-10 pt-20 pb-2">
          <Image src="/icons/square.svg" alt="square" width={14} height={14} />
          <p className="text-green-secondary font-semibold uppercase text-xs tracking-widest font-kumbh">
            Latest Gallery
          </p>
        </div>
        <p className="xl:px-64 lg:px-40 md:px-20 sm:px-10 text-green-primary text-3xl font-medium leading-relaxed">
          {about.tmdDescription3}
        </p>
        {/* Slick Carousel */}
        <SlickAbout />
      </div>
    </div>
  );
}
