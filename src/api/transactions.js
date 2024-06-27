import axios from "./axios";
///api/transactions/borrar-transaccion/4
///crear-transaccion

//CREATE
export const createTransactionRequest = async (transaction) => {
  console.log(transaction);

  const res = await axios
    .post("/transactions/crear-transaccion", transaction)
    .then(function (response) {
      return response;
    });
  return res;
};

//READ

//DELETE
export const deleteTransactionRequest = async (id, balance) => {
  const res = await axios
    .delete(`/transactions/borrar-transaccion/${id}`, balance)
    .then((response) => response); //obtener una respuesta del servidor

  return res;
};
