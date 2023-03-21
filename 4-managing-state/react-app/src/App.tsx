import { useState } from "react";
import "./App.css";

function App() {
  //state
  const [isVisible, setVisability] = useState(false);
  const [isApproved, setApproved] = useState(true);

  const dummyOnClick = () => {
    setVisability(true);
    console.log("Visability - ", isVisible);
  };

  return (
    <div>
      <button onClick={dummyOnClick}>Show</button>
    </div>
  );
}

export default App;
