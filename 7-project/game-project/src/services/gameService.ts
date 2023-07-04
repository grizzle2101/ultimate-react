import create from "./http-service";

export interface GameData {
  count: number;
  games: Game[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: any;
}

export default create("/games");
