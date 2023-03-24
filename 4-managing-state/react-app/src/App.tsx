import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Fransisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    //so say we want to update the address..
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 1234 },
    });

    //spread operator is shallow, so this will be problem as the address in memory will be given, not a copy.
    //both will reference the same adddress object in memory, not good!
  };

  return (
    <div>
      {JSON.stringify(customer)}
      <Button onClick={handleClick}>Test Button</Button>
    </div>
  );
}

export default App;
