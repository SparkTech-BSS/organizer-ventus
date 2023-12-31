import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import ainamteGif from "../assets/banner-animate.gif"
import { Buildings, Scroll, User } from "@phosphor-icons/react";

export function ForPartner() {
  return (
    <Container className={cn("lg:py-[120px] py-[62px] lg:gap-[120px] gap-8 items-start self-stretch flex flex-col")}>
      <h2 className="lg:w-[518px] text-white text-2xl lg:text-[40px] font-semibold font-sans">O que eu devo fazer para ser parceiro?</h2>
      <div className="grid grid-cols-1 lg:flex items-start gap-8 self-stretch">
        <div className="flex items-start gap-4 flex-1">
          <User  weight="duotone" className="fill-[#9F64FF] lg:w-8 lg:h-8 w-6 h-6 " />
          <div className="flex flex-col justify-center items-start gap-2 flex-1">
            <h3 className="text-white text-base lg:text-xl font-semibold font-sans leading-[30px]">Pessoa singular?</h3>
            <p className="text-violet-100 text-opacity-60 text-sm lg:text-base font-normal font-sans leading-normal">Deve ter um número de contribuinte, cópia do bilhete de identidade e poder emitir faturas.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 flex-1">
          <Buildings weight="duotone" className="fill-[#9F64FF] lg:w-8 lg:h-8 w-6 h-6 " />
          <div className="flex flex-col justify-center items-start gap-2 flex-1">
            <h3 className="text-white text-base lg:text-xl font-semibold font-sans leading-[30px]">Empresa?</h3>
            <p className="text-violet-100 text-opacity-60 text-sm lg:text-base font-normal font-sans leading-normal">Certidão comercial, a cópia do bilhete de identidade dos representantes.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 flex-1">
          <Scroll  weight="duotone" className="fill-[#9F64FF] lg:w-8 lg:h-8 w-6 h-6 " />
          <div className="flex flex-col justify-center items-start gap-2 flex-1">
            <h3 className="text-white text-base lg:text-xl font-semibold font-sans leading-[30px]">Contrato padrão</h3>
            <p className="text-violet-100 text-opacity-60 text-sm lg:text-base font-normal font-sans leading-normal">Ambos devem assinar um contrato padrão com a Ventus, que preve tempo e quantidade minima de vendas.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}