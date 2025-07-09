import type { IChat } from "@features/messages-history";
import { create } from "zustand";

export interface ISideBarSrote {
	lastChats: Array<IChat>;
	setLastChats: (chats: Array<IChat>) => void;

	addСhat: (newChat: IChat) => void;
	isSideBarOpened: boolean;
	toggleSideBar: () => void;

	nowChatIndex: number;
	setNowChatIndex: (newIndex: number) => void;
}

export const useSideBarStore = create<ISideBarSrote>()((set) => ({
	isSideBarOpened: false,
	toggleSideBar: () =>
		set((state) => ({ isSideBarOpened: !state.isSideBarOpened })),

	nowChatIndex: 0,
	setNowChatIndex: (newIndex: number) => set({ nowChatIndex: newIndex }),

	lastChats: [],

	addСhat: (newChat: IChat) => {
		set((state) => ({ lastChats: [...state.lastChats, newChat] }));
	},

	setLastChats(chats: Array<IChat>) {
		set({ lastChats: chats });
	},
}));
