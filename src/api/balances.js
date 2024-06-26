import axios from "./axios";


//CREATE
export const createBalanceRequest = async (balance) => {
    console.log(balance);
  
    axios.post("/balances/crear-balance", balance);
}

//READ
export const getBalancesRequest = async () => axios.get("/balances/leer-balances");
export const getBalanceRequest = async (id) => axios.get(`/balances/leer-balance/${id}`);
export const getTransactionsByIdRequest = async (id) => axios.get(`/balances/leer-transactionsByBalance/${id}`);


// export const updateBalanceRequest = async (Balance) =>
//   axios.put(`/Balances/${Balance._id}`, Balance);

// export const deleteBalanceRequest = async (id) => axios.delete(`/Balances/${id}`);

// export const getBalanceRequest = async (id) => axios.get(`/Balances/${id}`);