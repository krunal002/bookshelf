import { createContext, useReducer, useState } from "react";
import { booksData } from "../Data/data";
export const BookContext = createContext();

export const BookshelfContextHandler = ({ children }) => {
  const [bookData, setBookData] = useState(booksData);
  const [reqCat, setReqCat] = useState("all");

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "author":
        return { ...state, author: action.payload };
      case "category":
        return { ...state, category: action.payload };
      case "cover":
        return { ...state, cover: action.payload };
      default:
        return state;
    }
  };

  const intialState = {
    name: "",
    author: "",
    Category: "",
    cover: "",
  };
  const [state, dispatch] = useReducer(reducerFun, intialState);

  const addBook = () => {
    const newBook = {
      id: Date(),
      name: state.name,
      author: state.author,
      category: state.category,
      cover:
        state.cover === ""
          ? "https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?rs=1&pid=ImgDetMain"
          : state.cover,
    };

    setBookData([...bookData, newBook]);
  };

  return (
    <BookContext.Provider
      value={{
        bookData,
        setBookData,
        reqCat,
        setReqCat,
        state,
        dispatch,
        addBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
