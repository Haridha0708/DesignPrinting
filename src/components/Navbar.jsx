import{Link} from "react-router-dom"
import "./Navbar.css";

 function Navbar() {

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          Tidy Digital Printing
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>


        <button className="nav-btn">Get Quote</button>

      </div>
    </header>
  );
}
export default Navbar;