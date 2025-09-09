import React, { useState, useEffect } from "react";
import image from "/slider-1.jpg";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";
import VerificationSuccess from "./VerificationSuccess";

function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verified, setVerified] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    specialChar: false,
    number: false,
    capitalLetter: false,
  });

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Mask email for OTP step
  const maskEmail = (email) => {
    if (!email) return "";
    const [localPart, domain] = email.split("@");
    const masked =
      localPart.length > 2
        ? localPart[0] + "****" + localPart[localPart.length - 1]
        : "****";
    return `${masked}@${domain}`;
  };

  // Validate password rules
  const handlePasswordBlur = () => {
    const { password } = formData;
    setPasswordValidation({
      length: password.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /\d/.test(password),
      capitalLetter: /[A-Z]/.test(password),
    });
  };

  // Timer for OTP resend
  useEffect(() => {
    let interval = null;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 1: Fake signup + send OTP
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email) return setError("Email is required.");
    if (!formData.password || !formData.confirmPassword)
      return setError("Enter password and confirm password.");
    if (formData.password !== formData.confirmPassword)
      return setError("Passwords do not match!");

    if (!Object.values(passwordValidation).every(Boolean)) {
      return setError("Password must meet all requirements.");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("OTP sent to your email!");
      setStep(2);
      setTimer(30);
      setCanResend(false);
    }, 1000);
  };

  // Step 2: Fake OTP verify + complete signup
  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.otp !== "123456") {
      return setError("Invalid OTP. Try 123456 for demo.");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
    }, 1000);
  };

  // Fake resend OTP
  const handleResendOtp = () => {
    setResending(true);
    setTimeout(() => {
      setResending(false);
      setSuccess("New OTP sent successfully!");
      setTimer(30);
      setCanResend(false);
    }, 1000);
  };

  if (verified) {
    return <VerificationSuccess onComplete={() => navigate("/")} />;
  }

  return (
    <div className="login-container">
      {/* Left side */}
      <div className="login-left">
        <img alt="auth" className="login-image" src={"https://npf-unlayer.s3.ap-south-1.amazonaws.com/unlayer%2Fimages%2F1717766775849-acity-univercity-college.webp"} />
        <div className="login-overlay">
          <div className="login-logo">
            {/* <img src="/logo.svg" alt="UCU Logo" /> */}
          </div>
          <div>
            <h2 className="login-title">
              Create Your <br />
              <span className="highlight">UCU Account!</span>
            </h2>
            <p className="login-subtitle">Start your smart lifestyle today.</p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="login-right">
        <div className="login-form-container">
          {step === 1 && (
            <form className="login-form" onSubmit={handleSignup}>
              <h1 className="form-heading">Sign Up</h1>

              <label className="form-label" htmlFor="name">
                Full Name
              </label>
              <input
                placeholder="Your full name"
                required
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Your email address"
                required
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label className="form-label" htmlFor="phone">
                Phone Number
              </label>
              <input
                placeholder="Your mobile number"
                className="form-input"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <label className="form-label" htmlFor="password">
                Create Password
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
                  onBlur={handlePasswordBlur}
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
              <p className="password-hint">
                At least 8 characters, one special character, one number, one
                capital letter
              </p>

              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                placeholder="Enter password again"
                required
                className="form-input"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" /> Remember Me
                </label>
                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => navigate("/auth/login")}
                >
                  Log in
                </button>
              </div>

              {error && <p className="error-text">{error}</p>}
              {success && <p className="success-text">{success}</p>}

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          )}

          {step === 2 && (
            <form className="login-form" onSubmit={handleVerifyAndSignup}>
              <h1 className="form-heading">Verify OTP</h1>
              <p className="otp-sent-text">
                OTP sent to {maskEmail(formData.email)}
              </p>

              <label className="form-label">Enter OTP</label>
              <input
                placeholder="Enter OTP (use 123456)"
                required
                className="form-input"
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
              />

              {error && <p className="error-text">{error}</p>}
              {success && <p className="success-text">{success}</p>}

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Creating Account..." : "Verify & Sign Up"}
              </button>

              <div className="resend-otp-container">
                {canResend ? (
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm"
                    onClick={handleResendOtp}
                    disabled={loading}
                  >
                    {resending ? "Sending..." : "Resend OTP"}
                  </button>
                ) : (
                  <p className="resend-timer">Resend in {timer}s</p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
