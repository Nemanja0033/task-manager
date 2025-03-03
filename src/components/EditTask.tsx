import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore"

const EditTask = ({id, currentTitle, closeEdit}: {id: string, currentTitle: string, closeEdit: any}) => {
    const { editTask } = useTaskStore();
    const [newTitle, setNewTitle] = useState('');

    const handleTaskChange = () => {
      editTask(id, newTitle);
      closeEdit();
    }

    return(
        <div className="w-full h-auto flex justify-center mt-2 gap-1">
          <input className="w-full shadow-md border rounded-md border-gray-300" type="text" defaultValue={currentTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button className="bg-black text-white p-1 cursor-pointer rounded-md" onClick={handleTaskChange}>Change Task</button>
        </div>
  )
}

export default EditTask