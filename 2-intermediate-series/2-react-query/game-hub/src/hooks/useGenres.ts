import { useQuery } from "@tanstack/react-query";
import { GENRE_CACHE_KEY } from "../constants";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const getGenres = () => {
  return apiClient
    .get<FetchResponse<Genre>>("/genres")
    .then((res: any) => res.data);
};

const useGenres = () => {
  return useQuery({
    queryKey: GENRE_CACHE_KEY,
    queryFn: getGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
