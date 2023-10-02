import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import myEvent from "../assets/Meus Eventos.png"
import logoPartner from "../assets/ventus-parter.png"
import { useEffect, useState } from "react";
import SkeletonCard from "@/components/SkeletonCard";

export function Hero() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, []);

  return (
    <Container className={cn("sm:pb-20 sm:pt-0  x1215:pb-0 ")}>

      <div className="flex flex-col items-center gap-10 lg:gap-[120px] lg:pt-20 pt-[62px]  lg:pb-[120px]">
        <div className="flex flex-col items-center gap-10 lg:gap-[60px]">

          {isLoading ? (
            <SkeletonCard height={775} width={1200}/>
          ) : (
            <Image src={logoPartner}
              alt=""
              quality={100}
              className="w-[170px] h-[87px]"
            />
          )}

          <div className="flex flex-col items-center gap-4">
            <h2 className="xl:px-56 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-[#ffffffa1] lg:text-7xl text-[32px] font-semibold font-sans ">Tenha a sua própria bilheteira online.</h2>
            <span className="xl:px-64 text-center text-ventus-subtext text-opacity-60 text-[16px] font-normal leading-6 lg:leading-9">Seja parceiro e ganhe dinheiro com a venda de bilhetes seus ou de seus promotores de forma automatica.</span>
          </div>
          <button className="px-4 py-[12.50px] bg-violet-600  hover:bg-violet-800 transition-all rounded-[66px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-white text-base font-bold">Seja parceiro!</p>
          </button>
        </div>

        <div className="flex flex-col">
          {isLoading ? (
            <SkeletonCard />
          ) : (
            <Image src={myEvent}
              alt=""
              quality={100}
              className="w-full h-full relative bg-cover"
            />
          )}
        </div>

      </div>
    </Container>
  )
}