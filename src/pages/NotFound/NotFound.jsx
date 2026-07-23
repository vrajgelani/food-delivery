import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notfound-page">
      <div className="notfound-card">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for doesn't exist.
        </p>

        <div className="notfound-buttons">

          <Link to="/" className="home-btn">
            Back to Home
          </Link>

          <Link to="/search" className="search-btn">
            Search Food
          </Link>

        </div>

      </div>
    </section>
  );
}

export default NotFound;