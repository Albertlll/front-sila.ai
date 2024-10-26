import { MessageProps } from "../components/ui/Message/interfaces";


export interface ImessageStore {
    messages: Array<MessageProps>,
    addMessage: (message : MessageProps) => void;
}

export interface IpinnedFilesStore {

    files: Array<FileType>,
    
    addFile: (file : {url : string, name : string, type : string}) => void;
}


export interface FileType {
    url : string,
    name : string,
    type : string
}