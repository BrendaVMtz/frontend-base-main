import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = () => {
  const { isAuthenticated,checkLogin } = useAuth();
  
  useEffect(() => {
    checkLogin()
  
  }, [checkLogin])
  
  return isAuthenticated ? <Outlet/>: <Navigate to="/login" />;
};


export default ProtectedRoutes;