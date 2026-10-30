function Header() {
  return (
    <header className="header">
      <div className="logo">
        Shop<span>Kit</span>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Features</a>
        <a href="#">About</a>
      </nav>

      <button className="header-btn">Get Started</button>
    </header>
  );
}

export default Header;