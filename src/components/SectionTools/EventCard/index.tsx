import React, { ReactNode } from 'react';

interface EventCardProps {
  icon: ReactNode; 
  title: string;
  description: string;
}

function EventCard({ icon, title, description }: EventCardProps) {
  return (
    <div className="lg:w-[400px] lg:h-[328px] w-full p-10 flex-col justify-start items-start gap-4 inline-flex">
      {icon}
      <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
        <div className="w-[270px] text-white text-xl font-semibold">{title}</div>
        <div className="self-stretch text-ventus-subtext text-opacity-60 text-base font-medium leading-normal">{description}</div>
      
      </div>
      
    </div>
    
  );
}

export default EventCard;
