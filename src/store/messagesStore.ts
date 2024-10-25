import { create } from "zustand";
import { MessageProps } from "../components/ui/Message/interfaces";
import { ImessageStore } from './interfaces'



export const useMessagesStore = create<ImessageStore>()((set) => ({
    messages: [],
    addMessage: (newMessage : MessageProps) => set((state) => ({messages: [...state.messages, newMessage]})),
}))