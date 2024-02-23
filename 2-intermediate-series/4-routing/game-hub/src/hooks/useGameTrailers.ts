import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { FetchResponse } from "../services/api-client";

export interface Trailer {
  id: string;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useGameTrailers = (id: number) => {
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", id],
    queryFn: () => gameService.getGameTrailers(id),
  });
};

export default useGameTrailers;
