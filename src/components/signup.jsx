import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";
const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigateToWelcome = () => {
    navigate("/welcome");
  };

  const handleNavigateToLogin = () => {
    navigate("/login"); // 👈 Navigate to the Login page
  };

  const handleNavigateToUserform = () => {
    navigate("/userform"); // 👈 Navigate to the Login page
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
              <h1 className="dart">Signup</h1>
            </center>
            <center>
              <p className="dart-subtext">
                Welcome! Enter your credentials to create your account
              </p>
            </center>

            <div className="dart-input-list">
              <div className="dart-input-field">
                <FaUser className="dart-icon" />
                <input type="text" placeholder="Username" />
              </div>

              <div className="dart-input-field">
                <FaEnvelope className="dart-icon" />
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="dart-input-field">
                <FaLock className="dart-icon" />
                <input type="password" placeholder="Password" />
              </div>

              <div className="dart-input-field">
                <FaCheck className="dart-icon" />
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>

            <div className="dart-button-group ">
              <button
                className="dart-secondary-button dart-form-section img"
                onClick={handleNavigateToUserform}
              >
                <center>Signup</center>
              </button>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="dart-right-pane">
          <div className="dart-login-prompt">
            <p className="account">
              Already have an
              <br />
              account?
            </p>
            <div className="dart-button-group">
              <button
                className="button"
                onClick={handleNavigateToLogin} // 👈 Add this handler
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
