import "./Notifications.css";

function Notifications() {
  return (
    <section className="notifications-page">
      <div className="container">

        <h1>Notifications</h1>

        <div className="notification-settings">

          <div className="notification-item">
            <div>
              <h3>Order Updates</h3>
              <p>Receive updates about your orders.</p>
            </div>

            <input type="checkbox" />
          </div>

          <div className="notification-item">
            <div>
              <h3>Offers & Coupons</h3>
              <p>Get notified about discounts and offers.</p>
            </div>

            <input type="checkbox" />
          </div>

          <div className="notification-item">
            <div>
              <h3>Delivery Updates</h3>
              <p>Receive delivery status notifications.</p>
            </div>

            <input type="checkbox" />
          </div>

          <div className="notification-item">
            <div>
              <h3>Restaurant Updates</h3>
              <p>Get restaurant announcements.</p>
            </div>

            <input type="checkbox" />
          </div>

        </div>

        <div className="notification-history">

          <h2>Recent Notifications</h2>

          <div className="empty-notification">
            <h3>No Notifications</h3>

            <p>
              Your notifications will appear here after backend integration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Notifications;