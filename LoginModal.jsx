import React, { useState } from 'react';
import './LoginModal.css'; // Ensure your styles are defined here
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error message

    // Simple login validation
    if (email === 'sanjanagiridhar253@gmail.com' && password === 'Password') {
      onClose(); // Close the modal on successful login
      navigate('/'); // Redirect to the landing page
    } else {
      setError('Oops! Better luck next time. Please try again.'); // Set error message
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
          
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password" // Password input type
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
          
          <button type="submit" className="form-button">Login</button>
          
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
