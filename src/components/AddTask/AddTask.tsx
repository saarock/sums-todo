import Input from "../Input/Input";
import Button from "../Button/Button";
import { useTaskFeatures } from "../../hooks";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
import type { Task } from "../../types";
import "./AddTask.css";

/**
 * AddTask component allows users to input and add a new task.
 * It handles form input, generates unique task IDs, stores tasks
 * both in local storage and global state via custom hook.
 */
const AddTask = () => {
  // Destructure the addTask function from the custom task hook
  const { addTask } = useTaskFeatures();

  // Local state to hold the current value of the task title input
  const [title, setTitle] = useState<string>("");

  /**
   * Handles adding a new task.
   * - Validates the input
   * - Generates a unique ID
   * - Constructs the Task object
   * - Adds it to both global state and localStorage
   * - Clears the input field afterward
   */
  const addNewTask = useCallback(() => {
    // Prevent adding an empty task
    if (title.trim() === "") {
      alert("Title is required!");
      return;
    }

    // Create a new task object
    const newTask: Task = {
      completed: false,
      id: v4(), // Generate a unique ID for the task
      title,
    };

    // Add the task to global state
    addTask(newTask);
    // Reset the input field after adding
    setTitle("");
  }, [title]);

  return (
    <div className="add-task-container">
      {/* Controlled input for task title */}
      <Input
        className="add-task-input"
        placeholder="Enter task title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      {/* Add Task button triggers the addNewTask logic */}
      <Button className="add-task-button" onClick={addNewTask}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
