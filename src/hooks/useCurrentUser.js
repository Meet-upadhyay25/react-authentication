import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducer/userSlice";

const useCurrenUser = () => {
  const dispatch = useDispatch();
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
      dispatch(addUser(data.data));
    } catch (error) {}
  };

  return { currentUser };
};

export default useCurrenUser;
