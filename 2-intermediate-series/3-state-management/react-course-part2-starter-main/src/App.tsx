import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import LoginPage from "./routing/LoginPage";
import loginReducer from "./state-management/reducers/loginReducer";
import LoginContext from "./state-management/contexts/loginContext";

function App() {
  //1 - raise state
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(loginReducer, "");
  //2 - create context
  //3 - wrap components in context

  return (
    <LoginContext.Provider value={{ user, authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
