import { useState } from "react";
import type { Task } from "../types/Task";

interface Props {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onCancel: () => void;
}

const EditTaskForm = ({ task, onSave, onCancel }: Props) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState<"low" | "medium" | "high">(task.priority);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...task, title, description, priority });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button type="submit">💾 Save</button>
        <button type="button" onClick={onCancel}>❌ Cancel</button>
      </div>
    </form>
  );
};

export default EditTaskForm;
