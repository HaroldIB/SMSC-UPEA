import axios from "axios";
export const getNewsRequest = async () =>
  await axios.get("http://localhost:4000/news");
