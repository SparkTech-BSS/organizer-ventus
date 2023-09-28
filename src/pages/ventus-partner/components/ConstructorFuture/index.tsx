import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import peopleImg from "../assets/peaple.png"
import { ArrowRight, ChartBar, Check, HandHeart, PiggyBank, Scroll, User } from "@phosphor-icons/react";

export function ConstructorFuture() {
  <h2 className="xl:px-56 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-[#ffffffa1] lg:text-7xl text-5xl font-semibold font-sans">Crie eventos para todas ocasiões</h2>
  return (
    <Container className={cn("lg:py-[120px] gap-[80px] items-center self-stretch flex flex-col")}>
      <h2 className="lg:px-48 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-[#ffffffa1] text-[40px] font-semibold font-sans">Construa seu futuro enquanto aproveita mais tempo com sua família!</h2>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-[80px] self-stretch">
          <div className="flex flex-col items-center gap-10 flex-1 rounded-[20px] bg-gradient-partner">

            <div className="flex p-8 flex-col items-center gap-[62px] self-stretch">
              <div className="flex items-start gap-4 self-stretch">
                <PiggyBank weight="duotone" className="w-[42px] h-[42px] fill-[#9F64FF]" />
                <div className="flex flex-col justify-center items-start gap-2 flex-1">
                  <h3 className="text-white text-xl font-semibold font-sans leading-[30px]">Renda Passiva Sustentável</h3>
                  <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Torne-se um parceiro da Ventus e ganhe uma renda passiva sustentável, permitindo que o trabalho de outros promotores impulsione sua renda sem a necessidade de esforço constante. </p>
                </div>
              </div>

              <div className="flex items-start gap-4 self-stretch">
                <HandHeart weight="duotone" className="w-[42px] h-[42px] fill-[#9F64FF]" />
                <div className="flex flex-col justify-center items-start gap-2 flex-1">
                  <h3 className="text-white text-xl font-semibold font-sans leading-[30px]">Tempo de Qualidade com a Família</h3>
                  <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Seja dono do seu tempo e desfrute de momentos preciosos com sua família. Ao se tornar um parceiro da Ventus, você ganha a liberdade de passar mais tempo de qualidade com seus entes queridos. </p>
                </div>
              </div>

              <div className="flex items-start gap-4 self-stretch">
                <ChartBar weight="duotone" className="w-[42px] h-[42px] fill-[#9F64FF]" />
                <div className="flex flex-col justify-center items-start gap-2 flex-1">
                  <h3 className="text-white text-xl font-semibold font-sans leading-[30px]">Construção de um Futuro Financeiro Sólido</h3>
                  <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Ao abrir as portas para promotores de eventos em sua plataforma, você está construindo um caminho sólido para a segurança financeira a longo prazo.</p>
                </div>
              </div>
            </div>


          </div>

          <Image src={peopleImg}
            alt=""
            quality={100}
            className="max-w-[437px] bg-cover flex-1"
          />
        </div>

        <div className="flex lg:py-[52px] lg:px-8 flex-col items-center gap-10 rounded-[20px] border border-solid  bg-gradient-partern from-purple-500 to-purple-500  border-[#FFFFFF26] border-opacity-20 backdrop-blur-[80px]  ">
          <div className="flex justify-center items-start gap-10 self-stretch">
            <div className="flex flex-col justify-between items-start ">
              <h3 className="text-center text-purple-500 text-base font-bold font-sans">VENTUS PARTNER</h3>
              <div className="flex flex-col items-start gap-2 lg:pt-[35px]">
                <h2 className="text-center text-white text-[40px] font-bold font-sans">Kz 35 mil</h2>
                <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans">por mes (grátis se emitir 300 bilhetes no mes)</p>
              </div>

              <button className="flex py-3 px-4 justify-center items-center gap-2 rounded-[80px] bg-[#7676803D] bg-opacity-25 lg:mt-[35px]">
                <p className="text-center text-white text-xs font-semibold font-sans tracking-widest">ENTRE EM CONTACTO</p>
                <ArrowRight className="fill-white w-[18px] h-[18px]" />
              </button>
            </div>

            <div className="w-[1px] h-[240px] bg-[#FFFFFF26]"></div>

            <div className="flex flex-col items-start gap-6 lg:pl-10">
              <div className="flex items-start gap-2.5 self-stretch">
                <Check className="w-6 h-6 fill-[#EBEBF599]" />
                <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Tenha uma série de eventos dentro de um evento maior, mantendo a programação de datas e horários na página principal.</p>
              </div>

              <div className="flex items-start gap-2.5 self-stretch">
                <Check className="w-6 h-6 fill-[#EBEBF599]" />
                <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Elabore planos de assentos com base no local do evento e permita que os convidados reservem ingressos com assentos reservados.</p>
              </div>

              <div className="flex items-start gap-2.5 self-stretch">
                <Check className="w-6 h-6 fill-[#EBEBF599]" />
                <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Convide promotores para ajudar na divulgação do evento, ganhando comissões.</p>
              </div>

              <div className="flex items-start gap-2.5 self-stretch">
                <Check className="w-6 h-6 fill-[#EBEBF599]" />
                <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Tenha liberdade de tempo e dinheiro com a Ventus Partner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>


  )
}