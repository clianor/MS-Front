import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.ServerURL,
  timeout: 2000,
  withCredentials: true,
});

export default instance;
