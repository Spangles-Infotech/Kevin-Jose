import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import T1 from '../Images/T1.png';
import ReactStars from 'react-rating-star-with-type';
import { useState } from 'react';

const Enquiry = () => {
  const [star, setStar] = useState(3);

  const onChange = (newValue) => {
    setStar(newValue); 
  };
  return (

    <div className='container'>
      <div className='mt-5 pt-5 ms-2 my-5 d-flex row'>
        <div className='col'>
          <h3 className='mt-5 pt-5 mx-1 text-lg-start bigvalue underline'>
            Testimonials
          </h3>
        </div>
        <div className='col'>
          <p className='mt-3 pt-3 mx-1 text-lg-end' style={{ color: '#D7242A' }}>

          </p>
        </div>


      </div>
      <Carousel data-bs-theme="dark" style={{ width: '80%', margin: '0 auto' }} >
      <Carousel.Item style={{ width: '100%', height: '400px', background: 'white',
         boxShadow: '4px 4px 10px 3px rgba(0, 0, 0, 0.25)', borderRadius: 20 }}>
          <img
            className="d-block img-fluid rounded-circle mt-4 Enquiry"
            src={T1}
            alt="First slide"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}

          />
          <Carousel.Caption>
            <div className='my-0 mb-5' style={{
              textAlign: 'center', color: '#474747', fontSize: 18, fontFamily: 'Poppins',
              fontWeight: '400', wordWrap: 'break-word'
            }}>Lorem Ipsum is simply dummy text of the printing.
              .</div>
            <ReactStars
              count={5}
              onChange={onChange}
              size={24}
              activeColor='orange'
              value={star}
              classNames='star-rating mt-5'
            />
            <div style={{ textAlign: 'center', color: '#474747', fontSize: 18, fontFamily: 'Poppins',
             fontWeight: '700', wordWrap: 'break-word' }}>Jeo James </div>
          </Carousel.Caption>
        </Carousel.Item>
      
        <Carousel.Item style={{ width: '100%', height: '400px', background: 'white',
         boxShadow: '4px 4px 10px 3px rgba(0, 0, 0, 0.25)', borderRadius: 20 }}>
          <img
            className="d-block img-fluid rounded-circle mt-4 Enquiry"
            src={T1}
            alt="First slide"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}

          />
          <Carousel.Caption>
            <div className='my-0 mb-5' style={{
              textAlign: 'center', color: '#474747', fontSize: 18, fontFamily: 'Poppins',
              fontWeight: '400', wordWrap: 'break-word'
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              .</div>
            <ReactStars
              count={5}
              onChange={onChange}
              size={24}
              activeColor='orange'
              value={star}
              classNames='star-rating mt-5'
            />
            <div style={{ textAlign: 'center', color: '#474747', fontSize: 18, fontFamily: 'Poppins',
             fontWeight: '700', wordWrap: 'break-word' }}>Jeo James </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: '100%', height: '400px', background: 'white',
        boxShadow: '4px 4px 10px 3px rgba(0, 0, 0, 0.25)', borderRadius: 20 }}>
          <img
            className="d-block img-fluid rounded-circle mt-4 Enquiry"
            src={T1}
            alt="First slide"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <div className='my-0 mb-5' style={{
              textAlign: 'center', color: '#474747', fontSize: 18, fontFamily: 'Poppins',
              fontWeight: '400', wordWrap: 'break-word'
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting........
             </div>
            <ReactStars
              count={5}
              onChange={onChange}
              size={24}
              activeColor='orange'
              value={star}
              classNames='star-rating mt-5' 
            />
            <div style={{ textAlign: 'center', color: '#474747', fontSize: 18, fontFamily: 'Poppins',
             fontWeight: '700', wordWrap: 'break-word' }}>Jeo James </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Enquiry
