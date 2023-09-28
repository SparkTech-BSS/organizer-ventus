import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export function Input({ className, ...props }: InputProps) {

    return (
        <div className={cn('relative', className)}>
            <input
                className={cn(
                    "w-full lg:w-[276px] px-4 py-[13.5px] bg-transparent rounded-[10px] border",
                    "border-[#FFFFFF26]",
                    "outline-none transition-all text-sm",
                    "placeholder:text-[#EBEBF599] placeholder:text-opacity-60 placeholder:text-sm font-normal",
                    "placeholder:leading-[21px]",
                    "focus-within:border-opacity-100",
                    
                )}
                {...props}
            />

            
            
        </div>
    )
}