// types/components/EditTaskComponent.ts

import type { Task } from "../features/taskTypes";

/**
 * Props for EditTaskComponent:
 * - task: The task to be edited
 * - onClose: Function to call when modal is closed
 * - onSave: Function to call with updated task when saved
 */
export type EditTaskProps = {
  task: Task;
  onClose: () => void;
  onSave: (updatedTask: Task) => void;
};
