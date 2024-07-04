import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useCurrenUser from "../hooks/useCurrentUser";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  // const localStorageToken = true;
  const isAuthenticated = useSelector(store => store.auth.isAuthenticated)
  useCurrenUser()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } 
  }, [navigate, isAuthenticated]);

  return <Outlet />
};

export default ProtectedRoutes;
