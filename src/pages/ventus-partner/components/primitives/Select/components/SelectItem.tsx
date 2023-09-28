import React from 'react'
import { Inter } from 'next/font/google'
import { Check } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectItemProps = SelectPrimitive.SelectItemProps & {
  label: string;
}

export function SelectItem({ label, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "flex items-center gap-2 px-5 py-2.5 cursor-pointer h-[33px]",
        "transition-all relative select-none",
        "data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none",
        " data-[highlighted]:outline-none data-[highlighted]:bg-black data-[highlighted]:text-white"
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="text-black font-semibold text-xs 992:text-sm">
        {label}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <Check weight='bold'/>
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}