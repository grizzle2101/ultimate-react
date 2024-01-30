import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { GENRE_CACHE_KEY } from "../constants";
import genres from "../data/genres";
import genreService from "../services/genre-service";

const useGenres = () => {
  return useQuery({
    queryKey: GENRE_CACHE_KEY,
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
