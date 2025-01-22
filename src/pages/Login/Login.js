import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", { email, password });
  };

  return React.createElement(
    "div",
    { style: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" } },
    React.createElement(
      "form",
      { onSubmit: handleSubmit, style: { border: "1px solid #ccc", padding: "20px", borderRadius: "10px" } },
      React.createElement("h2", null, "Login"),
      React.createElement(
        "div",
        { style: { marginBottom: "15px" } },
        React.createElement("label", null, "Email:"),
        React.createElement("input", {
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          style: { marginLeft: "10px", padding: "5px" },
          required: true,
        })
      ),
      React.createElement(
        "div",
        { style: { marginBottom: "15px" } },
        React.createElement("label", null, "Password:"),
        React.createElement("input", {
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          style: { marginLeft: "10px", padding: "5px" },
          required: true,
        })
      ),
      React.createElement(
        "button",
        { type: "submit", style: { padding: "10px 20px" } },
        "Login"
      )
    )
  );
}

export default Login;
