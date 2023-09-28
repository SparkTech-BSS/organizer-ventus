import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import plataformImg from "../assets/plataform-img.png"
import { CheckFat } from "@phosphor-icons/react";


export function PlataformSection() {
  return (
    <>
      <Container className={cn("sm:py-20 lg:pt-[120px] gap-[120px] items-start self-stretch flex lg:pb-20")}>
        <Image src={plataformImg}
          alt=""
          quality={100}
          className="max-w-[497px] bg-cover flex-1"
        />

        <div className="flex flex-col items-start gap-[60px]">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <h2 className="text-white text-[40px] font-semibold font-sans">Sua plataforma de bilhetes personalizada</h2>
            <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Tenha sua própria aplicação personalizada com todas as funcionalidades da Ventus.</p>
          </div>

          <div className="flex w-full p-8 flex-col items-start gap-4 from-zinc-500  bg-gradient-partner rounded-[20px]  ">
            <div className="flex items-start gap-3">
              <CheckFat size={24} weight="duotone" className="fill-[#9F64FF]" />
              <p className="text-white text-base font-normal font-sans leading-normal">Traga eventos para sua plataforma.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckFat size={24} weight="duotone" className="fill-[#9F64FF]" />
              <p className="text-white text-base font-normal font-sans leading-normal">Cobre suas próprias taxas.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckFat size={24} weight="duotone" className="fill-[#9F64FF]" />
              <p className="text-white text-base font-normal font-sans leading-normal">Personalize a plataforma com sua marca e cores.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckFat size={24} weight="duotone" className="fill-[#9F64FF]" />
              <p className="text-white text-base font-normal font-sans leading-normal">Venda a categoria de eventos que tem a ver com seu perfil</p>
            </div>
          </div>

          
        </div>
      </Container>
    </>
  )
}