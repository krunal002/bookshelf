import { useContext } from "react";
import { BookContext } from "../Context/bookselfContext";

const Book = () => {
  const { bookData, setBookData } = useContext(BookContext);
  const clickHandler = (id, cat) => {
    // console.log("clicked");
    const newBookData = bookData.map((book) =>
      book.id === id ? { ...book, category: cat } : book
    );
    setBookData(newBookData);
  };

  return (
    <main className="primary-container">
      {bookData?.map((book) => (
        <section className="book-wrapper">
          <img
            src={book.cover}
            alt="book-cover"
            className="book-cover-wrapper"
          />
          <p>{book.name}</p>
          <p>{book.author}</p>
          {/* <p>{book.category}</p> */}

          <div>
            {/* <label htmlFor="category">Select category</label> */}
            <select name="category" id="category-wrapper" value={book.category} onClick={(e) => clickHandler(book.id, e.target.value)}>
              <option value="">Currently Reading</option>
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </section>
      ))}
    </main>
  );
};
export default Book;
