import { useContext, useState } from "react";
import { getNewsRequest } from "../api/news.api";
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

  return (
    <NewContext.Provider
      value={{
        news,
        loadNews,
      }}
    >
      {children}
    </NewContext.Provider>
  );
};
