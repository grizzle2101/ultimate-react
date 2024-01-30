import { useQuery } from "@tanstack/react-query";
import { GENRE_CACHE_KEY } from "../constants";
import genres from "../data/genres";
import genreService from "../services/genre-service";

const useGenres = () => {
  return useQuery({
    queryKey: GENRE_CACHE_KEY,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
