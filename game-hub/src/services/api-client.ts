import axios from "axios";

export interface FetchResponse <T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "25c48eddb244415da34ec8a418569304",
  },
});
