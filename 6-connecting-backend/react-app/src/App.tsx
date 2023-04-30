import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  interface User {
    id: number;
    name: string;
  }

  //returns a promise, result of async operation.
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data); //update state w response.
      });
  }, []); //empty dependency - super important to avoid bombarding the server.

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </ul>
  );
}

export default App;
