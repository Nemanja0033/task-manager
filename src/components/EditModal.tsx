import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore"

const EditModal = ({id, currentTitle,}: {id: string, currentTitle: string}) => {
    const { editTask } = useTaskStore();
    const [newTitle, setNewTitle] = useState('');

    return(
        <div className="w-1/2 h-auto bg-amber-50 rounded-lg shadow-md">
          <input type="text" defaultValue={currentTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button onClick={() => editTask(id, newTitle)}>change title</button>
        </div>
  )
}

export default EditModal