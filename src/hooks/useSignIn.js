import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducer/authSlice";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const signIn = async (user) => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        dispatch(
          loginSuccess({
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
          })
        );
   
        navigate("/user");
        return data;
      }
    } catch (error) {
      setError(error);
    }
  };

  return { signIn, error };
};

export default useSignIn;
