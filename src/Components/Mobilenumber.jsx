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
export const Mobilenumber = () => {
  const navigate = useNavigate(); 
  const handleotp = () => {
   
    navigate('/otpverify'); 
  };
  const [phone, setPhone] = useState(""); 
  
  const handleClick = () => {
 
    navigate('/new-path'); 
    console.log('Clicked!');

  };
  


  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    phone:'+91',
 
  });

 
  const handleValue = (e) => {
    e.preventDefault();
    request.post('register-otp-generation/', formValue)
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
  Enter your Details
  </h3>
</div>
    <Form className="mx-5 my-5" onSubmit={handleValue}>
      <Row className="gx-3 mb-3">
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="small-label" style={{color:' #2D2D2D'}} htmlFor="inputFirstName"
          >
            Name
            </Form.Label>
            <Form.Control id="inputFirstName" style={{border:'1px solid #D7242A'}}  type="text" placeholder="Enter your first name" 
              name="username"
              value={formValue.username}
              onChange={handleChange}/>
          </Form.Group>
        </Col>
        <Col md={6} className=''>
          <Form.Group className="mb-3 ms-4">
            <Form.Label className="small-label"style={{color:' #2D2D2D'}}  htmlFor="inputLastName">
        Email
            </Form.Label>
            <Form.Control id="inputLastName"style={{border:'1px solid #D7242A'}}  type="email" placeholder="Enter your email " 
              name="email"
              value={formValue.email}
              onChange={handleChange} />
          </Form.Group>
        </Col>
      </Row>

      <Row className="gx-3 mb-3">
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="small-label w-100" style={{color:' #2D2D2D'}}  htmlFor="inputOrgName">
              PhoneNumber
            </Form.Label>
            
            <Form.Control type="" pattern="" placeholder="" style={{border:'1px solid #D7242A'}}  name="phone"
                          value={formValue.phone}
                          onChange={handleChange} />


          </Form.Group>
        </Col>
        <Col md={6}>
          
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
  <button type="button" className="buttonmobile" onClick={handleValue}>Get OTP</button>
</div>
<div className="d-flex justify-content-center">
<p>
      Already have an account? 
      <span style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClick}>
      Log in
    </span>
    </p>

</div>

    </Form>
  

    </div>
    <Footer/>
    </div>
  )
}

