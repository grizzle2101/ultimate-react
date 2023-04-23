import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import TableFilter from "./components/TableFilter";

function App() {
  let initialArray: any[] = [];
  //APP manages state shared between components.
  const [items, setItems] = useState(initialArray);
  const [selectedCategory, setSelectedCategory] = useState("");

  const addItem = (data: any) => {
    console.log("adding...", data);
    setItems([...items, data]);
  };

  const removeItem = (i: number) => {
    const filtered = items.filter((item, index) => index !== i);
    setItems(filtered);
  };

  const filterItems = (category: string) => {
    setSelectedCategory(category);
  };

  const visibleExpenses = selectedCategory
    ? items.filter((e) => e.category === selectedCategory)
    : items;

  return (
    <>
      <Form onAdd={addItem} />
      <br />
      <TableFilter onCategorySelection={filterItems} />
      <br />
      <Table expenseItems={visibleExpenses} onRemove={removeItem} />
    </>
  );
}

export default App;
