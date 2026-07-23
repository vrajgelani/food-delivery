import "./Restaurants.css";

function Restaurants() {
  const restaurants = []; // Backend પછી API data આવશે

  return (
    <section className="restaurants">
      <div className="container">

        <div className="section-header">
          <div>
            <h2>Restaurants Near You</h2>
            <p>Discover the best restaurants in your area.</p>
          </div>

          <button className="view-all-btn">
            View All
          </button>
        </div>

        {restaurants.length === 0 ? (
          <div className="empty-restaurant">
            <h3>No Restaurants Available</h3>

            <p>
              Restaurants will appear here after restaurant owners register and
              are approved.
            </p>
          </div>
        ) : (
          <div className="restaurant-grid">
            {/* Restaurant Cards */}
          </div>
        )}

      </div>
    </section>
  );
}

export default Restaurants;