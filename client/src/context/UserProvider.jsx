import { useContext, useState } from "react";
import {
  authenticateUserRequest,
  getUserRequest,
  getUsersRequest,
} from "../api/users.api";
import { UserContext } from "./UserContext";

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers: no se está usando en UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await getUsersRequest();
    setUsers(response.data);
  }

  const getUser = async (id) => {
    try {
      const response = await getUserRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const authenticateUser = async (userFields) => {
    try {
      const response = await authenticateUserRequest(userFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        users,
        loadUsers,
        getUser,
        authenticateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
