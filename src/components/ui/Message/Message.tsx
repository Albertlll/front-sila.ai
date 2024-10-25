import './Message.scss'


interface AudioMessage {
    type : 'audio';
    content : string;
}


interface TextMessage {
    type : 'audio';
    content : {
        text : string;
    };
}








type MessageProps = AudioMessage | TextMessage

const Message = (props: MessageProps) => {
    
    return (
        <div className='message'>

        </div> 
    );
};

export default Message;

