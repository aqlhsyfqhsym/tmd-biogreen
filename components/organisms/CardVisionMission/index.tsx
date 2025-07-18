import React from 'react';
import Image from 'next/image';

interface VisionMissionProps {
    title: string;
    description: string;
    mainIcon: string;
    decorativeIcon: string;
}

interface CardVisionMissionProps {
    visionMission: VisionMissionProps[];
}

const CardVisionMission: React.FC<CardVisionMissionProps> = ({ visionMission }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {visionMission.map((item, index) => (
                <div 
                    key={index} 
                    className="bg-[#20B2AA] rounded-2xl p-16 text-white relative overflow-hidden"
                >
                    {/* Main icon above title */}
                    <div className="mb-6">
                        <Image 
                            src={item.mainIcon} 
                            alt={item.title}
                            width={48}
                            height={48}
                            className="w-12 h-12"
                        />
                    </div>
                    
                    {/* Content */}
                    <div>
                        <h3 className="text-5xl font-bold mb-4">
                            {item.title}
                        </h3>
                        <p className="text-white/90 text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                    
                    {/* Different decorative icon at bottom right */}
                    <div className="absolute bottom-6 right-6 opacity-80">
                        <Image 
                            src={item.decorativeIcon} 
                            alt=""
                            width={50}
                            height={50}
                            className="w-24 h-24"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardVisionMission;
