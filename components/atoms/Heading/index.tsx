import React from 'react';

interface MainTitleProps {
    heading: string;
 }

const MainTitle: React.FC<MainTitleProps> = ({ heading }) => {
  return (
    <>
    <h2 className="pt-4 text-green-primary text-6xl font-bold text-center" dangerouslySetInnerHTML={{ __html: heading }} />
    </>
  );
};

export default MainTitle;