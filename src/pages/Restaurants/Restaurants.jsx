import "./Restaurants.css";
import FilterSidebar from "../../components/restaurant/FilterSidebar/FilterSidebar";
import RestaurantCard from "../../components/restaurant/RestaurantCard/RestaurantCard";

function Restaurants() {
  const restaurants = []; // Backend API આવશે

  return (
    <section className="restaurants-page">
      <div className="container">

        {/* Page Header */}
        <div className="page-header">
          <h1>Restaurants</h1>
          <p>Discover the best restaurants near you.</p>
        </div>

        {/* Search */}
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search restaurants..."
          />

          <button>Search</button>
        </div>

        {/* Main Layout */}
        <div className="restaurant-layout">

          {/* Left Sidebar */}
          <FilterSidebar />

          {/* Right Content */}
          <div className="restaurant-content">

            {restaurants.length === 0 ? (
              <div className="empty-state">
                <h2>No Restaurants Available</h2>
                <p>
                  Restaurants will appear here after registration and admin approval.
                </p>
              </div>
            ) : (
              <div className="restaurant-grid">

  <RestaurantCard
    name="Restaurant Name"
    cuisine="Cuisine"
    rating="4.8"
    deliveryTime="25 min"
    location="City"
    isOpen={true}
  />

  <RestaurantCard
    name="Restaurant Name"
    cuisine="Cuisine"
    rating="4.6"
    deliveryTime="35 min"
    location="City"
    isOpen={false}
  />

</div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Restaurants;