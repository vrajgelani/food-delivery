import "./OrderHistory.css";

function OrderHistory() {
  const orders = [];

  return (
    <section className="order-history-page">
      <div className="container">

        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h2>No Orders Yet</h2>

            <p>
              Your orders will appear here after placing your first order.
            </p>
          </div>
        ) : (
          <div className="orders-list">
            {/* Orders will come from backend */}
          </div>
        )}

      </div>
    </section>
  );
}

export default OrderHistory;