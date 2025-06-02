import React, { createContext, useReducer, useContext, useEffect } from "react";
import type { Task } from "../types/Task";
import { taskReducer, type Action } from "../reducers/TaskReducer";

type TaskContextType = {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTasks = localStorage.getItem("tasks");
  const initialTasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

  const [tasks, dispatch] = useReducer( taskReducer, initialTasks );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
