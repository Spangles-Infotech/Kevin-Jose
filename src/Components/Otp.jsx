import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useLocation} from 'react-router-dom';
function Otp() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { username, phone, email } = location.state;

  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    console.log({ otp, username, phone, email });
    axios.post('http://localhost:8000/api/register/', { otp, username, phone, email })
      // .then((response) => {
      //   toast.success("Login successfully !", {
      //     onClose: () => navigate('/')
      //   });
      // })
      .then((response) => {
        const { token } = response.data; 
        localStorage.setItem('token', token);
        toast.success("Login successfully !", {
          onClose: () => navigate('/')
        });
      })


      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to verify OTP. Please try again.');
      });
  };
 
  const renderInput = (inputProps, index) => {
    return (
      <input
        {...inputProps}
        key={index}
        className='otp-input'
        style={{ width: '3rem', height: '3.5rem', margin: '0 0.5rem' }} 
      />
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <Navbar />
      <div style={{ width: '100%', maxWidth: '1170px' }}>
        <Card className="my-5" style={{ border: ' 1px solid #D7242A' }}>
          <h3 className='mt-5' style={{ color: '#D7242A', textAlign: 'center' }}>Please enter the one-time password <br/> to verify</h3>
          <p style={{ color: '#565656', fontSize: '30px', textAlign: 'center' }}>A code has been sent to *******621</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            separator={<span> </span>}
            inputStyle={{ width: '3rem', height: '3.5rem' }}
            containerStyle={{ display: 'flex', justifyContent: 'center' }}
            isInputNum={true}
            shouldAutoFocus
            renderInput={renderInput}
          />
          <p style={{ color: '#565656', fontSize: '20px', textAlign: 'center' }}>Resend One-Time Password</p>
          <div className="d-flex justify-content-center mt-5 mb-4">
            <button type="button" className="buttonotp" onClick={handleVerify}>Validate</button>
            <div>
              <ToastContainer />
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Otp;
