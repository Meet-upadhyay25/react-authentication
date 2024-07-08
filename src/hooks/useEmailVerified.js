import { useSelector } from "react-redux";

const useEmailVerified = () => {
    // const accessToken = useSelector(store => store.auth.accessToken)
  const emailVerified = async () => {
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/users/verify-email/ffff8c2d25725516cf34c8cfa9c5f4d8f1f1f407`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };
  return { emailVerified };
};

export default useEmailVerified;
