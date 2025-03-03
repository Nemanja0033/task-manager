import { useTaskStore } from "../store/useTaskStore"

const TaskCard = ({title, id, completed, toggleEdit}: {title: string, id: string, completed: boolean, toggleEdit: any}) => {
    const { toggleTask, removeTask } = useTaskStore();
  return (
    <div className='w-full h-12 flex justify-center rounded-md shadow-md bg-transparent'>
        <div className='flex justify-center items-center gap-1'>
            <h1 onClick={() => toggleTask(id)} className={`text-2xl ${completed ? 'line-through font-normal' : 'font-bold'}`}>{title}</h1>
            <button className="bg-black text-white cursor-pointer p-1 rounded-md" onClick={toggleEdit}>Edit</button>
            <button className="bg-red-500 text-white cursor-pointer p-1 rounded-md" onClick={() => removeTask(id)}>Delete</button>            
        </div>
    </div>
  )
}

export default TaskCard