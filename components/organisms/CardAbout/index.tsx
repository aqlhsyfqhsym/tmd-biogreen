import React from 'react';

interface StatisticProps {
    number: string;
    description: string;
}

interface CardAboutProps {
    statistics: StatisticProps[];
}

const CardAbout: React.FC<CardAboutProps> = ({ statistics }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
                <div 
                    key={index} 
                    className="bg-[#20B2AA] rounded-lg ps-4 py-9 pe-9 text-white text-left"
                >
                    <div className="text-7xl font-bold mb-2">
                        {stat.number}
                    </div>
                    <div className="text-sm font-medium">
                        {stat.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardAbout;
