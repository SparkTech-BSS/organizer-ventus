import { cn } from "@/utils/cn";
import { Container } from "../Container";
import { Airplay, ChartLineUp, MegaphoneSimple, Ticket, UsersThree, Wrench } from "@phosphor-icons/react";
import EventCard from "./EventCard";

export function SectionTools() {
  return (
    <>
      <Container className={cn("lg:py-20 pt-20 gap-20 items-center flex-col flex")}>
        <div className="w-full h-12 flex-col justify-start items-center gap-4 flex">
          <h2 className="text-center text-white text-2xl lg:text-[40px] font-semibold">Ferramentas para ajudar seus eventos</h2>
        </div>

        <div className="flex flex-col items-center self-stretch rounded-2xl bg-gridient-tools from-opacity-50 to-transparent backdrop-blur-2xl">
          <div className="flex items-start content-start self-stretch flex-wrap ">

            <EventCard
              icon={<Airplay size={32} color="#DB3535" weight="duotone" />}
              title="Gestão de Eventos Abrangente"
              description="Criação de eventos, venda de ingressos, streaming de eventos online e controle total sobre as configurações do evento."
            />

            <EventCard
              icon={<Ticket size={32} color="#DB3535" weight="duotone" />}
              title="Variedade de Tipos de Ingressos"
              description="Oferece a flexibilidade de criar diversos tipos de ingressos, incluindo pagos, gratuitos, doações e assentos reservados."
            />

            <EventCard
              icon={<MegaphoneSimple size={32} color="#DB3535" weight="duotone" />}
              title="Promoção e Marketing de Eventos"
              description="Inclui recursos como códigos promocionais, redes de afiliados, campanhas de links rastreáveis e incentivos para impulsionar as vendas de ingressos."
            />


            <EventCard
              icon={<UsersThree size={32} color="#DB3535" weight="duotone" />}
              title="Gestão de Participantes"
              description="Coletar informações dos participantes, aprovar inscrições e acompanhar a lista de convidados em tempo real."
            />

            <EventCard
              icon={<ChartLineUp size={32} color="#DB3535" weight="duotone" />}
              title="Pagamentos Seguros e Relatórios"
              description="Métodos de pagamento seguros, detecção de fraudes, acesso a relatórios de vendas e suporte para acesso rápido aos fundos do evento."
            />

            <EventCard
              icon={<Wrench size={32} color="#DB3535" weight="duotone" />}
              title="Ferramentas de Suporte e Integrações"
              description="Aplicativos móveis, integração com Mailchimp, APIs personalizadas e serviços de campo para eventos presenciais."
            />
          </div>
        </div>
      </Container>
    </>
  )
}