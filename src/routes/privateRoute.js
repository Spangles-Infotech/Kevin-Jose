import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("customer");  
  return token ? children : <Navigate to="/user-login" />;
};

export default PrivateRoute;
