import "./CouponSection.css";

function CouponSection() {
  return (
    <div className="coupon-section">

      <h2>Coupon</h2>

      <div className="coupon-box">

        <input
          type="text"
          placeholder="Enter coupon code"
        />

        <button disabled>
          Apply
        </button>

      </div>

      <p className="coupon-note">
        Coupon validation will be available after backend integration.
      </p>

    </div>
  );
}

export default CouponSection;