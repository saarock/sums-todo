import { Loading, Task, TaskHeader } from "../../components";
import { useLoadTaskFromLocalToState, useTaskFeatures } from "../../hooks";
import useLoadTaskFromServer from "../../hooks/useLoadTaskFromServer";

const Tasks = () => {
    useLoadTaskFromLocalToState();
  // Load tasks from server using custom hook
  const { tasks, isLoading } = useLoadTaskFromServer();

  // Access locally managed and filtered tasks
  const { filteredTasks } = useTaskFeatures();



  // Show loading indicator while server tasks are being fetched
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* Header section with filter buttons or stats */}
      <TaskHeader />

      {/* Display local tasks based on applied filter */}
      {filteredTasks.length > 0 ? (
        <Task tasks={filteredTasks} from="local" />
      ) : (
        <p className="text-center text-gray-500">No Local tasks found</p>
      )}

      {/* Spacer between task sections */}
      <div className="h-5"></div>

      {/* Display tasks fetched from the server */}
      {tasks && tasks.length > 0 ? (
        <Task tasks={tasks} from="server" />
      ) : (
        <p className="text-center text-gray-500">No Server tasks found</p>
      )}
    </div>
  );
};

export default Tasks;
