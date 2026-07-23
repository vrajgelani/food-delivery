import { Link } from "react-router-dom";
import "./BillSummary.css";

function BillSummary() {
  return (
    <div className="bill-summary">

      <h2>Bill Summary</h2>

      <div className="summary-empty">
        <p>
          Bill summary will appear after you add food items to your cart.
        </p>
      </div>

      <Link to="/checkout" className="checkout-link">
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </Link>

    </div>
  );
}

export default BillSummary;