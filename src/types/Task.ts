export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  responsible: string;
  note: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "completed";
}