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
  const [properties, setProperties] = useState([]);
  const [basicUser, setBasicUser] = useState([]);
  const [activities, setActivities] = useState(null);

  const navigate = useNavigate();

  const fetchProperties = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get('http://127.0.0.1:8000/api/basic_properties/', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (response.data && response.data.results) {
        setProperties(response.data.results.slice(0, 10)); // Limiting to first 10 items
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const fetchBasicUser = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get('http://127.0.0.1:8000/api/basic_users/', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (response.data && response.data.results) {
        setBasicUser(response.data.results.slice(0, 10)); // Limiting to first 10 items
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const fetchActivities = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get('http://127.0.0.1:8000/api/activities/', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (response.data) {
        setActivities(response.data); // Assuming response.data is the object with the activity data
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response?.status === 401) {
      console.error('User unauthorized. Redirecting to login page...');
      navigate('/login');
    } else {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchBasicUser();
    fetchActivities();
  }, []);

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
      <div className='container-fluid' style={{ marginBottom: '30%' }}>
      <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '20px', padding: '10px' }}>
      <h6 style={{ textAlign: 'start', padding: '2%', }}>Activities</h6>
          {activities ? (
            <div className='row'>
              <div className='col'>
                <h1 className='DASH1'>
                  <b> {activities.registered_properties}</b>
                </h1>
                <h6 className='DASH2'>
                  Properties Registered
                </h6>
              </div>
              <div className='col-lg-1'>
                <img src={LINE} alt="Line" className='Lineimg mb-3' />
              </div>
              <div className='col'>
                <h1 className='DASH3'>
                  <b> {activities.sold_properties}</b>
                </h1>
                <h6 className='DASH2'>
                  Properties Sold
                </h6>
              </div>
              <div className='col-lg-1'>
                <img src={LINE} alt="Line" className='Lineimg' />
              </div>
              <div className='col'>
                <h1 className='DASH4'>
                  <b> {activities.remaining_properties}</b>
                </h1>
                <h6 className='DASH2'>
                  Remaining
                </h6>
              </div>
            </div>
          ) : (
            <p>Loading activities...</p>
          )}
        </div>


        {/* Properties Registered////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '20px', padding: '10px' }}>
        <div className='d-flex justify-content-between'>
            <h4 style={{ marginLeft: '3%', marginTop: '3%' }}> <b>Properties Registered</b></h4>
            <span className='card DASH9 m-4'>
              <h6 id='views' onClick={() => handleProperty()}>View All</h6>
            </span>
          </div>
          <div style={{ padding: '40px' }}> {/* Adjust the padding value as needed */}
            <Table className="table" responsive="xl" >
              <thead>
                <tr >
                  <th></th>
                  <th>Sl. no.</th>
                  <th>Name</th>
                  <th></th>
                  <th>Property type</th>
                  <th></th>
                  <th>Posted on</th>
                  <th></th>
                  <th>Type</th>
                  <th></th>               
                   <th>Status</th>

                </tr>
              </thead>
              <tbody >
                {properties.map((property, index) => (

                  <tr key={property.id}>
                    <td></td>
                    <td>{index + 1}</td>
                    <td>{property.name}</td>
                    <td></td>
                    <td>{property.property_type}</td>
                    <td></td>
                    <td>{property.posted_on}</td>
                    <td></td>
                    <td style={{
                      color:property.approved === true ? 'green' :
                        property.approved === false ? 'green' :
                        property.approved === false ? 'green' :
                          'green',
                      
                    }}>
                      {property.you_are_here_to === 'rent' ? 'Rental' :
                        property.you_are_here_to === 'sell' ? 'Selling' :
                          property.you_are_here_to === 'lease' ? 'Lease' : null}
                    </td>
                    <td></td>
                    <td style={{
                    color: property.approved ? 'green' : property.approved === false ? 'red' : 'rgba(255, 122, 0, 1)'
                  }}>
                    {property.approved ? 'Approved' : property.approved === false ? 'Rejected' : 'For approvel'}
                  </td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '20px', padding: '10px' }}>
        <div className="d-flex justify-content-between flex-wrap">
            <h4 style={{ marginLeft: '3%', marginTop: '3%' }}> <b>Signed in</b></h4>
            <span className="card DASH9 ">
              <h6 id="view" onClick={() => handleSigned()} >View All</h6>
            </span>
          </div>
          <div style={{ padding: '40px' }}> {/* Adjust the padding value as needed */}
            <Table className="table" responsive="xl">

              <thead>
                <tr>
                  <th></th>
                  <th>Sl.no</th>
                  <th></th>
                  <th>Name</th>
                  <td></td>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Registered on</th>
                </tr>
              </thead>
              <tbody>
                {basicUser.map((user, index) => (
                  <tr key={user.id}>
                    <td></td>
                    <td>{index + 1}</td>
                    <td></td>
                    <td>{user.username}</td>
                    <td></td>
                    <td>{user.phone}</td>

                    <td>{user.email}</td>

                    <td>{user.registered_on}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>


        </div>

      </div>
    </>
  )
}

export default Dashboard