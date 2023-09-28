import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: ClassValue;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn(`max-w-container w-full mx-auto ${className}`)}>
      {children}
    </div>
  );
}
