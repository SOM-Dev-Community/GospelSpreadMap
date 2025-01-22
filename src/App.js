import './App.css';

import MapView from './components/map/MapView';
import Report from './pages/Report/Report';
import Login from "./login";
import Signup from "./signup"; // Import the Signup component
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import React Router

function App() {
  return (
    <Router>
      <div className="App">
      

        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/login" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
            Login
          </Link>
          <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
            Signup
          </Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Default content: MapView and Report */}
          <Route
            path="/"
            element={
              <>
                <MapView />
                <Report />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Render the App component using modern React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
