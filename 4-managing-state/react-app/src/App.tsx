import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: drink.price + 1 });
  };

  return (
    <div>
      {drink.price}
      <Button onClick={handleClick}>Test Button</Button>
    </div>
  );
}

export default App;
