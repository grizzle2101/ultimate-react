import APIClient from "./api-client";
import { Platform } from "./platform-service";

export interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
}

export default new APIClient<Game>("/games");
