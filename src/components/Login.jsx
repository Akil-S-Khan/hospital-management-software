import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      // Simple regex for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Form ka default submit rok dega
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Validation pass hone par dashboard redirect
      navigate("/dashboard");
    } else {
      setErrors(validationErrors); // Error messages show karne ke liye
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('/Login-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="p-4 rounded shadow"
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1 className="text-center mb-3">Login</h1>
        <h4 className="text-center mb-4">Login to your Account</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address:
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>

            <a href="#" className="text-decoration-none">
              Reset Password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
