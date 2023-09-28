import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import pictureImg from "../assets/Picture.png";
import pictureMobileImg from "../assets/Picture-mobile.png";


export function SectionPrivateFest() {
  return (
    <>
      <Container className={cn("sm:py-20 pt-20 gap-20 items-center flex-col flex")}>
        <div className="flex flex-col items-center gap-4">
          <h2 className="px-4 text-center text-white text-2xl lg:text-5xl font-semibold">Ventus para festas privadas</h2>
          <p className="px-2 text-center text-ventus-subtext text-opacity-60 text-2xl font-normal leading-9">Crie Festas, eventos privados e casamentos.</p>
        </div>

        <div className="w-full h-full flex flex-col items-center">
          <Image
            src={pictureMobileImg}
            alt=""
            quality={100}
            className="w-full block md:hidden"  
          />
          <Image
            src={pictureImg}
            alt=""
            quality={100}
            className="w-full hidden md:block" 
          />
        </div>

        <div className="grid gap-10 self-stretch lg:grid-cols-3 grid-cols-1">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <h3 className="text-center text-white text-xl font-bold leading-[30px] font-sans">Quer privacidade?</h3>
            <p className="self-stretch text-ventus-subtext text-opacity-60 text-sm font-normal leading-[21px]">Ao criar um evento você pode deixar na opção “Privado”. Assim apenas seus convidados poderão ver o evento na plataforma</p>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <h3 className="text-center text-white text-xl font-bold leading-[30px] font-sans">Quem pode utilizar?</h3>
            <p className="self-stretch text-ventus-subtext text-opacity-60 text-sm font-normal leading-[21px]">Esta aplicação foi feita para todos que querem fazer um evento privado. Seja, promotores de evento, noivos, alguem que quer fazer sua propria festa, palestra e etc.</p>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <h3 className="text-center text-white text-xl font-bold leading-[30px] font-sans">Economize com bilhetes</h3>
            <p className="self-stretch text-ventus-subtext text-opacity-60 text-sm font-normal leading-[21px]">Com o bilhete online você economiza 90% do que você pagaria para fazer bilhetes normais. Com a Ventus voce economiza mais de 1 milhão de kwanzas e ainda não precisa de entregador. Pois os bilhetes sao todos online.</p>
          </div>
        </div>
      </Container>
    </>

  )
}