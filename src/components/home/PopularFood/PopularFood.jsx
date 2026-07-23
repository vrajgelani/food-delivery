import "./PopularFood.css";

function PopularFood() {
  const foods = []; // Backend પછી અહીં API data આવશે

  return (
    <section className="popular-food">
      <div className="container">

        <div className="section-header">
          <div>
            <h2>Popular Food</h2>
            <p>Top rated food near you</p>
          </div>

          <button className="view-all-btn">
            View All
          </button>
        </div>

        {foods.length === 0 ? (
          <div className="empty-food">
            <h3>No Popular Food Available</h3>

            <p>
              Food with 4.5+ rating and 1000+ orders will appear here.
            </p>
          </div>
        ) : (
          <div className="food-grid">
            {/* Food Cards */}
          </div>
        )}

      </div>
    </section>
  );
}

export default PopularFood;