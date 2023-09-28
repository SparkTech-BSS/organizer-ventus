import { cn } from "@/utils/cn";

interface SeparatorProps {
    className?: string;
}

export function Separator({ className }: SeparatorProps) {
    return (
        <div className={cn(
            'w-full h-[0.5px] bg-[#FFFFFF26]',
            className
        )} />
    )
}