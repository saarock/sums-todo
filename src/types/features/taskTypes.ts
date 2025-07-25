export interface Task {
  id: number | null | string;
  title: string | null;
  completed: boolean | null;
  userId?: number | null;
}

export type FilterTypes = "all" | "completed" | "pending";

// Define the shape of the local task state
export interface TaskState {
  tasks: Task[]; // Array of all tasks (cached locally)
  filter: FilterTypes; // Current filter selection (e.g., all, completed, pending)
}
export interface RootState {
  task: TaskState;
}
