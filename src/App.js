import "./App.css";
import React, {useState} from "react";
import Report from "./pages/Report/Report";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Report open ={open} setOpen = {setOpen}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
