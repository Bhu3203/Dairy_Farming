import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import { useNavigate } from "react-router-dom";
export default function LoginRegister() {
  const navigate = useNavigate();
  const admin = async () => {
    navigate("/milk");
  };

  return (
    <div id="log">
      <div className="wrapper">
        <div className="form-box login">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/milk">Forgot Password?</Link>
            </div>
            <button type="submit" onClick={admin}>
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
