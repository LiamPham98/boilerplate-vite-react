import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
import queryString from "query-string";

interface ResponseData<T = unknown> {
  code: number;
  message: string;
  data: T;
}

const API_URL = import.meta.env.VITE_API_URL;
const baseURL = API_URL;

const http: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000, // Timeout request sau 10 giây
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params, { arrayFormat: "comma" });
  },
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig<unknown>) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse<ResponseData>): any => {
    return response?.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default http;
