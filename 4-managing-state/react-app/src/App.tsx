import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["one", "two", "three"]);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <div>
        <NavBar cartItemsCount={cartItems.length}></NavBar>
        <Cart cartItems={cartItems} onClear={clearCart}></Cart>
      </div>
    </>
  );
}

export default App;
