import Image from "next/image";
import VideoBanner from "@/components/molecules/VideoBanner";
import OurStory from "@/components/organisms/OurStory";
import Abstract from "@/components/atoms/abstract";
import OurStoryCard from "@/components/organisms/OurStoryCard";
import CTACard from "@/components/organisms/CTACard";
import StepsCard from "@/components/organisms/StepsCard";
import TabsCard from "@/components/organisms/TabsCard";
import Accordion from "@/components/organisms/FAQAccordian";
import SectionIntro from "@/components/molecules/SectionIntro";
import SlickAbout from "@/components/organisms/SlickAbout";

export default function Home() {
  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] p-5 min-h-screen xl:px-32 xl:py-18 mx-auto ">
      <VideoBanner videoSrc="/video/biogreen_video.mp4" />
      <OurStory />
      <Abstract />
      <OurStoryCard />
      <div className="xl:relative">
        <div className="absolute -top-24 left-0 right-0  hidden xl:block">
          <CTACard />
        </div>

        <div className="h-full md:h-[40rem] bg-green-primary flex items-end justify-center top-11 xl:mt-32">
          <StepsCard />
        </div>
        <TabsCard />
      </div>
      <section>
        <SectionIntro
          iconSrc="/icons/square.svg"
          label="Frequently Asked Questions"
          heading="Common Queries"
          description="At TMD BioGreen, we provide clear answers to your questions. Our team assists with inquiries about our services and sustainability practices. Reach out for more info!"
        />
        <Accordion />
      </section>
      <section>
        <SectionIntro
          iconSrc="/icons/square.svg"
          label="Latest Gallery"
          heading={
            <>
              Discover our latest projects And
              <br />
              Innovations In Sustainable Energy.
            </>
          }
        />
      </section>
      <SlickAbout />
    </div>
  );
}
