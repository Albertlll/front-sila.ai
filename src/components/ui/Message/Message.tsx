import './Message.scss'
import TextMessage from './messageSpicies/TextMessage/TextMessage';
import ImageMessage from './messageSpicies/ImageMessage/ImageMessage';
import silalogo from './silalogo.svg'
import { MessageProps } from './interfaces';

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

