import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          🍔 FoodHub
        </div>

        <ul className="nav-links">

  <li>
    <NavLink to="/">Home</NavLink>
  </li>

  <li>
    <NavLink to="/restaurants">Restaurants</NavLink>
  </li>

  <li>
    <NavLink to="/offers">Offers</NavLink>
  </li>

</ul>

        <div className="nav-actions">
          <FaSearch className="icon" />
          <FaShoppingCart className="icon" />

          <button className="login-btn">
            <FaUser />
            Login
          </button>

          <button className="register-btn">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;