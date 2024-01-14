import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import Register from './pages/register/register';
import Home from './pages/home/home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
