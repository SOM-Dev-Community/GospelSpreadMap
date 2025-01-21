import './App.css';
<<<<<<< HEAD
import MapView from './components/map/MapView';
=======
import React from 'react';
import Report from './pages/Report/Report';
>>>>>>> pages/reports-page
import Login from "./login"; 
import React from "react";
import ReactDOM from "react-dom";




React.createElement("div", null, React.createElement(Login));


function App() {
  return (
    <div className="App">
<<<< HEAD
      <h1 className="title1" style={{ color: "white",  fontFamily: "Times new roman" }}>THE GOSPEL SPREAD MAP</h1>
      <MapView />
=======
      <Report />
>>>>>>> pages/reports-page
    </div>
  );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));

export default App;
