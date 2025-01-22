import './App.css';
import Report from './pages/Report/Report';
import SignUp from "./pages/SignUp/SignUp"; // Import the Signup component
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import React Router
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Report open ={open} setOpen = {setOpen}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
