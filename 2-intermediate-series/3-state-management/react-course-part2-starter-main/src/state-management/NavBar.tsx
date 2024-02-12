import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  //const {counter} = useCounterStore();

  const counter = useCounterStore((s) => s.counter);
  console.log('rendering nav...')

  return (
    <nav className="navbar d-flex justify-content-between">
      Count -{counter}
      
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
