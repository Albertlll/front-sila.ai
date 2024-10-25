
import MessageInput from "../../inputs/MessageInput";
import  "./Chat.scss";

import MessagesHistory from "../MessagesHistory/MessagesHistory";

const Chat = () => {


    
    return (
        <div className="chat_cont">
            <div className="chat_zone">
                <MessagesHistory/>

                <MessageInput/>
            </div>
        </div>
    );
};

export default Chat;