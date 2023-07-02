import { useState, useEffect } from "react";
import gameService, { Game } from "../services/gameService";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { request, cancel } = gameService.getGamesData<any>();

    request
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => {
      cancel();
    };
  }, []);

  //return state variables for use in component.
  return { games, error, isLoading, setGames, setError };
};

export default useGames;
