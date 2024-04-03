import { useContext } from "react";
import { booksData } from "../Data/data";
import { BookContext } from "../Context/bookselfContext";

const Navbar = () => {
  // const [reqCat, setReqCat] = useState("all");
  // const {bookData, setBookData} = useContext(BookCOntext)
  const { setBookData } = useContext(BookContext);

  const clickHandler = (cat) => {
    const newBookData =
      cat === "all"
        ? booksData
        : booksData.filter((book) => book.category === cat);
    setBookData(newBookData);
  };

  return (
    <nav>
      <button className="nav-button-wrapper" onClick={() => clickHandler("all")}>All</button>
      <button className="nav-button-wrapper" onClick={() => clickHandler("Currently Reading")}>
        Currently Reading
      </button>
      <button className="nav-button-wrapper" onClick={() => clickHandler("Want to Read")}>Want to Read</button>
      <button className="nav-button-wrapper" onClick={() => clickHandler("Completed")}>Completed</button>
    </nav>
  );
};

export default Navbar;
