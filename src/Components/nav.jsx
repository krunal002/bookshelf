import { useContext } from "react";
import { BookContext } from "../Context/bookselfContext";
import BookForm from "./bookForm";


const Navbar = () => {
  const { setReqCat } = useContext(BookContext);

  return (
    <nav>
      <section>
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
      </section>

      <section>
        {/* <button className="nav-button-wrapper"> */}
          <BookForm/>
        {/* </button> */}
      </section>
    </nav>
  );
};

export default Navbar;
