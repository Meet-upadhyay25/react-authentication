import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const localStorageToken = true;

  useEffect(() => {
    if (!localStorageToken) {
      navigate("/");
    } 
  }, [navigate, localStorageToken]);

  return <Outlet />
};

export default ProtectedRoutes;
