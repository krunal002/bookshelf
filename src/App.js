import { useState } from "react";
import "./App.css";

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

  return (
    <div className="App">
      <h1>Bokshelf</h1>

      <nav>
        <button onClick={(e) => setReqCat("all")}>cat all</button>
        <button onClick={(e) => setReqCat("a")}>cat a</button>
        <button onClick={(e) => setReqCat("b")}>cat b</button>
        <button onClick={(e) => setReqCat("c")}>cat c</button>
      </nav>

      <main className="primary-container">
        {dataToShow.map((book) => (
          <section className="book-wrapper">
            <img
              src={book.cover}
              alt="book-cover"
              className="book-cover-wrapper"
            />
            <p>{book.name}</p>
            <p>{book.author}</p>
            <p>{book.category}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
