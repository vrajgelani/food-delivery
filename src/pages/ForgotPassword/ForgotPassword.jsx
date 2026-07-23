import "./ForgotPassword.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section className="forgot-page">
      <div className="forgot-card">

        <h1>Forgot Password</h1>

        <p>
          Enter your registered email or mobile number.
        </p>

        <form>

          <input
            type="text"
            placeholder="Email or Mobile Number"
          />

          <button type="submit">
            Send OTP
          </button>

        </form>

        <p className="back-login">
          <Link to="/login">
            Back to Login
          </Link>
        </p>

      </div>
    </section>
  );
}

export default ForgotPassword;