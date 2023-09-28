import { ReactNode } from "react";
import { cn } from "@/utils/cn";
//import { Header } from "@/components/Header";

//import { Footer } from "@/components/Footer";


interface LayoutRootProps {
  children: ReactNode;
}

export default function LayoutRoot({ children }: LayoutRootProps) {
  return (
    <div className={`min-h-screen`}>
      {/*<Header />*/}
      <div className="mt-[160px]">
        {children}
      </div>
      {/*<Footer />*/}

    </div>
  );
}
