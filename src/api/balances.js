import axios from "./axios";

export const createBalanceRequest = async (balance) => {
    console.log(balance);
  
    axios.post("/balances/crear-balance", balance);
}
// export const getBalancesRequest = async () => axios.get("/Balances");


// export const updateBalanceRequest = async (Balance) =>
//   axios.put(`/Balances/${Balance._id}`, Balance);

// export const deleteBalanceRequest = async (id) => axios.delete(`/Balances/${id}`);

// export const getBalanceRequest = async (id) => axios.get(`/Balances/${id}`);