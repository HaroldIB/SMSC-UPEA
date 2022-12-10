import axios from "axios";

export const getNewsRequest = async () =>
  await axios.get("http://localhost:4000/news");

export const createNewRequest = async (niw) =>
  await axios.post("http://localhost:4000/news", niw);

export const deleteNewRequiest = async (id) =>
  await axios.delete(`http://localhost:4000/news/${id}`);

  export const getNewRequest = async (id) =>
  await axios.get(`http://localhost:4000/news/${id}`);

  export const updateNewRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/news/${id}`, newFields);