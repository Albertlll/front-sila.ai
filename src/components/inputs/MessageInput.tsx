import './MessageInput.scss'
import {Paperclip} from 'lucide-react'
import {Mic} from 'lucide-react'

const MessageInput = () => {
    
    return (
        <div className='messageInputBlock'>
                <button>
                    <Paperclip color="white"/>
                </button>

                <input type='text'></input>

                <button className='sendBtn'>
                    <Mic color="white"/>
                </button>
        </div>

    );
};

export default MessageInput;