import "./AddAddress.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function AddAddress() {
  return (
    <section className="add-address-page">
      <div className="add-address-card">

        <h1>Add New Address</h1>

        <form>

          <input
            type="text"
            placeholder="House / Flat No."
          />

          <input
            type="text"
            placeholder="Street / Area"
          />

          <input
            type="text"
            placeholder="Landmark (Optional)"
          />

          <div className="two-column">

            <input
              type="text"
              placeholder="City"
            />

            <input
              type="text"
              placeholder="State"
            />

          </div>

          <div className="two-column">

            <input
              type="text"
              placeholder="Pincode"
            />

            <select>
              <option>Home</option>
              <option>Work</option>
              <option>Other</option>
            </select>

          </div>

          <button
            type="button"
            className="location-btn"
          >
            <FaMapMarkerAlt />
            Use Current Location
          </button>

          <label className="default-address">
            <input type="checkbox" />
            Set as Default Address
          </label>

          <button
            type="submit"
            className="save-btn"
          >
            Save Address
          </button>

        </form>

      </div>
    </section>
  );
}

export default AddAddress;