// src/components/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard or home page
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="form-input"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary">
          Sign In
        </button>

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link to="/register" className="link-blue">
            Don't have an account? Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;