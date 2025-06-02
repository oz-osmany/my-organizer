import type { Task } from "../types/Task";

export type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: string }
  | { type: "TOGGLE_TASK_STATUS"; payload: string }
  | { type: "EDIT_TASK"; payload: Task };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
        return [...state, action.payload];

    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "TOGGLE_TASK_STATUS":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      );
    case "EDIT_TASK":
        return state.map(task =>
         task.id === action.payload.id ? { ...task, ...action.payload } : task
      );  

    default:
      return state;
  }
};