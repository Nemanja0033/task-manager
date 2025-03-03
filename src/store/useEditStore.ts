import { create } from "zustand";
import { EditStore } from "../types/useEditStoreTypes";

export const useEditStore = create<EditStore>((set) => ({
    isOpenEdit: false,
    toggleOpen: () => set((state) => ({isOpenEdit: !state.isOpenEdit})),
}));