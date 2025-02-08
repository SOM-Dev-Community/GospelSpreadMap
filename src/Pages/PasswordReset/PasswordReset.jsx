import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../PasswordReset/PasswordReset.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


function PasswordReset() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", { email, password });

    // Simulate successful login
    // After performing any login checks or API calls, redirect to the report page
    // navigate("App");
  };

  return (
    <div className="container">
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: "5%",
          right: "2%",
          backgroundColor: "rgba(48, 48, 48, 0.1)",
          color: "blue",
          padding: "10px",
          borderRadius: "10px",
          fontSize: 12,
          boxShadow: "none",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: 12 }} />
        <Link to="/" className="Link">
          Back to Home
        </Link>
      </Button>

      {/* Left Panel */}
      <div className="left-panel">
        <img
          src="https://d1z1smzgvvydhp.cloudfront.net/MnCiW3vZW58mLWAiMNIj0zdtWtc=/1874x968/smart/filters:format(webp)/https://cdn1.kingschat.online/uploads/media/5393857a73312e31b57f3700/dVc2V2dOeVBYR2tkZkQ3YlNVUkY1dz09/GS_MAP_LOGO.png"
          alt="Gospel Spread Map Logo"
          className="left-panel-logo"
        />
        <h1>Reset Password</h1>
        <p className="left-panel-text">
          Reset your password access your account to continue your journey.
          <br />
          {/* We're glad to have you here! */}
        </p>
      </div>

      {/* Right Panel */}
      <div className="login-form">
        {/* Logo */}

        {/* Login Form */}
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button className="login-btn" type="submit">
            Reset Password
          </button>
        </form>

        {/* Helper Links */}
        <div className="helper-links">
          {/*<p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>*/}
          <p>
            Don't have an account?,<Link to="/signup"> Sign up now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
