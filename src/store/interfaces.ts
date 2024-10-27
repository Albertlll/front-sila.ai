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

    addMessage:  (message : MessageProps) => void,
    setMessages: (dialog : Array<MessageProps>) => void,

    isOpen : boolean,
    close : () => void,
    open : () => void,

    image : string,
    setImage : (newImage : string) => void,

    uuid : string,
    setUuid : (newUuid : string) => void,

    nowChatId : number,
    setNowChatId : (newIndex : number) => void,

    nowPage : number,
    setNowPage : (newIndex : number) => void,


}

