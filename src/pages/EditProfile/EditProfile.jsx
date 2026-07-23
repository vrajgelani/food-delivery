import "./EditProfile.css";
import { FaCamera } from "react-icons/fa";

function EditProfile() {
  return (
    <section className="edit-profile-page">
      <div className="edit-profile-card">

        <h1>Edit Profile</h1>

        <div className="profile-image">

          <div className="avatar">
            👤
          </div>

          <button className="upload-btn">
            <FaCamera />
            Change Photo
          </button>

        </div>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
          />

          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>
    </section>
  );
}

export default EditProfile;