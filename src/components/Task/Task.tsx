// Import types and libraries
import type React from "react";
import type { TaskProps, Task as TaskType } from "../../types"; // TaskProps = props passed to Task component, TaskType = individual task object
import { Trash2, Pencil, CheckCircle, CircleDashed } from "lucide-react"; // Icon components from lucide-react
import Button from "../Button/Button";
import { useTaskFeatures } from "../../hooks"; // Custom hook to manage task logic
import TaskTitle from "../TaskTitle/TaskTitle";
import TaskStatus from "../TaskStatus/TaskStatus";
import EditTaskComponent from "../EditTaskComponent/EditTaskComponent";
import { useCallback, useState } from "react";
import "./Task.css";

/**
 * Task Component
 * 
 * Renders a list of tasks with action buttons: mark as done/pending, edit, and delete.
 * Also allows inline editing through an EditTaskComponent modal.
 */
const Task: React.FC<TaskProps> = ({ tasks, from }) => {
  // Destructure task utility functions from custom hook
  const { changeStatus, deleteTasks, editTaskF } = useTaskFeatures();

  // State to track task currently being edited
  const [editTaskData, setEditTaskData] = useState<TaskType | null>(null);

  // Handler to open the edit modal with selected task
  const handleEditTask = useCallback((task: TaskType) => {
    setEditTaskData(task);
  }, []);

  // Save handler when user submits the edited task
  const handleSave = (updatedTask: TaskType) => {
    if (!updatedTask.id || !updatedTask.title) {
      alert("Title and id are required!");
      return;
    }

    // Call edit function with updated task
    editTaskF({
      id: updatedTask.id!,
      title: updatedTask.title!,
      completed: updatedTask.completed!,
    });

    console.log("Updated Task:", updatedTask);

    // Close the modal
    setEditTaskData(null);
  };

  return (
    <>
      <div className="tasks-grid">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-content">
              {/* Task title and status */}
              <TaskTitle title={task.title!} />
              <TaskStatus completed={task.completed!} />

              {/* Task owner info */}
              <p className="user-info">
                <strong>User ID:</strong> {task.userId}
              </p>
            </div>

            {/* Action buttons for status toggle, edit, and delete */}
            <div className="task-actions">
              {/* Toggle completed/pending status */}
              <Button
                onClick={() => changeStatus(task.id!)}
                disabled={from === "server"} // Disable if fetched from server
                style={{
                  cursor: from === "server" ? "not-allowed" : "pointer",
                }}
                className={`action-btn status-btn ${
                  task.completed ? "status-pending" : "status-done"
                }`}
              >
                {/* Toggle icon and label */}
                {task.completed ? (
                  <CircleDashed size={16} />
                ) : (
                  <CheckCircle size={16} />
                )}
                {task.completed ? "Mark Pending" : "Mark Done"}
              </Button>

              {/* Edit button */}
              <Button
                disabled={from === "server"}
                style={{
                  cursor: from === "server" ? "not-allowed" : "pointer",
                }}
                onClick={() => handleEditTask(task)}
                className="action-btn edit-btn"
              >
                <Pencil size={16} /> Edit
              </Button>

              {/* Delete button */}
              <Button
                disabled={from === "server"}
                style={{
                  cursor: from === "server" ? "not-allowed" : "pointer",
                }}
                onClick={() => deleteTasks(task.id!)}
                className="action-btn delete-btn"
              >
                <Trash2 size={16} /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit modal (only shows when a task is being edited) */}
      {editTaskData && (
        <EditTaskComponent
          task={editTaskData}
          onClose={() => setEditTaskData(null)} // Close modal
          onSave={handleSave} // Save updated task
        />
      )}
    </>
  );
};

export default Task;
