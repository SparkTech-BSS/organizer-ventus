import { ReactNode } from "react";
import { X } from "@phosphor-icons/react";
import * as Dialog from '@radix-ui/react-dialog';
import useAccountDialog from "@/stores/useAccountDialog";
import { cn } from "@/utils/cn";

import logoImg from "@/components/assets/logo.svg";
import Image from "next/image"
import Link from "next/link";


export function MenuResponsive() {
    const { onClose, isOpen } = useAccountDialog();

    return (
        <Dialog.Root open={isOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0 z-999" onClick={onClose} />

                <Dialog.Content
                    className={cn(
                        "992:data-[state=open]:animate-contentShow",
                        "data-[state=open]:animate-slide-down-full",
                        "z-999 fixed 992:top-[50%] top-0 left-[50%]",
                        "992:max-h-[85vh] 992:h-[469px] max-h-full h-[100vh]",
                        "992:w-[90vw] 992:max-w-[568px] max-w-full w-full",
                        "translate-x-[-50%] translate-y-[-50%]  bg-black bg-opacity-80  backdrop-blur-[40px] shadow  flex flex-col",
                        "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",
                        "focus:outline-none",
                        "overflow-hidden",
                        "992:rounded-[20px]",
                        "border border-black border-opacity-20"
                    )}
                >
                    <div className={cn(
                        "flex items-center justify-start h-16 px-4 py-[10px]",
                        "border-b border-black border-opacity-20",
                        "w-full  bg-black bg-opacity-50 shadow"
                    )}>
                        <Dialog.Close asChild>
                            <button
                                className="absolute top-6 right-6"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <X weight="bold" size={24} className="fill-white" />
                            </button>
                        </Dialog.Close>


                        <Dialog.Title className="text-black text-base font-bold">
                            <Link href="/">
                                <Image
                                    alt=""
                                    className="w-[90px]  cursor-pointer"
                                    quality={100}
                                    src={logoImg}
                                />
                            </Link>
                        </Dialog.Title>
                    </div>

                    <div className="flex flex-col gap-8">
                       
                        <div className="flex flex-col items-start">

                            <div className="w-full flex p-4 items-center gap-[10px] border-b border-t border-white border-opacity-20">
                                <p className="text-white text-sm font-normal font-sans font-sans ">Funcionalidades</p>
                            </div>
                            

                            <Link href="/ventus-partner" className="w-full flex p-4 items-center gap-[10px] border-b border-white border-opacity-20">
                                <p className="text-white text-sm font-normal font-sans font-sans ">Ventus Partner</p>
                            </Link>

                        </div>

                        <div className="flex px-4">
                            <button className="w-full px-4 py-[12.50px] bg-red-600 rounded-[66px] justify-center items-center gap-2.5 inline-flex">
                                <p className="text-white text-base font-bold font-sans font-sans ">Comece agora!</p>
                            </button>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}