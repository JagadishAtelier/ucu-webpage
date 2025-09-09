import React, { useState, useEffect } from "react";
import "./ForgotPassPage.css";
import image from "/slider-1.jpg";
import { useLocation, useNavigate } from "react-router-dom";

function ForgotPassPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Auto-fill email if passed from login
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setErrorMsg("");

    // 🔹 Mock logic for demo (remove API calls)
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // fake success
    setMessage("OTP sent successfully! (demo only)");
    // navigate("/auth/reset", { state: { email } }); // uncomment if you have reset route
  };

  return (
    <div className="login-container">
      {/* Left Side (Image + Overlay) */}
      <div className="login-left">
        <img alt="auth" className="login-image" src={image} />
        <div className="login-overlay">
          <div className="login-logo">
            <img src="/logo.svg" alt="UCU Logo" />
          </div>
          <div>
            <h2 className="login-title">
              Welcome to <br />
              <span className="highlight">Login Panel!</span>
            </h2>
            <p className="login-subtitle">
              Log in to continue your journey with Kobos.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="login-right">
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <h1 className="form-heading">Forgot Password</h1>
              <p className="form-para">Enter your email to receive an OTP</p>
              <input
                placeholder="Your email address"
                required
                className="form-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errorMsg && <p className="error-text">{errorMsg}</p>}
            {message && <p className="success-text">{message}</p>}
            <button type="submit" className="login-btn mt-4 mb-0">
              Send OTP
            </button>
          </form>
          <button
            type="button"
            className="back-to-login-btn"
            onClick={() => navigate("/auth/login")}
          >
            <i className="bi bi-arrow-left icon-arrow"></i>
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassPage;
