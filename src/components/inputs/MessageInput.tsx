import './MessageInput.scss'
import {ArrowRight, Paperclip} from 'lucide-react'
import {Mic} from 'lucide-react'
import { ChangeEvent, useState } from 'react';
import { useMessagesStore } from '../../store/messagesStore';

const MessageInput = () => {
    const [messageField, setMessageField] = useState<string>('');
    const {addMessage} = useMessagesStore();


    const sendMessage = () => {

        addMessage(
            {
                sender: 'user',
                type: 'text',
                content: {
                    text: messageField,
                }
            }
        )


    }
    
    return (
        <div className='messageInputBlock'>
                <button className='pin_btn'>
                    <Paperclip color="white"/>
                </button>

                <input onChange={(e : ChangeEvent<HTMLInputElement>) => setMessageField(e.target.value)} type='text'></input>



                {
                    messageField.trim() ?
                    <button onClick={() => sendMessage()} className='arrow_btn'>
                        <ArrowRight color="white"/>
                    </button>

                    :


                <button className='mic_btn'>
                    <Mic color="white"/>
                </button>
                }

        </div>

    );
};

export default MessageInput;