const Book = ({ data }) => {
    const clickHandler = () => {
        console.log("clicked")
    }

  return (
    <main className="primary-container">
      {data?.map((book) => (
        <section className="book-wrapper">
          <img
            src={book.cover}
            alt="book-cover"
            className="book-cover-wrapper"
          />
          <p>{book.name}</p>
          <p>{book.author}</p>
          <p>{book.category}</p>

          <div>
            <button onClick={clickHandler}>Move to Currently Reading</button>
            <button onClick={clickHandler}>Move to Want to Read</button>
            <button onClick={clickHandler}>Move to COMPLETED</button>
          </div>
        </section>
      ))}
    </main>
  );
};
export default Book;
