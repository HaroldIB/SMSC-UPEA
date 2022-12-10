import axios from "axios";

export const getUsersRequest = async () =>
  await axios.get("http://localhost:4000/users");

export const getUserRequest = async (id) =>
  await axios.get(`http://localhost:4000/users/${id}`);
