import React from "react";
import { cn } from "@/utils/cn";
import { Check } from "@phosphor-icons/react";
import * as CheckboxComponent from "@radix-ui/react-checkbox";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxComponent.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxComponent.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxComponent.Root
      className={cn(
        "checkbox h-6 w-6 flex items-center  justify-center bg-[#7676803D] overflow-hidden rounded-md border border-[#FFFFFF26] shadow-sm",
        className
      )}
      ref={ref}
      {...props}
    >
      <CheckboxComponent.Indicator className="checkbox-indicator flex h-full w-full items-center justify-center">
        <Check
          className="animate-in slide-in-from-top-4"
          color="#fff"
          weight="bold"
          size={24}
        />
      </CheckboxComponent.Indicator>
    </CheckboxComponent.Root>
  );
});

Checkbox.displayName = "Checkbox";
