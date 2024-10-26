
import MessageInput from "../../inputs/MessageInput";
import  "./Chat.scss";

import MessagesHistory from "../MessagesHistory/MessagesHistory";
import Popup from "../../popup/Popup";
const Chat = () => {


    
    return (
        <div className="chat_cont">
            <div className="chat_zone">
                <Popup/>
                
                <MessagesHistory/>

                <MessageInput/>
            </div>
        </div>
    );
};

export default Chat;