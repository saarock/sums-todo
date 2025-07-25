// Imports required React and Redux utilities and types
import { useEffect, useState } from "react";
import { useGetTasksQuery } from "../features/tasks/taskApi";
import { useSelector } from "react-redux";
import type { RootState, Task } from "../types";

/**
 * Custom hook to load tasks from the server using RTK Query.
 * It manages pagination, filtering, and returns the loading state.
 */
const useLoadTaskFromServer = () => {
  // Local state to manage pagination and filtered tasks
  const [page, setPage] = useState<number>(1);
  const [tasks, setTasks] = useState<Task[] | null>(null);

  // Fetch tasks using RTK Query with pagination
  const { data, isLoading, isError, refetch } = useGetTasksQuery({ page });

  // Get current filter state from Redux
  const { filter } = useSelector((state: RootState) => state.task);

  // Update tasks list based on the selected filter and fetched data
  useEffect(() => {
    if (!filter || !data) return;

    if (filter === "all") {
      // Show all tasks
      setTasks(data);
    } else if (filter === "completed") {
      // Filter completed tasks
      const completedServerTask = data.filter(
        (currentTask) => currentTask.completed
      );
      setTasks(completedServerTask);
    } else {
      // Filter pending/incomplete tasks
      const pendingServerTask = data.filter(
        (currentTask) => !currentTask.completed
      );
      setTasks(pendingServerTask);
    }
  }, [filter, data]); // Re-run when filter or data changes

  // Return necessary data and functions to the component using this hook
  return {
    tasks,
    isLoading,
    isError,
    refetch,
    setPage, // Allows external control over pagination
  };
};

export default useLoadTaskFromServer;
