import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { FetchResponse } from "../services/api-client";

export interface Screenshot {
  id: string;
  image: string;
  hidden: boolean;
  width: number;
  height: number;
}

const useGameTrailers = (id: number) => {
  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", id],
    queryFn: () => gameService.getGameScreenshots(id),
  });
};

export default useGameTrailers;
