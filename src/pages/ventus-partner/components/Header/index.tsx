import { cn } from "@/utils/cn";
import logoImg from "@/components/assets/logo.svg";
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll";

import { useEffect, useState } from "react";
import { useScrollPosition } from "react-use-scroll-position";

import { Container } from "../Container";



import Link from "next/link";
import { Button } from "../Button";
import useAccountDialog from "@/stores/useAccountDialog";
import { MenuResponsive } from "../Dialog/MenuResponsive";

interface HeaderProps {
  type?: string;
}

export function Header({ type }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const scrollPosition = useScrollPosition();
  const { onOpen } = useAccountDialog();

  useEffect(() => {
    if (scrollPosition.y > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <>
      <div
        className={cn(
          "w-full  flex justify-between items-center bg-black bg-opacity-50 shadow backdrop-blur-[80px] py-[15px]",
          scrolled && " bg-black bg-opacity-50 shadow backdrop-blur-[80px] shadow-custom container:p-4",
          {
            "z-1000 top-0 left-0 fixed": scrolled,
          }
        )}
      >
        <Container className={cn(" relative flex justify-between items-center")}>
          <div className="flex items-center gap-20">
            <div className="flex items-center gap-4 x640:">
              <Link href="/">
                <Image
                  alt=""
                   className="w-[90px] lg:pb-[10px] cursor-pointer"
                  quality={100}
                  src={logoImg}
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-10">
              <ul className="justify-start items-center gap-10 flex z-10">
                <ScrollLink to="about" smooth={true} duration={500}>
                  <li className="text-white text-sm font-normal cursor-pointer hover:opacity-50 transition-all duration-300">
                    Funcionalidades
                  </li>
                </ScrollLink>
                <Link href="/ventus-partner" className="relative">
                  <li className="text-violet-600 text-sm font-normal cursor-pointer hover:opacity-50 transition-all duration-300">
                    Ventus partner
                  </li>
                </Link>
              </ul>
            </div>
          </div>


          <button className="hidden w-[136px] h-[38px] px-4 py-[12.50px] bg-violet-600 hover:bg-violet-800 transition-all rounded-[66px] justify-center items-center gap-2.5 md:flex">
            <p className="text-white text-sm font-bold">Comece agora!</p>
          </button>

          <div className="md:hidden flex">
            <button className="w-7 h-7 relative" onClick={onOpen}>
              <i className="w-[19px] h-px left-[4px] top-[9px] absolute bg-white" />
              <i className="w-[19px] h-px left-[4px] top-[18px] absolute bg-white" />
            </button>
          </div>

        </Container>
      </div>

      <MenuResponsive />
    </>
  );
}
