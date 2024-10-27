import { create } from "zustand";
import { IChatStore } from "./interfaces";
import { MessageProps } from "../components/ui/Message/interfaces";
import { persist } from "zustand/middleware";


export const useChatStore = create<IChatStore>()(persist((set) => ({
    isOpen : false,
    close :  () => set({isOpen : false}),
    open : () => set({isOpen : true}),



    messages: [],
 

    addMessage: (newMessage : MessageProps) => {
        set((state) => ({messages: [...state.messages, newMessage]}))
    },

    setMessages: (dialog : Array<MessageProps>) => {
        set({messages : dialog})
    },



    image : '',
    setImage : (newImage : string) => set({image : newImage}),

    uuid : '',
    setUuid : (newId : string) => set({uuid : newId}),

    nowChatId : 0,
    setNowChatId : (newIndex : number) => set({nowChatId : newIndex}),

    nowPage : 0,
    setNowPage : (newPage : number) => set({nowPage : newPage}),



}),
{
    name: 'user',
    partialize: (state) => ({uuid : state.uuid})
}))