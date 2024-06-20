import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink className="navbar-link" to="/">Main</NavLink>
      <NavLink className="navbar-link" to="/routes">Routes</NavLink>
      <NavLink className="navbar-link" to="/map">Map</NavLink>
    </nav>
  );
}

export default Navbar;
