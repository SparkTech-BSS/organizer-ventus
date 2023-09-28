import { cn } from "@/utils/cn";
import { Container } from "../Container";
import logoPartner from "@/components/assets/ventus-parter.png";
import Image from "next/image";
import { PiggyBank, Storefront, Users } from "@phosphor-icons/react";

export function SectionPartner() {
  return (
    <>
      <Container className={cn("sm:py-20 pt-20 gap-[120px] items-center self-stretch flex-col flex")}>
        <div className="flex flex-col items-center gap-[60px] self-stretch">
          <div className="flex flex-col items-end">
            <div className="w-[650px] h-[717.5px] absolute bg-hero-partern bg-cover bg-center flex" />
          </div>

          <div className="flex flex-col items-center gap-8 self-stretch">
            <Image
              alt=""
              className="w-[151px] h-[77px] cursor-pointer"
              quality={100}
              src={logoPartner}
            />

            <div className="flex flex-col items-center gap-4">
              <h3 className="px-6 text-center text-white text-2xl lg:text-5xl font-semibold font-sans">Tenha a sua própria bilheteira online.</h3>
              <p className="lg:px-[230px]  text-center text-ventus-subtext text-opacity-60 text-2xl font-normal font-sans leading-9">Seja partner e escale o nivel das suas vendas de eventos para um patamar jamais visto.</p>
            </div>
            <div className="flex flex-col items-center pt-[60px]">
              <button className="w-[166px] h-11 px-4 py-[12.5px] bg-violet-600 hover:bg-violet-800 transition-all rounded-[66px] justify-center items-center gap-2.5 flex">
                <p className="text-white text-base font-bold font-sans">Saiba mais</p>
              </button>
            </div>
          </div>

          <div className="lg:flex grid grid-cols-1 w-full items-start gap-10">
            <div className="lg:w-[275px] w-full p-8 bg-purple-500 bg-opacity-20 rounded-[20px] border border-white border-opacity-20 backdrop-blur-[80px] flex-col justify-start items-start gap-10 flex">
              <div className="self-stretch  pt-0.5 flex-col items-start gap-3 flex">
                <h3 className="self-stretch text-purple-500 text-[40px] font-semibold font-sans leading-[60px]">500M</h3>
                <div className="self-stretch flex-col justify-center items-start gap-1 flex">
                  <h4 className="self-stretch text-white text-xl font-semibold font-sans leading-[30px]">Potencial</h4>
                  <p className="self-stretch text-ventus-subtext text-opacity-60 text-base font-medium font-sans leading-normal">Eventos transacionam 500 milhões de kwanza por semana.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:justify-start lg:items-start gap-10 lg:flex p-8 bg-gradient-partern from-purple-500 to-purple-500 rounded-[20px] border border-white border-opacity-20 backdrop-blur-[80px] ">
              <div className="grow shrink basis-0 pt-0.5 flex-col justify-start items-start gap-3 flex">
                <Storefront size={32} className="fill-purple-500" />
                <div className="self-stretch h-[130px] flex-col justify-center items-start gap-1 flex">
                  <h3 className="self-stretch text-white text-xl font-semibold font-sans leading-[30px]">Bilheteira própria</h3>
                  <p className="self-stretch text-ventus-subtext text-opacity-60 text-base font-medium font-sans leading-normal">Você ganha uma bilheteira própria com sua identidade e design da sua marca, como cores, letras e o que desejar.</p>
                </div>
              </div>
              <div className="grow shrink basis-0 pt-0.5 flex-col justify-start items-start gap-3 flex">
                <Users size={32} className="fill-purple-500" />

                <div className="self-stretch h-[154px] flex-col justify-center items-start gap-1 flex">
                  <h3 className="self-stretch text-white text-xl font-semibold font-sans leading-[30px]">Tenha seus promotores</h3>
                  <p className="self-stretch text-ventus-subtext text-opacity-60 text-base font-medium font-sans leading-normal">Coloque promotores de eventos na sua bilheteira, fazendo com que eles vendam na sua plataforma e voce ganhe uma porcentagem definida por você.</p>
                </div>
              </div>
              <div className="grow shrink basis-0 pt-0.5 flex-col justify-start items-start gap-3 flex">
                <PiggyBank size={32} className="fill-purple-500" />

                <div className="self-stretch h-[124px] flex-col justify-center items-start gap-1 flex">
                  <h3 className="self-stretch text-white text-xl font-semibold font-sans leading-normal">Receba direto na sua conta.</h3>
                  <p className="self-stretch text-ventus-subtext text-opacity-60 text-base font-medium font-sans leading-normal">Todo dinheiro de venda realizada cairá diretamente na sua conta.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}