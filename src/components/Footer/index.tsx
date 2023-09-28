import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/components/assets/logo.svg";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import MenusFooter from "./MenusFooter";


export function Footer() {
  return (
    <>
      <Container className={cn("sm:py-20 py-20 gap-[104px] items-center flex-col flex  lg:border-t border-white border-opacity-20")}>
        <div className="lg:flex lg:justify-between lg:items-start lg:flex-1 w-full grid grid-cols-1 gap-20 lg:gap-0">

          <div className="flex flex-col lg:justify-between gap-6 lg:gap-0 lg:items-start lg:self-stretch ">
            <Link href="/">
              <Image
                alt=""
                className="w-[90px] flex cursor-pointer pb-0 justify-center items-center "
                quality={100}
                src={logoImg}
              />
            </Link>

            <div className="flex items gap-4">
              <div className="flex items-start gap-[10px]">
                <WhatsappLogo size={24} weight="fill" className="hover:fill-red-500 transition-all fill-[#EBEBF54D]" />
              </div>

              <div className="flex items-start gap-[10px]">
                <InstagramLogo size={24} weight="fill" className="hover:fill-red-500 transition-all fill-[#EBEBF54D]" />
              </div>
            </div>
          </div>

          <div className="lg:flex lg:items-start lg:gap-[104px] gap-[77px] grid grid-cols-2 ">
            <MenusFooter
              title="Para produtores"
              items={[
                'Publicar evento',
                'Fale conosco',
              ]}
            />

            <MenusFooter
              title="Para compradores"
              items={[
                'Explorar eventos',
                'Ajuda',
              ]}
            />

            <MenusFooter
              title="Produto"
              items={[
                'Funcionalidades',
                'Preços',
              ]}
            />

            <MenusFooter
              title="Recursos"
              items={[
                'Politicas de privacidade',
                'Termos de uso',
              ]}
            />
          </div>

        </div>
      </Container>
    </>
  )
}