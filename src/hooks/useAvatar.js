import { useSelector } from "react-redux";

const useAvatar = () => {
  const accessToken = useSelector((store) => store.auth.accessToken);
  const avatar = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/avatar",
        {
          method: "PATCH",
          headers:{
            "Authorization" : `Bearer ${accessToken}`
          },
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };
  return { avatar };
};

export default useAvatar;
