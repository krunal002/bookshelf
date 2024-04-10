import "./App.css";
import Book from "./Components/book";
import Navbar from "./Components/nav";
import Header from "./Components/header";
// import ImageUpload from "./Components/image";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Book />
      {/* <ImageUpload/> */}
    </div>
  );
}

export default App;
