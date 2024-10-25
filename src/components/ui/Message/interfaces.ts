export interface IImageMessage {
    sender : 'bot' | 'user'
    type : 'image';
    content : {
        base64 : string;
    };
}


export interface ITextMessage {
    sender : 'bot' | 'user'
    type : 'text';
    content : {
        text : string;
    };
}


export interface IAudioMessage {
    sender : 'bot' | 'user'
    type : 'audio';
    content : {
        url : string;
    };
}



export type MessageProps = IAudioMessage | ITextMessage | IImageMessage