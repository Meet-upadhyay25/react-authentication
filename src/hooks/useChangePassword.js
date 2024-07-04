import { useSelector } from "react-redux";

const useChangePassword = () => {
  const accessToken = useSelector((store) => store.auth.accessToken);
  const changePassword = async (password) => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
          body: JSON.stringify(password),
        }
      );
      const data = await response.json();
    //   console.log(data);
      return data
    } catch (error) {}
  };
  return { changePassword };
};

export default useChangePassword;
