import './Message.scss'
import TextMessage from './messageSpicies/TextMessage/TextMessage';
import ImageMessage from './messageSpicies/ImageMessage/ImageMessage';
import silalogo from './silalogo.svg'
interface IImageMessage {
    sender : 'bot' | 'user'
    type : 'image';
    content : {
        base64 : string;
    };
}


interface ITextMessage {
    sender : 'bot' | 'user'
    type : 'text';
    content : {
        text : string;
    };
}


interface IAudioMessage {
    sender : 'bot' | 'user'
    type : 'audio';
    content : {
        url : string;
    };
}



type MessageProps = IAudioMessage | ITextMessage | IImageMessage

const Message = (props: MessageProps) => {
    
    return (

        <>
        

        <div className={props.sender == 'bot' ? 'message_left' : 'message_right'}>


                {
                    props.sender == 'bot' &&
                    <img src={silalogo} alt="" />
                }
                

            {
                props.type == 'text'?

                <TextMessage text={props.content.text}/>
                :
                props.type == 'image'?
                <ImageMessage base64={props.content.base64}/>
                :
                <div>
                    Audio message is not supported.
                </div>

                
            }

        </div> 


        </>

    );
};

export default Message;

