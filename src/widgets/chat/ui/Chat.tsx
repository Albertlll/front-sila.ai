import MessageInput from "./message-input/MessageInput";
import "./Chat.scss";

import AddImagePopup from "@features/add-image-modal";
import MessagesHistory from "@features/messages-history";
const Chat = () => {
	return (
		<div className="chat_zone">
			<AddImagePopup />

			<MessagesHistory />

			<MessageInput />
		</div>
	);
};

export default Chat;
