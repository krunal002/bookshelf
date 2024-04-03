import "./App.css";
import Book from "./Components/book";
import Navbar from "./Components/nav";
import Header from "./Components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Book />
    </div>
  );
}

export default App;
