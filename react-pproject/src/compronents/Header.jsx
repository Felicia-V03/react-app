import Cart from "./Cart";

function Header() {
  return (
    <header className="header-container">
      <section className="logo">
        <img src=".." alt="logo-image" className="logo-image" />
      </section>
      {/* <nav className="header-nav">
        <li className="header-item">HOME</li>
        <li className="header-item"></li>
        <li className="header-item"></li>
      </nav> */}
      <Cart />
    </header>
  );
}

export default Header;