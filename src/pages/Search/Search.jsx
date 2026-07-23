import "./Search.css";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <section className="search-page">
      <div className="container">

        <h1>Search</h1>

        <div className="search-bar">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search restaurants, foods..."
          />

        </div>

        <div className="search-filters">

          <select>
            <option>All Categories</option>
            <option>Pizza</option>
            <option>Burger</option>
            <option>Biryani</option>
            <option>Chinese</option>
            <option>South Indian</option>
            <option>Gujarati</option>
            <option>Punjabi</option>
            <option>Fast Food</option>
            <option>Desserts</option>
            <option>Beverages</option>
          </select>

          <select>
            <option>Rating</option>
            <option>4.5+ ⭐</option>
            <option>4.0+ ⭐</option>
            <option>3.5+ ⭐</option>
            <option>3.0+ ⭐</option>
          </select>

          <select>
            <option>Price</option>
            <option>₹0 - ₹200</option>
            <option>₹200 - ₹500</option>
            <option>₹500 - ₹1000</option>
            <option>₹1000+</option>
          </select>

          <select>
            <option>Distance</option>
            <option>Within 2 km</option>
            <option>Within 5 km</option>
            <option>Within 10 km</option>
            <option>Within 20 km</option>
          </select>

        </div>

        <div className="search-empty">

          <h2>No Results Found</h2>

          <p>
            Search results will appear here after backend integration.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Search;