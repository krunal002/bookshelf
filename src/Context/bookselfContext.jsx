import { createContext, useState } from "react";
import { booksData } from "../Data/data";
export const BookContext = createContext();

export const BookshelfContextHandler = ({ children }) => {
    const [bookData, setBookData ] = useState(booksData)
    
  return (
    <BookContext.Provider value={{ bookData, setBookData }}>
      {children}
    </BookContext.Provider>
  );
};
