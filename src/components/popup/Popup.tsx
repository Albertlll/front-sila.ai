import Modal from 'react-modal';
import { usePopupStateStore } from '../../store/popupStateStore';
import './Popup.scss'
import { usePinnedFilesStore } from '../../store/pinnedFilesStore';
import { ArrowRight } from 'lucide-react';
import { useMessagesStore } from '../../store/messagesStore';
import { ChangeEvent, useState } from 'react';
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

function Popup() {

    const isOpen = usePopupStateStore((state) => state.isOpen)
    const {close} = usePopupStateStore()

    const {addMessage} = useMessagesStore()

    const nowImage = usePinnedFilesStore((state) => state.image)


    const [imgMessage, setImgMessage] = useState('')



    const handleSend = () => {
        addMessage(
            {
                sender: 'user',
                type: 'image',
                content: {
                    base64: nowImage,
                }
            }
        )

        addMessage (
            {
                sender: 'user',
                type: 'text',
                content: {
                    text: imgMessage
                }
            }
        )


        addMessage (
            {
                sender: 'bot',
                type: 'text',
                content: {
                    text: "Как же я задолбался"
                }
            }
        )


        close()
            
    }
    
    return (
        <Modal isOpen={isOpen} onRequestClose={close} style={customStyles} closeTimeoutMS={500}>
            <div className="popup_cont">
                <div className='image_box'>
                    <img src={nowImage} alt='pinned_image'/>
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