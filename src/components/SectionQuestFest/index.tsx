import { cn } from "@/utils/cn";
import { Container } from "../Container";
import { ClipboardText, Envelope, Link, PaintBrush, Phone, Ticket, WhatsappLogo } from "@phosphor-icons/react";
import ItemsQuest from "./ItemsQuest";
import Image from "next/image";
import animateImg from "../assets/animate-gif.png";

export function SectionQuestFest() {
  return (
    <>
      <Container className={cn("sm:py-20 pb-20 pt-[120px] gap-[120px] items-center flex-col flex")}>
        <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-l from-[#ffffff] to-[#ffffffa1]  text-2xl lg:text-5xl font-semibold font-sans">O que é possivel fazer com os eventos privados?</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="">
            <Image
              src={animateImg}
              alt=""
              quality={100}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 lg:gap-10 p-8 bg-gradient-quest-fest from-zinc-500 to-zinc-500 rounded-[20px] border border-white border-opacity-20 backdrop-blur-[80px]">

            <ItemsQuest
              icon={ClipboardText}
              title="Lista de convidados"
              description="Crie uma lista de convidados e gerencie, enviando convites e monitorando quem aceitou e quem recusou."
            />

            <ItemsQuest
              icon={Phone}
              title="Envie os convites por SMS"
              description="Você pode enviar e reenviar os convites aos convidados via SMS. Tornando mais simples a aceitação."
            />

            <ItemsQuest
              icon={Ticket}
              title="Varios tipos de tickets"
              description="Crie varios tickets diferentes, e inclua as pessoas da sua lista nos tickets correspondentes."
            />

            <ItemsQuest
              icon={Envelope}
              title="Envie os convites por E-mail"
              description="Você pode enviar e reenviar os convites aos convidados via E-mail."
            />

            <ItemsQuest
              icon={PaintBrush}
              title="Pesonalização de ticket"
              description="Personalize seus tickets de acordo com o seu gosto, com cores, tipografia e imagem de capa do convite."
            />

            <ItemsQuest
              icon={Link}
              title="Envie link aos participantes"
              description="Você pode enviar convite aos seus participantes"
            />

            <ItemsQuest
              icon={WhatsappLogo}
              title="Envie os convites por Whatsapp"
              description="Você pode enviar e reenviar os convites aos convidados via Whatsapp."
            />

          </div>
        </div>
      </Container>
    </>
  )
}