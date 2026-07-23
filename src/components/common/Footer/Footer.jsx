import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-about">

          <h2>Food Delivery</h2>

          <p>
            Fast, fresh and reliable food delivery at your doorstep.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Restaurants</li>
            <li>Offers</li>
            <li>Profile</li>
          </ul>

        </div>

        <div>

          <h3>Categories</h3>

          <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Biryani</li>
            <li>Chinese</li>
          </ul>

        </div>

        <div>

          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> surat,gujarat,India</p>

          <p><FaPhoneAlt /> +91 93283 18485</p>

          <p><FaEnvelope /> vrajgelani1@gmail.com</p>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaLinkedinIn />

            <FaGithub />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Food Delivery. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;