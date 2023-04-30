import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  interface User {
    id: number;
    name: string;
  }

  useEffect(() => {
    //part of browser
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    //cleanup function
    return () => {
      controller.abort();
    };
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
