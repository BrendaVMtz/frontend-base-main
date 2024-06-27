import axios from "./axios";


export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);


export const loginRequest = async (user) => 
  axios.post(`/auth/login`, user);


///Se hace una peticion a backend, regresa un usuario
export const verifyTokenRequest = async () => axios.get(`/auth/verify-token`);
