import { useState } from "react";
import { useTaskStore } from "./store/useTaskStore";
import { useThemeStore } from "./store/useThemeStore"
import EditTask from "./components/EditTask";
import TaskCard from "./components/TaskCard";
import { PlusCircle, SunMoon } from "lucide-react";

const App = () => {
  const { darkMode, toggleTheme } = useThemeStore();
  const { tasks, addTask } = useTaskStore();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  console.log(tasks);

  return (
    <main className={`${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-100'} grid grid-cols-1 items-center justify-center place-items-center`}>
      <button className="bg-black relative top-10 text-white rounded-lg p-1 scale-75 cursor-pointer" onClick={toggleTheme}><SunMoon /></button>
      <div className="flex justify-center items-center gap-1 lg:w-1/2 w-full p-3 mt-10">
          <input className="w-full px-3 shadow-sm rounded-2xl border border-gray-300 h-10" onChange={(e) => setTaskTitle(e.target.value)} type="text" placeholder="New Task. . ." />
          <button onClick={() => addTask(taskTitle)} className="bg-black text-white rounded-md cursor-pointer  p-1"><PlusCircle /></button>
        </div>
      <div className='lg:w-1/2 w-full h-screen overflow-auto shadow-md items-start rounded-lg m-5 p-3 bg-transparent flex-row gap-3 place-items-center'>
        {tasks.length < 1 ? <h1 className="text-center text-gray-500 opacity-70">There is no task to show.</h1>
        :
        (
          tasks.map((t) => (
            <div className="w-full">
              <TaskCard title={t.title} id={t.id} completed={t.completed} />
              {isOpenEdit ? <EditTask closeEdit={() => setIsOpenEdit(!isOpenEdit)} id={t.id} currentTitle={t.title} /> : null}
            </div>
          ))
        )}
    </div>
    </main>
  )
}

export default App