// import React from 'react'
// import background from '../Images/bg.jpg';
// import image1 from '../Images/image1.png';
// import image2 from '../Images/image2.png';
// import image3 from '../Images/image3.png';
// import { Row, Col, Button } from 'react-bootstrap';
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp   } from "react-icons/io";
// import { IoSearchOutline } from 'react-icons/io5';
// import { Dropdown,Card, DropdownToggle} from 'react-bootstrap'; 
// import { useState } from 'react';
// import Budget from './Budget';


// const Navigation = () => {
//   const navStyle = {
//     backgroundImage: `url(${background})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100%',
//     height: '350px', // Adjust height as needed
//     marginTop: '85px',
//   };
//   const buttonStyle = {
//     backgroundColor: '#FFFFFF', // Set background color to white
//     color: '#656565', // Set text color
//     border: '1px solid #C5C5C5', // Set border color and style
//     margin: '0 0.5rem', // Adjust margin as needed
//     // Add other styles as needed
//   };
//   const dropdownToggle = {
//     border: 'none',
//   };
//   const navbarStyle = {
//     backgroundColor: '#FFFFFF4D',

//     width: '100%',
//   };

//   const navLinkStyle = {
//     color: '#000000', 
//   };

//   const containerbudget = {
  
//   };

//   const navLinkHoverStyle = {
//     Color: '#D7242A',
//     transition: 'background-color 0.3s ease',
//   };
//   const handleMouseEnter = (e) => {
//     e.target.style.Color = navLinkHoverStyle.Color;
//     e.target.style.color = navLinkHoverStyle.Color;
//   };

//   const handleMouseLeave = (e) => {
//     e.target.style.backgroundColor = '';
//     e.target.style.color = navLinkStyle.color;

//   };
 

 
//   const [color, setcolor] = useState('');
//   const [activeDropdown, setActiveDropdown] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   const [plott, setPlott] = useState('');
//   const [facing, setFacing] = useState('');
// const [residential,setResidential] = useState('');
// const [Bedroom, setBedroom] = useState('');
// const [Commercial,setCommercial] = useState('');
// const [Category, setCategory] = useState('');
// const [pgrent,setPgrent]=useState(false);
// const [Gender, setGender] = useState('');
// const [selectedOption, setSelectedOption] = useState(null);
//   const handleDropdownClick = (dropdown) => {
//     setActiveDropdown(dropdown);
   
//     setPropertyType('');
//     setPlott('');
//     setFacing('');
//     setCategory('');
//     setCommercial('');
//     setBedroom('');
//     setResidential('');
//     setPgrent('');
//     setGender('');
//     setSelectedOption('');
//   };
//   const handleClick = (option) => {
//     setSelectedOption(option);
//   };

//   const handlePropertyTypeClick = (type) => {
//     setPropertyType(type);
//   };
//   const handleButtonClick = (items) => {
//     setPlott(items);
    
//     }
  
// const handleplot =(plot) =>{
//   setFacing(plot);
// }
// const handleplotss =(value) =>{
//   setBedroom(value);
// }

// const handleButtonres = (button) =>{
//   setResidential(button);
// }
// const handlecommercial = (handle) =>{
//   setcolor(handle);
//   if (handle=== 'PG Home' || handle === 'PG Hostel') {
//     setPgrent(true);
//     setCommercial(false);
//   } else {
//     setPgrent(false);
//     setCommercial(true);
//   }

// }
// const handleplotcommercial =(data) =>{
//   setCategory(data);
// }

// const handleGender =(Gender) =>{
//   setGender(Gender);
// }

//   return (
//     <div className='navbar-custom1' style={navStyle}>
//       <nav className="navbar navbar-expand-lg ">
//         <div className="" style={navbarStyle}>
//           <ul className="navbar-nav d-flex justify-content-between mx-lg-5">
//             <li className="nav-item">
//               <a className="nav-link" href="#" style={navLinkStyle} onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}>
//                 Buy
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" style={navLinkStyle}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}>
//                 Rent
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" style={navLinkStyle}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}>
//                 Lease
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" style={navLinkStyle}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}>
//                 Sell
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" style={navLinkStyle}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}>
//               Prime
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" style={navLinkStyle}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}>
//                Help
//               </a>
//             </li>
  
          
          
           
//           </ul>
//         </div>
//       </nav>
//       <h1 className="text-center my-5 text-white-50">Welcome back, Let’s continue Your Search </h1>
     
