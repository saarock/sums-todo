// src/utils/LocalStore.ts
import { TASK_CACHE_KEY } from "../constant";
import type { Task } from "../types";

class LocalStore {
  // Save tasks array to localStorage
  static saveTasks(tasks: Task[]) {
    localStorage.setItem(TASK_CACHE_KEY, JSON.stringify(tasks));
  }

  // Load tasks from localStorage
  static loadTasks(): Task[] {
    const data = localStorage.getItem(TASK_CACHE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // Add a task
  static addTask(task: Task) {
    const tasks = this.loadTasks();
    tasks.unshift(task); // prepend for latest-first
    this.saveTasks(tasks);
  }

  // Delete a task by id
  static deleteTask(id: string | number) {
    const tasks = this.loadTasks().filter((task) => task.id !== id);
    this.saveTasks(tasks);
  }

  // Update a task
  static updateTask(updatedTask: Task) {
    const tasks = this.loadTasks().map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.saveTasks(tasks);
  }

  // Toggle task status
  static toggleTaskStatus(id: string | number) {
    const tasks = this.loadTasks().map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.saveTasks(tasks);
  }

  // Clear all tasks
  static clearTasks() {
    localStorage.removeItem(TASK_CACHE_KEY);
  }
}

export default LocalStore;
