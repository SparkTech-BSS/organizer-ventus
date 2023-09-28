import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import vetorImg from "../assets/vetor.svg"
import { CheckFat, X } from "@phosphor-icons/react";


export function ClientPartner() {
  return (
    <>
      <Container className={cn("sm:py-20 gap-[120px] items-center justify-center self-stretch flex lg:pb-20")}>
        <Image src={vetorImg}
          alt=""
          quality={100}
          className="flex-1 px-5"
        />

        <div className=" flex flex-col items-start gap-4 self-stretch py-16 px-5">
          <h3 className="text-white text-[40px] font-semibold font-sans">Seus clientes economizam muito com bilhetes</h3>
          <p className="text-violet-100 text-opacity-60 text-base font-normal font-sans leading-normal">Estima-se que um bilhete para casamento em uma gráfica custaria kz 5.000,00 por bilhete. Sendo parceiro voce paga apenas kz 175 por cada bilhete digital, e pode cobrar dos seus clientes kz 450 ou mais que a economia ainda será brutal.</p>
        </div>

      </Container>
    </>
  )

}