//       <div className="card bg-light text-dark custom-border-radius mx-auto  pb-5 w-50">
//       <nav className="navbar navbar-expand-lg">
//           <div className="container" style={{backgroundColor: '#FFFFFF4D', width: '100%'}}>
//             <ul className="navbar-nav value d-flex justify-content-between w-100">
//               <li className="nav-item ">
//                 <a className="nav-link" href="#" style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Plot')}>
//                   Plot
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Land')}>
//                   Land
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Residential')}>
//                   Residential
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Commercial')}>
//                   Commercial
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
      
//       <hr className="dropdown-divider" />
//       <div className="container gap-3">
//       <hr />
//       <div className="row mx-2 text-black">
//         <div className="col d-flex align-items-center ">
//           <a className="navbar-brand " href="/">
//             <img src={image1} alt="Logo" />
//           </a>
          
//           <span className='ms-2'>Chennai</span>
//           <div className="vr mx-5"></div>
//         </div>

//        <div className="col d-flex align-items-center text-center mx-auto w-100">
//        <Dropdown >
//  <Dropdown.Toggle variant="" id="dropdown-basic1" style={dropdownToggle}>
//     <a className="navbar-brand" href="/">
//       <img src={image2} alt="Logo" />
//     </a>
//     <span className='ms-2' style={{ border: 'none' }}onClick={()=>handlePropertyTypeClick('Property Type')}>Property Type</span>
//  </Dropdown.Toggle>

//  {activeDropdown && (
//  <Dropdown.Menu className='custom-dropdown-menu bg-light text-dark '>


 
// { activeDropdown === 'Plot' && (
       
//    <div className='d-flex flex-wrap gap-2'>
              
//               <Button
//       type="button"
//       className={`btn btn-outline-light me-2 ms-5 customplotss rounded-pill ${plott  === 'Residential plot' ? 'rest1' : ''}`}
//       onClick={() => handleButtonClick('Residential plot')}
//     >
//       Residential plot
//     </Button>
// <Button 
//   type="button"
//   className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'CommercialProperty' ? 'rest1' : ''}`}
//   onClick={() => handleButtonClick('CommercialProperty')}
 
// >
//   CommercialProperty
// </Button>
// <Button
//   type="button"
//   className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Industrial Plot' ? 'rest1' : ''}`}
//   onClick={() => handleButtonClick('Industrial Plot')}
// >
//   Industrial Plot
// </Button>

//           <div>

//           </div>
          
           
         
          
//         </div>
//       )}



 
// { activeDropdown === 'Land' && (

  
   
//         <div className='d-flex flex-wrap gap-2 ms-2'>
         
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Residential Land' ? 'rest1' : ''}`}
//             onClick={() => handleButtonClick('Residential Land')}>
//             Residential Land
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Industrial Land' ? 'rest1' : ''}`}
//             onClick={() => handleButtonClick('Industrial Land')}>
//             Industrial Land
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Agricultural  Land' ? 'rest1' : ''}`}
          
