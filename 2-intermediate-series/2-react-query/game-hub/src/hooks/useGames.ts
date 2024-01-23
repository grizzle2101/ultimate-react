import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { GAME_CACHE_KEY } from "../constants";

//duplicate...
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const getGames = (gameQuery: GameQuery) => {
  return apiClient
    .get<FetchResponse<Game>>("/games", {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id, //moshes fix (parent_platforms not platform)
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    })
    .then((res: any) => res.data);
};

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [GAME_CACHE_KEY, gameQuery],
    queryFn: () => getGames(gameQuery),
  });
};

export default useGames;