import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0778e354b2c42f190a73c8b9ec9d1b6",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
