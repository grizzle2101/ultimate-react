import { useContext } from "react";
import TasksContext from "./tasksContext";
import useAuthStore from "../auth/store";
const useTasks = () => useContext(TasksContext);

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  //update components to use store.
  const { user } = useAuthStore();

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now(), user },
          });
        }}
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">
              {task.title} - Creator: {task.user || "n/a"}
            </span>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                dispatch({ type: "DELETE", taskId: task.id });
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
