import Message from "../Message/Message";
import './MessagesHistory.scss'
import { useMessagesStore } from "../../../store/messagesStore";
function MessagesHistory() {

    const messages = useMessagesStore((state) => state.messages)

    return (
        <div className="messages_history">



            {

                messages.map((msg, index) => (
                    <Message key={index} {...msg}/>
                ))
                
            }

        </div>
    );
}

export default MessagesHistory;