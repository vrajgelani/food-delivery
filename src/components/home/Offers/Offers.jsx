import "./Offers.css";

function Offers() {
  return (
    <section className="offers">

      <div className="container">

        <h2>Special Offers</h2>

        <p className="section-subtitle">
          Latest restaurant offers will appear here.
        </p>

        <div className="empty-offers">

          <h3>No Offers Available</h3>

          <p>
            Offers will appear automatically after admin adds them.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Offers;