import { useContext } from "react";
import { BookContext } from "../Context/bookselfContext";

const Book = () => {
  const { bookData, setBookData, reqCat } = useContext(BookContext);

  const clickHandler = (id, cat) => {
    // console.log("clicked",id, cat);
    const newBookData = bookData.map((book) =>
      book.id === id ? { ...book, category: cat } : book
    );
    setBookData(newBookData);
  };

  const finalData =
    reqCat === "all"
      ? bookData
      : bookData.filter((book) => book.category === reqCat);
  // console.log("updated data - ", bookData);

  return (
    <main className="primary-container">
      {finalData?.map((book) => (
        <section className="book-wrapper">
          <img
            src={book.cover}
            alt="book-cover"
            className="book-cover-wrapper"
          />
          <p>{book.name}</p>
          <p>{book.author}</p>

          <div>
            <select
              name="category"
              id="category-wrapper"
              value={book.category}
              onChange={(e) => clickHandler(book.id, e.target.value)}
            >
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
