import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from 'react-icons';
import Logo from '../Image/Vector.png';
import po from '../Image/profile.png';
import { Navbar, Nav } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import '../Style/Sidebar.css'
import Form from 'react-bootstrap/Form';
const Topbar = () => {

  return (
    <Navbar expand="" variant="white" bg='white' className='d-flex justify-content-between'>
      <Navbar.Brand href="#home" className=''> <img src={Logo} alt="Logo" style={{ width: '108px', height: '60px' }} />
      </Navbar.Brand>
      <div>
      <Form.Control
              id="Search"
              type="text"
              placeholder="Search"
              className='m-4 mt-4'
              name="Search"
              style={{
                width: '400px',
                height: '40px',
                borderColor:'red',
                backgroundColor:'rgba(215, 36, 42, 0.06)'
              }}
              />
      </div>

      <Nav className=' mt-1'>
        <IconContext.Provider value={{ className: 'react-icons' }}>

          <div className="d-flex">
            <Link to="/search" className="icons nav-link gap-3 " style={{ marginRight: '25px', width: '40px', height: '40px' }}>
              <BsBell size={{ 'size': '30' }} />
            </Link>
            <img src={po} alt="Logo" style={{ width: '68px', height: '50px', borderRadius: '20%', marginLeft: '20px' }} />

            <span style={{ marginTop: '5px',paddingLeft:'15px' }}>Joseph Admin </span>

            <Link to="./Profile" className="icons nav-link gap-3 " style={{ marginRight: '25px', width: '40px', height: '40px' }}>
              <FaChevronDown size={{ 'size': '30', marginLeft: '50px' }} />
            </Link>
          </div>
        </IconContext.Provider>
      </Nav>
    </Navbar>

  );
};

export default Topbar;
