import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../types";

/**
 * Custom hook to calculate and return statistics about tasks:
 * - pending tasks count
 * - completed tasks count
 * - filtered tasks count based on current filter
 * - total tasks count
 */
const useStats = () => {
  // Access tasks and the active filter from the Redux store
  const { tasks, filter } = useSelector((state: RootState) => state.task);

  // Local state to hold the counts
  const [pendingCount, setPendingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [filteredCount, setFilteredCount] = useState(0);

  // Recalculate stats whenever tasks or filter changes
  useEffect(() => {
    // Count tasks that are not completed
    const pending = tasks.filter((task) => !task.completed).length;

    // Count tasks that are completed
    const completed = tasks.filter((task) => task.completed).length;

    // Determine filtered task count based on current filter
    let filtered = tasks.length;
    if (filter === "pending") {
      filtered = pending;
    } else if (filter === "completed") {
      filtered = completed;
    }

    // Update local state
    setPendingCount(pending);
    setCompletedCount(completed);
    setFilteredCount(filtered);
  }, [tasks, filter]);

  // Return all task statistics
  return {
    pendingCount,
    completedCount,
    filteredCount,
    totalCount: tasks.length,
  };
};

export default useStats;
