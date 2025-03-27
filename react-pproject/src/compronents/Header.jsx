function Header() {
  return (
    <header>
      <section className="logo">
        <img src=".." alt="logo-image" className="logo-image" />
      </section>
      {/* <nav className="header-nav">
        <li className="header-item">HOME</li>
        <li className="header-item"></li>
        <li className="header-item"></li>
      </nav> */}
      <section className="cart-container">
      <i class="fa-solid fa-cart-shopping"/>
      <span className="cart-count">0</span>
      </section>
    </header>
  );
}

export default Header;