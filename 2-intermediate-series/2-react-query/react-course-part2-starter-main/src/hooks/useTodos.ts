import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () => {
    console.log("getting...");
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };

  return useQuery<Todo[], Error>({
    //problem here, mutating working on different collection...
    queryKey: ["todos"],
    queryFn: fetchTodos,
    //staleTime: 10 * 1000,
  });
};

export default useTodos;
