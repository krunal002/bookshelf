import { useContext } from "react";
import { BookContext } from "../Context/bookselfContext";

const CatSelector = ({ book }) => {
  const { bookData, setBookData } = useContext(BookContext);

  const clickHandler = (id, cat) => {
    const newBookData = bookData.map((book) =>
      book.id === id ? { ...book, category: cat } : book
    );
    setBookData(newBookData);
  };

  return (
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
  );
};
export default CatSelector;
