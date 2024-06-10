
// import React, { useEffect, useState } from 'react';
// import '../Style/Properties.css';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Lease({ data }) {
//     const { id } = useParams();
//     const [plotData, setPlotData] = useState({});
//     const [landData, setLandData] = useState({});
//     const [houseData, setHouseData] = useState([]);
//     const [serviceApartmentData, setServiceApartmentData] = useState({});
//     const [factoryData, setFactoryData] = useState({});
//     const [industrialBuildingData, setIndustrialBuildingData] = useState({});
//     const [showroomData, setShowroomData] = useState({});
//     const [apartmentData, setApartmentData] = useState({});
//     const [properties, setProperties] = useState({});

//     const [showMore, setShowMore] = useState(false);
//     const [showMoreIndustrialBuilding, setShowMoreIndustrialBuilding] = useState(false);
//     const [showMoreLand, setShowMoreLand] = useState(false);
//     const [showMoreShowroom, setShowMoreShowroom] = useState(false);
//     const [showMoreServiceApartment, setShowMoreServiceApartment] = useState(false);
//     const [showMoreFactory, setShowMoreFactory] = useState(false);
//     const [propertyData, setPropertyData] = useState({});

//     const [isActionTaken, setIsActionTaken] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchPlotData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/properties/${id}/`);
//                 const data = response.data;
//                 setPropertyData(data);
//                 setPlotData(data);
//                 setLandData(data);
//                 setHouseData(data);
//                 setServiceApartmentData(data);
//                 setFactoryData(data);
//                 setIndustrialBuildingData(data);
//                 setShowroomData(data);
//                 setApartmentData(data);
//                 setProperties(data);

//                 if (data.approved !== undefined) {
//                     setIsActionTaken(true);
//                 }
//             } catch (error) {
//                 console.error('Error fetching plot data:', error);
//             }
//         };
//         fetchPlotData();
//     }, [id]);

//     const approvereject = async (action, id) => {
//         try {
//             let url = '';
//             let successMessage = '';

//             if (action === 'approve') {
//                 url = `http://127.0.0.1:8000/api/approve_property/${id}/`;
//                 successMessage = 'Property approved successfully';
//             } else if (action === 'reject') {
//                 url = `http://127.0.0.1:8000/api/reject_property/${id}/`;
//                 successMessage = 'Property rejected successfully';
//             } else {
//                 throw new Error('Invalid action:', action);
//             }

//             await axios.post(url, {});
//             console.log(successMessage);

//             // Disable both buttons after successful action
//             setIsActionTaken(true);

//             navigate('/Properties'); // Navigate to '/Properties' after successful operation
//         } catch (error) {
//             console.error('Error:', error);
//             // Add additional error handling as needed
//         }
//     };

//     const shouldDisplayButton = plotData.approved === undefined;

//     return (

//         <div className='Lease'>


//             <div className='row' style={{ marginBottom: '10%' }}>
//                 {plotData && (
//                     <div className='col'>
//                         <div className='card' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
//                             <div className='row m-4'>
//                                 <div className='col-lg-3'>
//                                     <h1 style={{ color: 'rgba(215, 36, 42, 1)' }}>{plotData.sale_price}</h1>
//                                 </div>
//                                 <div className='col-lg-9'>
//                                     <h6 className='sell2'>{plotData.you_are_here_to}</h6>
//                                 </div>
//                             </div>

//                             <h6 className='mb-5 mt-5 p-2'>3 BHK Flat for Sale in Perungudi, Chennai</h6>

//                             <div className="row p-1">
//                                 {plotData.plot_properties?.plot_images?.slice(0, showMore ? undefined : 1).map((imageObj, index) => (
//                                     <div key={`plot-${index}`} className="col-lg-3">
//                                         <img src={imageObj.image} alt={`Plot ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
//                                     </div>
//                                 ))}
//                                 {plotData.plot_properties?.plot_images?.length > 1 && (
//                                     <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center' }}>
//                                         {showMore ? 'Show Less Images' : 'View More Images'}
//                                     </span>
//                                 )}

//                                 {houseData?.residential_properties?.house?.house_images?.slice(0, showMore ? undefined : 1).map((imageObj, index) => (
//                                     <div key={`house-image-${index}`} className="col-lg-3">
//                                         <img src={imageObj.image} alt={`House Image ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
//                                     </div>
//                                 ))}
//                                 {houseData?.residential_properties?.house?.house_images?.length > 1 && (
//                                     <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center' }}>
//                                         {showMore ? 'Show Less Images' : 'View More Images'}
//                                     </span>
//                                 )}

