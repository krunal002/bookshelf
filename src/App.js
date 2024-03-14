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
      category: "a",
      cover:
        "https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?rs=1&pid=ImgDetMain",
    },
    {
      name: "book 3",
      author: "writer1",
      category: "a",
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

  return (
    <div className="App">
      <h1>Bokshelf</h1>
      
      {books.map((book) => (
        <section>
          <p>{book.name}</p>
        </section>
      ))}
    </div>
  );
}

export default App;
