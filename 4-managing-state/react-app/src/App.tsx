import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {JSON.stringify(bugs)}
      <Button onClick={handleClick}>Test Button</Button>
    </div>
  );
}

export default App;
