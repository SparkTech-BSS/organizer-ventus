import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import questImg from "../assets/quest-banner.png"
import { CaretUp, FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import QuestCard from "./QuestCard";

export function SectionQuest() {
  return (
    <>
      <Container className={cn("sm:py-20 pt-20 gap-[104px] items-start self-stretch flex-col flex")}>
        <div className="lg:justify-between lg:items-start lg:self-stretch lg:gap-64 gap-0 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr]">

          <div className="flex items-start lg:pb-0 pb-20">
            <h3 className="text-white text-2xl lg:text-4xl font-semibold font-sans">Respostas para suas perguntas</h3>
          </div>

          <div className="flex flex-col items-start gap-8">
            <QuestCard
              title="Meu evento é adequado para colocar na Ventus?"
              description="Sim! Na Ventus você pode colocar qualquer evento à venda. Sem restrições."
            />

            <QuestCard
              title="Como a Ventus cobra os eventos?"
              description="A Ventus cobra apenas 175 kwanzas por cada bilhete emitido. Então, por exemplo: Se você vender 10 bilhetes e emitir esses 10, voce paga 1750 kwanzas"
            />

            <QuestCard
              title="Quais outros custos eu terei ao colocar meus eventos?"
              description="Caso queira enviar convites via SMS voce tem o custo padrão de 14 kwanzas por sms. Caso queira enviar um sms personalizado o preço é variado. Envio por e-mail é grátuito."
            />


          </div>
        </div>


        <div className="w-full lg:items-start bg-zinc-500 bg-opacity-20 rounded-[20px] grid grid-cols-1 lg:grid-cols-2">
          <div className="flex-1">
            <Image src={questImg}
              alt=""
              quality={100}
              className="w-full h-full flex justify-start items-start flex-col"
            />
          </div>

          <div className="flex-1">
            <div className="w-full flex py-[110px] lg:p-[120px] px-4 flex-col justify-center items-start gap-8">
              <div className="flex flex-col justify-center items-start gap-1">
                <h3 className="text-white text-4xl font-semibold font-sans">Ainda tem dúvidas?</h3>
                <p className="text-ventus-subtext text-opacity-60 text-base font-normal font-sans">Encontre nossa equipe nas redes sociais.</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2.5 bg-zinc-500 hover:bg-ventus-secondary bg-opacity-20 rounded-[80px] justify-center items-center gap-2.5 flex">
                  <WhatsappLogo size={32} className="fill-ventus-secondary hover:fill-white transition-all" />
                </button>
                <button className="p-2.5 bg-zinc-500 bg-opacity-20 hover:bg-ventus-secondary  rounded-[80px] justify-center items-center gap-2.5 flex">
                  <InstagramLogo size={32} className="fill-ventus-secondary hover:fill-white transition-all" />
                </button>
                <button className="p-2.5 hover:bg-ventus-secondary bg-zinc-500 bg-opacity-20  rounded-[80px] justify-center items-center gap-2.5 flex">
                  <FacebookLogo size={32} className="fill-ventus-secondary hover:fill-white transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}