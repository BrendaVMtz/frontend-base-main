// authContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const signup = async (values) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", values, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setIsAuthenticated(true);
      setErrors([]);
      navigate("/login"); // Redirigir a la página de inicio de sesión después del registro
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data]);
      } else if (error.request) {
        setErrors([{ message: "No response from server. Please try again later." }]);
      } else {
        setErrors([{ message: "An error occurred. Please try again." }]);
      }
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
