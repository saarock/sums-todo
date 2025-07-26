import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { FilterTypes, RootState, Task } from "../types";
import {
  changeStatusOfTheTask,
  deleteTaskById,
  editTask,
  setFilter,
  setTask,
} from "../features/tasks/taskApi";
import LocalStore from "../utils/localStore";

/**
 * Custom hook for handling task-related features:
 * - Add, delete, update tasks
 * - Toggle completion status
 * - Filter tasks
 * - Sync with local storage
 */
const useTaskFeatures = () => {
  const dispatch = useDispatch();

  // Access the task list and current filter from the Redux store
  const { tasks, filter } = useSelector((state: RootState) => state.task);

  /**
   * Add a new task to store and localStorage
   */
  const addTask = useCallback(
    (task: Task) => {
      dispatch(setTask(task));
      LocalStore.addTask(task);
    },
    [dispatch]
  );

  /**
   * Delete a task by its ID from both store and localStorage
   */
  const deleteTasks = useCallback(
    (id: string | number) => {
      dispatch(deleteTaskById(id));
      LocalStore.deleteTask(id);
    },
    [dispatch]
  );

  /**
   * Change the current task filter (all | pending | completed)
   */
  const filterTask = useCallback(
    (type: FilterTypes) => {
      dispatch(setFilter(type));
    },
    [dispatch]
  );

  /**
   * Toggle the completed status of a task
   */
  const changeStatus = useCallback(
    (id: string | number) => {
      dispatch(changeStatusOfTheTask(id));
      LocalStore.toggleTaskStatus(id);
    },
    [dispatch]
  );

  /**
   * Get the filtered list of tasks based on the current filter
   * Memoized for performance optimization
   */
  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed).reverse();
    }
    if (filter === "pending") {
      return tasks.filter((task) => !task.completed).reverse();
    }
    return [...tasks].reverse(); // default: 'all'
  }, [tasks, filter]);

  /**
   * Edit a task's title and completion status
   */
  const editTaskF = useCallback(
    ({
      id,
      title,
      completed,
    }: {
      id: string | number;
      title: string;
      completed: boolean;
    }) => {
      dispatch(editTask({ id, title, completed }));
      LocalStore.updateTask({completed,id,title});
    },
    [] // dispatch is stable, so not needed in dependency
  );

  // Return all task functionalities and values
  return {
    addTask,
    allTasks: tasks,
    filteredTasks,
    deleteTasks,
    filterTask,
    changeStatus,
    currentFilter: filter,
    editTaskF,
  };
};

export default useTaskFeatures;
