import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  let initialArray: any[] = [];
  //APP manages state shared between components.
  const [items, setItems] = useState(initialArray);

  const addItem = (data: any) => {
    console.log("adding...", data);
    setItems([...items, data]);
  };

  const removeItem = (i: number) => {
    const filtered = items.filter((item, index) => index !== i);
    setItems(filtered);
  };

  return (
    <>
      <Form onAdd={addItem} />
      <br />
      <Table expenseItems={items} onRemove={removeItem} />
    </>
  );
}

export default App;
