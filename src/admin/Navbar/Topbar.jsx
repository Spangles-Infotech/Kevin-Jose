import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from 'react-icons';
import Logo from '../Image/Vector.png';
import icons from '../Image/Mask group (4).png';
import LINE from '../Image/Line 36.png';
import { Navbar, Nav, Modal, Button, Container } from 'react-bootstrap';
import { BsBell } from "react-icons/bs";
import axios from 'axios';
import '../Style/Sidebar.css';
import { useNavigate, Link } from 'react-router-dom';

const Topbar = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [error, setError] = useState(null);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', photo: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    axios.get('http://127.0.0.1:8000/api/employee_notifications/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        setNotifications(response.data);
        setUnreadCount(response.data.filter(notification => !notification.is_read).length);
        setError(null); // Clear any previous errors
      })
      .catch(error => {
        setError('Error fetching notifications. Please try again later.');
        console.error('Error fetching notifications:', error);
      });

    axios.get('http://127.0.0.1:8000/api/current_user_details/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        setError('Error fetching profile. Please try again later.');
        console.error('Error fetching profile:', error);
      });
  }, []);

  const handleSubmit = async (notificationId) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.post(`http://127.0.0.1:8000/api/mark_employee_notification_read/${notificationId}/`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      if (response.status === 200) {
        // Update the notification state
        setNotifications(prevNotifications =>
          prevNotifications.map(notification =>
            notification.id === notificationId ? { ...notification, is_read: true } : notification
          )
        );
        setUnreadCount(prevCount => prevCount - 1);
        // Navigate to the Lease page
        // navigate(`/Lease/${notificationId}`);
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Navbar expand="" variant="white" bg="white" className="row">

        <div className='col-sm-6'>
          <Navbar.Brand>
            <img src={Logo} alt="Logo" style={{ height: '60px',marginLeft:'50px' }} />
          </Navbar.Brand>
        </div>
        
        <div className='col-sm-6 d-flex justify-content-end'>
        <Nav className="mt-1" style={{marginRight:'50px'}}>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <div className="d-flex justify-content-cente">
              <div className="icons nav-link gap-3" style={{ position: 'relative' }} onClick={() => handleShow(true)}>
                <BsBell size={30} />
                {unreadCount > 0 && (
                  <span className="badge badge-danger" style={{
                    position: 'absolute',
                    top: '4px',
                    right: '6px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '3px 6px',
                    fontSize: '12px'
                  }}>
                    {unreadCount}
                  </span>
                )}
              </div>
              <img src={LINE} alt="Line" style={{ height: '50px', paddingLeft: '30px', paddingRight: '30px' }} />
              <div className="d-flex  ">
                <div className="d-flex">
                  <img src={userDetails.photo} alt="Profile" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
                </div>
                <div style={{ paddingLeft: '10px', }}>

                  <p className="mb-1">{capitalizeFirstLetter(userDetails.name)}</p>
                  <p className="mb-1" style={{ fontSize: '12px' }}>Administer</p>
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </Nav>
        </div>


 
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} dialogClassName="modal-right">
          <Modal.Header closeButton style={{height:'50px'}}>
            <Modal.Title><p style={{fontSize:'20px'}}>Notifications</p>  </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error ? (
              <p>{error}</p>
            ) : (
              notifications.length > 0 ? (
                notifications.map(notification => (
                  <Link to={`/Lease/${notification.property_id}`} style={{ textDecoration: 'none', color: 'black' }} key={notification.id}>
                    <div className={`notification-item ${notification.is_read ? 'bg-read' : 'bg-dange'}`} onClick={() => handleSubmit(notification.id)}>
                      <div className="d-flex m-0 p-0">
                        <img src={icons} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        <p style={{ marginLeft: '10px', fontSize: '13px', width: '80%' }}>{notification.message}</p>
                      </div>
                      <div className="d-flex m-0 p-0">
                        <p style={{ marginLeft: '70px', fontSize: '10px' }}>{notification.formatted_date}</p>
                        <p style={{ marginLeft: '10px', fontSize: '10px' }}>{notification.day_and_time}</p>
                      </div>
                      <hr />
                    </div>
                  </Link>
                ))
              ) : (
                <p>No notifications available</p>
              )
            )}
          </Modal.Body>
        </Modal>

    </Navbar>
  );
};

export default Topbar;
