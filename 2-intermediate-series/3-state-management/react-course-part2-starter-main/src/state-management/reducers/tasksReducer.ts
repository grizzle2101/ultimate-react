/*
interface Action {
  type: "ADD" | "DELETE";
}
*/
export interface Task {
  id: number;
  title: string;
  user: string;
}

//Attatching payload using the interface
export interface AddTask {
  type: "ADD";
  task: Task;
}

export interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

//union of either types
export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      //note the compiler knows what properties are available for ADD & Delete, v cool.
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default taskReducer;
