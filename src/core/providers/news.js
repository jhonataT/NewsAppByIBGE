import { createContext, useContext, useState } from "react"

export const NewsContext = createContext({});

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  return <NewsContext.Provider value={{ news, setNews, favoriteList, setFavoriteList }}>
    {children}
  </NewsContext.Provider>
}

export const useNewsContext = () => {
  return useContext(NewsContext);
}