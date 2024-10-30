import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure you have an App component in your src directory
import './index.css'; // Optional: If you have a CSS file to import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);