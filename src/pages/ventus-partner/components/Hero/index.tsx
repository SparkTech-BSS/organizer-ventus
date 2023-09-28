import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import myEvent from "../assets/Meus Eventos.png"
import logoPartner from "../assets/ventus-parter.png"

export function Hero() {
  return (
    <Container className={cn("sm:pb-20 sm:pt-0  x1215:pb-0 ")}>

      <div className="flex flex-col items-center gap-[120px] pt-20 lg:pb-[120px]">
        <div className="flex flex-col items-center gap-[60px]">
          <Image src={logoPartner}
            alt=""
            quality={100}
            className="w-[170px] h-[87px]"
          />
          <div className="flex flex-col items-center gap-4">
            {/* <h2 className="w-[684px] text-center bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent text-7xl font-semibold">Crie eventos para todas ocasiões</h2> */}
            <h2 className="xl:px-56 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-[#ffffffa1] lg:text-7xl text-5xl font-semibold font-sans">Crie eventos para todas ocasiões</h2>
            <span className="xl:px-64 text-center text-ventus-subtext text-opacity-60 text-2xl font-normal leading-9">Crie Festas, eventos privados, casamentos, reservas de mesas e sua própria bilheteira.</span>
          </div>
          <button className="px-4 py-[12.50px] bg-violet-600  hover:bg-violet-800 transition-all rounded-[66px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-white text-base font-bold">Comece agora!</p>
          </button>
        </div>

        <div className="flex flex-col">
          <Image src={myEvent}
            alt=""
            quality={100}
            className="w-full h-full relative bg-cover"
          />
        </div>

      </div>
    </Container>
  )
}