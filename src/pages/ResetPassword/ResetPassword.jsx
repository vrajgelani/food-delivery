import "./ResetPassword.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPassword() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <section className="reset-page">
      <div className="reset-card">

        <h1>Reset Password</h1>

        <p>Create your new password.</p>

        <form>

          <div className="password-field">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <div className="password-field">

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
            />

            <span onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <div className="password-strength">
            Password strength will appear here.
          </div>

          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>
    </section>
  );
}

export default ResetPassword;