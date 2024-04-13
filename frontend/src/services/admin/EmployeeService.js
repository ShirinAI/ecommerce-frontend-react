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

const REST_API_BASE_ADMIN_URL_EMPLOYEES = "http://localhost:8080/admin/employees";
export const listEmployees = () => axios.get(REST_API_BASE_ADMIN_URL_EMPLOYEES);
