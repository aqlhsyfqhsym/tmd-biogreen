'use client';

import React, { useState } from 'react';
import services from '@/data/services.json';

const CardSuggest: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };

    return (
        <div className="mt-12 mb-12">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left side - Text content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
                            {services.formSection.heading}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {services.formSection.description}
                        </p>
                    </div>

                    {/* Right side - Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0DB14B] focus:border-transparent outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0DB14B] focus:border-transparent outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message or Inquiry"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0DB14B] focus:border-transparent outline-none transition-colors resize-vertical"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-[#0DB14B] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2 font-medium"
                                >
                                    <span>Submit Inquiry</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSuggest;
