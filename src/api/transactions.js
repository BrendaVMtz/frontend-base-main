import axios from "./axios";
///api/transactions/borrar-transaccion/4
///crear-transaccion

//CREATE
export const createTransactionRequest = async (transaction) => {
    console.log(transaction);
  
    axios.post("/transactions/crear-transaccion", transaction);
}

//READ

//DELETE
export const deleteTransactionRequest = async (id) => axios.delete(`/transactions/borrar-transaccion/${id}`);


