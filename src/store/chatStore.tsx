import { create } from "zustand";
import { IChatStore, IChat } from "./interfaces";
import { MessageProps } from "../components/ui/Message/interfaces";
import { persist } from "zustand/middleware";


export const useChatStore = create<IChatStore>()(persist((set) => ({
    isOpen : false,
    close :  () => set({isOpen : false}),
    open : () => set({isOpen : true}),


    nowChatIndex : 0,
    setNowChatIndex : (newIndex : number) => set({nowChatIndex : newIndex}),


    messages: [],
    lastChats: [],
 
        
    setLastChats(chats : Array<IChat>) {
        set({lastChats : chats})
    },

    addMessage: (newMessage : MessageProps) => {
        set((state) => ({messages: [...state.messages, newMessage]}))
    },

    setMessages: (dialog : Array<MessageProps>) => {
        set({messages : dialog})
    },




    image : '',
    setImage : (newImage : string) => set({image : newImage}),

    uuid : '',
    setUuid : (newId : string) => set({uuid : newId})



}),
{
    name: 'user',
    partialize: (state) => ({uuid : state.uuid})
}))