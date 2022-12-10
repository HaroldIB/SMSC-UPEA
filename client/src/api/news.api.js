import axios from "axios";

// export const getNewsRequest = async () =>
//   await axios.get("http://localhost:4000/news");

// export const createNewRequest = async (niw) =>
//   await axios.post("http://localhost:4000/news", niw);

// export const deleteNewRequiest = async (id) =>
//   await axios.delete(`http://localhost:4000/news/${id}`);

//   export const getNewRequest = async (id) =>
//   await axios.get(`http://localhost:4000/news/${id}`);

//   export const updateNewRequest = async (id, newFields) =>
//   await axios.put(`http://localhost:4000/news/${id}`, newFields);

export const getNewsRequest = async () =>
  await axios.get("https://smsc-upea-production.up.railway.app/news");

export const createNewRequest = async (niw) =>
  await axios.post("https://smsc-upea-production.up.railway.app/news", niw);

export const deleteNewRequiest = async (id) =>
  await axios.delete(`https://smsc-upea-production.up.railway.app/news/${id}`);

export const getNewRequest = async (id) =>
  await axios.get(`hhttps://smsc-upea-production.up.railway.app/news/${id}`);

export const updateNewRequest = async (id, newFields) =>
  await axios.put(
    `https://smsc-upea-production.up.railway.app/news/${id}`,
    newFields
  );
