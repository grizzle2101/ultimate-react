import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import produce from "immer";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "El Diablo",
    toppings: ["pepperoni", "sweetcorn", "pineapples"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });

  //Excercise 1 - Simple Update
  const handleGame = () => {
    //setGame({ ...game, player: { name: "Bob" } });

    //immer version
    setGame(
      produce((draft) => {
        draft.player.name = "New Name";
      })
    );
  };

  //Excercise 2 - update array
  const handlePizza = () => {
    //setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });

    setPizza(
      produce((draft) => {
        draft.toppings.push("Forbidden topping");
      })
    );
  };

  //Excercise 3 - update specific object
  const handleCart = () => {
    /*
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    */

    setCart(
      produce((draft) => {
        //pick item, then update quantity
        let selected = draft.items.find((item) => item.id === 2);
        if (selected) selected.quantity = selected.quantity + 1;
      })
    );
  };

  return (
    <>
      <h1>Excercise 1 - Simple Update:</h1>
      <div>{JSON.stringify(game)}</div>
      <Button onClick={handleGame}>Update Game</Button>

      <br />
      <h1>Excercise 2 - Update Array:</h1>
      <div>{JSON.stringify(pizza)}</div>
      <Button onClick={handlePizza}>Add Topping</Button>

      <br />
      <h1>Excercise 3 - Update Speicific Object:</h1>
      <div>{JSON.stringify(cart)}</div>
      <Button onClick={handleCart}>Update Cart</Button>
    </>
  );
}

export default App;
