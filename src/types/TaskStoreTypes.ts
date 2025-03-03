export type Task = {
    id: string,
    title: string,
    completed: boolean
}

export type TaskStore = {
    tasks: Task[],
    addTask: (title: string) => void,
    toggleTask: (id: string) => void,
    editTask: (id: string, newTitle: string) => void,
    removeTask: (id: string) => void,
}