import { useQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/game-service";

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () =>
      gameService.getGame(slug),
  });
};

export default useGame;
