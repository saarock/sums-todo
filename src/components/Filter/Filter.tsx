import { useEffect, useState } from "react";
import { useTaskFeatures } from "../../hooks";
import "./Filter.css";

/**
 * Filter Component
 * 
 * Provides a dropdown to filter tasks based on their completion status.
 * It triggers a filtering function from the task hook whenever the selection changes.
 */
const Filter = () => {
  // Local state to hold the current filter selection
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  // Custom hook to access the task filtering function
  const { filterTask } = useTaskFeatures();

  /**
   * useEffect triggers whenever `filter` state changes.
   * It calls the `filterTask` function to update the visible tasks.
   */
  useEffect(() => {
    if (!filter) return;
    filterTask(filter);
  }, [filter]);

  return (
    <div className="filter-container">
      {/* Dropdown to choose task filter type */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as "all" | "completed" | "pending")}
        className="filter-select"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default Filter;
