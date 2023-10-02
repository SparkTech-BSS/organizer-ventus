import { cn } from "@/utils/cn";
import { Container } from "../Container";
import Image from "next/image";
import ainamteGif from "../assets/banner-animate.gif"
import ainamteGif2 from "../assets/banner-animate.gif"
import { useEffect, useState } from "react";
import SkeletonCard from "@/components/SkeletonCard";

export function CreateForYou() {
  const [selectedImage, setSelectedImage] = useState(ainamteGif);

  const handleButtonClick = (imageSrc: any) => {
    setSelectedImage(imageSrc);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, []);

  return (
    <Container className={cn("lg:pb-20 lg:pt-[120px] pt-[78px] pb-[40px] gap-[120px] items-center justify-center self-stretch flex flex-col")}>
      <div className="grid grid-cols-1 lg:flex flex-col items-start gap-20">
        <div className="grid lg:grid-cols-[1.8fr_3fr] grid-cols-1 items-start lg:gap-[200px] gap-8">
          <h3 className="text-white lg:text-[40px] text-[24px] font-semibold font-sans">O que nós criamos para você?</h3>

          <div className="grid lg:grid-cols-[2fr_2.5fr] grid-cols-1 items-start gap-10 flex-1">
            <div className="flex flex-col items-start gap-1">
              <button className="flex lg:px-5 items-center gap-2" onClick={() => handleButtonClick(ainamteGif)}>
                <div className="w-3 h-0.5 bg-zinc-300" />
                <h4 className="text-white text-base font-semibold font-sans">Website</h4>
              </button>

              <button className="flex lg:px-5 items-center gap-2" onClick={() => handleButtonClick(ainamteGif2)}>
                <h4 className="text-violet-100 text-opacity-60 text-base font-semibold font-sans">Dashboard administrativa</h4>
              </button>
            </div>
            <p className="text-white lg:text-base text-sm font-medium font-sans leading-normal">Criamos o seu website personalizado, com link próprio. O seu website funcionará bem tanto para computador, quanto tablets e celulares.Tudo grátis.</p>
          </div>
        </div>

        {isLoading ? (
          <SkeletonCard width={1200} height={675} />
        ) : (
          <Image src={selectedImage} alt="" quality={100} className="w-full rounded-[20px]" />
        )}
      </div>
    </Container>
  )
}