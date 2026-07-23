import "./Checkout.css";
import AddressSection from "../../components/checkout/AddressSection/AddressSection";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <section className="checkout-page">
      <div className="container">

        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-layout">

          {/* Left Side */}
          <div className="checkout-left">

            {/* Saved Address Section */}
            <AddressSection />

            {/* Payment Method */}
            <div className="checkout-card">

              <h2>Payment Method</h2>

              <label className="payment-option">
                <input type="radio" name="payment" />
                Cash on Delivery
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" />
                UPI / Online Payment
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" />
                Net Banking
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" />
                Credit / Debit Card
              </label>

            </div>

            {/* Order Notes */}
            <div className="checkout-card">

              <h2>Order Notes</h2>

              <textarea
                placeholder="Delivery instructions (optional)"
              ></textarea>

            </div>

          </div>

          {/* Right Side */}
          <div className="checkout-right">

            <div className="checkout-summary">

              <h2>Order Summary</h2>

              <p>
                Order summary will appear after adding food to the cart.
              </p>

              <Link to="/order-success" className="place-order-link">
                <div className="checkout-summary">

  <h2>Order Summary</h2>

  <p>
    Order summary will appear after adding food to the cart.
  </p>

  <Link to="/order-success" className="place-order-link">
    <button className="place-order-btn">
      Place Order
    </button>
  </Link>

</div>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Checkout;