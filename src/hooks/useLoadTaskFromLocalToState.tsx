import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LocalStore from "../utils/localStore";
import { setTask } from "../features/tasks/taskApi";


// Hook that helps to load all the cache task to the react state
const useLoadTaskFromLocalToState = () => {
  const dispatch = useDispatch();

  // Load tasks from localStorage on initial mount and dispatch to store
  useEffect(() => {
    const cachedTasks = LocalStore.loadTasks();
    [...cachedTasks].reverse().forEach((task) => dispatch(setTask(task)));
  }, [dispatch]);
};

export default useLoadTaskFromLocalToState;