//             onClick={() => handleButtonClick('Agricultural  Land')}>
//             Agricultural  Land
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Plantation' ? 'rest1' : ''}`}
//             onClick={() => handleButtonClick('Plantation')}>
//             Plantation
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Estate' ? 'rest1' : ''}`} 
//             onClick={() => handleButtonClick('Estate')}>
//             Estate
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Farm  Land' ? 'rest1' : ''}`} 
//             onClick={() => handleButtonClick('Farm  Land')}>
//             Farm  Land
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${plott  === 'Furnishing' ? 'rest1' : ''}`}
//             onClick={() => handleButtonClick('Furnishing')}>
//             Furnishing
//           </Button>
    
      

//   </div>
// )}


//  {(activeDropdown === 'Plot') && plott && (
//   <>
//     <Card className="mt-5">
//       <Card.Body>
//       <div className='d-flex flex-row'>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${facing === 'Facing' ? 'rest1' : ''}`}
//     onClick={() => handleplot('Facing')}
//   >
//     Facing {facing === 'Facing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${facing === 'PostedBy' ? 'rest1' : ''}`}
//     onClick={() => handleplot('PostedBy')}
//   >
//     PostedBy {facing === 'PostedBy' ? <IoIosArrowUp />  :<IoIosArrowDown /> }
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${facing === 'Area' ? 'rest1' : ''}`}
//     onClick={() => handleplot('Area')}
//   >
//     Area {facing === 'Area' ? <IoIosArrowUp /> : <IoIosArrowDown />}
//   </Button>
// </div>

//       </Card.Body>
//     </Card>
//     {facing === 'Facing' && (
//       <Card className="mb-3">
//         <Card.Body>
//         <div className='d-flex flex-wrap'>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'North' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('North')}>
//                 North
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'East' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('East')}>
//                 East
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'South' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('South')}>
//                 South
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'West' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('West')}>
//                 West
//               </Button>
//             </div>
//           </Card.Body>
//         </Card>
//       )}
//       {facing === 'PostedBy' && (
//         <Card className="mb-3">
//           <Card.Body>
//             <div className='d-flex flex-wrap'>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Owner' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Owner')}>
//                 Owner
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Agent' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Agent')}>
//                 Agent
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Builder' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Builder')}>
//                 Builder
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Plot Developer' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Plot Developer')}>
//                 Plot Developer
//               </Button>
//             </div>
//         </Card.Body>
//       </Card>
//     )}
 
//     {facing === 'Area' && (
    
//           <div className='d-flex flex-wrap'>
//          <Budget name/>
//           </div>
      
//     )}
//   </>
// )}


// {(activeDropdown === 'Land') && plott && (
//   <>
// <Card className="mt-5">
//       <Card.Body>
//       <div className='d-flex flex-row'>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${facing === 'Facing' ? 'rest1' : ''}`}
//     onClick={() => handleplot('Facing')}
//   >
//     Facing {facing === 'Facing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${facing === 'PostedBy' ? 'rest1' : ''}`}
//     onClick={() => handleplot('PostedBy')}
//   >
//     PostedBy {facing === 'PostedBy' ? <IoIosArrowUp />  :<IoIosArrowDown /> }
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${facing === 'Area' ? 'rest1' : ''}`}
//     onClick={() => handleplot('Area')}
//   >
//     Area {facing === 'Area' ? <IoIosArrowUp /> : <IoIosArrowDown />}
//   </Button>
// </div>
//       </Card.Body>
//     </Card>
//     {facing === 'Facing' && (
//       <Card className="mb-3">
//         <Card.Body>
//         <div className='d-flex flex-wrap'>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'North' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('North')}>
//                 North
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'East' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('East')}>
//                 East
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'South' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('South')}>
//                 South
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'West' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('West')}>
//                 West
//               </Button>
//             </div>
//           </Card.Body>
//         </Card>
//       )}
//       {facing === 'PostedBy' && (
//         <Card className="mb-3">
//           <Card.Body>
//             <div className='d-flex flex-wrap'>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Owner' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Owner')}>
//                 Owner
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Agent' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Agent')}>
//                 Agent
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Builder' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Builder')}>
//                 Builder
//               </Button>
//               <Button
//                 type="button"
//                 className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Plot Developer' ? 'rest1' : ''}`}
//                 onClick={() => handleClick('Plot Developer')}>
//                 Plot Developer
//               </Button>
//             </div>
//         </Card.Body>
//       </Card>
//     )}
 
//     {facing === 'Area' && (
    
//           <div className='d-flex flex-wrap'>
//          <Budget name/>
//           </div>
      
//     )}
//   </>
// )} 




 
 
//  {activeDropdown === 'Residential' && (
 
// <div className='container'>
//   <div className='d-flex  flex-wrap gap-3'>

//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill  btn-font-size ${residential === 'House' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('House')}

//                     >
//                       House
//                     </Button>
//                     <Button
                    
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Villa' ? 'rest1' : ''}`}
                     
//                       onClick={() => handleButtonres('Villa')}

//                     >
//                       Villa
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Bungalow' ? 'rest1' : ''}`}
                     
//                       onClick={() => handleButtonres('Bungalow')}

//                     >
//                       Bungalow
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Duplex House' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Duplex House')}

//                     >
//                       Duplex House
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Row House' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Row House')}

//                     >
//                       Row House
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Pant House' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Pant House')}

//                     >
//                       Pant House
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Farm house' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Farm house')}

