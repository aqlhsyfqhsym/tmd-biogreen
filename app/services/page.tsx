import ImageBanner from "@/components/molecules/ImageBanner";
import CardWhyUs from "@/components/organisms/CardWhyUs";
import SlickCompany from "@/components/organisms/SlickCompany";
import CardRefinery from "@/components/organisms/CardRefinery";
import CardGetInTouch from "@/components/organisms/CardGetInTouch";
import CardContact from "@/components/organisms/CardContact";
import CardSuggest from "@/components/organisms/CardSuggest";
import services from "@/data/services.json";
import MainTitle from "@/components/atoms/Heading";
import CardStep from "@/components/organisms/CardStep";
 import Slicker from "@/components/organisms/SlickAbout";
import SectionIntro from "@/components/molecules/SectionIntro";

export default function About() {
  const factoryImages = [
    "/images/slick/factory 1.png",
    "/images/slick/factory 2.png",
    "/images/slick/factory 3.png",
    "/images/slick/factory 4.png",
    "/images/slick/factory 1.png",
    "/images/slick/factory 2.png",
  ];

  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] p-5 min-h-screen xl:px-32 xl:py-18 mx-auto ">
      <ImageBanner imageSrc="/images/banner/banner_services.png" />

      <section>
        <MainTitle heading={services.coreValues.heading} />
        <p className="xl:px-60 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription}
        </p>
        <CardWhyUs cards={services.whyUs} />
      </section>

      <section>
        <MainTitle heading={services.coreValues.heading2} />
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription2}
        </p>
        <CardRefinery cards={services.refineryProcess} />
        <CardStep steps={services.steps} />
      </section>

      <section>
        <MainTitle heading={services.coreValues.heading3} />
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription3}
        </p>
        <SlickCompany />
      </section>

      <section>
        <MainTitle heading={services.coreValues.heading4} />
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription4}
        </p>
        <CardGetInTouch />
        <p className="xl:px-52 lg:px-40 md:px-20 sm:px-10 text-green-primary text-2xl text-center font-medium leading-relaxed">
          {services.tmdDescription5} 
        </p> 
        <CardContact />
        <CardSuggest />
      </section>

      <section>
        <SectionIntro
          iconSrc="/icons/square.svg"
          label="Latest Gallery"
          heading={<>Photos of our oil recycling factories</>}
        />
      </section>
      {/* Factory Gallery Carousel */}
      <Slicker images={factoryImages} />
    </div>
  );
}
