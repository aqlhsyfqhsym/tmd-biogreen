import ImageBanner from "@/components/molecules/ImageBanner";
import CardAbout from "@/components/organisms/CardAbout";
import ListingAbout from "@/components/organisms/ListingAbout";
import CardVisionMission from "@/components/organisms/CardVisionMission";
import CardCoreValues from "@/components/organisms/CardCoreValues";
import Slicker from "@/components/organisms/SlickAbout";
import MainTitle from "@/components/atoms/Heading";
import about from "@/data/about.json";
 import SectionIntro from "@/components/molecules/SectionIntro";
import Cartoon from "@/components/atoms/Cartoon";
import Cartoon2 from "@/components/atoms/Cartoon2";

export default function About() {

      const factoryImages = [
     '/images/slick/slick2.png',
    '/images/slick/slick3.png',
    '/images/slick/slick4.png',
    '/images/slick/slick2.png',
    '/images/slick/slick3.png',
    '/images/slick/slick4.png',
  ];
  
  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] p-5 min-h-screen xl:px-32 xl:py-18 mx-auto ">
      <ImageBanner imageSrc="/images/banner/banner_about.png" />
      <section>
        <p className="  text-green-primary text-2xl font-medium leading-relaxed mb-12">
          {about.tmdDescription}
        </p>

        <div className=" ">
          <CardAbout statistics={about.statistics} />
        </div>
      </section>

      <section>
        <div className="mt-12">
          {about.detailedDescription.map((paragraph, index) => (
            <p
              key={index}
              className="text-green-primary text-lg font-normal leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="  text-green-primary text-2xl font-medium leading-relaxed mb-12">
          {about.tmdDescription2}
        </p>
      </section>

      <section>
        <ListingAbout listings={about.listings} />
      </section>

      <section>
        <CardVisionMission visionMission={about.visionMission} />
      </section>

      <section>
        <div className="text-center mb-8">
          <MainTitle heading={about.coreValues.heading} />
        </div>
        <p className="text-green-primary text-lg font-normal leading-relaxed mb-8">
          {about.coreValues.description}
        </p>
        <Cartoon />
        <CardCoreValues coreValuesCards={about.coreValuesCards} />
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
        <Cartoon2 />
      <Slicker images={factoryImages} />
    </div>
  );
}
