import { createContext, useReducer, useState } from "react";
import { booksData } from "../Data/data";
export const BookContext = createContext();

export const BookshelfContextHandler = ({ children }) => {
  const [bookData, setBookData] = useState(booksData);
  const [reqCat, setReqCat] = useState("all");

  const intialState = {
    name: "",
    author: "",
    Category: "",
    cover: "",
    rating: 0,
  };

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "reset":
        return intialState;
      case "update":
        return action.payload;
      case "rating":
        return { ...state, rating: action.payload };
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

  const [state, dispatch] = useReducer(reducerFun, intialState);

  const addBook = () => {
    if (state.name === "" || state.author === "" || state.category === "") {
      alert("Feel all the fields!");
    } else {
      const newBook = {
        id: bookData.length + 1,
        name: state.name,
        author: state.author,
        category: state.category,
        cover:
          state.cover === ""
            ? "https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?rs=1&pid=ImgDetMain"
            : state.cover,
        rating: 1,
      };

      setBookData([...bookData, newBook]);
      dispatch({ type: "reset" });
    }
  };

  const updateBook = (data) => {
    if (state.name === "" || state.author === "" || state.category === "") {
      alert("Feel all the fields!");
    } else {
      const newBookData = bookData.reduce(
        (acc, curr) => (data.id === curr.id ? [...acc, state] : [...acc, curr]),
        []
      );
      // console.log("BookData",newBookData);
      setBookData(newBookData);
      dispatch({ type: "reset" });
    }
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
        updateBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
