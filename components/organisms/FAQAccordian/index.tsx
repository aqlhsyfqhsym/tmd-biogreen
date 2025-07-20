'use client';

import React, { useState } from 'react';
import AccordionItem from '@/components/molecules/Accordian';

const accordionData = [
  {
    id: '1',
    title: 'What is your return policy?',
    content: 'We offer a 30-day return policy on all items.',
  },
  {
    id: '2',
    title: 'Do you offer international shipping?',
    content: 'Yes, we ship to over 50 countries worldwide.',
  },
  {
    id: '3',
    title: 'How can I contact support?',
    content: 'You can reach out via email or our chat service 24/7.',
  },
];

const Accordion: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {accordionData.map(item => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItemId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
