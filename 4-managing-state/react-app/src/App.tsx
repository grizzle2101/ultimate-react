import { useState } from "react";
import "./App.css";

function App() {
  //state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [person, setPerson] = useState({ firstName, lastName });
  const [isLoading, setLoading] = useState(false);

  const dummyOnClick = () => {
    console.log("Visability - ");
  };

  return (
    <div>
      <button onClick={dummyOnClick}>Show</button>
    </div>
  );
}

export default App;
