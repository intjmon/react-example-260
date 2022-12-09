import { useState } from "react";
import axios from "axios";

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setISError] = useState(false);

  const onClickFetchUser = () => {
    setIsLoading(true);
    setISError(false);

    axios
      .get("https://api.npoint.io/7336b2444331b29dae43")
      .then((result) => {
        const users = result.data.map((user) => ({
          id: user.id,
          name: user.name,
          age: user.age
        }));
        setUserList(users);
      })
      .catch(() => setISError(true))
      .finally(() => setIsLoading(false));
  };

  return { userList, isLoading, isError, onClickFetchUser };
};
