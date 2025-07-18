import React from 'react';

interface SubheadingProps {
    subheading: string;
 }

const Subheading: React.FC<SubheadingProps> = ({ subheading }) => {
  return (
    <>
    <p className="text-green-primary text-base font-2xl" dangerouslySetInnerHTML={{ __html: subheading }} />
    </>
  );
};

export default Subheading;