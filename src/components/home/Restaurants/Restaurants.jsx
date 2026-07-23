import "./Restaurants.css";

function Restaurants() {
  return (
    <section className="restaurants">

      <div className="container">

        <h2>Restaurants</h2>

        <p className="section-subtitle">
          Restaurants near you will appear here.
        </p>

        <div className="empty-restaurant">

          <h3>No Restaurant Available</h3>

          <p>
            Restaurants will appear automatically after restaurant registration.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Restaurants;