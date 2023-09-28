import { ReactNode } from "react";
import { X } from "@phosphor-icons/react";
import * as Dialog from '@radix-ui/react-dialog';
import useAccountDialog from "@/stores/useAccountDialog";
import { cn } from "@/utils/cn";

import logoImg from "@/components/assets/logo.svg";
import Image from "next/image"
import Link from "next/link";
import { Input } from "../../primitives/Input";
import { Checkbox } from "../../primitives/checkbox";
import { Separator } from "../../Separator";


export function DialogAccount() {
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
                        "992:max-h-[85vh] max-h-full ",
                        "992:w-[90vw] 992:max-w-[648px] max-w-full w-full",
                        "translate-x-[-50%] translate-y-[-50%]  bg-[#252525E5] bg-opacity-80  backdrop-blur-[40px] shadow  flex flex-col",
                        "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",
                        "focus:outline-none",
                        "overflow-hidden",
                        "992:rounded-[20px]",
                        "border border-[#FFFFFF26] border-opacity-20"
                    )}
                >
                    <div className={cn(
                        "grid grid-cols-[1fr_1.5fr]  items-center justify-between px-4 py-[10px] lg:p-8",
                        "border-b border-[#FFFFFF26] border-opacity-20",
                        "w-full  bg-[#252525E5]"
                    )}>
                        <Dialog.Close asChild>
                            <button className="flex"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <X weight="bold" size={24} className="fill-white" />
                            </button>
                        </Dialog.Close>


                        <Dialog.Title className="text-white text-base font-semibold font-sans ">
                            Simulador de lucro
                        </Dialog.Title>
                    </div>

                    <Dialog.Content className="flex flex-col gap-10 p-8 items-start">
                        <form className="flex flex-col items-start gap-10 self-stretch">
                            <div className="flex items-start gap-8">
                                <div className="flex flex-col items-start gap-6">
                                    <label className="text-white text-base font-semibold font-sans leading-normal">Taxa que voce cobraria por bilhete?</label>
                                    <Input  type="number" placeholder="Ex: Kz 800,00" />
                                </div>

                                <div className="flex flex-col items-start gap-6">
                                    <label className="text-white text-base font-semibold font-sans leading-normal">Quantos bilhetes?</label>
                                    <Input type="number" placeholder="Ex: 40" />
                                </div>


                            </div>

                            <Separator />

                            <div className="flex flex-col items-start gap-4 self-stretch">
                                <div className="flex justify-between items-start self-stretch">
                                    <h3 className="text-white text-base font-semibold font-sans leading-normal">Custo mensal</h3>
                                    <p className="text-red-600 text-base font-normal font-sans">-Kz 35.000,00</p>
                                </div>

                                <div className="flex justify-between items-start self-stretch">
                                    <h3 className="text-white text-base font-semibold font-sans leading-normal">Custo dos bilhetes</h3>
                                    <p className="text-red-600 text-base font-normal font-sans">-Kz 175,00</p>
                                </div>
                            </div>

                            <Separator />

                            <div className="flex flex-col items-start gap-4 self-stretch lg:pb-6">
                                <div className="flex items-start gap-4 self-stretch">
                                    <Checkbox />
                                    <div className="flex justify-between items-start flex-1">
                                        <h3 className="text-white text-base font-semibold font-sans leading-normal">Voce vai pagar por SMS?</h3>
                                        <p className="text-violet-100 text-opacity-30 text-base font-normal font-sans">-Kz 13,50</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 self-stretch">
                                    <Checkbox />
                                    <div className="flex justify-between items-start flex-1">
                                        <h3 className="text-white text-base font-semibold font-sans leading-normal">Voce vai pagar um dominio?</h3>
                                        <p className="text-violet-100 text-opacity-30 text-base font-normal font-sans">-Kz 13,50</p>
                                    </div>
                                </div>
                            </div>




                        </form>

                    </Dialog.Content>

                    <Dialog.Title className="w-full flex p-8 bg-[#252525E5]  justify-between items-center border-t-[0.5px] border-[#FFFFFF26]">
                        <h3 className="text-white text-base font-semibold font-sans">Voce vai lucrar</h3>
                        <p className="text-purple-500 text-base font-semibold font-sans">Kz 0,00</p>
                    </Dialog.Title>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}