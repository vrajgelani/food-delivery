import "./RestaurantCard.css";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaRegHeart,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

function RestaurantCard({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  location,
  isOpen,
}) {
  return (
    <Link
      to={`/restaurant/${id || 1}`}
      className="restaurant-link"
    >
      <div className="restaurant-card">

        <div className="restaurant-image">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="image-placeholder">
              Restaurant Image
            </div>
          )}

          <span className={isOpen ? "status open" : "status closed"}>
            {isOpen ? "Open" : "Closed"}
          </span>
        </div>

        <div className="restaurant-details">

          <div className="title-row">
            <h3>{name}</h3>
            <FaRegHeart className="heart-icon" />
          </div>

          <p className="cuisine">{cuisine}</p>

          <div className="info-row">
            <span>
              <FaStar />
              {rating}
            </span>

            <span>
              <FaClock />
              {deliveryTime}
            </span>
          </div>

          <div className="location-row">
            <FaMapMarkerAlt />
            <span>{location}</span>
          </div>

        </div>

      </div>
    </Link>
  );
}

export default RestaurantCard;