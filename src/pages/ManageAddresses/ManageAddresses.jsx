import "./ManageAddresses.css";
import { Link } from "react-router-dom";

function ManageAddresses() {
  const addresses = [];

  return (
    <section className="manage-address-page">
      <div className="container">

        <div className="address-header">
          <h1>Manage Addresses</h1>

<Link to="/profile/address/add" className="add-address-link">
  <button className="add-address-btn">
    + Add New Address
  </button>
</Link>
        </div>

        {addresses.length === 0 ? (
          <div className="empty-address">

            <h2>No Saved Addresses</h2>

            <p>
              Your saved delivery addresses will appear here after backend integration.
            </p>

          </div>
        ) : (
          <div className="address-list">
            {/* Backend Data */}
          </div>
        )}

      </div>
    </section>
  );
}

export default ManageAddresses;