import { Trash } from "lucide-react";
import { useTaskStore } from "../store/useTaskStore"

const TaskCard = ({title, id, completed}: {title: string, id: string, completed: boolean}) => {
    const { toggleTask, removeTask } = useTaskStore();
  return (
    <div className='w-full h-12 flex justify-center rounded-md shadow-md mt-5 bg-transparent'>
        <div className='flex justify-center items-center gap-4'>
            <h1 onClick={() => toggleTask(id)} className={`text-2xl cursor-pointer ${completed ? 'line-through font-normal text-red-700' : 'font-bold'}`}>{title}</h1>
            <button className="bg-slate-800 hover:bg-slate-700 text-white  cursor-pointer p-1 rounded-md" onClick={() => removeTask(id)}><Trash /></button>            
        </div>
    </div>
  )
}

export default TaskCard