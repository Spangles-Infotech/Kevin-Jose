import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

function Employee() {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    registered_on: '',
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/single_user_detail/${user_id}/`)
      .then(res => {
        const { username, email, phone, registered_on } = res.data;
        setFormData({
          username,
          email,
          phone,
          registered_on,
        });
      })
      .catch(err => console.log(err));
  }, [user_id]);

  const handleDone = () => {
    navigate(`/Signedin`);
  };
  return (
    <div className='container-fluid' key={user_id}>
        <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius:'30px',padding:'10px'}}>
        <div className='d-flex justify-content-between'>
          <h4 style={{ margin: '10px' }}><b>User Details</b></h4>
          <h6 style={{ fontFamily: 'Roboto', margin: '10px' }}>Active</h6>
        </div>
        <div className='row mt-4'>
          <div className='col-lg-2' style={{ marginLeft: '10px' }}>
            <h6>Name </h6>
          </div>
          <div className='col-lg-1' style={{ marginLeft: '10px' }}>
            <h6> :</h6>
          </div>
          <div className='col-lg-5 ' style={{ marginLeft: '10px' }}>
            <p>{formData.username}</p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-lg-2' style={{ marginLeft: '10px' }}>
            <h6>Mobile Number </h6>
          </div>
          <div className='col-lg-1' style={{ marginLeft: '10px' }}>
            <h6>:</h6>
          </div>
          <div className='col-lg-5' style={{ marginLeft: '10px' }}>
            <p>{formData.phone}</p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-lg-2' style={{ marginLeft: '10px' }}>
            <h6>Email</h6>
          </div>
          <div className='col-lg-1' style={{ marginLeft: '10px' }}>
            <h6>:</h6>
          </div>
          <div className='col-lg-5' style={{ marginLeft: '10px' }}>
            <p>{formData.email}</p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-lg-2' style={{ marginLeft: '10px' }}>
            <h6>Registered On</h6>
          </div>
          <div className='col-lg-1' style={{ marginLeft: '10px' }}>
            <h6>:</h6>
          </div>
          <div className='col-lg-5' style={{ marginLeft: '10px' }}>
            <p>{formData.registered_on}</p>
          </div>
        </div>
      </div>
      <div className='row'>
              <div className="col d-flex justify-content-end">

                <button type="button" className="btn btn-danger" style={{ width: '150px', margin: '3%' }} onClick={handleDone} >
                  Done
                </button>
              </div>
            </div>
    </div>
  );
}

export default Employee;
