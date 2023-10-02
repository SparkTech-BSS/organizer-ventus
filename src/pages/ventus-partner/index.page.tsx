import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

import { Footer } from './components/Footer'
import { SectionQuest } from './components/SectionQuest'
import { HowMuch } from './components/HowMuch'
import { PlataformSection } from './components/PlataformSection'
import { CheckList } from './components/CheckList'
import { ClientPartner } from './components/ClientPartner'
import { CreateForYou } from './components/CreateForYou'
import { ForPartner } from './components/ForPartner'
import { ConstructorFuture } from './components/ConstructorFuture'
import { CheckListMobile } from './components/CheckListMobile'

const inter = Inter({ subsets: ['latin'] })

export default function VentusPartnerPage() {
  return (
    <>
      <Head>
        <title>Ventus Partner | Tenha a sua própria bilheteira online</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000" />
      </Head>

      <style>{`
        ::-webkit-scrollbar {
          width: 0.5vw;
          background: black;
          padding-right: 3px;
          
        }

        ::-webkit-scrollbar-thumb {
          background: #9F64FF;
          border-radius: 50px;
        }
      `}
      </style>

      <div className="h-full relative z-40  bg-black">
        <header id="header" className="container:px-4 bg-ventus-primary">
          <Header />
        </header>

        <main className="h-full bg-ventus-primary overflow-x-hidden">
          <section className="container:px-4 bg-ventus-primary ">
            <div className="w-[376px] h-[375px] absolute left-[-182px] top-[436px] bg-[#9F64FF] rounded-full blur-[200px]" />
            <Hero />
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <HowMuch />
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <div className="w-[376px] h-[375px] absolute left-[-182px] top-[-23px] bg-[#9F64FF] rounded-[376px] blur-[200px]" />
            <PlataformSection />
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <div className="hidden md:block">
              <CheckList />
            </div>

            <div className="block md:hidden">
              <CheckListMobile />
            </div>
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <ClientPartner />
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <CreateForYou />
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <ForPartner />
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <div className="w-[393px] h-[103px] absolute left-[57px] bottom-[3237px] bg-[#9F64FF] rounded-[393px] blur-[226px]" />
            <div className="w-[467px] h-[185px] absolute left-[-370px] top-[120px] bg-[#9F64FF] rounded-[467px] blur-[226px]" />
            <div className="w-[467px] h-[185px] absolute left-[486px] top-[120px] bg-[#9F64FF] rounded-[467px] blur-[344.5px]" />
            <div className="w-[467px] h-[185px] absolute left-[486px] top-[676px] bg-[#9F64FF] rounded-[467px] blur-[344.5px]" />
            <ConstructorFuture />
            <div className="w-[236px] h-[123px] absolute right-[0px] top-[510px] bg-[#9F64FF] rounded-full blur-[145px]" />
            <div className="w-[1416px] h-[123px] absolute right-[-617px] top-[120px] bg-[#9F64FF] rounded-[1416px] blur-[226px]" />
          </section>

          <section id="quest" className="container:px-4 bg-ventus-primary relative z-10">
            <SectionQuest />
          </section>
        </main>
        <div>
          <footer id="contact" className="container:px-4 bg-ventus-primary">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}
