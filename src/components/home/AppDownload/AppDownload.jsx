import "./AppDownload.css";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import appPreview from "../../../assets/images/app/app-preview.png";

function AppDownload() {
  return (
    <section className="app-download">
      <div className="container app-container">

        <div className="app-content">
          <h2>Get the Food Delivery App</h2>

          <p>
            Order food faster, track your delivery in real time,
            and enjoy exclusive app-only offers.
          </p>

          <div className="app-buttons">
            <button>
              <FaGooglePlay />
              Google Play
            </button>

            <button>
              <FaApple />
              App Store
            </button>
          </div>
        </div>

        <div className="mobile-preview">
  <img src={appPreview} alt="Food Delivery App" />
</div>

      </div>
    </section>
  );
}

export default AppDownload;