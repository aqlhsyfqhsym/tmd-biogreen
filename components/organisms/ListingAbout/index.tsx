import React from 'react';

interface ListingProps {
    title: string;
    description: string;
}

interface ListingAboutProps {
    listings: ListingProps[];
}

const ListingAbout: React.FC<ListingAboutProps> = ({ listings }) => {
    return (
        <div className="space-y-6">
            {listings.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    {/* Green Checkmark */}
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <svg 
                            className="w-4 h-4 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                            />
                        </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                        <h3 className="text-green-primary text-xl font-semibold mb-3">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListingAbout;
