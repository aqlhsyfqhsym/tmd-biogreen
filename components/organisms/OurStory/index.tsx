import Image from "next/image";

export default function SustainabilityStory() {
  return (
    <div className=" flex flex-row items-center bg-white rounded-2xl shadow-md p-6 md:p-10 gap-6 w-[940px] mx-auto">
      <div className="flex-shrink-0">
        <Image
          src="/images/home/fries.png"
          alt="Frying oil used for recycling"
          width={400}
          height={300}
          className=" object-cover"
        />
      </div>
      <div className="flex flex-col justify-between ">
        <div className="flex items-center gap-2  mb-2">
          <Image src="/icons/square.svg" alt="square" width={14} height={14} />
          <p className="text-green-secondary font-semibold uppercase text-xs tracking-widest font-kumbh">
            Our Story
          </p>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-green-primary mb-4">
          We transform waste into energy solutions. Our journey started with a
          vision for a sustainable future through innovative recycling.
        </h2>
        <p className="text-gray-600 mb-6 font-kumbh font-normal text-xs">
          Our commitment to sustainability drives us to recycle used cooking oil
          into eco-friendly biofuels. With a focus on quality and efficiency, we
          ensure that every drop of oil collected contributes to a greener
          planet. Our team is passionate about making a difference, and we
          strive to lead the way in the biofuel industry.
        </p>
        <ul className="space-y-3 font-kumbh font-normal text-xs">
          <li className="flex items-center">
            <span className="text-green-secondary mr-2 mt-1">
              <Image
                src="/icons/checked.svg"
                alt="check"
                width={24}
                height={24}
              />
            </span>
            <span className="text-green-primary font-semibold">
              We recycle used cooking oil into renewable biofuel.
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-green-secondary mr-2 mt-1">
              <Image
                src="/icons/checked.svg"
                alt="check"
                width={24}
                height={24}
              />
            </span>
            <span className="text-green-primary font-semibold">
              Our solutions reduce emissions and support a circular economy.
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-green-secondary mr-2 mt-1">
              <Image
                src="/icons/checked.svg"
                alt="check"
                width={24}
                height={24}
              />
            </span>
            <span className="text-green-primary font-semibold">
              We partner with communities to drive sustainable impact.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
