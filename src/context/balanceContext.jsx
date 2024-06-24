import { createContext, useContext, /*useState*/ } from "react";
import {
    createBalanceRequest
} from "../api/balances"

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
//   const [tasks, setTasks] = useState([]);


  const createBalance = async (balance) => {
    console.log(balance);
    try {
      const res = await createBalanceRequest(balance);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BalanceContext.Provider
      value={{
        createBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}