import "./RestaurantCard.css";
import { FaStar, FaRegHeart, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function RestaurantCard() {
  return (
    <div className="restaurant-card">

      <div className="restaurant-image">
        <span className="coming-soon">Coming Soon</span>
      </div>

      <div className="restaurant-details">

        <div className="title-row">
          <h3>Restaurant Name</h3>
          <FaRegHeart className="heart-icon" />
        </div>

        <p className="cuisine">Cuisine</p>

        <div className="info-row">
          <span><FaStar /> 4.8</span>
          <span><FaClock /> 25 min</span>
        </div>

        <div className="location-row">
          <FaMapMarkerAlt />
          <span>Location</span>
        </div>

      </div>

    </div>
  );
}

export default RestaurantCard;