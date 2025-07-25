
const TaskStatus = ({completed}: {completed: boolean}) => {
  return (
    <>
      <p className="text-sm text-gray-600 mb-1">
        <strong>Status:</strong>{" "}
        <span
          className={`font-medium ${
            completed ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {completed ? "Completed" : "Pending"}
        </span>
      </p>
    </>
  );
};

export default TaskStatus;
