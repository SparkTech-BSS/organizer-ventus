import { cn } from "@/utils/cn";
import { Container } from "../Container";
import { Armchair, Confetti, ForkKnife, Tag } from "@phosphor-icons/react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import eventBarMobile from "../assets/EventBarMobile.png";
import pictureMobileImg from "../assets/Picture-mobile.png";

export function SectionEventBar() {
  return (
    <>
      <Container className={cn("sm:py-20 pt-20 gap-[104px] items-center flex-col flex self-stretch")}>
        <div className="flex-col justify-start items-center gap-4 flex">
          <h2 className="px-4  text-center text-white text-2xl lg:text-5xl font-semibold">Ferramentas para restaurantes, hotéis e muito mais.</h2>
        </div>

        <div className="w-full h-full flex flex-col items-center">
          <Image
            src={eventBarMobile}
            alt=""
            quality={100}
            className="bg-cover block md:hidden"
          />
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2">

          <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-start content-start gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-8">
              <FeatureCard
                icon={Armchair}
                title="Reserve mesas e assentos"
                description="Com a Ventus você consegue fazer com que os convidados reservem um assento ou mesa."
              />

              <FeatureCard
                icon={ForkKnife}
                title="Preferências de refeições e opções de menu"
                description="Pergunte aos clientes se eles têm alguma necessidade alimentar especial ou alergia alimentar que você precisa conhecer."
              />
            </div>

            <div className="flex lg:pt-[60px] flex-col items-center gap-8">
              <FeatureCard
                icon={Confetti}
                title="Crie eventos em série"
                description="Você pode colocar dentro de um evento grande, outros eventos, todos com o mesmo checkout de pagamento."
              />

              <FeatureCard
                icon={Tag}
                title="Coloque itens a venda no checkout"
                description="Coloque comida, roupas, sapatos e qualquer outro item que queira vender no seu evento."
              />
            </div>
          </div>
          <div className="flex flex-col items-end self-stretch">
            <div className="w-[615px] h-[507px] absolute hidden md:block  bottom-[79px] bg-hero-primary bg-cover bg-center" />
          </div>


        </div>
      </Container>
    </>
  )
}