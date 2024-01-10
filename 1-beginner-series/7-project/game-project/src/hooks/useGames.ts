import { useState, useEffect } from "react";
import gameService, { GameData } from "../services/gameService";
import { CanceledError } from "axios";

const useGames = () => {
  const [gameData, setGames] = useState<GameData>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { request, cancel } = gameService.getGenericGameData<any>();

    request
      .then((res) => {
        setLoading(false);

        const gameData: GameData = {
          count: res.data.count,
          games: res.data.results,
        };

        setGames(gameData);
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
  return { gameData, error, isLoading, setGames, setError };
};

export default useGames;
