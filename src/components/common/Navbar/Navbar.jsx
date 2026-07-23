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

          {/* Search */}
          <Link to="/search" className="search-link">
            <FaSearch className="icon" />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="icon" />
          </Link>

          {/* Login */}
          <Link to="/login" className="login-link">
            <button className="login-btn">
              <FaUser />
              Login
            </button>
          </Link>

          {/* Register */}
          <Link to="/register" className="register-link">
            <button className="register-btn">
              Register
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;