import React from "react";
import { useNavigate } from "react-router-dom";
import { Login, User } from "../Pages";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const localStorageToken = false;
  return localStorageToken ? <User />  : <Login />;
};

export default ProtectedRoutes;
