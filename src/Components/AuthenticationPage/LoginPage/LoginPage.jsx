import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Mock login handler (no API)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    setTimeout(() => {
      // Fake validation
      if (!formData.email && !formData.phone) {
        setErrorMsg("Please enter email or phone number.");
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setErrorMsg("Password must be at least 6 characters.");
        setLoading(false);
        return;
      }

      // Demo success
      setSuccessMsg("Login successful! Redirecting...");

      setLoading(false);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 1000);
  };

  return (
    <div className="login-container">
      {/* Left Side (Image + Overlay) */}
      <div className="login-left">
        <img alt="auth" className="login-image" src={"https://npf-unlayer.s3.ap-south-1.amazonaws.com/unlayer%2Fimages%2F1717766775849-acity-univercity-college.webp"} />
        <div className="login-overlay">
          <div className="login-logo">
            {/* <img src="/logo.svg" alt="UCU Logo" /> */}
          </div>
          <div>
            <h2 className="login-title">
              Welcome to <br />
              <span className="highlight">Login Panel!</span>
            </h2>
            <p className="login-subtitle">
              Log in to continue your journey with ucu.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="login-right">
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <h1 className="form-heading">Login</h1>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Your email address"
                required={formData.phone.length === 0}
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={formData.phone.length > 0}
              />
              <div className="singup-or-text">
                <p> OR </p>
              </div>
              <label className="form-label" htmlFor="phone">
                Phone Number
              </label>
              <input
                placeholder="Your phone number"
                required={formData.email.length === 0}
                className="form-input"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={formData.email.length > 0}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <div className="input-wrapper">
                <input
                  placeholder="Enter your password"
                  required
                  className="form-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </span>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                Remember Me
              </label>
              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  navigate("/auth/forgot-password", {
                    state: { email: formData.email },
                  })
                }
              >
                Forget Password?
              </button>
            </div>
            {errorMsg && <p className="error-text">{errorMsg}</p>}
            {successMsg && <p className="success-text">{successMsg}</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
            <div className="m-auto mt-2">
              <Link to={"/auth/register"} className="forgot-password">
                Don't have an account? Sign up here.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
