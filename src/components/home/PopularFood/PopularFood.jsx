import "./PopularFood.css";

function PopularFood() {
  return (
    <section className="popular-food">

      <div className="container">

        <h2>Popular Food</h2>

        <p className="section-subtitle">
          Top rated food will appear here automatically.
        </p>

        <div className="empty-food">

          <h3>No Popular Food Available</h3>

          <p>
            Food with 4.5+ rating and 1000+ orders will appear here.
          </p>

        </div>

      </div>

    </section>
  );
}

export default PopularFood;