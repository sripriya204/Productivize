import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/Users/siri/Productivize/src/LoginPage.css';


const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Simulate successful sign-up
    if (username && password) {
      // Clear form fields
      setUsername('');
      setPassword('');
      // Navigate to the calendar page
      navigate('/calendar');
    } else {
      // Handle unsuccessful sign-up (show error message, etc.)
      console.log('Sign-up failed');
    }
  }

  return (
    <div>
      <h1 className="welcome-text">Welcome to PRODUCTIVIZE</h1>
      <div className="form-container">
        <h2>SIGN UP</h2>
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
          <button onClick={handleSignUp}>Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
