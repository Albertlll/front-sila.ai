import { Message } from "@entities/message";
import "./MessagesHistory.scss";

import { useEffect, useRef } from "react";
import { useChatStore } from "../model/messagesHistoryStore";
function MessagesHistory() {
	const { messages } = useChatStore();

	const lastMessageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		lastMessageRef.current?.scrollIntoView(false);
	}, []);

	// const lastMessageRef = useRef<HTMLDivElement>(null);

	return (
		<div className="messages_history">
			{messages.map((msg, index) =>
				index === messages.length - 1 ? (
					<div key={msg.messageId} ref={lastMessageRef}>
						<Message {...msg} />
					</div>
				) : (
					<Message key={msg.messageId} {...msg} />
				),
			)}
		</div>
	);
}

export default MessagesHistory;
