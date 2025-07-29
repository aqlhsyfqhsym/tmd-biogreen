import React from 'react';
import Image from 'next/image';
import services from '@/data/services.json';

interface StaffContact {
    name: string;
    phone: string;
    image: string;
}

const CardContact: React.FC = () => {
    return (
        <div className="mt-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.staffContacts.map((staff: StaffContact, index: number) => (
                    <div key={index} className="bg-white rounded-lg border-l-8 border-[#0DB14B] border-r border-t border-b border-gray-200 p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <Image 
                                src={staff.image}
                                alt={staff.name}
                                fill
                                className="object-cover rounded-full"
                                sizes="64px"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                                {staff.name}
                            </h3>
                            <p className="text-gray-600 text-2xl">
                                {staff.phone}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardContact;
