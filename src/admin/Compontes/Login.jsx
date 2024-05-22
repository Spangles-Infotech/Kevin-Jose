// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../Style/Login.css';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Username:', username);
//     console.log('Password:', password);

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/employee_login/', {
//         username: username,
//         password: password
//       });
//       console.log('Data:', response.data);

    
//       localStorage.setItem('token', response.data.token);
     
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error fetching data:', error);
 
//     }
//   };


//   const getToken = () => {
//     return localStorage.getItem('token');
//    };
//   console.log('Token:', getToken());

//   return (
//     <div className='login' style={{ backgroundColor: 'red' }}>
//       <div className="containers">
//         <h2 className="mt-5">Login Page</h2>

//         <Form onSubmit={handleSubmit} className="input-section">
//           <Form.Floating className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <label htmlFor="username">Username</label>
//           </Form.Floating>
//           <Form.Floating className="mb-3">
//             <Form.Control
//               type="password"
//               placeholder="Enter Password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <label htmlFor="password">Password</label>
//           </Form.Floating>

//           <Button className="LOGINBTN" type="submit">
//             Login
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
// export default Login;
// 

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
      const response = await axios.post(`http://127.0.0.1:8000/api/employee_login/`, {
        username: user.username,
        password: user.password,
      });
  
      const token = response.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
      navigate('/dashboard');
    } catch (error) {
      setError(error.response.data.error || 'An error occurred during login.');
    }
  };
  

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value.trim() });
  };

  return (
    <div className='login'>
      <div className="containers">
        {error && <div className='text-warning'>{error}</div>}
        <h2 className="mt-4">Login Page</h2>
        <Form onSubmit={handleSubmit} className="input-section">
          <Form.Floating className="mb-3">
            <Form.Control
              type="text"
              placeholder="username" // Change placeholder text
              id="username"
              name="username" // Change name to 'employee_code'
              value={user.username} // Change 'username' to 'employee_code'
              onChange={handleInputChange}
              className='form-control'
            />
            <label htmlFor="username">username</label>
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
          <Button className="LOGINBTN" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
