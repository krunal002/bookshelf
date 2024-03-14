const Book = ({ data }) => {
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
        </section>
      ))}
    </main>
  );
};
export default Book;
