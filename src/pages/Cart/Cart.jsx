import "./Cart.css";
import BillSummary from "../../components/cart/BillSummary/BillSummary";

function Cart() {
  const cartItems = []; // Backend API આવશે

  return (
    <section className="cart-page">
      <div className="container">

        <div className="cart-header">
          <h1>My Cart</h1>
        </div>

        {cartItems.length === 0 ? (

          <div className="cart-layout">

            <div className="empty-cart">

              <h2>Your Cart is Empty</h2>

              <p>
                Add food items from a restaurant to place your order.
              </p>

            </div>

            <BillSummary />

          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-items">
              {/* Cart Items from Backend */}
            </div>

            <BillSummary />

          </div>

        )}

      </div>
    </section>
  );
}

export default Cart;