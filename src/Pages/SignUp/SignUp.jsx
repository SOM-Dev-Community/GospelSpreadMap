import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("Registration Data:", formData);
      alert("Registration successful!");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
      <img
          src="https://d1z1smzgvvydhp.cloudfront.net/MnCiW3vZW58mLWAiMNIj0zdtWtc=/1874x968/smart/filters:format(webp)/https://cdn1.kingschat.online/uploads/media/5393857a73312e31b57f3700/dVc2V2dOeVBYR2tkZkQ3YlNVUkY1dz09/GS_MAP_LOGO.png"
          alt="Gospel Spread Map Logo"
          className="left-panel-logo"
        />
        <div>
          <h1>Welcome Aboard!</h1>
          <p className="left-panel-text">
            Join us and start your journey.<br></br> We're excited to have you!
          </p>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-btn" type="submit">
          Register
        </button>
        <div className="helper-links">
          <p>
            Already have an account?<Link to="/login"> Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
