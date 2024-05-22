import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import '../Style/Employeeprofile.css'
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

const EmployeeDetails = () => {
  const { employee_code } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    email_office: '',
    designation: '',
    employee_code: '',
    joining_date: '',
    gender: '',
    marital_status: '',
    phone_number: '',
    alternative_phone_number: '',
    // address_line1:'',
    // address_line2:'',
    blood_group: '',
    aadhar_number: '',
    account_number: '',
    ifsc_code: '',
    bank_name: '',
    pan_number: '',
    status: '',
    // district:'',
    // state:'',
    // country:'',
    // city:'',
    zipcode: '',
    educations: [],
    addresses: [],
    status: '',

  });

  useEffect(() => {
    console.log("username", employee_code)
    axios.get(`http://127.0.0.1:8000/api/employee_detail/${employee_code}/`)
      .then(res => {
        const { name, email, designation, marital_status, employee_code, joining_date, gender,
          phone_number, alternative_phone_number, email_office, email_personal, blood_group, aadhar_number, account_number, ifsc_code, bank_name, pan_number, status, photo,
          educations, addresses,
          // address_line1,address_line2,city, district, state,country,zipcode 

        } = res.data;
        setFormData({
          name, email, designation, marital_status, employee_code, joining_date, gender,
          phone_number, alternative_phone_number, email_office, email_personal, blood_group, aadhar_number,
          // address_line1,address_line2,city,district, state,country,zipcode,
          account_number, ifsc_code, bank_name, pan_number, status, photo,
          educations, addresses,

        });
      })
      .catch(err => console.log(err));
  }, [employee_code]);
  const handleStatusChange = (status) => {
    setFormData({ ...formData, status });
  };

  const handleSubmit = () => {
    axios.post(`http://127.0.0.1:8000/api/employee_status/${employee_code}/`, { status: formData.status })
      .then(res => {
        console.log('Status updated successfully');
        navigate('/Employeeprofile');
      })
      .catch(err => {
        console.error('Error updating status:', err);
      });
  };

  return (
    <Container >
      <div className='EmployeeDetails ' style={{ marginBottom: '50%' }}>
        <div className='row mb-5 m-3' key={formData.employee_code}>
          <h2 className='Detailes mb-5 ' >Employee Details</h2>
          <div className='col-sm-8 '>
            <div className='row '>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Name: </h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.name}
                </h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Employee code: </h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.employee_code}
                </h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'> Designation :</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.designation}
                </h5>
              </div>
            </div>


            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Joining Date : </h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.joining_date}
                </h5>
              </div>
            </div>


            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Gender : </h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.gender}
                </h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Marital Status : </h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.marital_status}
                </h5>
              </div>
            </div>
            {formData.educations.map((education, index) => (
              <div className='row mt-3' key={index}>
                <div className='col-sm-5'>
                  <h5 className='Detailes1'>Education Qualification:</h5>
                </div>
                <div className='col-sm-3'>
                  <h5 className='Detailes1'>
                    {education.qualification}
                  </h5>
                </div>
                <div className='col-sm-3'>
                  <Link to={education.certification.certification_file} style={{ textDecoration: 'none', color: 'red' }} > <span style={{ color: 'red' }}> view document </span></Link>
                </div>
              </div>
            ))}
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Phone Number:</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.phone_number}
                </h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Alternative Phone Number :</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.alternative_phone_number}
                </h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Email Personal:</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'> {formData.email_personal}</h5>
              </div>
            </div>
            <div className='row mt-3 mb-5'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Email Personal:</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'> {formData.email_office}</h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Blood Group :</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.blood_group}
                </h5>
              </div>
            </div>
            <div className='row mt-3' >
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Aadhaar Number :</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>
                  {formData.aadhar_number}
                </h5>
              </div>
            </div>
            {formData.addresses.map((address, index) => (
              <div className='row mt-3' key={index}>
                <div className='col-sm-5'>
                  <h5 className='Detailes1'>{address.address_type === 'present' ? 'Present Address' : 'Permanent Address'}</h5>
                </div>
                <div className='col'>
                  <h5 className='Detailes1'>
                    {address.address_line1}, {address.city}, {address.district}, {address.state}, {address.country}, {address.zipcode}
                  </h5>
                </div>
              </div>
            ))}
            {/* {education.certification.certification_name} */}
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Account Number:</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'> {formData.account_number}</h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'> IFC Code:</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>{formData.ifsc_code}</h5>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'>Bank Name:</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'> {formData.bank_name}</h5>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-5'>
                <h5 className='Detailes1'> Pan Number :</h5>
              </div>
              <div className='col'>
                <h5 className='Detailes1'>{formData.pan_number}</h5>
              </div>
            </div>
            <div className='row mb-5 Detailes1'>
              <div className='col-sm-5 mt-2'>
                <h4>Status</h4>
              </div>
              <div className='col d-flex ' >

                <div className="form-check form-check-inline">
                  <input
                    className="active m-3"
                    type="radio"
                    name="status"
                    id="active"
                    value="active"
                    style={{ width: '20px', height: '20px' }}
                    checked={formData.status === 'active'}
                    onChange={() => handleStatusChange('active')}
                  />
                  <label className="form-check-label" htmlFor="active" style={{ color: 'green', fontSize: '20px', marginLeft: '20px' }}>
                    Active
                  </label>

                  <input
                    className="inactive m-3"
                    type="radio"
                    name="status"
                    id="inactive"
                    value="inactive"
                    style={{ width: '20px', height: '20px' }}
                    checked={formData.status === 'inactive'}
                    onChange={() => handleStatusChange('inactive')}
                  />
                  <label className="form-check-label" htmlFor="inactive" style={{ color: 'red', fontSize: '20px', marginLeft: '20px' }}>
                    Inactive
                  </label>

                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <img className='card profile_pic' src={formData.photo} style={{ width: '250px', height: '200px' }} />
          </div>
          <div className='d-flex justify-content-end'>
            <button type="button" className="btn btn-danger" onClick={handleSubmit} style={{ width: '200px', margin: '20px' }}>
              Done
            </button>

          </div>
        </div>
      </div>
    </Container>
  );
};
export default EmployeeDetails;
