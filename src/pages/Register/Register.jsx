import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register-page">
      <div className="register-card">

        <h1>Create Account</h1>

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

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <label className="terms">
            <input type="checkbox" />
            I agree to the Terms & Conditions
          </label>

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </section>
  );
}

export default Register;