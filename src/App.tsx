import { useState } from "react";
import { useTaskStore } from "./store/useTaskStore";
import { useThemeStore } from "./store/useThemeStore"
import EditModal from "./components/EditModal";

const App = () => {
  const { darkMode, toggleTheme } = useThemeStore();
  const { tasks, addTask, removeTask, editTask} = useTaskStore();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  console.log(tasks);

  return (
    <main className="grid grid-cols-1 place-items-center">
      <div className='w-1/2 h-64 shadow-md items-start rounded-lg m-5 p-3 bg-transparent grid grid-cols-1 gap-3 place-items-center'>
        <div className="flex justify-center items-center gap-1 w-full mt-10">
          <input className="w-full px-3 shadow-sm rounded-md border border-gray-300 h-8" onChange={(e) => setTaskTitle(e.target.value)} type="text" placeholder="New Task. . ." />
          <button onClick={() => addTask(taskTitle)} className="bg-black text-white rounded-lg p-1">Submit</button>
        </div>
        {tasks.map((t) => (
          <div>
            <h1>{t.title} <span onClick={() => setIsOpenEdit(!isOpenEdit)}>edit taks</span></h1>
            {isOpenEdit ? <EditModal id={t.id} currentTitle={t.title} /> : null}
          </div>
        ))}
    </div>
    </main>
  )
}

export default App