//                     >
//                       Farm house
//                     </Button>

                 
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Flat' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Flat')}

//                     >
//                       Flat
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Apartment' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Apartment')}

//                     >
//                       Apartment
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'BuilderFloor Apartment' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('BuilderFloor Apartment')}

//                     >
//                       BuilderFloor Apartment
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Multi storey Apartment' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Multi storey Apartment')}


//                     >
//                       Multi storey Apartment
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Luxury Apartment' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Luxury Apartment')}

//                     >
//                       Luxury Apartment
//                     </Button>
//                     <Button
//                       type="button"
//                       className={`btn btn-outline-light me-2 customplotss rounded-pill ${residential === 'Studio Apartment' ? 'rest1' : ''}`}
//                       onClick={() => handleButtonres('Studio Apartment')}

//                     >
//                       Studio Apartment
//                     </Button>
//                     </div>

               
//                 </div>
             
        
//       )}


//   {activeDropdown === 'Residential' && (
//   <>
//     {residential && (
//       <>
//       <Card className="mt-3">
//     <Card.Body>
//       <div className='d-flex flex-wrap'>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Bedroom=== 'Bedroom' ? 'rest1' : ''}`}
//           onClick={() => handleplotss('Bedroom')}>
//           Bedroom {Bedroom=== 'Bedroom' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Bedroom=== 'Furnishing' ? 'rest1' : ''}`}
//           onClick={() => handleplotss('Furnishing')}>
//         Furnishing{Bedroom=== 'Furnishing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Bedroom=== 'Condition' ? 'rest1' : ''}`}
//           onClick={() => handleplotss('Condition')}>
//         Condition{Bedroom=== 'Condition' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Bedroom=== 'Posted By' ? 'rest1' : ''}`}
//           onClick={() => handleplotss('Posted By')}>
//         Posted By{Bedroom=== ' Posted By' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//         </Button>
//       </div>
//     </Card.Body>
//   </Card>
      
//         {Bedroom === 'Bedroom' && (
//           <Card className="mb-5">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === ' 1 BHK' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick (' 1 BHK')}>
//                   1 BHK
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === ' 2 BHK' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick (' 2 BHK')}>
//          2 BHK
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === '3 BHK' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick ('3 BHK')}>
//             3 BHK
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === '4 BHK' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick ('4 BHK')}>
//            4 BHK
//           </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         )}
//         {Bedroom === 'Furnishing' && (
//        <Card className="mb-5">
//        <Card.Body>
//          <div className='d-flex flex-wrap'>
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Fully Furnished' ? 'rest1' : ''}`}
//              onClick={() =>  handleClick ('Fully Furnished')}>
//           Fully Furnished
//            </Button>
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Semi Furnished' ? 'rest1' : ''}`}
//              onClick={() =>  handleClick ('Semi Furnished')}>
//            Semi Furnished
//            </Button>
      
        
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Un Furnished' ? 'rest1' : ''}`}
//              onClick={() =>  handleClick ('Un Furnished')}>
//             Un Furnished
//            </Button>
//          </div>
//        </Card.Body>
//      </Card>
//         )}
//         {Bedroom === 'Condition' && (
//           <Card className="mb-5">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Ready to Move' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick ('Ready to Move')}>
//                   Ready to Move
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Under Construction' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick ('Under Construction')}>
//            Under Construction
//           </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         )}
//   {Bedroom === 'Posted By' && (
//           <Card className="mb-5">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Owner' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick ('Owner')}>
//                       Owner
//                 </Button>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Agent' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick ('Agent')}>
//                      Agent
//                 </Button>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Builder' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick ('Builder')}>
//                  Builder
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Plot Developer' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick ('Plot Developer')}>
//           Plot Developer
//           </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         )}

//       </>
//     )}
//   </>
// )}
  
