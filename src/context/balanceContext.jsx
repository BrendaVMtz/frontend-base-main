import { createContext, useContext, useState } from "react";
import {
  createBalanceRequest,
  deleteBalanceRequest,
  getBalancesRequest,
  getBalanceRequest,
  getTransactionsByIdRequest
} from "../api/balances";
import { createTransactionRequest, deleteTransactionRequest } from "../api/transactions";

const BalanceContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useBalance = () => {
    const context = useContext(BalanceContext);
    if (!context) throw new Error("useBalance must be used within a BalanceProvider");
    return context;
};

// eslint-disable-next-line react/prop-types
export const BalanceProvider = ({ children }) => {
  const [balances, setBalances] = useState([]);
  const [balance, setBalance] = useState([]);
  const [transactions, setTransactions] = useState([]);

  //CREATE
  //create balances context function
  const createBalance = async (balance) => {
    console.log(balance);
    try {
      // const res =
       await createBalanceRequest(balance);
      // console.log({res});
      await getBalances();
    } catch (error) {
      console.log("Error creating balance", error);
    }
  };

  //create transaction context function
  const createTransaction = async (transaccion,id) => {
    console.log(transaccion);
    let res;
    try {
     res =  await createTransactionRequest(transaccion);
      console.log(res.data);
      // console.log(id);
      await getTransactionsById(id);
    } catch (error) {
      console.log("Error creating transaction", error);
    }
    return res.data;
  }


  ////READ
  /// read balances context function
  const getBalances = async () => {
    try {
      const res = await getBalancesRequest();
      // console.log(res.data);
      setBalances(res.data);
      return;
    } catch (error) {
      console.log("Error obteniendo balances",error);
    }
  };
  const getBalance = async (id) => {
    try {
      const res = await getBalanceRequest(id);
      // console.log(res.data);
      setBalance(res.data);
      return;
    } catch (error) {
      console.log("Error obteniendo balance",error);
    }
  };

  const getTransactionsById = async (id) => {
    try {
      const res = await getTransactionsByIdRequest(id);
      console.log (res);
      setTransactions(res.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  /// DELETE
  const deleteBalance = async (id) => {
    try {
      const res = await deleteBalanceRequest(id);
      console.log (res);
      await getBalances();
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTransaccion = async (id,balance) => {
    try {
      console.log("delete me")
      console.log(id)
      console.log(balance);
      
      const res = await deleteTransactionRequest(id,balance);
      console.log (res);
      await getTransactionsById(balance.balance_id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BalanceContext.Provider
      value={{
        createBalance,
        createTransaction,
        getBalances,
        getBalance,
        getTransactionsById,
        deleteBalance,
        deleteTransaccion,
        balance,
        balances,
        transactions
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
