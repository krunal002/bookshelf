import { createContext } from "react";

export const BookContext = createContext();

export const BookshelfContextHandler = ({ children }) => {
  return (
    <BookContext.Provider value={{ book: "Present" }}>
      {children}
    </BookContext.Provider>
  );
};
