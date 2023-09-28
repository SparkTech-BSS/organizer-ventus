import React, { useState } from 'react';
import { CaretUp, CaretDown } from '@phosphor-icons/react';

interface QuestCardProps {
  title: string;
  description: string;
}

function QuestCard({ title, description }: QuestCardProps) {
  const [showDescription, setShowDescription] = useState(true);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="w-full h-full pb-8 border-b border-white border-opacity-20 flex-col justify-start items-start gap-8 flex">
      <div className="self-stretch justify-start items-start gap-3.5 flex">
        <h3 className="grow shrink basis-0 text-white text-base lg:text-2xl  font-normal font-sans">{title}</h3>
        <button
          onClick={toggleDescription}
          className="cursor-pointer fill-white"
        >
          {showDescription ? <CaretUp size={32} className="fill-white" /> : <CaretDown size={32} className="fill-white" />}
        </button>
      </div>
      <p className={`self-stretch text-ventus-subtext text-opacity-60 ${showDescription ? 'visible' : 'invisible'} transition-all text-base font-normal font-sans`}>{description}</p>
    </div>
  );
}

export default QuestCard;
