import axios from "axios";

// export const getUsersRequest = async () =>
//   await axios.get("http://localhost:4000/users");

// export const getUserRequest = async (id) =>
//   await axios.get(`http://localhost:4000/users/${id}`);

// export const authenticateUserRequest = async (userFields) =>
//   await axios.get(`http://localhost:4000/authenticate}`, userFields);

export const getUsersRequest = async () =>
  await axios.get("https://smsc-upea-production.up.railway.app/users");

export const getUserRequest = async (id) =>
  await axios.get(`https://smsc-upea-production.up.railway.app/users/${id}`);

export const authenticateUserRequest = async (userFields) =>
  await axios.get(
    `https://smsc-upea-production.up.railway.app/authenticate`,
    userFields
  );
