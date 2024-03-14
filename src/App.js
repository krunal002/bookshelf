import { useContext, useState } from "react";
import "./App.css";
import Book from "./Components/book";
import { BookContext } from "./Context/bookselfContext";

function App() {
  const books = [
    {
      name: "book 1",
      author: "writer1",
      category: "a",
      cover:
        "https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?rs=1&pid=ImgDetMain",
    },
    {
      name: "book 2",
      author: "writer1",
      category: "b",
      cover:
        "https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?rs=1&pid=ImgDetMain",
    },
    {
      name: "book 3",
      author: "writer1",
      category: "c",
      cover:
        "https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?rs=1&pid=ImgDetMain",
    },
    {
      name: "book 4",
      author: "writer1",
      category: "a",
      cover:
        "https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?rs=1&pid=ImgDetMain",
    },
  ];

  const [reqCat, setReqCat] = useState("all");

  const dataToShow =
    reqCat === "all" ? books : books.filter((book) => book.category === reqCat);


    // context
  const {book} = useContext(BookContext)

  return (
    <div className="App">
      <h1>Bokshelf {book}</h1>

      <nav>
        <button onClick={(e) => setReqCat("all")}>cat all</button>
        <button onClick={(e) => setReqCat("a")}>cat a</button>
        <button onClick={(e) => setReqCat("b")}>cat b</button>
        <button onClick={(e) => setReqCat("c")}>cat c</button>
      </nav>

      <Book data={dataToShow}/>
    </div>
  );
}

export default App;
