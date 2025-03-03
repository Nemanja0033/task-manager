import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ThemeType } from "../types/ThemeStoreTypes";

export const useThemeStore = create<ThemeType>()(
  persist(
    (set) => ({
      darkMode: false,
      toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "theme", // Ključ pod kojim će biti sačuvan u localStorage
      storage: createJSONStorage(() => localStorage), // OVO je ispravno!
    }
  )
);
