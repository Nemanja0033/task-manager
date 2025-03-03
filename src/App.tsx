import { useTaskStore } from "./store/useTaskStore";
import { useThemeStore } from "./store/useThemeStore"
import { Task } from "./types/TaskStoreTypes";

const App = () => {
  const { darkMode, toggleTheme } = useThemeStore();
  const { tasks, addTask, removeTask} = useTaskStore();
  console.log(tasks)
  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white'} h-screen w-full`}>
      <h1>Hello World!</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
      <button onClick={() => addTask('New Task')}>add Task</button>
      {tasks.map((t: Task) => (
        <b onClick={() => removeTask(t.id)}>{t.title}</b>
      ))}
    </div>
  )
}

export default App