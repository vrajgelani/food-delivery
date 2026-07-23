import "./Profile.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaMapMarkerAlt,
  FaClipboardList,
  FaHeart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Profile() {
  return (
    <section className="profile-page">
      <div className="container">

        <div className="profile-header">
          <div className="avatar">
            <FaUser />
          </div>

          <div>
  <h2>User Name</h2>

  <p>Email & Mobile will appear after login.</p>

  <Link
  to="/profile/edit"
  className="edit-profile-btn"
  style={{
    display: "inline-block",
    background: "#E23744",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "8px",
    marginTop: "15px",
  }}
>
  Edit Profile
</Link>
</div>
        </div>

        <div className="profile-grid">

          <Link to="/profile/orders" className="profile-card">
            <FaClipboardList />
            <h3>My Orders</h3>
          </Link>

          <Link to="/profile/address" className="profile-card">
            <FaMapMarkerAlt />
            <h3>Manage Addresses</h3>
          </Link>

          <Link to="/profile/favorites" className="profile-card">
            <FaHeart />
            <h3>Favorites</h3>
          </Link>

          <Link to="/profile/settings" className="profile-card">
            <FaCog />
            <h3>Settings</h3>
          </Link>

          <button className="logout-btn" disabled>
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </section>
  );
}

export default Profile;