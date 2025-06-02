import { useTaskContext } from "../context/TaskProvider";
import TaskCard from "./TaskCard";

const CompletedTaskList = () => {
  const { tasks } = useTaskContext();
  const completed = tasks.filter(task => task.status === "completed");

  return (
    <div className="task-grid">
      {completed.map(task => <TaskCard key={task.id} task={task} />)}
    </div>
  );
};
export default CompletedTaskList;