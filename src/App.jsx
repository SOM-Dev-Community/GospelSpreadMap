import './App.css';
import SignUp from "../src/pages/SignUp/SignUp.jsx"; // Import the Signup component
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import Home from '../src/pages/Home/Home.jsx';
import Login from '../src/pages/Login/Login.jsx';
import Reports from '../src/Pages/Reports/Reports.jsx';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Reports open ={open} setOpen = {setOpen}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
