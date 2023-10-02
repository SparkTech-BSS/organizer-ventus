import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import personImg from "../assets/how-much-person.png"
import { PercentageBar } from "./PercentageBar";

import { DialogAccount } from "../Dialog/DialogAccount";
import useAccountDialog from "@/stores/useAccountDialog";

export function HowMuch() {
  const { onOpen } = useAccountDialog();

  return (
    <>
      <Container className={cn("sm:py-20 lg:pt-20 py-[62px] grid grid-cols-1 gap-10 lg:gap-[120px] items-start self-stretch lg:flex lg:pb-20")}>
      
          <div className="flex flex-col lg:items-start items-center gap-10 lg:gap-20">
            <div className="grid grid-cols-1 w-full lg:flex flex-col gap-8 items-start self-stretch">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex flex-col lg:items-start items-center self-stretch">
                  <h3 className="text-purple-500 lg:text-[40px] text-2xl font-semibold font-sans">Sendo Ventus Partner.</h3>
                  <p className="text-white lg:text-[40px] text-2xl font-semibold font-sans">Você pode ganhar </p>
                </div>
              </div>

              <PercentageBar />

              <div className="flex flex-col text-center lg:text-start">
                <span className="text-violet-100 text-opacity-60 text-sm font-bold font-sans leading-[21px]">A taxa estimada</span><span className="text-violet-100 text-opacity-60 text-sm font-normal font-sans leading-[21px]"> é o valor que voce cobraria dos eventos da sua bilheteira.</span>
              </div>

            </div>

            <button className="px-4 py-[12.50px] bg-zinc-500  bg-opacity-20 rounded-[66px] border border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex" onClick={onOpen}>
              <p className="text-white hover:text-violet-100 transition-all shadow text-base font-bold font-sans">Simular lucros</p>
            </button>
          </div>


          <Image src={personImg}
            alt=""
            quality={100}
            className="lg:max-w-[464px] rounded-[20px] "
          />

      </Container>

      <DialogAccount />
    </>
  )
}