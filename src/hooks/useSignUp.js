import { useState } from "react";

const useSignUp = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const signUp = async (user) => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      setMessage(data.data.message);
      setStatusCode(data.data.statusCode);
      setSuccess(data.data.success);
      return data;
      // console.log(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return { signUp, error, message, success, statusCode };
};

export default useSignUp;
