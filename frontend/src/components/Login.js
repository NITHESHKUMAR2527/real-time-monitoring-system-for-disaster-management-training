import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2942/2942813.png"
          alt="logo"
          width="70"
        />

        <h1 className="title">
          Disaster Training Monitoring System
        </h1>

        <p className="subtitle">
          Real-Time Monitoring Portal
        </p>

        <input
          className="input-box"
          type="text"
          placeholder="Username"
        />

        <input
          className="input-box"
          type="password"
          placeholder="Password"
        />

        <button className="login-btn">
          Login
        </button>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">Register Here</Link>
        </p>

        <p className="footer-text">
          © 2026 Disaster Training Monitoring System
        </p>

      </div>
    </div>
  );
}

export default Login;