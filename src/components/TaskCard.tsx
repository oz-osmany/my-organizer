import React, { useState } from "react";
import type { Task } from "../types/Task";
import { useTaskContext } from "../context/TaskProvider";
import EditTaskForm from "./EditTaskForm";
import "../styles/TaskCard.css";

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
    
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);

  const toggleStatus = () =>
    dispatch({ type: "TOGGLE_TASK_STATUS", payload: task.id });

  const removeTask = () =>
    dispatch({ type: "REMOVE_TASK", payload: task.id });
  
  const priorityClass = `card-priority-${task.priority}`;
  return (
    <div className={`task-card ${priorityClass}`}>        
        {isEditing ? (
             <EditTaskForm
    task={task}
    onSave={(updatedTask) => {
      dispatch({ type: "EDIT_TASK", payload: updatedTask });
      setIsEditing(false);
    }}
    onCancel={() => setIsEditing(false)}
  />            
        ) : (
  // Mostrar datos normales aquí
            <div className="task-card-int">
          <div className="int">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div><small>Due: {task.dueDate}</small></div>
              <div><small>Responsible: {task.responsible}</small></div>
              {task.note && <p><em>📌 {task.note}</em></p>}
          </div>
            <div className="actions">
                <button onClick={toggleStatus}>
                {task.status === "pending" ? "✅" : "↩️ Undo"}
                </button>
                <button onClick={() => setIsEditing(true)}>✏️</button>
                <button onClick={removeTask}>🗑️</button>
            </div>
        </div> 
)}
    </div>
  );
};

export default TaskCard;
//<div className={`task-card ${task.status === "completed" ? "done" : ""}`}></div>