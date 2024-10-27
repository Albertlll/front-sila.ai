import Message from "../Message/Message";
import './MessagesHistory.scss'

import { useChatStore } from "../../../store/chatStore";
import { useEffect, useRef } from "react";
function MessagesHistory() {

    const messages = useChatStore((state) => state.messages);


    const lastMessageRef = useRef<any>(null);


    useEffect(() => {
        lastMessageRef.current?.scrollIntoView(false);
    }, [messages]);

    // const lastMessageRef = useRef<HTMLDivElement>(null);



    return (
        <div className="messages_history">



            {


                messages.map((msg, index) => (


                    

                         index === messages.length - 1 ?
                         <div ref={lastMessageRef}>
                             <Message key={index} {...msg} />
                         </div>
                        : 
                        <Message key={index} {...msg} />

                    
                ))
                
            }

        </div>
    );
}

export default MessagesHistory;