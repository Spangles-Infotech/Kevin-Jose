import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Style/Login.css';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/employee_login/', {
        username: user.username,
        password: user.password,
      });

      const accessToken = response.data.token.access; // Accessing the access token
      const refreshToken = response.data.token.refresh; // Accessing the refresh token
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken); // Storing the refresh token
      axios.defaults.headers.common['Authorization'] = `JWT ${accessToken}`;
      navigate('/dashboard');
      // alert(`Access Token: ${accessToken}\nRefresh Token: ${refreshToken}`);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred during login.');
    }
  };

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value.trim() });
  };

  return (
    <div className='login'>
      <div className="containers">
        <h2 className="mt-4">Login Page</h2>
        <Form onSubmit={handleSubmit} className="input-section">
          <Form.Floating className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Username"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className='form-control'
            />
            <label htmlFor="username">Username</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              autoComplete="current-password" 
              className='form-control rounded-0'
            />
            
            <label htmlFor="password">Password</label>
          </Form.Floating>
          {error && <div style={{color:'red',fontSize:'13px'}} className='m-1'><p>{error}</p></div>}
          <Button className="LOGINBTN" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
