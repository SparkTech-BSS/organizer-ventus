import React, { ReactNode } from 'react';
import { CheckFat, X } from "@phosphor-icons/react";

interface ListProps {
  title: string;
  description: string;
}

export function List({ title, description }: ListProps) {
  return (
    <>
      <div className=" flex-col grid grid-cols-3">
        <div className="flex py-8  flex-col items-start gap-8 flex-1">
          <h3 className="text-white text-base lg:text-xl font-semibold font-sans">{title}</h3>
          <p className="hidden md:block text-violet-100 text-opacity-60 text-[14px] lg:text-base font-normal font-sans leading-normal">{description}</p>
        </div>

        <div className='flex items-end gap-4'>

          <div className="flex flex-1 p-8 justify-center items-center gap-[10px] self-stretch ">
            <CheckFat size={42} weight="duotone" className="fill-[#9F64FF]" />
          </div>

          <div className="flex flex-1 p-8 justify-center items-center gap-[10px] self-stretch ">
            <X size={42} className="fill-[#DB3535] " />
          </div>

          <div className="lg:flex hidden md:block flex-1 py-8 px-1 justify-center items-center gap-[10px] self-stretch ">
            <X size={42} className="fill-[#DB3535]" />
          </div>
        </div>

      </div>

      <div className="flex-col grid grid-cols-1">
        <div className="lg:flex pb-6 flex-col items-start gap-8 lg:flex-1 block md:hidden">
          <p className=" text-violet-100 text-opacity-60 text-[14px] lg:text-base font-normal font-sans leading-normal">{description}</p>
        </div>
      </div>

    </>
  )
}