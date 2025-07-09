import type { MessageProps } from "@entities/message/model/types";
import { create } from "zustand";

export interface IChatStore {
	messages: Array<MessageProps>;
	addMessage: (message: MessageProps) => void;
	setMessages: (dialog: Array<MessageProps>) => void;
}

export const useChatStore = create<IChatStore>()((set) => ({
	messages: [],
	addMessage: (newMessage: MessageProps) => {
		set((state) => ({ messages: [...state.messages, newMessage] }));
	},
	setMessages: (dialog: Array<MessageProps>) => {
		set({ messages: dialog });
	},
}));
