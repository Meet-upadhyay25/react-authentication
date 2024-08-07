import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducer/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../reducer/userSlice";


const useLogout = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.auth.accessToken)
  const logout = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        dispatch(logoutUser());
        dispatch(removeUser())
        navigate("/")
      }
      setMessage(data.message);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { logout, message };
};

export default useLogout;
