import { create } from "zustand";
import { TaskStore } from "../types/TaskStoreTypes";

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (title) => //adding task to state
      set((state) => ({
        tasks: [...state.tasks, { id: crypto.randomUUID(), title, completed: false }],
      })),
    toggleTask: (id: string) => //toggling task from state
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      })),
    removeTask: (id) => // removing task from state
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      })),
  }));