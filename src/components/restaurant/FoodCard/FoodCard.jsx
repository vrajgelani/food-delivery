import "./FoodCard.css";
import { FaLeaf, FaPlus } from "react-icons/fa";

function FoodCard({
  image,
  name,
  category,
  price,
  isVeg,
}) {
  return (
    <div className="food-card">

      <div className="food-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="food-placeholder">
            Food Image
          </div>
        )}
      </div>

      <div className="food-content">

        <h3>{name}</h3>

        <p>{category}</p>

        <div className="food-footer">

          <span className="price">
            ₹{price}
          </span>

          <span className={isVeg ? "veg" : "nonveg"}>
            <FaLeaf />
            {isVeg ? "Veg" : "Non Veg"}
          </span>

        </div>

        <button disabled className="cart-btn">
          <FaPlus />
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default FoodCard;