//                                 {landData.land_properties?.land_images?.slice(0, showMoreLand ? undefined : 1).map((imageObj, index) => (
//                                     <div key={`land-${index}`} className="col-lg-3">
//                                         <img src={imageObj.image} alt={`Land Image ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
//                                     </div>
//                                 ))}
//                                 {landData.land_properties?.land_images?.length > 0 && (
//                                     <span onClick={() => setShowMoreLand(!showMoreLand)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
//                                         {showMoreLand ? 'Show Less Images' : 'View More Images'}
//                                     </span>
//                                 )}

//                                 {serviceApartmentData.commercial_properties?.service_apartment?.service_apartment_images?.slice(0, showMoreServiceApartment ? undefined : 1).map((imageObj, index) => (
//                                     <div key={`service-apartment-${index}`} className="col-lg-3">
//                                         <img src={imageObj.image} alt={`Service Apartment ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
//                                     </div>
//                                 ))}
//                                 {serviceApartmentData.commercial_properties?.service_apartment?.service_apartment_images?.length > 1 && (
//                                     <span onClick={() => setShowMoreServiceApartment(!showMoreServiceApartment)} className="text-primary" style={{ textAlign: 'center' }}>
//                                         {showMoreServiceApartment ? 'Show Less Images' : 'View More Images'}
//                                     </span>
//                                 )}

//                                 {factoryData.commercial_properties?.factory?.factory_images?.slice(0, showMoreFactory ? undefined : 1).map((imageObj, index) => (
//                                     <div key={`factory-${index}`} className="col-lg-3">
//                                         <img src={imageObj.image} alt={`Factory ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
//                                     </div>
//                                 ))}
//                                 {factoryData.commercial_properties?.factory?.factory_images?.length > 1 && (
//                                     <span onClick={() => setShowMoreFactory(!showMoreFactory)} className="text-primary" style={{ textAlign: 'center' }}>
//                                         {showMoreFactory ? 'Show Less Images' : 'View More Images'}
//                                     </span>
//                                 )}

//                                 {industrialBuildingData.commercial_properties?.industrialbuilding?.industrialbuilding_images?.slice(0, showMoreIndustrialBuilding ? undefined : 1).map((imageObj, index) => (
//                                     <div key={`industrial-building-${index}`} className="col-lg-3">
//                                         <img src={imageObj.image} alt={`Industrial Building ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
//                                     </div>
//                                 ))}
//                                 {industrialBuildingData.commercial_properties?.industrialbuilding?.industrialbuilding_images?.length > 1 && (
//                                     <span onClick={() => setShowMoreIndustrialBuilding(!showMoreIndustrialBuilding)} className="text-primary" style={{ textAlign: 'center' }}>
//                                         {showMoreIndustrialBuilding ? 'Show Less Images' : 'View More Images'}
//                                     </span>
//                                 )}

//                                 {showroomData.commercial_properties?.showroom?.showroom_images?.slice(0, showMoreShowroom ? undefined : 1).map((imageObj, index) => (
//                                     <div key={`showroom-${index}`} className="col-lg-3">
//                                         <img src={imageObj.image} alt={`Showroom ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
//                                     </div>
//                                 ))}
//                                 {showroomData.commercial_properties?.showroom?.showroom_images?.length > 1 && (
//                                     <span onClick={() => setShowMoreShowroom(!showMoreShowroom)} className="text-primary" style={{ textAlign: 'center' }}>
//                                         {showMoreShowroom ? 'Show Less Images' : 'View More Images'}
//                                     </span>
//                                 )}
//                             </div>

//                             <div className="row">
//                                 <div className="col">
//                                     {shouldDisplayButton && !isActionTaken && (
//                                         <>
//                                             <button className='btn btn-primary m-2' onClick={() => approvereject('approve', id)}>Approve</button>
//                                             <button className='btn btn-danger m-2' onClick={() => approvereject('reject', id)}>Reject</button>
//                                         </>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>



//  {propertyData.property_type === "plot" && (
//                     // Plot details
//                     <div className='card' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
//                         <table className="table">
//                             <tbody>
//                                 <tr>
//                                     <td>Sale Price</td>
//                                     <td>{propertyData.sale_price}</td>
//                                 </tr>
//                                 {/* Other property details specific to plot */}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//                 {propertyData.property_type === "land" && (
//                     // Land details
//                     <div className='card' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
//                         <table className="table">
//                             <tbody>
//                                 <tr>
//                                     <td>Sale Price</td>
//                                     <td>{propertyData.sale_price}</td>
//                                 </tr>
//                                 {/* Other property details specific to land */}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//           )}
//             </div>
//         </div>
//     );
// }



// export default Lease


{/* <div className='card p-5'  style={{ margin: '1%', borderColor: 'red', width: '98%' }} >
<h4>Total Enquires : </h4>
</div>

<div className='row'>
<div className="col d-flex justify-content-end">

  <button type="button" className="btn btn-danger" style={{ width: '150px', margin: '3%' }} onClick={handleDone} >
    Done
  </button>
</div>
</div> */}