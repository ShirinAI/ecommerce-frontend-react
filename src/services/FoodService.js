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

const REST_API_BASE_URL_FOOD = "http://localhost:8080/products/foods";
export const listFoods = () => axios.get(REST_API_BASE_URL_FOOD);
export const saveFood = (food) => axios.post(REST_API_BASE_URL_FOOD, food);
export const getFood = (id) => axios.get(REST_API_BASE_URL_FOOD + "/" + id);
export const deleteFood = (id) => axios.delete(REST_API_BASE_URL_FOOD + "/" + id);
export const updateFood = (id, food) => axios.put(REST_API_BASE_URL_FOOD + "/" + id, food);
