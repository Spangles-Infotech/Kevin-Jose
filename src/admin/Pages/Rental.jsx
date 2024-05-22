// import React from 'react'
// import '../Style/Properties.css'
// import MG1 from '../Image/MG1.png'
// import MG2 from '../Image/MG2.png'
// import MG3 from '../Image/MG3.png'
// import MG4 from '../Image/MG4.png'
// import MG5 from '../Image/MG5.png'
// import MG6 from '../Image/MG4.png'
// import { Link } from 'react-router-dom';
// function Rental() {
//   return (
//     <>
    
//     <div className='row'style={{marginBottom:'10%'}}>

// <div className='col'>
//   < div className='card ' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
//     <div className='row m-4'>
//       <div className='col-lg-3'>
//         <h1 style={{ color: 'rgba(215, 36, 42, 1)' }}>₹ 2.64 Cr</h1>
//       </div>
//       <div className='col-lg-2'>
//         <button type="button" class=" sell1 btn btn-success" >No BROKERAGE</button>
//       </div>
//       <div className='col-lg-7'>
//         <h6 className='Rent1'>Rental</h6>
//       </div>

//     </div>
//     <h6 className='m-4'>3 BHK Flat for Sale in Perungudi, Chennai</h6>
//     <div className='row m-4'>
//       <div className='col-lg-6 '>
//         <img src={MG1} alt="Logo" style={{ width: '100%', height: '100%' }} />
//       </div>
//       <div className='col-lg-3 mt-3'>
//         <img src={MG2} alt="Logo" style={{ width: '100%', height: '100%' }} />
//       </div>
//       <div className='col-lg-3 mt-3'>
//         <img src={MG3} alt="Logo" style={{ width: '100%', height: '100%' }} />
//       </div>
//     </div>
//     <div className='row m-4'>
//       <div className='col-lg-4'>
//         <img src={MG4} alt="Logo" style={{ width: '100%', height: '100%' }} />
//       </div>
//       <div className='col-lg-4 mt-3'>
//         <img src={MG5} alt="Logo" style={{ width: '100%', height: '100%' }} />
//       </div>
//       <div className='col-lg-4 mt-3'>
//         <img src={MG6} alt="Logo" style={{ width: '100%', height: '100%' }} />
//       </div>
//     </div>

//     <div className='row m-4'>
//       <div className='col-lg-3'>
//         <p >Super Built-Up Area</p>
//         <h6>1662 sqft</h6>
//         <p>₹ 9,868/sqft</p>
//         <p className='mt-3.5'>Status</p>
//         <h6>Ready to Move</h6>

//       </div>
//       <div className='col-lg-3'>
//         <p >Developer</p>
//         <h6>Risland India</h6>

//         <p className='mt-5'>Lifts</p>
//         <h6>3</h6>

//       </div>


//       <div className='col-lg-3'>
//         <p >Project</p>
//         <h6>VGN Fairmont</h6>

//         <p className='mt-5'>Furnished Status</p>
//         <h6>Unfurnished</h6>

//       </div>


//       <div className='col-lg-3'>
//         <p >Transaction Type</p>
//         <h6>New Property</h6>

//         <p className='mt-5'>Bedroom</p>
//         <h6>3</h6>

//       </div>
//     </div>
//     <hr />
//     <p className='m-4'>Posted on 10/10/2023</p>
//   </div>

//   < div className='card ' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
//     <div className='m-4'>


//       <h1 style={{ fontFamily: 'Poppins' }}>Why buy in this project?</h1>
//       <li>Chennai marks the debut of SSGF technology</li>
//       <li>Close to the CBD</li>
//       <li>With IT companies all around</li>
//       <Link style={{ marginTop: '5%', color: 'black' }}>3+more</Link>
//     </div>
//   </div>


//   < div className='card ' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
//     <h1 className='sell3'> More Details</h1>
//     <table className="table">
//       <tbody>
//         <tr>


//           <td><p>Price Breakup</p></td>
//           <td><h6>₹ 2.64 Cr</h6></td>


//         </tr>
//         <tr>


//           <td><p>Booking Amount</p></td>
//           <td><h6>
//             ₹ 1,00,000
//           </h6></td>

//         </tr>
//         <tr>
//           <td><p>Address</p></td>
//           <td>            <h6>
//             Perungudi, Chennai - South, Tamil Nadu
//           </h6></td>
//         </tr>
//         <tr>
//           <td><p>Furnishing</p></td>
//           <td>
//             <h6>
//               Unfurnished
//             </h6>
//           </td>
//         </tr>
//         <tr>
//           <td> <p>Flooring</p></td>
//           <td>          <h6>
//             Vitrified
//           </h6></td>
//         </tr>
//         <tr>
//           <td> <p>Loan Offered</p></td>
//           <td>          <h6>
//             Estimated EMI: ₹73966
//           </h6>
//             <p style={{ fontSize: '10px' }}>
//               Apply for Home Loan
//             </p>
//           </td>
//         </tr>
//         <tr>
//           <td> <p >Water Availability</p></td>
//           <td> <h6>24 Hours Available</h6></td>
//         </tr>
//         <tr>
//           <td> <p>Status of Electricity</p></td>
//           <td>          <h6>No/Rare Powercut</h6></td>
//         </tr>
//         <tr>
//           <td>   <p>Floors allowed for
//             construction</p></td>
//           <td><h6>10</h6></td>
//         </tr>
//         <tr>
//           <td>  <p>No. of lift</p></td>
//           <td> <h6>3</h6></td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
//   <div className='row'>
//     <div className='col   d-flex justify-content-end'>
//     <button type="button" class="btn btn-outline-danger" style={{ width: '150px', margin:'3%' }}>Reject</button>
//     <button type="button" class="btn btn-danger" style={{ width: '150px',margin:'3%' }}>Approve</button>
//     </div>
//   </div>

// </div>
// </div >
//     </>
//   )
// }

// export default Rental