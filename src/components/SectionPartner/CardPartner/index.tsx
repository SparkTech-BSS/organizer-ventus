import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@phosphor-icons/react";

interface CardPartnerProps {
  icon: Icon;
  title: string;
  description: string;
}


function CardPartner({ icon: IconComponent, title, description }: CardPartnerProps) {
  return (
    <div className="grow shrink basis-0 pt-0.5 flex-col justify-start items-start gap-3 flex">
      {<IconComponent className="w-8 h-8 fill-purple-500" weight="duotone" />}

      <div className="self-stretch h-[130px] flex-col justify-center items-start gap-1 flex">
        <h3 className="self-stretch text-white text-xl font-semibold font-sans leading-[30px]">{title}</h3>
        <p className="self-stretch text-ventus-subtext text-opacity-60 text-base font-medium font-sans leading-normal">{description}</p>
      </div>
    </div>
  );
}


export default CardPartner;
