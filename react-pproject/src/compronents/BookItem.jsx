import BookList from "./BookList.jsx";

function BookItem({ book }) {
  const bookListan = BookList;

  return (
    <section className="book-container">
      <ul className="book-list">
          <ol key={book.title} className="book-item">
            <article>
              <h2 className="book-item__title">{book.title}</h2>
              <p className="book-item__author">{book.author}</p>
            </article>
            {/* <p className="book-item__genre">Genre: {book.genre}</p>
            <p className="book-item__pages">Antal sidor: {book.pages}</p> */}
            <p className="book-item__desc">{book.desc}</p>
            <button className="add-btn">Add to cart</button>
          </ol>
      </ul>
    </section>
  )
}

export default BookItem