import { useContext, useReducer, useState } from "react";
import TasksContext from "./tasksContext";
import useAuth from "../hooks/useAuth";

const useTasks = () => useContext(TasksContext);

const TaskList = () => {
  //use new context hooks
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();

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
