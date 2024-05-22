import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/logo.png';
import logo1 from '../Images/logo1.png';
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import Navigation from './Navigation';
import Properties from './Properties';
import Exclusive from './Exclusive';
import Real from './Real';
import Enquiry from './Enquiry';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {Modal,Button} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const navigate = useNavigate(); 


  const handleCartClick = () => {

    navigate('/myproperties'); 
  };
 

  const handlepost= () => {
    const token = localStorage.getItem('token');
   if(!token) {
    navigate('/mobile'); 
   }
 else{
  navigate('/post')
 }

 
 
 
  };
  const [showModal, setShowModal] = useState(false);


  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

//   const handleLogout = () => {
//     // Clear token from localStorage
//     localStorage.removeItem('token');
//     // Update isLoggedIn state
//     setIsLoggedIn(false);
//     // Redirect to login page or homepage
//     navigate('/login'); // or navigate('/')
//   };

//   const handleNavigate = () => {
//     navigate('/signup');
//     setShowModal(false);
//   };

//   const handleNavigate1 = () => {
//     navigate('/login');
//     setShowModal(false);
//   };

//   const handleCartClick = () => {
//     navigate('/myproperties');
//   };

  const notify = () => {
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNavigate = () => {
    navigate('/mobile');
    setShowModal(false); 
  };
  const handleNavigate1 = () => {
    navigate('/new-path');
    setShowModal(false); 
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid mx-5 px-5">
        {/* <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </a> */}
<a className="navbar-brand" href="/">
  <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-lg-flex  mx-5 px-5 my-2">
          
            <div className="dropdown">
             
              <ul className="dropdown-menu gap-2" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleCartClick}>
                <BsCart4 />
              </a>
            </li>
            <div>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={notify}>
          <FiUser />
        </a>
      </li>
     {}
      
      <Modal show={showModal} onHide={handleCloseModal} size="sm">
 
  <Modal.Body>
    <div className="justify-content-end mb-3">
      <Button variant='' className="me-2" onClick={handleNavigate}  style={{color:'#DC0000'}}>Sign up</Button>
      </div>
      <div className="justify-content-end mb-3">
      <Button variant=''  className="me-2" onClick={handleNavigate1} style={{color:'#DC0000'}}>Log In</Button>
    </div>
   
  </Modal.Body>
</Modal>

      <ToastContainer />
    </div>
          </ul>
          <button className='d-lg-flex ms-3 rounded-pill gap-2' 
        style={{ maxWidth: '250px', height:'40px',border:'none'}}
        onClick={handlepost}>
  <p className='mt-1 ms-3' style={{fontSize:'18px',fontWeight:'00'}}>
    Post Your Property  
    <span className='rounded-pill mt-2' style={{backgroundColor:"#FEC72B",fontSize:'13px'}}> 
      free
    </span>
  </p>
</button>
          {/* <form className=" d-lg-flex ms-2">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Post Your Property"
              aria-label="Search"
            />
            <span className="position-absolute top-0 start-0 translate-middle p-2 text-muted">
              <img src={logo1} alt="Placeholder Logo" width="24" height="24" />
            </span>
          </form> */}
        </div>
      </div>
     
    </nav>
    

    </>
  );
};

export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiUser } from "react-icons/fi";
// import { BsCart4 } from "react-icons/bs";
// import { Modal, Button } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
   
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const handleLogout = () => {
//     // Clear token from localStorage
//     localStorage.removeItem('token');
//     // Update isLoggedIn state
//     setIsLoggedIn(false);
//     // Redirect to login page or homepage
//     navigate('/login'); // or navigate('/')
//   };

//   const handleNavigate = () => {
//     navigate('/signup');
//     setShowModal(false);
//   };

//   const handleNavigate1 = () => {
//     navigate('/login');
//     setShowModal(false);
//   };

//   const handleCartClick = () => {
//     navigate('/myproperties');
//   };

//   const notify = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
//         {/* Your Navbar content */}
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
//           <li className="nav-item">
//             <a className="nav-link" href="#" onClick={handleCartClick}>
//               <BsCart4 />
//             </a>
//           </li>
//           {isLoggedIn ? (
//             <li className="nav-item">
//               <a className="nav-link" href="#" onClick={handleLogout}>
//                 Logout
//               </a>
//             </li>
//           ) : (
//             <div>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" onClick={notify}>
//                   <FiUser />
//                 </a>
//               </li>
//               <Modal show={showModal} onHide={handleCloseModal} size="sm">
//               <Modal show={showModal} onHide={handleCloseModal} size="sm">
 
//     <Modal.Body>
//      <div className="justify-content-end mb-3">
//        <Button variant='' className="me-2" onClick={handleNavigate}  style={{color:'#DC0000'}}>Sign up</Button>
//       </div>
//        <div className="justify-content-end mb-3">
//        <Button variant=''  className="me-2" onClick={handleNavigate1} style={{color:'#DC0000'}}>Log In</Button>
//      </div>
    
//    </Modal.Body>
//  </Modal>
//               </Modal>
//               <ToastContainer />
//             </div>
//           )}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
