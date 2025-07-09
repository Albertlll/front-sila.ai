export interface MessageSendDTO {
	user_id: string;
	chat_id: string;
	message: string;
	images: string[];
}

export interface MessageResponseDTO {
	user_id: string;
	chat_id: string;
	message: string;
	images: string[];
	message_id: string;
}

export interface IImageMessage {
	sender: "bot" | "user";
	type: "image";
	messageId: string;

	content: {
		url: string;
		text: string;
	};
}

export interface ITextMessage {
	sender: "bot" | "user";
	type: "text";
	messageId: string;

	content: {
		text: string;
	};
}

export interface IAudioMessage {
	sender: "bot" | "user";
	type: "audio";
	messageId: string;

	content: {
		url: string;
	};
}

export type MessageProps = IAudioMessage | ITextMessage | IImageMessage;
