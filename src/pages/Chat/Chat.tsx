
import MessageInput from "../../components/inputs/MessageInput";
import "./Chat.scss";

import MessagesHistory from "../../components/ui/MessagesHistory/MessagesHistory";
import Popup from "../../components/popup/Popup";
const Chat = () => {



    return (


        <div className="chat_zone">
            <Popup />

            <MessagesHistory />

            <MessageInput />
        </div>
    );
};

export default Chat;