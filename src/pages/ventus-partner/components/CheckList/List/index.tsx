import React, { ReactNode } from 'react';
import { CheckFat, X } from "@phosphor-icons/react";

interface ListProps {
  title: string;
  description: string;
}

export function List({ title, description }: ListProps) {
  return (
    <>
      <div className="flex py-8   flex-col items-start gap-8 flex-1">
        <h3 className="text-white text-xl font-semibold font-sans">{title}</h3>
        <p className=" text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">{description}</p>
      </div>

      <div className='flex items-end gap-4'>

        <div className="flex flex-1 p-8 justify-center items-center gap-[10px] self-stretch ">
          <CheckFat size={42} weight="duotone" className="fill-[#9F64FF]" />
        </div>

        <div className="flex flex-1 p-8 justify-center items-center gap-[10px] self-stretch ">
          <X size={42}  className="fill-[#DB3535] " />
        </div>

        <div className="flex flex-1 py-8 px-1 justify-center items-center gap-[10px] self-stretch ">
          <X size={42}  className="fill-[#DB3535]" />
        </div>
      </div>
    </>

  )
}