//  {activeDropdown === 'Commercial' && (
//   <div className='container'>
//    <div className='d-flex flex-wrap gap-3'>
//    <Button
//         type="button"
//         className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Office' ? 'rest1' : ''}`}
//         onClick={() => handlecommercial('Office')}
//       >
//         Office
//       </Button>
//       <Button
//         type="button"
//         className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Shop' ? 'rest1' : ''}`}
//         onClick={() => handlecommercial('Shop')}
//       >
//         Shop
//       </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Showroom' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Showroom')}
//   >
//     Showroom
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Godown' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Godown')}
//   >
//     Godown
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Shed' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Shed')}
//   >
//     Shed
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Co-working Space' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Co-working Space')}
//   >
//     Co-working Space
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Commercial complex' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Commercial complex')}
//   >
//     Commercial complex
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Industrial Building' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Industrial Building')}
//   >
//     Industrial Building
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Industrial shed' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Industrial shed')}
//   >
//     Industrial shed
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Factory' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Factory')}
//   >
//     Factory
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'Service Apartment' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('Service Apartment')}
//   >
//     Service Apartment
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'PG Home' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('PG Home')}
//   >
//     PG Home
//   </Button>
//   <Button
//     type="button"
//     className={`btn btn-outline-light me-2 customplotss rounded-pill ${color === 'PG Hostel' ? 'rest1' : ''}`}
//     onClick={() => handlecommercial('PG Hostel')}
//   >
//     PG Hostel
//   </Button>
// </div>

//   </div>
// )}

// {activeDropdown === 'Commercial' && (
//   <>
//     {Commercial && (
//       <>
//       <Card className="container">
//     <Card.Body>
//       <div className='d-flex flex-wrap gap-2'>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Category === 'Category' ? 'rest1' : ''}`}
//             onClick={() =>   handleplotcommercial ('Category')}>
//       Category {Category === 'Category' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Category === 'Furnishing' ? 'rest1' : ''}`}
//             onClick={() =>   handleplotcommercial ('Furnishing')}>
//      Furnishing {Category === 'Furnishing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Category === 'Condition' ? 'rest1' : ''}`}
//           onClick={() =>   handleplotcommercial ('Condition')}>
//         Condition  {Category === 'Condition' ? <IoIosArrowUp /> :<IoIosArrowDown /> } 
//         </Button>
      
//       </div>
//     </Card.Body>
//   </Card>
      
//         {Category === 'Category' && (
//           <Card className="">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'New' ? 'rest1' : ''}`}
//           onClick={() =>    handleClick('New')}>
//                 New
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Resale' ? 'rest1' : ''}`}
//             onClick={() =>    handleClick ('Resale')}>
//        Resale
//           </Button>
         
       
//               </div>
//             </Card.Body>
//           </Card>
//         )}
//         {Category === 'Furnishing' && (
//        <Card className="">
//        <Card.Body>
//          <div className='d-flex flex-wrap'>
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === ' Fully Furnished' ? 'rest1' : ''}`}
//              onClick={() =>   handleClick (' Fully Furnished')}>
//           Fully Furnished
//            </Button>
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Semi Furnished' ? 'rest1' : ''}`}
//              onClick={() =>  handleClick  ('Semi Furnished')}>
//            Semi Furnished
//            </Button>
          
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Un Furnished' ? 'rest1' : ''}`}
//              onClick={() =>    handleClick ('Un Furnished')}>
//             Un Furnished
//            </Button>
//          </div>
//        </Card.Body>
//      </Card>
//         )}
//         {Category === 'Condition' && (
//           <Card className="">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Ready to Move' ? 'rest1' : ''}`}
//                   onClick={() =>    handleClick ('Ready to Move')}>
//                   Ready to Move
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Under Construction' ? 'rest1' : ''}`}
//             onClick={() =>   handleClick ('Under Construction')}>
//            Under Construction
//           </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         )}
//       </>
//     )}
//   </>
// )}
//  {activeDropdown === 'Commercial' &&(
//   <>
//     {pgrent && (
//       <>
//       <Card className="">
//     <Card.Body>
//       <div className='d-flex flex-wrap'>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Gender === 'Gender' ? 'rest1' : ''}`}
//           onClick={() =>   handleGender ('Gender')}>
//     Gender {Gender === 'Gender' ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Gender === 'Tenants' ? 'rest1' : ''}`}
//           onClick={() =>   handleGender ('Tenants')}>
//  Tenants {Gender === ' Tenants' ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Gender === 'Furnishing' ? 'rest1' : ''}`}
//           onClick={() =>   handleGender ('Furnishing')}>
//         Furnishing {Gender === 'Furnishing' ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Gender === 'Rooms' ? 'rest1' : ''}`}
//           onClick={() =>   handleGender ('Rooms')}>
//        Rooms {Gender === ' Rooms' ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </Button>
//         <Button
//           type="button"
//           className={`btn btn-outline-light me-2 customplotss rounded-pill ${Gender === 'Sharing' ? 'rest1' : ''}`}
//           onClick={() =>   handleGender ('Sharing')}>
//      Sharing {Gender === ' Sharing' ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </Button>
//       </div>
//     </Card.Body>
//   </Card>
      
