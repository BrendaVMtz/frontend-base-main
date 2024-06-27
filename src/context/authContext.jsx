// src/context/authContext.jsx

import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      console.log("Sending registration request with:", user);
      const res = await registerRequest(user);
      console.log("Registration response:", res);
      if (res.status === 200 || res.status === 201) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response ? error.response.data.message : 'Unknown error']);
    }
  };


  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      if (res) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      } else {
        setErrors([error.response.data]);
      }
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get("token");

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      } else {
        try {
          const res = await verifyTokenRequest(token);
          if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            setUser(null);
            return;
          }
          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setLoading(false);
          setUser(null);
        }
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        user,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
