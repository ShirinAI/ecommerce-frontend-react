import axios from "axios";
import { getToken } from "./AuthService";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const REST_API_BASE_URL = "http://localhost:8080/products/drinks";
export const listDrinks = () => axios.get(REST_API_BASE_URL);
export const saveDrink = (drink) => axios.post(REST_API_BASE_URL, drink);
export const getDrink = (id) => axios.get(REST_API_BASE_URL + "/" + id);
export const updateDrink = (id, drink) => axios.put(REST_API_BASE_URL + "/" + id, drink);
export const deleteDrink = (id) => axios.delete(REST_API_BASE_URL + "/" + id);
