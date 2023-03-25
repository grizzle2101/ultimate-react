import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    //draft is proxy object that records changes (a copy of bugs).
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      {JSON.stringify(bugs)}
      <Button onClick={handleClick}>Test Button</Button>
    </div>
  );
}

export default App;
