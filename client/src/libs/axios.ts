/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useAuthStore } from '../store/auth';

// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? process.env.DOMAIN
//     : "http://localhost:3000";

const authApi = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

authApi.interceptors.request.use((config:any) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`
  };
  return config;
});

export default authApi;
