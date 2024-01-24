import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { PLATFORM_CACHE_KEY } from "../constants";
import { FetchResponse } from "../services/api-client";
import platformsService, { Platform } from "../services/platform-service";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: PLATFORM_CACHE_KEY,
    queryFn: platformsService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
