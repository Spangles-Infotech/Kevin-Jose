// import React from 'react'

// const Newotp = () => {
//   return (
//     <div>Newotp</div>
//   )
// }

// export default Newotp

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Form, Button, Row, Col,Card,Link } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from 'react';
import request from './request';
import axios from 'axios';
 const  Newotp = () => {
  const navigate = useNavigate(); 
  const handleotp = () => {
   
    navigate('/otpverify'); 
  };
  const [phone, setPhone] = useState(""); 
  
  const handleClicksign = () => {
 
    navigate('/mobile'); 
    console.log('Clicked!');

  };
  


  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    phone: '+91',
 
  });

 
  const handleValue = (e) => {
    e.preventDefault();
    request.post('http://localhost:8000/api/register-otp-generation/', formValue)
      .then((response) => {
        console.log('Response:', response);

           navigate('/otpverify', {
        state: { username: formValue.username, phone: formValue.phone, email: formValue.email }
      });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      });
  };
  


  const handleChange = (e) => {
    const { name, value } = e.target; 
  
    
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  return (
    <div>
    <Navbar/>
    <div className='container' style={{  marginTop: "150px"}}>

    <div className="text-center" >
  <h3 className='mt-5 pt-5 mx-1 text-lg-start bigvalue underline'>
  Enter your Mobile Number
  </h3>
</div>
<Form className="mx-auto my-5" style={{ maxWidth: '400px', width: '100%' }} onSubmit={handleValue}>
  <div className="d-flex justify-content-center">

    <Row className="gy-3 mb-3">
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Control type="" pattern="" placeholder="" style={{ border: '1px solid #D7242A',width: '600px' }} name="phone"
            value={formValue.phone}
            onChange={handleChange} />
        </Form.Group>
      </Col>
      <Col md={6}>
       
      </Col>
    </Row>
  </div>
  <div className="d-flex justify-content-center">
  <button type="button" className="buttonmobile" onClick={handleValue}>Get OTP</button>
</div>
<div className="d-flex justify-content-center">
<p>
Don’t have an account?
      <span style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClicksign}>
      sign up
    </span>
    </p>

</div>
</Form>


    </div>
    <Footer/>
    </div>
  )
}
export default Newotp