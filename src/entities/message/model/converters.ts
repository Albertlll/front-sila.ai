import type * as types from "./types";

export const messageToDTO = (
	message: types.MessageProps,
): types.MessageSendDTO => ({
	user_id: "",
	chat_id: "",

	message:
		message.type === "text" || message.type === "image"
			? message.content.text
			: "",
	images: message.type === "image" ? [message.content.url] : [],
});

export const messageFromDTO = (
	message: types.MessageResponseDTO,
): types.MessageProps => {
	if (message.images.length !== 0) {
		return {
			messageId: "",
			type: "image",
			content: {
				text: message.message,
				url: message.images[0],
			},
			sender: "bot",
		};
	}

	return {
		messageId: "",
		type: "text",
		content: { text: message.message },
		sender: "bot",
	};
};
