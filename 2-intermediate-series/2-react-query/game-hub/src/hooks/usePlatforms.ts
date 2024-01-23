import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { PLATFORM_CACHE_KEY } from "../constants";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const getPlatforms = () => {
  return apiClient
    .get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then((res: any) => res.data);
};

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: PLATFORM_CACHE_KEY,
    queryFn: getPlatforms,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
