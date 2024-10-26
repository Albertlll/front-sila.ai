import { create } from "zustand";


export const usePinnedFilesStore = create<{image : string, setImage : (newImage : string) => void}>()((set) => ({
    image : '',
    setImage : (newImage : string) => set({image : newImage})
}))