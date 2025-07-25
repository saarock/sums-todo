import React, { useEffect, useState } from "react";
import "./EditTaskComponent.css";
import type { EditTaskProps } from "../../types/components/EditTaskComponent";
import Input from "../Input/Input";
import Button from "../Button/Button";

/**
 * EditTaskComponent allows editing a single task's title and completion status.
 *
 * Props:
 * - task: Task object to edit
 * - onClose: function to close the modal
 * - onSave: function to save the updated task
 */
const EditTaskComponent: React.FC<EditTaskProps> = ({
  task,
  onClose,
  onSave,
}) => {
  // Local state for task title
  const [title, setTitle] = useState("");

  // Local state for task completion status
  const [completed, setCompleted] = useState(false);

  // When the task prop changes, populate local state with its data
  useEffect(() => {
    setTitle(task.title || "");
    setCompleted(task.completed || false);
  }, [task]);

  /**
   * Handles the save button click.
   * Creates an updated task object and passes it to the onSave handler.
   */
  const handleSave = () => {
    const updated = { ...task, title, completed };
    onSave(updated);
  };

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-modal">
        <h2 className="edit-task-title">Edit Task</h2>

        {/* Input for editing task title */}
        <label className="edit-task-label">Title:</label>
        <Input
          type="text"
          className="edit-task-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Checkbox for marking task as completed */}
        <div className="edit-task-checkbox-group">
          <Input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            id="completedCheckbox"
          />
          <label htmlFor="completedCheckbox">Completed</label>
        </div>

        {/* Action buttons: Cancel and Save */}
        <div className="edit-task-actions">
          <Button className="edit-task-button cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button className="edit-task-button save" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskComponent;
