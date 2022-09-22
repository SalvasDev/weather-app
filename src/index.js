import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if ( !navigator.geolocation) {
  alert('Your browser does not have a geolocation option')
  throw new Error ('Your browser does not have a geolocation option')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


reportWebVitals();
