import { useContext, useState } from "react";
import {
  getNewsRequest,
  createNewRequest,
  deleteNewRequiest,
  updateNewRequest,
} from "../api/news.api";
import { NewContext } from "./NewContext";

export const useNews = () => {
  const context = useContext(NewContext);
  if (!context) {
    throw new Error("useNews no se esta usando en NewContextProvider");
  }
  return context;
};

export const NewContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  async function loadNews() {
    const response = await getNewsRequest();
    setNews(response.data);
  }

  const deleteNew = async (id) => {
    try {
      const response = await deleteNewRequiest(id);
      setNews(news.filter((news) => news.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createNews = async (niw) => {
    try {
      await createNewRequest(niw);
    } catch (error) {
      console.error(error);
    }
  };

  const getNew = async (id) => {
    try {
      const response = await getNewsRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateNew = async (id, newFields) => {
    try {
      const response = await updateNewRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NewContext.Provider
      value={{
        news,
        loadNews,
        createNews,
        deleteNew,
        getNew,
        updateNew,
      }}
    >
      {children}
    </NewContext.Provider>
  );
};
