//import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      ///console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
        console.log(error.response.data.message);
      setErrors(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
