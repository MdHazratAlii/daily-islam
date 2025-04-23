import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin: React.FC = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/adminpanel'); // Redirect if already logged in
    }
  }, [navigate]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate username and password (mock validation for now)
    if (username === 'admin' && password === 'password') {
      setStep(2);
    } else {
      alert('Invalid username or password');
    }
  };

  const handle2FASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate security code (mock validation for now)
    if (securityCode === '123456') {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true'); // Set login status
      navigate('/adminpanel'); // Redirect to admin panel after successful login
    } else {
      alert('Invalid security code');
    }
  };

  return (
    <div className="admin-login">
      {step === 1 && (
        <form onSubmit={handleLoginSubmit} className="login-form">
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Next</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handle2FASubmit} className="2fa-form">
          <h2>Two-Factor Authentication</h2>
          <input
            type="text"
            placeholder="Enter Security Code"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;