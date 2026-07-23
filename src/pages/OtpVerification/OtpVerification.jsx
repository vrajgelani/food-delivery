import "./OtpVerification.css";
import { Link } from "react-router-dom";

function OtpVerification() {
  return (
    <section className="otp-page">
      <div className="otp-card">

        <h1>OTP Verification</h1>

        <p>
          Enter the 6-digit OTP sent to your registered mobile number or email.
        </p>

        <div className="otp-inputs">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>

        <p className="timer">
          Resend OTP in <strong>00:30</strong>
        </p>

        <button className="verify-btn">
          Verify OTP
        </button>

        <button className="resend-btn" disabled>
          Resend OTP
        </button>

        <p className="back-login">
          <Link to="/login">Back to Login</Link>
        </p>

      </div>
    </section>
  );
}

export default OtpVerification;