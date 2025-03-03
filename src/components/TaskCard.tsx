
const TaskCard = ({title, completed, toggleEdit}: {title: string, id: string, completed: boolean, toggleEdit: any}) => {
  return (
    <div className='w-full h-12 flex justify-center rounded-md shadow-md bg-transparent'>
        <div className='flex justify-center items-center gap-1'>
            <h1 className={`text-2xl ${completed ? 'line-through font-normal' : 'font-bold'}`}>{title}</h1>
            <button onClick={toggleEdit}>Edit</button>
        </div>
    </div>
  )
}

export default TaskCard