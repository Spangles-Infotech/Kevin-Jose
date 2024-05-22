import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaTwitterSquare } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';
import group from '../Images/Group.png';


const Footer = () => {
  return (
<footer className="py-4 sticky-footer" style={{ color: '#2C2C2C', width: '100%' }}>
  <div className="container-fluid py-5">
    <div className="row gx-5 mx-5">
      <div className="col">
        <img
          src={group}
          alt="Group Image"
          style={{ width: '110px', height: '60px' }}
        />
        <div className="pt-4" style={{ fontSize: "18px", fontFamily: 'Hind', fontWeight: '400', wordWrap: 'break-word' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus porttitor ac massa in consectetur. Duis vel quam a erat tincidunt posuere. Mauris iaculis eget mauris
          non dapibus.
        </div>
        <div className="footer-icons d-flex gap-3 pt-3">
          <a href="https://www.facebook.com">
            <ImFacebook2 style={{ width: '24px', height: '24px', color: 'black' }} />
          </a>
          <a href="https://www.instagram.com">
            <PiInstagramLogoFill style={{ width: '24px', height: '24px', color: 'black' }} />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitterSquare style={{ width: '24px', height: '24px', color: 'black' }} />
          </a>
          <a href="https://www.linkedin.com">
            <RxLinkedinLogo style={{ width: '24px', height: '24px', color: 'black' }} />
          </a>
        </div>
      </div>
      <div className="col mt-3 text-center">
        <h5 className='mb-5'>Explore</h5>
        <div style={{ fontSize: 14, fontFamily: 'Hind', fontWeight: '400' }}>
          <ul className="list-unstyled last text-black">
            <li className="nav-item mb-3">
              <a className="text-decoration-none text-black" href="/">Buy</a>
            </li>
            <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Rent</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Lease</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Help</a>
          </li>
          </ul>
        </div>
      </div>
      <div className="col  mt-3 text-center">
        <h5 className='mb-5'>Quick Links</h5>
        <div style={{ fontSize: 14, fontFamily: 'Hind', fontWeight: '400' }}>
          <ul className="list-unstyled last text-black">
            <li className="nav-item mb-3">
              <a className="text-decoration-none text-black" href="/">Home</a>
            </li>
            <li className="nav-item mb-3">
                 <a className="text-decoration-none text-black" href="/">About Us</a>
               </li>
               <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Gallery</a>
               </li>
              
               <li className="nav-item mb-3">
                 <a className="text-decoration-none text-black" href="/">Contact Us</a>
               </li>
           
          </ul>
        </div>
      </div>
    
      <div className="col-lg-12 col-md-12  mt-5">
        <hr className="my-4" style={{ borderTop: '1px solid black' }} />
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div className="text-center">2024 © www.kevinjose.com. All rights reserved.</div>
          <div className="mx-3" style={{ borderLeft: '1px solid black', height: '20px' }}></div>
          <div className="ms-3 text-center">Designed by Spangles Infotech</div>
        </div>
      </div>
    </div>
  </div>
</footer>
   







  );
};

export default Footer;