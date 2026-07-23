import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          🍔 FoodHub
        </div>

        {/* Navigation Links */}
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

        {/* Right Side Actions */}
        <div className="nav-actions">

          <FaSearch className="icon" />

          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="icon" />
          </Link>

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