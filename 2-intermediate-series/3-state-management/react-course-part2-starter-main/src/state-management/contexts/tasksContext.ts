import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

//step 2 - create context
//context is like a truck, containing our data.
interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

//we use () to set the initial value, which is most of the times empty.
//we can use null TasksContextType | null>(null) or like below.
const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
