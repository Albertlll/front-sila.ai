import './MessageInput.scss'
import {ArrowRight, Paperclip} from 'lucide-react'
import {Mic} from 'lucide-react'
import { ChangeEvent, useState } from 'react';
import { useMessagesStore } from '../../store/messagesStore';
import { usePinnedFilesStore } from '../../store/pinnedFilesStore';
import { usePopupStateStore } from '../../store/popupStateStore';

const MessageInput = () => {
    const [messageField, setMessageField] = useState<string>('');
    const {addMessage} = useMessagesStore();
    const {setImage} = usePinnedFilesStore();
    const {open} = usePopupStateStore();
    


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files == null) return

        console.log( URL.createObjectURL(event.target.files[0]))

        setImage(
                URL.createObjectURL(event.target.files[0]),
        )

        open()



    };


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

                <input onChange={handleImageChange} accept=".png, .jpg"  type="file" name="" id="fileUppload" className="hidden">
                </input>

                <label className="pin_btn" htmlFor="fileUppload">

                <Paperclip color="white"/>

                </label>


                <input  placeholder='Сообщение к картинке...' onChange={(e : ChangeEvent<HTMLInputElement>) => setMessageField(e.target.value)} type='text'></input>



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
