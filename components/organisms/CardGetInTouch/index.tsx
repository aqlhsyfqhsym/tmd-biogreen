import React from 'react';
import services from '@/data/services.json';

interface ContactCard {
    title: string;
    type: string;
    content: string | string[];
}

const CardGetInTouch: React.FC = () => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'email':
                return (
                    <svg className="w-14 h-14 text-[#0DB14B] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case 'address':
                return (
                    <svg className="w-14 h-14 text-[#0DB14B] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                );
            case 'phone':
                return (
                    <svg className="w-14 h-14 text-[#0DB14B] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const renderContent = (content: string | string[]) => {
        if (Array.isArray(content)) {
            return (
                <div className="text-md text-gray-600">
                    {content.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            );
        } else {
            return <p className="text-md text-gray-600">{content}</p>;
        }
    };

    return (
        <> 
        <div className="mt-20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {services.contactInfo.map((card: ContactCard, index: number) => (
                    <div key={index} className="bg-white rounded-lg border-2 border-[#0DB14B] p-6 text-left hover:shadow-lg transition-shadow duration-300">
                        {getIcon(card.type)}
                        <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                            {card.title}
                        </h3>
                        <div className="text-gray-600">
                            {renderContent(card.content)}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        </>
    );
};

export default CardGetInTouch;
