import "./OrderSuccess.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  return (
    <section className="order-success-page">
      <div className="container">
        <div className="success-card">
          <FaCheckCircle className="success-icon" />

          <h1>Order Placed Successfully!</h1>

          <p>Your order has been placed successfully.</p>

          <div className="order-info">
            <strong>Order ID:</strong> Will be generated after backend integration.
          </div>

          <div className="success-buttons">
            <Link to="/" className="home-btn">
              Back to Home
            </Link>

            <button className="track-btn" disabled>
              Track Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;