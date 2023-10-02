import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import vetorImg from "../assets/vetor.svg"
import { CheckFat, X } from "@phosphor-icons/react";


export function ClientPartner() {
  return (
    <>
      <Container className={cn("sm:py-20 py-[62px] gap-[40px] lg:gap-[120px] items-center justify-center self-stretch lg:flex grid grid-cols-1 lg:pb-20")}>
        <Image src={vetorImg}
          alt=""
          quality={100}
          className="flex-1 lg:px-5"
        />

        <div className="flex flex-col lg:items-start gap-4 self-stretch lg:py-16 lg:px-5">
          <h3 className="text-white lg:text-[40px] text-2xl font-semibold font-sans">Seus clientes economizam muito com bilhetes</h3>
          <p className="text-violet-100  text-opacity-60 text-base font-normal leading-normal">Estima-se que um bilhete para casamento em uma gráfica custaria kz 5.000,00 por bilhete. Sendo parceiro voce paga apenas kz 175 por cada bilhete digital, e pode cobrar dos seus clientes kz 450 ou mais que a economia ainda será brutal.</p>
        </div>

      </Container>
    </>
  )

}