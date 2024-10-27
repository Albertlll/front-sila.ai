import { MessageProps } from "../components/ui/Message/interfaces";


export interface IChat {
    chat_id: number,
    last_message: {
      sender: string,
      content: string,
      timestamp: string
    }
}

export interface IChatStore {

    messages: Array<MessageProps>,
    lastChats : Array<IChat>,
    setLastChats: (chats: Array<IChat>) => void,

    addMessage:  (message : MessageProps) => void,
    setMessages: (dialog : Array<MessageProps>) => void,

    isOpen : boolean,
    close : () => void,
    open : () => void,

    image : string,
    setImage : (newImage : string) => void,

    uuid : string,
    setUuid : (newUuid : string) => void,
    nowChatIndex : number,
    setNowChatIndex : (newIndex : number) => void,



}

