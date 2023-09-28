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

          <div className="flex items-start">
            <h3 className="text-white text-2xl lg:text-4xl font-semibold font-sans">Respostas para suas perguntas</h3>
          </div>

          <div className="flex flex-col items-start gap-8">
            <QuestCard
              title="Como funciona a parceiria?"
              description="Voce terá conosco um contrato de 1 ano, com a mensalidade de 30 mil kwanzas mes + 175 kwanzas por bilhete emitido."

            />

            <QuestCard
              title="Os dados dos meus clientes são compartilhados?"
              description="Não. Voce utiliza nossa tecnologia, mas os dados são todos seus. Não são compartilhados com outros parceiros, muito menos com a Ventus."
            />

            <QuestCard
              title="Quantas pessoas terão acesso a isso?"
              description="A parceria da Ventus é para um grupo seleto de pessoas que ocupam apenas 25 vagas."
            />

            <QuestCard
              title="Por que a Ventus esta fazendo isto?"
              description="Somos uma empresa de tecnologia, e o nosso foco não é o comercial. Então buscamos parceiros para fazer resultados mais surpreendentes e deixar a parte da tecnologia conosco."

            />

            <QuestCard
              title="E se eu ficar varios meses sem vender?"
              description="Voce continua pagando a sua assinatura até terminar o prazo de 1 ano."
            />

            <QuestCard
              title="Posso perder meu contrato?"
              description="Sim! A Ventus tem outros possiveis parceiros na lista de espera. Caso haja algum descomprimento do contrato, como falta de pagamento ou ausencia extrema, nós damos a sua vaga para uma pessoa da lista de espera que esteja interessada e cancelamos o contrato."
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
                <button className="p-2.5 bg-zinc-500  bg-opacity-20 rounded-[80px] justify-center items-center gap-2.5 flex">
                  <WhatsappLogo size={32} className="fill-violet-600 hover:fill-white transition-all" />
                </button>
                <button className="p-2.5 bg-zinc-500 bg-opacity-20  rounded-[80px] justify-center items-center gap-2.5 flex">
                  <InstagramLogo size={32} className="fill-violet-600 hover:fill-white transition-all" />
                </button>
                <button className="p-2.5 bg-zinc-500 bg-opacity-20  rounded-[80px] justify-center items-center gap-2.5 flex">
                  <FacebookLogo size={32} className="fill-violet-600 hover:fill-white transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}