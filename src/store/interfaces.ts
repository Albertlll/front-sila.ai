import { MessageProps } from "../components/ui/Message/interfaces";


export interface ImessageStore {
    messages: Array<MessageProps>,
    addMessage: (message : MessageProps) => void;
}