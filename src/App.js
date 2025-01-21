import './App.css';
<<<<<<< HEAD
import React from 'react';
import Report from './pages/Report/Report';
import Login from "./login"; 
import ReactDOM from "react-dom";
import MapView from './components/map/MapView';



React.createElement("div", null, React.createElement(Login));

=======
import MapView from './components/map/MapView';
import React from 'react';
import Report from './pages/Report/Report';
>>>>>>> a24ccd4 (Project Structuring)

function App() {
  return (
    <div className="App">
      <h1 className="title1" style={{ color: "white",  fontFamily: "Times new roman" }}>THE GOSPEL SPREAD MAP</h1>
      <MapView />
      <Report />
    </div>
  );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));

export default App;
