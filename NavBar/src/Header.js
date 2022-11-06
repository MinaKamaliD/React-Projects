function Header() {
  return (
    <div className="nav-background">
      <div className="nav-container">
        <header className="nav-header">
          <h1>
            <a href="#" className="nav-logo">
              SabzLearn
            </a>
          </h1>
        </header>
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="#" className="nav-links active-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                News
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
