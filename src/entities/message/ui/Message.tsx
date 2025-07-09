import "./Message.scss";
import type { MessageProps } from "../model/types";
import silalogo from "./silalogo.svg";
import ImageMessage from "./species/ImageMessage/ImageMessage";
import TextMessage from "./species/TextMessage/TextMessage";

const Message: React.FC<MessageProps> = (props) => {
	return (
		<div className={props.sender === "bot" ? "message_left" : "message_right"}>
			{props.sender === "bot" && <img src={silalogo} alt="Логотип" />}

			<div className="message_content_block">
				{props.type === "text" ? (
					<TextMessage text={props.content.text} />
				) : props.type === "image" ? (
					<ImageMessage text={props.content.text} url={props.content.url} />
				) : (
					<div>Audio message is not supported.</div>
				)}
			</div>
		</div>
	);
};

export default Message;
