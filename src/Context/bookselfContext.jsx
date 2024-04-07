import { createContext, useState } from "react";
import { booksData } from "../Data/data";
export const BookContext = createContext();

export const BookshelfContextHandler = ({ children }) => {
  const [bookData, setBookData] = useState(booksData);
  const [reqCat, setReqCat] = useState("all");
  return (
    <BookContext.Provider value={{ bookData, setBookData, reqCat, setReqCat }}>
      {children}
    </BookContext.Provider>
  );
};
