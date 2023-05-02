import axios, { AxiosError, CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  //where we configure server settings
  //headers: {'api-key': '...'}
});

export { CanceledError };
