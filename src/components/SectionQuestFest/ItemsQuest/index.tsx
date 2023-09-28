import { ClipboardText } from '@phosphor-icons/react';
import { Icon } from "@phosphor-icons/react";
import React from 'react';


interface ItemsQuestProps {
  icon: Icon;
  title: string;
  description: string;
}

function ItemsQuest({ icon: IconComponent, title, description }: ItemsQuestProps) {
  return (
    <div className="flex pt-[2px] items-start gap-3 shrink-0">
      {<IconComponent className="w-8 h-8 fill-red-600" weight="duotone" />}
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 flex">
        <h3 className="text-white text-base font-semibold font-sans">{title}</h3>
        <p className="self-stretch text-ventus-subtext text-opacity-60 text-sm font-normal font-sans leading-[21px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ItemsQuest;
