import { Routes, Route } from "react-router-dom";
import "./App.css";
import BookDetails from "./pages/bookDetails";
import Bookself from "./pages/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Bookself />} />
        <Route path="/details/:bookId" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
