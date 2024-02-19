import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { PLATFORM_CACHE_KEY } from "../constants";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformsService from "../services/platform-service";
import { Platform } from "../entities/Platform";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: PLATFORM_CACHE_KEY,
    queryFn: platformsService.getAll,
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
