import React, { useState } from 'react';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Dashboard from '../Image/sid1.png';
import Properties from '../Image/sid2.png';
import Enquired from '../Image/sid3.png';
import Signedin from '../Image/Group.png';
import Employeeprofile from '../Image/sid2.png';
import Attendance from '../Image/sid4.png';
import Expense from '../Image/sid5.png';
import Topbar from '../Navbar/Topbar';
import '../Style/Sidebar.css'
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <img src={Dashboard} alt="Products" style={{ width: '25px' }} />,
        },
        {
            path: "/Properties",
            name: "Properties Registered",
            icon: <img src={Properties} alt="Products" style={{ width: '25px' }} />,
        },
        {
            path: "/Enquired",
            name: "Enquired Properties",
            icon: <img src={Enquired} alt="Products" style={{ width: '25px' }} />,
        },
        {
            path: "/Signedin",
            name: "Signedin",
            icon: <img src={Signedin} alt="Products" style={{ width: '25px' }} />,
        },
        {
            path: "/Employeeprofile",
            name: "Employee Profile",
            icon: <img src={Employeeprofile} alt="Products" style={{ width: '25px' }} />,
        },
        {
            path: "/Attendance",
            name: "Attendance",
            icon: <img src={Attendance} alt="Products" style={{ width: '25px' }} />,
        },
        {
            path: "/Expense",
            name: "Expense",
            icon: <img src={Expense} alt="Products" style={{ width: '25px' }} />,
        },
    ];

   
        return (
            <>
            <Topbar />
            <div className="section d-flex">
                <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                    <div className="top_section ">
                        <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars ">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon mt-3">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-4 ">
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                    <NavLink to="/Login" className="link " style={{marginTop:'80%'}}>
                        <div className="icon"><FaSignOutAlt /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                            Logout
                        </div>
                    </NavLink>
                </div>
                <main className="content">{children}</main>
            </div>
            </>
        );
    };
    
    const withSideBarLayout = (component) => {
        return <Sidebar>{component}</Sidebar>
    };
    
    export default withSideBarLayout;