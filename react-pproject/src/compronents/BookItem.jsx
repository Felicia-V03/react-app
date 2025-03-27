// book card li
import BookList from "./BookList.jsx";

function BookCart() {
  const bookListan = BookList;

  return (
    <ul className="book-list">
      {bookListan.map(book => {
        return <li key={book.title} class="book-item">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">Author: {book.author}</p>
          <p className="book-genre">Genre: {book.genre}</p>
          <p className="book-pages">Antal sidor: {book.pages}</p>
          <p className="book-desc">{book.desc}</p>
          </li>
      })}
    </ul>
  )
}

export default BookCart