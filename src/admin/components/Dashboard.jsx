import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LINE from '../Image/Line 36.png'
import org from '../Image/or.png'
import RED from '../Image/Red.png'
import blue from '../Image/Blue.png'
import '../Style/Dashboard.css'
import ELL from '../Image/Ellipse 48.png'
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import progress from '../Image/progress.png'
import DatePicker from 'react-multi-date-picker';
import Icon from 'react-multi-date-picker/components/icon';

function Dashboard() {
  const [number, setNumber] = useState(1);
  const [properties, setProperties] = useState([]);
  const [basicUser, setBasicUser] = useState([]);
  const navigate = useNavigate();

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/basic_properties/');
      if (response.data && response.data.results) {
        setProperties(response.data.results.slice(0, 10)); // Limiting to first 10 items
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchBasicUser();
  }, []);

  const fetchBasicUser = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/basic_users/');
      if (response.data && response.data.results) {
        setBasicUser(response.data.results.slice(0, 10)); // Limiting to first 10 items
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching basic users:', error);
    }
  };

  const handleDateChange = (value) => {
    console.log('Selected date:', value);
  };

  const handleProperty = () => {
    navigate('/Properties');
  };

  const handleSigned = () => {
    navigate('/Signedin');
  };

  return (
    <>
      <div className='container-fulid' style={{ marginBottom: '10%' }}>
        <div className='card m-2' style={{ borderColor: 'red' }}>
          <h6 style={{ textAlign: 'start', padding: '5px', fontFamily: 'Roboto' }}>Activities</h6>
          <div className='row'>
            <div className='col'>
              <h1 className='DASH1'>
                10,893
              </h1>
              <h6 className='DASH2'>
                Properties Registered
              </h6>
            </div>
            <div className='col-lg-1'>
              <img src={LINE} alt="Logo" className='LIneimg' />
            </div>

            <div className='col'>
              <h1 className='DASH3'>
                10,893
              </h1>

              <h6 className='DASH2'>
                Properties Sold
              </h6>
            </div>
            <div className='col-lg-1'>
              <img src={LINE} alt="Logo" className='LIneimg' />
            </div>
            <div className='col'>
              <h1 className='DASH4'>
                10,893
              </h1>
              <h6 className='DASH2'>
                Remaining
              </h6>
            </div>
          </div>
        </div>


        <div className='row '>
          <div className='col-lg-6'>


            <div className='card' style={{ margin: '1%', borderColor: 'red' }}>
              <div className='row'>
                <div className=' col-lg-6'>
                  <h6 style={{ textAlign: 'start', padding: '5px', fontFamily: 'Roboto' }} >
                    Expense
                  </h6>
                  <div style={{ margin: '5%', margintop: '50%', height: '20%' }}>
                    <img src={progress} alt="progress" style={{ width: '300PX' }} />
                  </div>

                </div>

                <div className='col-lg-6 mb-5'>
                  <div className='datee'>


                    <DatePicker
                      className='datee'
                      format="MM/DD/YYYY"
                      value={new Date()}
                      onChange={handleDateChange}
                      render={<Icon style={{ color: 'red', width: '100px' }} />}

                    />
                  </div>
                  <div style={{ fontFamily: 'Roboto' }}>
                    <span className='d-flex mt-5'>
                      <img src={org} alt="Logo" style={{ paddingRight: '30px' }} />
                      <h5 style={{ color: 'rgba(240, 165, 0, 1)', paddingRight: '30px' }}>Prime Membership</h5>
                    </span>
                    <h6 style={{ marginLeft: '15%' }}>₹ 34 lkhs</h6>
                  </div>
                  <div >
                    <span className='d-flex mt-5'>
                      <img src={RED} alt="Logo" style={{ paddingRight: '30px' }} />
                      <h5 style={{ color: 'rgba(0, 83, 188, 1)', paddingRight: '30px' }}>Sale</h5>
                    </span>
                    <h6 style={{ marginLeft: '15%' }}>₹ 500 crs</h6>
                  </div>
                  <div >
                    <span className='d-flex mt-5'>
                      <img src={blue} alt="Logo" style={{ paddingRight: '30px' }} />
                      <h5 style={{ color: 'rgba(228, 32, 42, 1)' }}>Spend</h5>
                    </span>
                    <h6 style={{ marginLeft: '15%' }}>₹ 10 lkhs</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6  mb-2' style={{ fontFamily: 'Roboto' }}>
            <div className='card ' style={{ margin: '1%', borderColor: 'red' }}>

              <h4 className='DASH7'>Working Days</h4>

              <div className='row'>
                <div className='col'>

                  <img src={ELL} alt="Logo" className='DASH6' />
                </div>
                <div className='col'>
                  <h5 className='DASH5'>
                    Monday
                  </h5>
                </div>
                <div className='col'>
                  <h5 className='DASH5'>8:30am - 5:30pm</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col'>

                  <img src={ELL} alt="Logo" className='DASH6' />
                </div>
                <div className='col'>
                  <h5 className='DASH5'>
                    Tuesday
                  </h5>
                </div>
                <div className='col'>
                  <h5 className='DASH5'>8:30am - 5:30pm</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col'>

                  <img src={ELL} alt="Logo" className='DASH6' />
                </div>
                <div className='col'>
                  <h5 className='DASH5'>
                    Wednesday
                  </h5>
                </div>
                <div className='col'>
                  <h5 className='DASH5'>8:30am - 5:30pm</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col'>

                  <img src={ELL} alt="Logo" className='DASH6' />
                </div>
                <div className='col'>
                  <h5 className='DASH5'>
                    Thursday
                  </h5>
                </div>
                <div className='col'>
                  <h5 className='DASH5'>8:30am - 5:30pm</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col'>

                  <img src={ELL} alt="Logo" className='DASH6' />
                </div>
                <div className='col'>
                  <h5 className='DASH5'>
                    Friday
                  </h5>
                </div>
                <div className='col'>
                  <h5 className='DASH5'>8:30am - 5:30pm</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col'>

                  <img src={ELL} alt="Logo" className='DASH6' />
                </div>
                <div className='col'>
                  <h5 className='DASH5'>
                    Saturday
                  </h5>
                </div>
                <div className='col'>
                  <h5 className='DASH5'>8:30am - 5:30pm</h5>
                </div>
              </div>
              <div className='row '>
                <div className='col'>

                  <img src={ELL} alt="Logo" className='DASH6' />
                </div>
                <div className='col'>
                  <h5 className='DASH5'>
                    Sunday
                  </h5>
                </div>
                <div className='col'>
                  <h5 className='DASH5'>8:30am - 5:30pm</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Properties Registered////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='card m-2' style={{ borderColor: 'red' }}>
          <div className='d-flex justify-content-between'>
            <h1 className='DASH8'>Properties Registered</h1>
            <span className='card DASH9 m-4'>
              <h6 id='views' onClick={() => handleProperty()}>View All</h6>
            </span>
          </div>
          <Table responsive="xl" style={{ fontFamily: 'Roboto' }}>
            <thead>
              <tr >
                <th>Sl. no.</th>
                <th>Name</th>
                <th>Property type</th>
                <th>Posted on</th>
                <th>Enquiries</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody >
              {properties.map((property, index) => (
                <tr key={property.id}>
                  <td>{index + 1}</td>
                  <td>{property.name}</td>
                  <td>{property.property_type}</td>
                  <td>{property.posted_on}</td>
                  <td>{property.total_enquiries}</td>
                  <td style={{
                    color: property.approved === true ? 'green' :
                      property.approved === false ? 'red' :
                        'rgba(255, 122, 0, 1)',
                    textDecoration: 'none' 
                  }}>
                    {property.you_are_here_to === 'rent' ? 'Rental' :
                      property.you_are_here_to === 'sell' ? 'Selling' :
                        property.you_are_here_to === 'lease' ? 'Lease' : ''}
                  </td>
                  <td style={{
                    color: property.approved === true ? 'green' :
                      property.approved === false ? 'red' :
                        'black'
                  }}>
                    {property.approved === true ? 'approved' :
                      property.approved === false ? 'rejected' :
                        property.approved === null ? 'For approved' : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className='card m-2 mt-3' style={{ borderColor: 'red' }}>
          <div className='d-flex justify-content-between'>
            <h1 className='DASH8'>Signed in</h1>
            <span className='card DASH9 m-4'>
              <h6 id='view' onClick={() => handleSigned()}>View All</h6>
            </span>

          </div>
          <Table className="table" style={{ fontFamily: 'Roboto' }}>
            <thead>
              <tr>
                <th>Sl. no.</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Registered oN</th>

              </tr>
            </thead>
            <tbody>
              {basicUser.map((basicUser, index) => (
                <tr key={basicUser.id}>
                  <td>{index + 1}</td>
                  <td>{basicUser.username}</td>
                  <td>{basicUser.phone}</td>
                  <td>{basicUser.email}</td>
                  <td>{basicUser.registered_on}</td>

                </tr>
              ))}

            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Dashboard