import { useState } from "react";
import { useTaskContext } from "../context/TaskProvider";
import type { Task } from "../types/Task";
// import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [responsible, setResponsible] = useState("");
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");


  const { dispatch } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
        id: crypto.randomUUID(),//id: uuidv4(),
        title,
        description,
        dueDate,
        responsible,
        note,
        priority ,
        status: "pending",
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
     // limpiar campos
    setTitle("");
    setDescription("");
    setDueDate("");
    setResponsible("");
    setNote("");
    setPriority("low")
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <label>
            Priority:
            <select value={priority} onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </label>
        <input type="text" value={responsible} onChange={e => setResponsible(e.target.value)} placeholder="Responsible" />
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Additional notes" />
        <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
