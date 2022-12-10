import axios from "axios";

// export const getUsersRequest = async () =>
//   await axios.get("http://localhost:4000/users");

// export const getUserRequest = async (id) =>
//   await axios.get(`http://localhost:4000/users/${id}`);

export const getUsersRequest = async () =>
  await axios.get("https://smsc-upea-production.up.railway.app/users");

export const getUserRequest = async (id) =>
  await axios.get(`https://smsc-upea-production.up.railway.app/users/${id}`);
