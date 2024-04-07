import { useContext } from "react";
import { BookContext } from "../Context/bookselfContext";

const Navbar = () => {
  const { setReqCat } = useContext(BookContext);

  return (
    <nav>
      <button className="nav-button-wrapper" onClick={() => setReqCat("all")}>
        All
      </button>
      <button
        className="nav-button-wrapper"
        onClick={() => setReqCat("Currently Reading")}
      >
        Currently Reading
      </button>
      <button
        className="nav-button-wrapper"
        onClick={() => setReqCat("Want to Read")}
      >
        Want to Read
      </button>
      <button
        className="nav-button-wrapper"
        onClick={() => setReqCat("Completed")}
      >
        Completed
      </button>
    </nav>
  );
};

export default Navbar;
