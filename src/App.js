import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import React from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-container">
          <div className="main-container">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </div>
          </div>
        </nav>

        <main className="main-container">
          <Routes>
            <Route path="/" element={
              <div className="welcome-container">
                <h1 className="welcome-title">Welcome to THE APP</h1>
                <p className="welcome-text">Please login or register to continue</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <Link to="/login" className="link-blue">Go to Login</Link>
                  <Link to="/register" className="link-blue">Go to Register</Link>
                </div>
              </div>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;