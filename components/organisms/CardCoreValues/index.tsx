import React from 'react';
import Image from 'next/image';

interface CoreValueProps {
    title: string;
    description: string;
    icon: string;
}

interface CardCoreValuesProps {
    coreValuesCards: CoreValueProps[];
}

const CardCoreValues: React.FC<CardCoreValuesProps> = ({ coreValuesCards }) => {
    return (
        <div className="mt-8">
            {/* Top row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {coreValuesCards.slice(0, 3).map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-[#0F402D] rounded-2xl p-6 text-white items-start"
                    >
                        {/* Icon */}
                        <div className="mb-4">
                            <Image 
                                src={item.icon} 
                                alt={item.title}
                                width={40}
                                height={40}
                                className="w-22 h-22"
                            />
                        </div>
                        
                        {/* Content */}
                        <div>
                            <h3 className="text-4xl font-bold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bottom row - 2 wider cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValuesCards.slice(3, 5).map((item, index) => (
                    <div 
                        key={index + 3} 
                        className="bg-[#0F402D] rounded-2xl p-6 text-white flex items-start gap-4"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <Image 
                                src={item.icon} 
                                alt={item.title}
                                width={40}
                                height={40}
                                className="w-10 h-10"
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-4xl font-bold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardCoreValues;
