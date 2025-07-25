import "./TaskTitle.css";

interface TaskTitleProps {
  title: string;
  priority?: "high" | "medium" | "low";
  completed?: boolean;
  loading?: boolean;
  animateIn?: boolean;
}

const TaskTitle = ({
  title,
  priority,
  completed = false,
  loading = false,
  animateIn = false,
}: TaskTitleProps) => {
  const getClassName = () => {
    let className = "task-title";

    if (priority) className += ` priority-${priority}`;
    if (completed) className += " completed";
    if (loading) className += " loading";
    if (animateIn) className += " animate-in";

    return className;
  };

  // Add title attribute for full text on hover if text might be truncated
  const titleAttribute = title.length > 50 ? title : undefined;

  return (
    <h3 className={getClassName()} title={titleAttribute}>
      {loading ? "Loading..." : title}
    </h3>
  );
};

export default TaskTitle;
