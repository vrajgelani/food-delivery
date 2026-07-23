import "./Checkout.css";

function Checkout() {
  return (
    <section className="checkout-page">
      <div className="container">

        <h1 className="checkout-title">
          Checkout
        </h1>

        <div className="checkout-layout">

          <div className="checkout-left">

            <div className="checkout-card">
              <h2>Delivery Address</h2>

              <p>
                Your saved addresses will appear here after login.
              </p>
            </div>

            <div className="checkout-card">
              <h2>Payment Method</h2>

              <p>
                Payment options will be available during checkout.
              </p>
            </div>

            <div className="checkout-card">
              <h2>Order Notes</h2>

              <textarea
                placeholder="Add delivery instructions (optional)"
              ></textarea>
            </div>

          </div>

          <div className="checkout-right">

            <div className="checkout-summary">

              <h2>Order Summary</h2>

              <p>
                Order summary will appear after items are added to the cart.
              </p>

              <button disabled>
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Checkout;