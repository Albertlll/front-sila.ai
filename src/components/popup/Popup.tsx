import Modal from 'react-modal';
import  {useChatStore} from '../../store/chatStore'
import './Popup.scss'
import { ArrowRight } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import { httpClient } from '../../httpClient';
Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#454545',
      border: 'none',
      borderRadius: '50px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  };


  const rewriteFile = async (url : string) => {
    //   из url base64
  
      const reader = new FileReader();
      const blob = await fetch(url).then(r => r.blob());
      reader.readAsDataURL(blob); 
      reader.onloadend = function() {
        const base64data = reader.result;         
        return base64data       
        // console.log(base64data);
      }
  
  }
  
function Popup() {
    // Попап для ввода фото
    const {isOpen} = useChatStore()
    const {close} = useChatStore()
    const {addMessage} = useChatStore()

    const {image} = useChatStore()

    const {uuid, lastChats, nowChatIndex, } = useChatStore()

    const [imgMessage, setImgMessage] = useState('')



    const handleSend  = async () => {
    // Отправка сообщения


        httpClient.post('/send_message', {
            user_id : uuid,
            chat_id :  lastChats[nowChatIndex].chat_id,
            message : imgMessage,
            images : [rewriteFile(image)]

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








        // addMessage(
        //     {
        //         sender: 'user',
        //         type: 'image',
        //         content: {
        //             url: image,
        //             text: ''
        //         }
        //     }
        // )



        

        // addMessage (
        //     {
        //         sender: 'user',
        //         type: 'text',
        //         content: {
        //             text: imgMessage
        //         }
        //     }
        // )





        // addMessage (
        //     {
        //         sender: 'bot',
        //         type: 'text',
        //         content: {
        //             text: "Как же я задолбался"
        //         }
        //     }
        // )


        close()
            
    }
    
    return (
        <Modal isOpen={isOpen} onRequestClose={close} style={customStyles} closeTimeoutMS={500}>
            <div className="popup_cont">
                <div className='image_box'>
                    <img src={image} alt='pinned_image'/>
                </div>

                <div className='imagetextinp'>
                    <input onChange={(e : ChangeEvent<HTMLInputElement>) => {setImgMessage(e.target.value)}} type='text' placeholder='Сообщение к картинке...'/>
                </div>


                <button className='send_btn' onClick={() => {handleSend()}}>
                    <ArrowRight color="white"/>
                </button>
                


            </div>
        </Modal>
    );
}

export default Popup;