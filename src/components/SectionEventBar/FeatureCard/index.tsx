import React, { ReactNode } from 'react';
import {Icon} from "@phosphor-icons/react";

interface FeatureCardProps {
  icon: Icon;
  title: string;
  description: string;
}

function FeatureCard({ icon: IconComponent, title, description }: FeatureCardProps) {
  return (
    <div className="flex lg:w-[288px] w-full  p-8 flex-col items-start gap-10 rounded-[20px] border bg-gradient-primary border-white border-opacity-20 backdrop-blur-[40px] from-zinc-500 to-zinc-500">
      <div className="flex flex-col items-start gap-3 self-stretch pt-[2px]">
        {<IconComponent className='w-8 h-8 fill-ventus-secondary' weight="duotone" />}
        <div className="flex flex-col justify-center items-start gap-1 self-stretch">
          <h3 className="self-stretch text-white text-base font-semibold">{title}</h3>
          <p className="self-stretch text-ventus-subtext text-opacity-60 text-sm font-normal leading-[21px]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
