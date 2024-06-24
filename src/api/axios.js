import axios from "axios";
import { API_URL } from "../config"
import Cookies from "js-cookie"

const instance = axios.create({
  baseURL: API_URL,
  // headers: {'Content-Type':'aplication/json'},
  withCredentials: true,
});

instance.interceptors.request.use(
  config => {
    const token = Cookies.get("token");
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);
export default instance;