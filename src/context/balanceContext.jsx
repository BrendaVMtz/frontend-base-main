import { createContext, useContext, useState } from "react";
import {
  createBalanceRequest,
  getBalancesRequest /*getBalanceRequest*/,
  getTransactionsByIdRequest
} from "../api/balances";

const BalanceContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useBalance = () => {
  return useContext(BalanceContext);
  //   const context = useContext(BalanceContext);
  //   if (!context) throw new Error("useBalance must be used within a BalanceProvider");
  //   return context;
};

// eslint-disable-next-line react/prop-types
export const BalanceProvider = ({ children }) => {
  const [balances, setBalances] = useState([]);
  const [transactions, setTransactions] = useState([]);

  //CREATE
  //create balances context function
  const createBalance = async (balance) => {
    console.log(balance);
    try {
      const res = await createBalanceRequest(balance);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  ////READ
  /// read balances context function
  const getBalances = async () => {
    try {
      const res = await getBalancesRequest();
      console.log(res.data);
      setBalances(res.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const getTransactionsById = async (id) => {
    try {
      const res = await getTransactionsByIdRequest(id);
      console.log (res);
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /// delete balance

  return (
    <BalanceContext.Provider
      value={{
        createBalance,
        getBalances,
        getTransactionsById,
        balances,
        transactions
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
