import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCurrenUser = () => {
  // https://api.freeapi.app/api/v1/users/current-user
  const [user, setUser] = useState(null);
  const accessToken = useSelector((store) => store.auth.accessToken);
  const currentUser = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/current-user",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
    //   console.log(data.data);
      setUser(data.data);
    } catch (error) {}
  };
  useEffect(() => {
    currentUser();
  }, []);
//   console.log(user);
  return { user };
};

export default useCurrenUser;
