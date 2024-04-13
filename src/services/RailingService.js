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

const REST_API_BASE_URL_RAILING = "http://localhost:8080/products/railings";
export const listRailings = () => axios.get(REST_API_BASE_URL_RAILING);
export const saveRailing = (railing) => axios.post(REST_API_BASE_URL_RAILING, railing);
export const getRailing = (id) => axios.get(REST_API_BASE_URL_RAILING + "/" + id);
export const deleteRailing = (id) => axios.delete(REST_API_BASE_URL_RAILING + "/" + id);
export const updateRailing = (id, updatedItem) =>
  axios.put(REST_API_BASE_URL_RAILING + "/" + id, updatedItem);
