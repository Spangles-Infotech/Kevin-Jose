import React, { useState } from 'react';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import Dashboard from '../Image/sid1.png';
// import Properties from '../Image/sid2.png';
// import Enquired from '../Image/sid3.png';
// import Signedin from '../Image/Group.png';
// import Employeeprofile from '../Image/sid2.png';
// import Attendance from '../Image/sid4.png';
// import Expens from '../Image/sid5.png';
import Topbar from '../Navbar/Topbar';
import '../Style/Sidebar.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaUserPlus } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaFingerprint } from 'react-icons/fa'; // You can choose any icon you prefer
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbFingerprintScan } from "react-icons/tb";


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refresh_token');
        const accessToken = localStorage.getItem('access_token');

        if (!refreshToken) {
            console.error('No refresh token found');
            return;
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/logout/',
                { refresh_token: refreshToken },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );

            if (response.status === 200) {
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('access_token');
                navigate('/Login');
            } else {
                console.error('Logout failed with status:', response.status);
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                if (error.response.data.code === 'token_not_valid') {
                    console.error('The provided token is not valid.');
                    localStorage.removeItem('refresh_token');
                    localStorage.removeItem('access_token');
                    navigate('/Login');
                }
            } else {
                console.error('Error during logout:', error);
            }
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            // icon: <img src={Dashboard} alt="Products" style={{ width: '25px' }} />,
            icon: <RiDashboardFill style={{ width: '25px' }}/>,
        },
        {
            path: "/Properties",
            name: "Properties Registered",
            icon: <FaUserPlus style={{ width: '25px' }}/>,
        },
        {
            path: "/Enquired",
            name: "Enquired Properties",
            // icon: <img src={Enquired} alt="Products" style={{ width: '25px' }} />,
            icon:<FaClipboardList style={{ width: '25px' }}/>,
        },
        {
            path: "/Signedin",
            name: "Signed In",
            // icon: <img src={Signedin} alt="Products" style={{ width: '25px' }} />,
            icon:<TbFingerprintScan style={{ width: '25px' }}/>,
        },
        {
            path: "/Employeeprofile",
            name: "Employee Profile",
            // icon: <img src={Employeeprofile} alt="Products" style={{ width: '25px' }} />,
            icon:<FaUserFriends style={{ width: '25px' }}/>,
        },
        {
            path: "/Attendance",
            name: "Attendance",
            icon:  <FaFingerprint   style={{ width: '25px' }}/>,
            
        },
        {
            path: "/Expens",
            name: "Expense",
            // icon: <img src={Expens} alt="Products" style={{ width: '25px' }} />,
            icon:<FaHandHoldingUsd  style={{ width: '25px' }}/>,
        },
    ];



    return (
        <>
            <Topbar />
            <div className="section d-flex">
                <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon mt-1 mb-1">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1 ">
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                    <div className="link" style={{ marginTop: '10%' }} onClick={handleShow}>
                        <div className="icon"><FaSignOutAlt /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                            Logout
                        </div>
                    </div>
                </div>
                <main className="content">{children}</main>
            </div>

            <Modal show={show} centered onHide={handleClose} >
           
                <Modal.Body  style={{height:'180px'}}>
                    <div>
                        <h6 style={{ textAlign: 'center',marginTop:'30px' }}>
                            Are you sure you want to logout?
                        </h6>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px',marginTop:'50px' }}>
                     
                        <Button variant="success" onClick={handleClose}>Close</Button>
                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const withSideBarLayout = (component) => {
    return <Sidebar>{component}</Sidebar>;
};

export default withSideBarLayout;
