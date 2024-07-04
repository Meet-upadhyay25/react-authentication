import { useState } from "react";

const useSignUp = () => {
  const [error, setError] = useState(null);
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
      return data;
      // console.log(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return { signUp, error};
};

export default useSignUp;
