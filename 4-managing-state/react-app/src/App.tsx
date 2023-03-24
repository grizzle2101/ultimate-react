import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //so say we want to update the address..
    //setTags([tags.push('newOne')]);//tags.push - NO

    //Add
    setTags([...tags, "newOne"]);

    //remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //update
    //method 1 - copy array
    //methood 2 - map
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      {JSON.stringify(tags)}
      <Button onClick={handleClick}>Test Button</Button>
    </div>
  );
}

export default App;
