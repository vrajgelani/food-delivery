import "./Settings.css";
import { Link } from "react-router-dom";
import {
  FaUserCog,
  FaLock,
  FaBell,
  FaGlobe,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";

function Settings() {
  return (
    <section className="settings-page">
      <div className="container">

        <h1>Settings</h1>

        <div className="settings-list">

          <Link to="/profile/edit" className="setting-item">
            <FaUserCog />
            <span>Edit Profile</span>
          </Link>

          <Link to="/reset-password" className="setting-item">
            <FaLock />
            <span>Change Password</span>
          </Link>

          <Link to="/profile/notifications" className="setting-item">
            <FaBell />
            <span>Notification Preferences</span>
          </Link>

          <button className="setting-item">
            <FaGlobe />
            <span>Language</span>
          </button>

          <button className="setting-item">
            <FaMoon />
            <span>Dark Mode</span>
          </button>

          <button className="logout-setting">
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </section>
  );
}

export default Settings;