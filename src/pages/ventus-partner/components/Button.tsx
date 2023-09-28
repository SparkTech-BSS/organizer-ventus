import React from "react";
import { cn } from "@/utils/cn";
import { SpinnerGap } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "h-11 rounded-md flex items-center justify-center gap-2 font-bold select-none outline-none",
  {
    variants: {
      variant: {
        primary: [
          "bg-ventus-primary w-full px-3",
          "enabled:transition-colors enabled:hover:bg-ventus-primary/70",
          "text-white text-base font-bold rounded-[10px] flex items-center justify-center h-11",
          "ring-ventus-primary/70 ring-offset-2 focus:ring-2",
          "disabled:opacity-5 disabled:cursor-not-allowed",
        ],
        secondary: [
          "bg-black w-full px-3",
          "enabled:transition-colors enabled:hover:bg-black/70",
          "text-white text-base font-bold rounded-[40px] flex items-center justify-center h-11",
          "ring-ventus-primary/70 ring-offset-2 focus:ring-2",
          "disabled:opacity-5 disabled:cursor-not-allowed"
        ],
        "primary-round": [
          "w-full h-9 px-5 py-4 bg-sky-500",
          "rounded-[10px] justify-center items-center gap-2.5 flex",
          "text-white text-xs font-semibold",
          "disabled:opacity-5 disabled:cursor-not-allowed",
          "ring-sky-500/70 ring-offset-2 focus:ring-2",
          "enabled:transition-colors enabled:hover:bg-sky-500/70",
        ],
        "secondary-round": [
          "w-full h-9 px-5 py-4 bg-white rounded-[10px] border border-sky-500",
          "items-center gap-2.5 flex justify-center",
          "text-sky-500 text-xs font-semibold",
          "disabled:opacity-5 disabled:cursor-not-allowed",
          "ring-sky-500/70 ring-offset-2 focus:ring-2",
          "enabled:transition-colors enabled:hover:bg-sky-100",
        ],
        success: [
          "bg-ventus-auxiliary-green w-full px-3",
          "enabled:transition-colors enabled:hover:bg-ventus-auxiliary-green/70",
          "text-white text-base font-bold rounded-[10px] flex items-center justify-center h-11",
          "ring-ventus-auxiliary-green/70 ring-offset-2 focus:ring-2",
          "disabled:opacity-5 disabled:cursor-not-allowed",
        ],
        plain: [
          "bg-transparent w-full px-3",
          "enabled:transition-colors ",
          "text-black text-base font-bold rounded-[10px] flex items-center justify-center h-11",
          "ring-black/70 ring-offset-2 focus:ring-2",
          "disabled:opacity-5 disabled:cursor-not-allowed",
        ],
        comment: [
          "h-11 px-4 py-[12.50px] bg-white rounded-[10px] border border-black border-opacity-20",
          "justify-center items-center gap-2.5 flex text-black text-base font-bold",
          "transition-all hover:bg-zinc-300/20"
        ],
        enable: [
          "bg-zinc-500 bg-opacity-20 w-full px-3",
          "enabled:transition-colors enabled:hover:bg-zinc-500/70",
          "text-white text-base font-bold rounded-[10px] flex items-center justify-center h-11",
          "ring-zinc-500/70 ring-offset-2 focus:ring-2",
          "disabled:opacity-5 disabled:cursor-not-allowed",
        ],

      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, loading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <SpinnerGap className="animate-spin" weight="bold" size={22} />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
