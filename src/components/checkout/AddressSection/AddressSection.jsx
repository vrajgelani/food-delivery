import "./AddressSection.css";

function AddressSection() {
  const addresses = []; // Backend API આવશે

  return (
    <div className="address-section">

      <div className="address-header">
        <h2>Saved Addresses</h2>

        <button disabled className="add-address-btn">
          + Add New Address
        </button>
      </div>

      {addresses.length === 0 ? (
        <div className="empty-address">

          <h3>No Saved Address</h3>

          <p>
            Save an address after login to use it during checkout.
          </p>

        </div>
      ) : (
        <div className="address-list">
          {/* Backend Addresses આવશે */}
        </div>
      )}

    </div>
  );
}

export default AddressSection;