import { create } from "zustand";


export const usePopupStateStore = create<{isOpen : boolean; close : () => void; open : () => void}>()((set) => ({
    isOpen : false,
    close :  () => set({isOpen : false}),
    open : () => set({isOpen : true})
}))