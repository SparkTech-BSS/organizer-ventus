import React from 'react'
import { cn } from '@/utils/cn'
import { CaretDown, Check } from '@phosphor-icons/react'
import * as SelectPrimitive from '@radix-ui/react-select'

import { SelectItem } from './components/SelectItem'

interface SelectProps extends SelectPrimitive.SelectProps {
    placeholder?: string
    className?: string
    isTriggerDisabled?: boolean
    options: Array<{
        value: string
        label: string
    }>
}

export function Select({
    isTriggerDisabled,
    children,
    placeholder,
    className,
    ...props
}: SelectProps) {
    return (
        <SelectPrimitive.Root>
            <SelectPrimitive.Trigger className={cn(
                "group relative h-16 p-4 bg-white rounded-[10px] border border-black border-opacity-20",
                "justify-between items-center gap-2 flex pt-8",
                "data-[placeholder]:text-gray-500",
                className
            )}>
                <span className="absolute top-3 left-4 text-zinc-700 text-opacity-60 text-xs font-normal leading-[18px]">País/Região</span>
                <SelectPrimitive.Value placeholder="Selecione a região..." className=" text-black text-sm font-normal leading-[21px]" />
                <SelectPrimitive.Icon>
                    <CaretDown
                        weight='bold'
                        size={18}
                        className={cn(
                            'absolute top-6 right-4',
                            'group-data-[state=open]:-rotate-180',
                            'group-data-[state=closed]:rotate-0',
                            'group-data-[state=open]:duration-300',
                            'group-data-[state=closed]:duration-300',
                        )}
                    />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content
                    side="bottom"
                    position='popper'
                    sideOffset={8}
                    className={cn(
                        "overflow-hidden z-999 rounded-lg border border-zinc-200 bg-white",
                        "animate-in slide-in-from-top-4 flex flex-col",
                        "bg-white bg-opacity-75 backdrop-blur-[80px]",
                        'w-[var(--radix-select-trigger-width)]',
                    )}>
                    <SelectPrimitive.Viewport>
                        {props.options.map((option, i) => {
                            return (
                                <SelectItem
                                    key={`${option.value}-${i}`}
                                    value={option.value.toString()}
                                    label={option.label}
                                />
                            )
                        })}
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}
