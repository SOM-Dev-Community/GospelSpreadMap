import './App.css';
import React from 'react';
import Report from './pages/Report/Report';
import Login from "./login"; 
import ReactDOM from "react-dom";
import MapView from './components/map/MapView';



React.createElement("div", null, React.createElement(Login));


function App() {
  return (
    <div className="App">
      <MapView />
      <Report />
    </div>
  );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));

export default App;
