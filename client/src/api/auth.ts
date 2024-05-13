import axios from "axios";
// import { createUser } from "../interface/user";
// import axios from "../libs/axios";

export const loginRequest = async (email: string, password: string) =>
  axios.post("http://localhost:3000/api/auth/login", {
    email,
    password,
  });

// export const registerRequest = async (data: createUser) =>
//   axios.post("/api/auth/register", data);

// export const profileRequest = async () => axios.get("/api/auth/profile");
