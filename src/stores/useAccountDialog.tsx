import { create } from "zustand";

interface useAccountDialogStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAccountDialog = create<useAccountDialogStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));

export default useAccountDialog;