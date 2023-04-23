import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <select
        className="form-select"
        onChange={(event) => {
          console.log("event - ", event);
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">HouseHold</option>
      </select>
      <ProductList category={category} />
      <div>
        <input type="text" className="form-control" />
      </div>
    </>
  );
}

export default App;
