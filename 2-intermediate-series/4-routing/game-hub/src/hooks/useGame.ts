import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import Game from "../entities/Game";

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => gameService.getGame(slug),
  });
};

export default useGame;
