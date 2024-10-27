import './MessageInput.scss'
import {ArrowRight, Paperclip} from 'lucide-react'
import { ChangeEvent, useState } from 'react';


import { useChatStore } from '../../store/chatStore';
import { httpClient } from '../../httpClient';

const MessageInput = () => {
    const [messageField, setMessageField] = useState<string>('');
    const {addMessage} = useChatStore();
    const {setImage} = useChatStore();
    const {open} = useChatStore();

    const {uuid} = useChatStore();

    const {nowChatId} = useChatStore();



    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files == null) return

        console.log( URL.createObjectURL(event.target.files[0]))

        setImage(
                URL.createObjectURL(event.target.files[0]),
        )

        open()


    };


    const sendMessage = () => {


        if (messageField === '') return;

        addMessage(
            {
                sender: 'user',
                type: 'text',
                content: {
                    text: messageField,
                }
            }
        )

        addMessage(
            {
                sender: 'bot',
                type: 'text',
                content: {
                    text: 'Ты удивил меня таким необычным диалогом! Но знаешь, в этом есть что-то мистическое и глубокое. Взгляд — это мощное средство связи, иногда в нем можно прочесть больше, чем в словах. Может, тебе интересно создать атмосферу загадки или выразить идею о глубоком взаимопонимании без слов? Почему бы не превратить это в элемент квеста или визуальной новеллы? Ситуация, когда персонажи испытывают что-то подобное, могла бы быть интригующей. Как думаешь?',
                }
            }
        )

        httpClient.post('/send_message', {
            user_id : uuid,
            chat_id : nowChatId,
            message : messageField,
            images : []
        }).then((response) => {
            addMessage(
                {
                    sender: 'user',
                    type: 'text',
                    content: {
                        text: response.data.bot_answer,
                    }
                }
            )

            response.data.photos.map((photo : {
                "chapter":string
               "image_number": string
                "path": string
             }) => {
                addMessage(
                    {
                        sender: 'bot',
                        type: 'image',
                        content: {
                            url: photo.path,
                            text: '',
                        }
                    }
                )
            })
    
        })




    }
    
    return (
        
        <div className='messageInputBlock'>

                <input onChange={handleImageChange} accept=".png, .jpg"  type="file" name="" id="fileUppload" className="hidden">
                </input>

                <label className="pin_btn" htmlFor="fileUppload">

                <Paperclip color="white"/>

                </label>

                <input onKeyDown={(e) => { if (e.key === 'Enter') {sendMessage()}}} placeholder='Отправить текст' onChange={(e : ChangeEvent<HTMLInputElement>) => setMessageField(e.target.value)} type='text'></input>
        
                <button onClick={() => sendMessage()} className='arrow_btn'>
                    <ArrowRight color="white"/>
                </button>


                

        </div>

    );
};

export default MessageInput;
