import axios from "axios";
import { getToken } from "../AuthService";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const REST_API_BASE_ADMIN_URL = "http://localhost:8080/admin/products";
export const listProducts = () => axios.get(REST_API_BASE_ADMIN_URL);
export const getProduct = (id) =>
  axios
    .get(`${REST_API_BASE_ADMIN_URL}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching product:", error);
      throw error;
    });
