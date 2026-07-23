import "./RestaurantDetails.css";
import MenuSection from "../../components/restaurant/MenuSection/MenuSection";

function RestaurantDetails() {
  const restaurant = null; // Backend API આવશે

  if (!restaurant) {
    return (
      <section className="restaurant-details-page">
        <div className="container">

          <div className="empty-restaurant">

            <h1>Restaurant Not Available</h1>

            <p>
              This restaurant is unavailable or has not been approved yet.
            </p>

          </div>

          <MenuSection />

        </div>
      </section>
    );
  }

  return (
    <section className="restaurant-details-page">
      <div className="container">

        {/* Restaurant Information */}

        <MenuSection />

      </div>
    </section>
  );
}

export default RestaurantDetails;