import "./Categories.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";

// Images
import pizza from "../../../assets/images/categories/pizza.png";
import burger from "../../../assets/images/categories/burger.png";
import biryani from "../../../assets/images/categories/biryani.png";
import chinese from "../../../assets/images/categories/chinese.png";
import southIndian from "../../../assets/images/categories/south-indian.png";
import beverages from "../../../assets/images/categories/beverages.png";
import dessert from "../../../assets/images/categories/dessert.png";
import fastFood from "../../../assets/images/categories/fast-food.png";
import gujarati from "../../../assets/images/categories/gujarati.png";
import punjabi from "../../../assets/images/categories/punjabi.png";

const categories = [
  { name: "Pizza", image: pizza },
  { name: "Burger", image: burger },
  { name: "Biryani", image: biryani },
  { name: "Chinese", image: chinese },
  { name: "South Indian", image: southIndian },
  { name: "Beverages", image: beverages },
  { name: "Dessert", image: dessert },
  { name: "Fast Food", image: fastFood },
  { name: "Gujarati", image: gujarati },
  { name: "Punjabi", image: punjabi },
];

function Categories() {
  const sliderRef = useRef();
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="categories">
      <div className="container">

        <div className="category-header">
          <div>
            <h2>Categories</h2>
            <p className="section-subtitle">
              Explore your favourite food
            </p>
          </div>

          <div className="slider-buttons">
            <button onClick={scrollLeft}>
              <FaChevronLeft />
            </button>

            <button onClick={scrollRight}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="category-slider" ref={sliderRef}>
          {categories.map((item) => (
            <div
  className={`category-card ${
    activeCategory === item.name ? "active" : ""
  }`}
  key={item.name}
  onClick={() => setActiveCategory(item.name)}
>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;