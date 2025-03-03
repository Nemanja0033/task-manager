import { create } from "zustand";
import { ThemeType } from "../types/ThemeStoreTypes";

export const useThemeStore = create<ThemeType>((set) => ({
    darkMode: false, // is dark mode? state
    toggleTheme: () => set((state) => ({darkMode: !state.darkMode})), // toggle theme state
}));