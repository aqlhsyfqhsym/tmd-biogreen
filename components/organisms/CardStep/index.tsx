import Image from "next/image";

interface StepCard {
  step: string;
  title: string;
  icon: string;
  hoverStep: string;    // new hover text for step
  hoverTitle: string;   // new hover text for title
  hoverLinkText: string; // new hover text for link
}

interface CardStepProps {
  steps: StepCard[];
}

export default function CardStep({ steps }: CardStepProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ">
      {steps.map((step, index) => (
        <div
          key={index}
          className="w-[232px] md:w-auto h-[282px] group relative flex flex-col items-start p-6 border border-black rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          style={{ width: '100%' }}
        >
          {/* Icon */}
          <div className="mb-4 relative z-30">
            <Image
              src={step.icon}
              alt={step.title}
              width={64}
              height={64}
              className="h-12 w-12"
            />
          </div>

          {/* Text container */}
          <div className="relative z-20 w-full min-h-[110px]">
           
            <div className="transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-gray-800 font-semibold text-xl mb-2">
                {step.step}
              </h3>
              <h4 className="text-gray-400 font-medium text-xl mb-4">
                {step.title}
              </h4>
              <a href="#" className="text-gray-800 font-normal mt-4 text-md">
                Hover to Know More ↗
              </a>
            </div>

            {/* Hover Text  */}
            <div className="absolute top-0 left-0 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-white">
              <h3 className="font-semibold text-xl mb-2">
                {step.hoverStep}
              </h3>
              <h4 className="font-medium text-xl mb-4">
                {step.hoverTitle}
              </h4>
              <a href="#" className="font-normal mt-4 text-md">
                {step.hoverLinkText}
              </a>
            </div>
          </div>

          {/* Overlay sliding down */}
          <div
            className="pointer-events-none absolute inset-0 bg-transparent max-h-96 bg-opacity-50
             transition-transform duration-1000 ease-in-out -translate-y-full group-hover:translate-y-0 scale-custom transform z-10"
            style={{
              backgroundImage: "url('/images/hover-slide/slide-down.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}
