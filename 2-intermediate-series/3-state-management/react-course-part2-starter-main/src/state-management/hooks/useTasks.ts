import { useContext } from "react";
import TasksContext from "../contexts/tasksContext";

//create hook to access context
const useTasks = () => useContext(TasksContext);

export default useTasks;
