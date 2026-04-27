import { Link } from "react-router-dom";
import "./../App.css";


function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Saidali</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}


export default Navbar;