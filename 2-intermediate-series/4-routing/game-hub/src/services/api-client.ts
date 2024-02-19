import axios, { AxiosRequestConfig } from "axios";
import { Game } from "../entities/Game";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0778e354b2c42f190a73c8b9ec9d1b6",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  //note: arrow syntax v important to share THIS.
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };


  getGame = (gameSlug: string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + gameSlug)
      .then((res) => res.data);
  };
}

export default APIClient;
