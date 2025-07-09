export interface IChat {
	chat_id: number;
	last_message: {
		sender: string;
		content: string;
		timestamp: string;
	};
}
