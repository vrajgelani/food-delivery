import "./Favorites.css";
import { useState } from "react";

function Favorites() {
  const [activeTab, setActiveTab] = useState("restaurants");

  return (
    <section className="favorites-page">
      <div className="container">

        <h1>Favorites</h1>

        <div className="favorite-tabs">

          <button
            className={activeTab === "restaurants" ? "active" : ""}
            onClick={() => setActiveTab("restaurants")}
          >
            Restaurants
          </button>

          <button
            className={activeTab === "foods" ? "active" : ""}
            onClick={() => setActiveTab("foods")}
          >
            Foods
          </button>

        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search favorites..."
          />
        </div>

        <div className="favorite-empty">

          <h2>No Favorites Yet</h2>

          <p>
            Your favorite restaurants and foods will appear here after backend integration.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Favorites;