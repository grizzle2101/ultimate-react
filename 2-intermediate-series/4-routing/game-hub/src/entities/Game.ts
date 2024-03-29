import Genre from "./Genre";
import Platform from "./Platform";

export default interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  publishers: [{ name: string }];
}
