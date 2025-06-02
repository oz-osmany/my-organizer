import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskProvider";
import TaskCard from "./TaskCard";

const PendingTaskList = () => {
  const { tasks } = useTaskContext();
  
    const getInitialPriorityFilter = (): "all" | "low" | "medium" | "high" => {
    return (localStorage.getItem("priorityFilter") as any) || "all";
    };

    const getInitialSort = (): boolean => {
    return localStorage.getItem("sortByPriority") === "true";
    };

    const [priorityFilter, setPriorityFilter] = useState(getInitialPriorityFilter);
    const [sortByPriority, setSortByPriority] = useState(getInitialSort);



    useEffect(() => {
    localStorage.setItem("priorityFilter", priorityFilter);
    }, [priorityFilter]);

    useEffect(() => {
    localStorage.setItem("sortByPriority", sortByPriority.toString());
    }, [sortByPriority]);



  const pending = tasks.filter(task => task.status === "pending").reverse();

  const getPriorityValue = (priority: string) => {
  switch (priority) {
    case "high":
      return 3;
    case "medium":
      return 2;
    case "low":
      return 1;
    default:
      return 0;
  }
};

let filteredTasks = tasks.filter(task => task.status === "pending");

if (priorityFilter !== "all") {
  filteredTasks = filteredTasks.filter(task => task.priority === priorityFilter);
}

if (sortByPriority) {
  filteredTasks = filteredTasks.sort(
    (a, b) => getPriorityValue(b.priority) - getPriorityValue(a.priority)
  );
}


  return (
    <div>
        <div className="task-controls">
        <label>
            Filter by priority:
            <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value as any)}>
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            </select>
        </label>

        {/* <button onClick={() => setSortByPriority(prev => !prev)}>
            {sortByPriority ? "Clear Sort" : "Sort by Priority"}
        </button> */}
        </div>

        <div className="task-grid">
          {filteredTasks.map(task => <TaskCard key={task.id} task={task} />)}
        </div>
    </div>
  );
};
export default PendingTaskList;