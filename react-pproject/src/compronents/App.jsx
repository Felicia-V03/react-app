import BookList from "./BookList";

function App() {
  let myName = 'Felicia';
  let myAge = 21;
  let isHere = true;

  return (
    <section class="container">
      <h1>Hejsan!</h1>
      <p>Hej {myName}! Du är {myAge} år gammal.</p>
      <p>Är {myName} här?</p>
      <p>{myName} är {isHere ? '' : 'inte'} här</p>
      <br />
      <p>{myName}s bok listan idag:</p>
      <BookList />
    </section>
  )
}

export default App
