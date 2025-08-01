import Image from "next/image";

interface StepCard {
  step: string;
  title: string;
  icon: string;
}

interface CardStepProps {
  steps: StepCard[];
}

export default function CardStep({ steps }: CardStepProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-left p-6 border border-black rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Icon */}
          <div className="mb-4">
            <Image
              src={step.icon}
              alt={step.title}
              width={64}
              height={64}
              className="h-12 w-12"
            />
          </div>

          {/* Step and Title */}
          <h3 className="text-gray-800 font-semibold text-xl mb-2">
            {step.step}
          </h3>
          <h4 className="text-gray-400 font-medium text-xl mb-4">
            {step.title}
          </h4>

          {/* Link */}
          <a href="#" className="text-gray-800 font-normal mt-4 text-md">
            Hover to Know More ↗
          </a>
        </div>
      ))}
    </div>
  );
}
