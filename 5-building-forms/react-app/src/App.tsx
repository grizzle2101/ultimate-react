import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  return (
    <>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
