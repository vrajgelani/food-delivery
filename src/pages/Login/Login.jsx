import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login-page">
      <div className="login-card">

        <h1>Login</h1>

        <form>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          {/* Forgot Password */}
          <div className="forgot-link">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Login;