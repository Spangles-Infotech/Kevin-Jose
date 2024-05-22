import React from 'react';
import { Curate } from './Curate'; // Import your data array
import { Card } from 'react-bootstrap';

const Real = ({curate}) => {
  return (
    <div className='container'>
    <div className='ms-2 my-5 d-flex row'>
      <div className='col'>
        <h3 className='mt-5 pt-5 mx-1 text-lg-start bigvalue underline'>
        Total Properties
        </h3>
      </div>
      <div className='col'>
    
      </div>
    </div>

    
    <div className="row">
      {Curate.map((item) => (
        <div key={item.id} className=" col-lg-3 col-md-6 mb-4">
          <div className="card total" style={{width: '100%', height: '100%', background: 'white', borderRadius: 20, border: '1px #D7242A solid'}}>
        

            <div className="" style={{ width: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img src={item.thumbnail} className="card-img-top" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Property" />
</div>

<div className="card-body d-flex flex-column center-content justify-content-center align-items-center total">
  <h5 className="card-title">{item.title}</h5>
  <p className="card-text">{item.feet}</p>
</div>

            
          
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

;

export default Real;
