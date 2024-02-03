import axios from "axios";
import * as process from "process";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const serverApi = axios.create({
  baseURL: `http://www.omdbapi.com`,
});

serverApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: process.env.APIKEY,
  };
  return config;
});
