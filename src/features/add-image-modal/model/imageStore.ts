import { create } from "zustand";

interface imageStore {
	close: () => void;
	open: () => void;
	setImgMessage: (message: string) => void;
	setImage: (image: string) => void;
	isOpen: boolean;
	image: string;
	imageMessageText: string;
}
export const useImageStore = create<imageStore>((set) => ({
	isOpen: false,
	image: "",
	imageMessageText: "",

	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true }),
	setImage: (image: string) => set({ image }),
	setImgMessage: (message: string) => set({ imageMessageText: message }),
}));
