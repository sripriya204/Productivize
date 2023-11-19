import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/Users/siri/Productivize/src/LoginPage.css';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate successful login
    if (username === 'demo' && password === 'password') {
      // Clear form fields
      setUsername('');
      setPassword('');
      // Navigate to the calendar page
      navigate('/calendar');
    } else {
      // Handle unsuccessful login (show error message, etc.)
      console.log('Login failed');
    }
  }

  return (
    <div>
      <h1 className="welcome-text">Welcome to PRODUCTIVIZE</h1>
      <div className="form-container">
        <h2>LOGIN</h2>
        <div className="form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
