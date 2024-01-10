import { useState, useEffect } from "react";
import gameService, { GameData } from "../services/gameService";
import { CanceledError } from "axios";

const useGames = () => {
  const [gameData, setGameData] = useState<GameData>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getGenericGameData<any>();

    request
      .then((res) => {
        setLoading(false);

        const gameData: GameData = {
          count: res.data.count,
          games: res.data.results,
        };

        setGameData(gameData);
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
  return { gameData, error, isLoading, setGameData, setError };
};

export default useGames;
