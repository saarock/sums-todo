// Import necessary child components and styles
import AddTask from "../AddTask/AddTask";
import Filter from "../Filter/Filter";
import "./TaskHeader.css";

/**
 * TaskHeader Component
 * 
 * This component is responsible for rendering the top section of the task management UI.
 * It contains:
 *  - A filter dropdown to filter tasks (e.g., by completion status).
 *  - An "Add Task" button/component to add new tasks.
 */
const TaskHeader = () => {
  return (
    <div className="task-header">
      {/* Filter Section */}
      <div className="task-header-filter">
        <span className="task-header-filter-label">Filter:</span>
        <Filter />
      </div>

      {/* Add Task Button */}
      <div className="task-header-add">
        <AddTask />
      </div>
    </div>
  );
};

export default TaskHeader;
