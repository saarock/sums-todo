import type { Task } from "../features/taskTypes";

export type From = "server" | "local";

export type TaskProps = {
  tasks: Task[];
  from: From;
};