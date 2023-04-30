import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  interface User {
    id: number;
    name: string;
  }

  //async not allowed?
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
