import BookCart from "./BookItem.jsx";

function App() {
  let myName = 'Felicia';
  let myAge = 21;
  let isHere = true;

  return (
    <section class="book-container">
      <h1>Hejsan!</h1>
      <p>Hej {myName}! Du är {myAge} år gammal.</p>
      <p>Är {myName} här?</p>
      <p>{myName} är {isHere ? '' : 'inte'} här</p>
      <br />
      <p>{myName}s bok listan idag:</p>
      <BookCart />
    </section>
  )
}

export default App
