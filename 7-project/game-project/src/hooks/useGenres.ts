import { useState, useEffect } from "react";
import genreService, { GenreData } from "../services/genreService";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genreData, setGenresData] = useState<GenreData>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { request, cancel } = genreService.getGenericGameData<GenreData>();

    request
      .then((res) => {
        setLoading(false);
        setGenresData(res.data);
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
  return { genreData, error, isLoading, setGenres: setGenresData, setError };
};

export default useGenres;
