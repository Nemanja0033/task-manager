import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TaskStore } from "../types/TaskStoreTypes";

//storing task state in localStorage using persist mehtod
export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (title) =>
        set((state) => ({
          tasks: [...state.tasks, { id: crypto.randomUUID(), title, completed: false }],
        })),
      editTask: (id: string, newTitle: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)),
        })),
      toggleTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),

    }
  )
);
