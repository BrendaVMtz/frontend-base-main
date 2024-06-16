import axios from "axios";

const API = "http://localhost:3000/api/auth"

export const registerRequest = async (user) =>
      axios.post(`${API}/register`, user);

// export const registerRequest = async (user) =>
    //   axios.post(`/auth/register`, user);

export const loginRequest = async (user) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);