//         {Gender === 'Gender' && (
//           <Card className="">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
           
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Male' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick ('Male')}> Male
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Female' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick ('Female')}> 
//      Female
//           </Button>
         
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Transgender' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick ('Transgender')}>
//     Transgender
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Both' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick ('Both')}>
//     Both
//           </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         )}
//         {Gender === 'Tenants' && (
//        <Card className="">
//        <Card.Body>
//          <div className='d-flex flex-wrap'>
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Students' ? 'rest1' : ''}`}
//              onClick={() =>  handleClick ('Students')}>
//         Students
//            </Button>
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Professionals' ? 'rest1' : ''}`}
//              onClick={() =>  handleClick ('Professionals')}>
//           Professionals
//            </Button>
          
//            <Button
//              type="button"
//              className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Both' ? 'rest1' : ''}`}
//              onClick={() =>  handleClick ('Both')}>
//       Both
//            </Button>
//          </div>
//        </Card.Body>
//      </Card>
//         )}
//         {Gender=== 'Furnishing' && (
//           <Card className="">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Fully Furnished' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick ('Fully Furnished')}>
//               Fully Furnished
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Semi Furnished' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick ('Semi Furnished')}>
//            Semi Furnished
//           </Button>
//           <Button
//   type="button"
//   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Un Furnished' ? 'rest1' : ''}`}
//   onClick={() =>  handleClick('Un Furnished')}>
//   Un Furnished
// </Button>

//               </div>
//             </Card.Body>
//           </Card>
//         )}
//   {Gender=== 'Rooms' && (
//           <Card className="">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'A/c' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick('A/c')}>
//            A/c
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'non A/C' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick('non A/C')}>
//            non A/C
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'A/c  or non A/C' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick('A/c  or non A/C')}>
//           A/c  or non A/C
//           </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         )}
//  {Gender=== 'Sharing' && (
//           <Card className="">
//             <Card.Body>
//               <div className='d-flex flex-wrap'>
//                 <Button
//                   type="button"
//                   className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Single Sharing' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick('Single Sharing')}>
//                  Single Sharing
//                 </Button>
//                 <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss rounded-pill ${selectedOption === 'Double Sharing' ? 'rest1' : ''}`}
//                   onClick={() =>  handleClick('Double Sharing')}>
//           Double Sharing
//           </Button>
//           <Button
//             type="button"
//             className={`btn btn-outline-light me-2 customplotss  rounded-pill ${selectedOption === 'Triple Sharing' ? 'rest1' : ''}`}
//             onClick={() =>  handleClick('Triple Sharing')}>
//          Triple Sharing
//           </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         )}
//       </>
//     )}
//   </>
// )} 
//   </Dropdown.Menu>
//  )}

// </Dropdown>
//   <div className="vr mx-3"></div>
// </div>

//         <div className="col d-flex align-items-center">
//         <Dropdown>
//  <Dropdown.Toggle variant="" id="dropdown-basic" style={dropdownToggle}>
//     <a className="navbar-brand" href="/">
//       <img src={image3} alt="Logo" />
//     </a>
//     <span className='ms-2' style={{ border: 'none'}}>Budget</span>
//  </Dropdown.Toggle>
//  <Dropdown.Menu className='mt-4'  style={{width:"980px",marginRight:'-30px'}}>
//  <Budget className = " "/>
  
// </Dropdown.Menu>
// </Dropdown>



//         </div>
//         <div className="col d-flex align-items-center">
//   <button className="btn btn-danger rounded-pill ms-4 w-100" style={{ height: '60px' }}>
//     <IoSearchOutline className='me-4' />Search
//   </button>
// </div>

//       </div>
     
//     </div>
   
// </div>






// </div>
  
   
  


//       )
// }

//       export default Navigation
