import { useContext } from "react";
import { BookContext } from "../Context/bookselfContext";
import { useNavigate } from "react-router-dom";
const Book = () => {
  const { bookData, setBookData, reqCat } = useContext(BookContext);
  const navigate = useNavigate();

  const clickHandler = (id, cat) => {
    const newBookData = bookData.map((book) =>
      book.id === id ? { ...book, category: cat } : book
    );
    setBookData(newBookData);
  };

  const finalData =
    reqCat === "all"
      ? bookData
      : bookData.filter((book) => book.category === reqCat);

  return (
    <main className="all-books-container">
      {/* primary section */}
      <section className="primary-container">
        {finalData
          ?.sort((a, b) => b.id - a.id)
          ?.map((book) => (
            <section className="book-wrapper">
              <img
                src={book.cover}
                alt="book-cover"
                className="book-cover-wrapper"
                onClick={() => navigate(`/details/${book.id}`)}
              />
              {/* <p>{book.id}</p> */}
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
      </section>

      {/* secondary section */}
      <section className="secondary-container">
        <h4>Total Books - {finalData.length}</h4>
        <img
          src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1712736258/bookself/sidebar.jpg"
          alt="sidebar"
          className="sidebarImage"
        />

        <div className="books-list-container">
          {finalData
            ?.sort((b, a) => b.id - a.id)
            ?.map((book) => (
              <p onClick={() => navigate(`/details/${book.id}`)}>{book.name}</p>
            ))}
        </div>
      </section>
    </main>
  );
};
export default Book;
