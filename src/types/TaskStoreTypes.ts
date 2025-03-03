export type Task = {
    id: string,
    title: string,
    completed: boolean
}

export type TaskStore = {
    tasks: Task[],
    addTask: (title: string) => void,
    removeTask: (id: string) => void,
}