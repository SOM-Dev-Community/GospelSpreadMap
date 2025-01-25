import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Ion } from 'cesium'
import { ReachProvider } from './context/ReachProvider.jsx'
Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ACCESS_TOKEN;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReachProvider>
      <App />
    </ReachProvider>
  </React.StrictMode>
);
