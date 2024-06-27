import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

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
  const [loading, setLoading] = useState(true);

  // limpiar errores despues de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  //Registro de usuarios
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      ///console.log(res.data);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      // console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  //Inicio de sesion
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      if (res) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        // console.log(error.response.data);
        return setErrors(error.response.data);
      } else {
        // console.log([error.response.data]);
        setErrors([error.response.data]);
      }
    }
  };

  ///logout
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get("token");

      //primero comprueba si no hay un token
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      } else {
        //verifica el token
        //console.log(token);
        try {
          const res = await verifyTokenRequest(token);
          // console.log("yay");
          // console.log(res);
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
          // console.log("no yay");
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
