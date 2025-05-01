import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./userform.css";
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigateTologin = () => {
    navigate("/userform");
  };
  const handleRoleSelect = () => {
    navigate("/signup");
  };

  return (
    <div className="dart-signup-container">
      <div className="dart-signup-wrapper">
        {/* Left Section */}
        <section className="dart-left-pane">
          <div className="dart-form-section">
          <center><img
              src="src/assets/DART (2).png"
              alt="DART Logo"
              style={{ width: "100px", height: "auto" }}
            /></center> 
            <center>
              {" "}
              <h1 className="dart">Login</h1>
            </center>
            <center>
              {" "}
              <p className="dart-subtext">
                Welcome back. Enter your credentials to access your account
              </p>
            </center>
            <div className="dart-input-list">
              <div className="dart-input-field">
                <FaUser className="dart-icon" />
                <input type="text" placeholder="Username" />
              </div>

              <div className="dart-input-field">
                <FaLock className="dart-icon" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="dart-forgot-password">forgot password?</div>
            </div>
            <div className="remember-me">
            <label htmlFor="remember">Remember me</label>
              <input type="checkbox" id="remember" />
              
            </div>
            <div className="dart-button-group">
              <button
                className="dart-secondary-button"
                onClick={handleNavigateTologin}
              >
                <center>Login</center>
              </button>
            </div>
            <br></br>
            <div className="dart-or-separator">Or Signup with</div>
            <div className="separator">
              <span className="google-icon">
                <FcGoogle size={24} />
              </span>
              <span className="apple-icon">
                <FaApple size={24} />
              </span>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="dart-right-pane">
          <div className="dart-login-prompt">
            <p className="account">
              Already have an<br></br> account?
            </p>
            <div className=" ">
              <button className="button" onClick={handleRoleSelect}>
                Signup
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
