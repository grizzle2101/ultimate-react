import create from "./http-service";

//todo - refactor data for Genre & Games.
export interface GenreData {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default create("/genres");
