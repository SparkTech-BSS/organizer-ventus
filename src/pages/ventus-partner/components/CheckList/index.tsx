import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import plataformImg from "../assets/plataform-img.png"
import { CaretDown, CheckFat, X } from "@phosphor-icons/react";
import { List } from "./List";
import { useState } from "react";


export function CheckList() {

  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container className={cn("sm:py-20 lg:pt-[120px] gap-[80px] items-center flex-col justify-center self-stretch flex lg:pb-20")}>
        <h2 className="text-center text-white text-5xl font-semibold font-sans">Por que ser um Ventus Partner é a melhor decisão?</h2>
        <div className="w-full flex lg:px-[50px] flex-col items-end">
          <div className="flex justify-end items-start gap-4">
            <div className="flex p-8 justify-center items-center gap-[10px] ">
              <p className="text-center text-white text-xl font-normal font-sans">Ventus partner</p>
            </div>

            <div className="flex p-8 justify-center items-center gap-[10px] ">
              <p className="text-center text-white text-xl font-normal font-sans">Concorrentes</p>
            </div>

            <div className="flex p-8 justify-center items-center gap-[10px] ">
              <p className="text-center text-white text-xl font-normal font-sans">Gráfica</p>
            </div>
          </div>

          <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
            <List
              title="Plataforma própria e personalizada"
              description="Personalize sua plataforma com cores, tipografia e sua marca. Você está no controle total, sem surpresas."
            />
          </div>

          <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
            <List
              title="Promotores na sua plataforma"
              description="Deixe os promotores venderem seus eventos com a tecnologia Ventus na sua plataforma. E aumente suas vendas com eventos de diversos promotores."
            />
          </div>

          <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
            <List
              title="Suporte técnico e atualizações"
              description="Conte com o suporte técnico contínuo da Ventus e atualizações regulares para manter sua aplicação em pleno funcionamento."
            />
          </div>

          <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-t border-neutral-700">
            <List
              title="Acesso a Recursos de Marketing"
              description="Tenha acesso a materiais de marketing, incluindo designs, modelos e estratégias para impulsionar suas vendas."
            />
          </div>

          {isVisible && (
            <>
              <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
                <List
                  title="Criar lista de participantes"
                  description="Para casamentos, passeios turisticos e outros eventos privados, a Ventus oferece a criaçao de lista de participantes, e envio de convites."
                />
              </div>

              <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
                <List
                  title="Liberdade financeira"
                  description="A Ventus permite aos parceiros terem liberdade financeira. Após conseguir um número razoavel de promotores para si, voce terá a liberdade de poder trabalhar menos e deixar todo o lucro por conta deles, e seus eventos."
                />
              </div>

              <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
                <List
                  title="Taxa fixa"
                  description="Aqui voce não paga nenhuma porcentagem para a Ventus. A unica coisa que voce paga é um valor fixo de 175 kwanzas por cada bilhete emitido. Que no final sai do bolso do cliente final."
                />
              </div>

              <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
                <List
                  title="Treinamento"
                  description="No primeiro mes voce recebe um treinamento grátis para aprender como gerenciar sua plataforma. E ve dicas na plataforma de atualizações e tudo mais."
                />
              </div>

              <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-b border-t border-neutral-700">
                <List
                  title="Hospedagem Gratuita"
                  description="Sendo parceiro voce não precisa se preocupar com a hospedagem da sua plataforma, nós cuidamos de tudo."
                />
              </div>

              <div className="grid grid-cols-[2fr_2fr] justify-end items-center gap-4 self-stretch  border-t border-neutral-700">
                <List
                  title="Subdominio Gratuito"
                  description="Seu subdominio conosco é gratuito, porém se quiser colocar um seu, voce poderá colocar que nós instalamos."
                />
              </div>
            </>
          )}

          <button
            onClick={handleToggleVisibility}
            className="flex py-4 px-0 justify-center items-center gap-2 self-stretch bg-zinc-500 bg-opacity-20 transition-all hover:bg-opacity-10"
          >
            <h3 className="text-purple-500 text-base font-semibold font-sans">Ver mais</h3>
            <CaretDown size={24} weight="bold" className="fill-[#9F64FF] h-6 w-6" />
          </button>

        </div>
      </Container>
    </>
  )
}