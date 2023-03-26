import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";
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
