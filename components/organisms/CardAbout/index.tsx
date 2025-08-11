'use client'

import React from 'react';
import CountUp from 'react-countup';

interface StatisticProps {
    number: string;
    description: string;
}

interface CardAboutProps {
    statistics: StatisticProps[];
}

// Helper function to parse numbers from statistic strings
const parseStatisticNumber = (numberString: string) => {
    const hasPrefix = numberString.startsWith('>');
    const numericValue = parseInt(numberString.replace(/[^\d]/g, ''));
    return {
        value: numericValue,
        prefix: hasPrefix ? '>' : '',
    };
};

const CardAbout: React.FC<CardAboutProps> = ({ statistics }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => {
                const { value, prefix } = parseStatisticNumber(stat.number);
                
                return (
                    <div 
                        key={index} 
                        className="bg-[#20B2AA] rounded-lg ps-4 py-9 pe-9 text-white text-left"
                    >
                        <div className="text-7xl font-bold mb-2">
                            {prefix}
                            <CountUp
                                start={0}
                                end={value}
                                duration={2.5}
                                separator=","
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                            />
                        </div>
                        <div className="text-sm font-medium">
                            {stat.description}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardAbout;
