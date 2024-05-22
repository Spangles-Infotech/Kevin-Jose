import React, { useEffect, useState } from 'react';
import '../Style/Properties.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Selling() {
  const { id } = useParams();
  const [plotData, setPlotData] = useState({});
  const [landData, setLandData] = useState({});
  const [houseData, setHouseData] = useState([]);
  const [serviceApartmentData, setServiceApartmentData] = useState({});
  const [factoryData, setFactoryData] = useState({});
  const [industrialBuildingData, setIndustrialBuildingData] = useState({});
  const [showroomData, setShowroomData] = useState({});
  const [apartmentData, setApartmentData] = useState({});
  const [properties, setProperties] = useState({});

  const [showMore, setShowMore] = useState(false);
  const [showMoreIndustrialBuilding, setShowMoreIndustrialBuilding] = useState(false);
  const [showMoreLand, setShowMoreLand] = useState(false);
  const [showMoreShowroom, setShowMoreShowroom] = useState(false);
  const [showMoreServiceApartment, setShowMoreServiceApartment] = useState(false);
  const [showMoreFactory, setShowMoreFactory] = useState(false);


  const [isApproved, setIsApproved] = useState(false);
  const [isReject, setIsReject] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlotData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/properties/${id}/`);
        setPlotData(response.data);
        setLandData(response.data);
        setHouseData(response.data);
        setServiceApartmentData(response.data);
        setFactoryData(response.data);
        setIndustrialBuildingData(response.data);
        setShowroomData(response.data);
        setApartmentData(response.data);
        setProperties(response.data);


      } catch (error) {
        console.error('Error fetching plot data:', error);


      }
    };
    fetchPlotData();
  }, [id]);

  const approvereject = async (action, id, setIsReject) => {
    try {
      let url = '';
      let successMessage = '';

      if (action === 'approve') {
        url = `http://127.0.0.1:8000/api/approve_property/${id}/`;
        successMessage = 'Property approved successfully';
      } else if (action === 'reject') {
        url = `http://127.0.0.1:8000/api/reject_property/${id}/`;
        successMessage = 'Property rejected successfully';
        setIsReject(false);
      } else {
        throw new Error('Invalid action:', action);
      }
      const response = await axios.post(url, {});
      console.log(successMessage);
      console.log('Server response:', response.data);
      navigate('/Properties'); // Navigate to '/Properties' after successful operation
    } catch (error) {
      console.error('Error:', error);
      // Add additional error handling as needed
    }
  };





  return (

    <div className='row' style={{ marginBottom: '10%' }}>
      {plotData && (
        <div className='col' >
          < div className='card ' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
            <div className='row m-4'>

              <div className='col-lg-3'>
                <h1 style={{ color: 'rgba(215, 36, 42, 1)' }}>{plotData.sale_price}</h1>
              </div>

              <div className='col-lg-9'>
                <h6 className='sell2'>{plotData.you_are_here_to}</h6>
              </div>
            </div>

            <h6 className='mb-5 mt-5 p-2'>3 BHK Flat for Sale in Perungudi, Chennai</h6>

            {/* image 1 */}
            <div className="row p-1">
              {plotData.plot_properties?.plot_images?.slice(0, showMore ? undefined : 1).map((imageObj, index) => (
                <div key={`plot-${index}`} className="col-lg-3" >
                  <img src={imageObj.image} alt={`Plot ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}
              {plotData.plot_properties?.plot_images?.length > 1 && (
                <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center' }}>
                  {showMore ? 'Show Less Images' : 'View More Images'}
                </span>
              )}
              {/* image 2 */}
              {houseData?.residential_properties?.house?.house_images?.slice(0, showMore ? undefined : 1).map((imageObj, index) => (
                <div key={`house-image-${index}`} className="col-lg-3">
                  <img src={imageObj.image} alt={`House Image ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}
              {houseData?.residential_properties?.house?.house_images?.length > 1 && (
                <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center' }}>
                  {showMore ? 'Show Less Images' : 'View More Images'}
                </span>
              )}

              {/* image 3 completed */}
              {landData.land_properties?.land_images?.slice(0, showMoreLand ? undefined : 1).map((imageObj, index) => (
                <div key={`land-${index}`} className="col-lg-3">
                  <img src={imageObj.image} alt={`Land Image ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}
              {landData.land_properties?.land_images?.length > 0 && (
                <span onClick={() => setShowMoreLand(!showMoreLand)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                  {showMoreLand ? 'Show Less Images' : 'View More Images'}
                </span>
              )}


              {/* image 4  completed*/}
              {serviceApartmentData.commercial_properties?.service_apartment?.service_apartment_images?.slice(0, showMoreServiceApartment ? undefined : 1).map((imageObj, index) => (
                <div key={`service-apartment-${index}`} className="col-lg-3">
                  <img src={imageObj.image} alt={`Service Apartment ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}

              {/* Toggle "show more" button for Service Apartment images */}
              {serviceApartmentData.commercial_properties?.service_apartment?.service_apartment_images?.length > 1 && (
                <span onClick={() => setShowMoreServiceApartment(!showMoreServiceApartment)} className="text-primary" style={{ textAlign: 'center' }}>
                  {showMoreServiceApartment ? 'Show Less Images' : 'View More Images'}
                </span>
              )}
              {/* image 5 */}
              {factoryData.commercial_properties?.factory?.factory_images?.slice(0, showMoreFactory ? undefined : 1).map((imageObj, index) => (
                <div key={`factory-${index}`} className="col-lg-3">
                  <img src={imageObj.image} alt={`Factory ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}

              {/* Toggle "show more" button for Factory images */}
              {factoryData.commercial_properties?.factory?.factory_images?.length > 1 && (
                <span onClick={() => setShowMoreFactory(!showMoreFactory)} className="text-primary" style={{ textAlign: 'center' }}>
                  {showMoreFactory ? 'Show Less Images' : 'View More Images'}
                </span>
              )}

              {/* industrialBuildingData completed */}
              {industrialBuildingData.commercial_properties?.industrialbuilding?.industrialbuilding_images?.slice(0, showMoreIndustrialBuilding ? undefined : 1).map((imageObj, index) => (
                <div key={`industrial-building-${index}`} className="col-lg-3">
                  <img src={imageObj.image} alt={`Industrial Building ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}
              {/* Toggle "show more" button for Industrial Building images */}
              {industrialBuildingData.commercial_properties?.industrialbuilding?.industrialbuilding_images?.length > 1 && (
                <span onClick={() => setShowMoreIndustrialBuilding(!showMoreIndustrialBuilding)} className="text-primary" style={{ textAlign: 'center' }}>
                  {showMoreIndustrialBuilding ? 'Show Less Images' : 'View More Images'}
                </span>
              )}


              {/* {showroomData.commercial_properties?.showroom?.showroom_images?.slice(0,showMore ? undefined : 1).map((imageObj, index) => (
                <div key={`showroom-${index}`} className="col-lg-3" >
                  <img src={imageObj.image} alt={`Showroom ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}
              {showroomData.commercial_properties?.showroom?.showroom_images?.length > 1 && (
                <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center' }}>
                  {showMore ? 'Show Less Images' : 'View More Images'}
                </span>

              )} */}

              {showroomData.commercial_properties?.showroom?.showroom_images?.slice(0, showMoreShowroom ? undefined : 1).map((imageObj, index) => (
                <div key={`showroom-${index}`} className="col-lg-3">
                  <img src={imageObj.image} alt={`Showroom ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}

              {/* Toggle "show more" button for Showroom images */}
              {showroomData.commercial_properties?.showroom?.showroom_images?.length > 1 && (
                <span onClick={() => setShowMoreShowroom(!showMoreShowroom)} className="text-primary" style={{ textAlign: 'center' }}>
                  {showMoreShowroom ? 'Show Less Images' : 'View More Images'}
                </span>
              )}

              {/* apartmentData completed  */}
              {apartmentData?.residential_properties?.apartment?.apartment_images?.slice(0, showMore ? undefined : 1).map((imageObj, index) => (
                <div key={`apartment-image-${index}`} className="col-lg-3">
                  <img src={imageObj.image} alt={`Apartment ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                </div>
              ))}
              {apartmentData?.residential_properties?.apartment?.apartment_images?.length > 1 && (
                <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center', margin: '1%' }}>
                  {showMore ? 'Show Less Images' : 'View More Images'}
                </span>
              )}
              {/* commercialproperties completed  */}
              {properties.commercial_properties?.pg_colony && (
                <div className="row p-1">
                  {properties.commercial_properties.pg_colony.pgcolony_images?.slice(0,showMore? undefined :1).map((imageObj, index) => (
                    <div key={`pgcolony-${index}`} className="col-lg-3">
                      <img src={imageObj.image} alt={`PG Colony ${index}`} style={{ width: '100%', height: '500px', marginTop: '1%' }} />
                    </div>
                  ))}
                </div>
              )}
               {properties?.commercial_properties?.pg_colony?.pgcolony_images?.length > 1 && (
                <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center', margin: '1%' }}>
                  {showMore ? 'Show Less Images' : 'View More Images'}
                </span>
              )}
            </div>
            <div className='row m-1'>
              <div className='col-lg-4'>
                <p >Super Built-Up Area</p>
                <h6>1662 sqft</h6>
                <p>₹ 9,868/sqft</p>
                <p className='mt-3.5'>Status</p>
                <h6>Ready to Move</h6>

              </div>
              <div className='col-lg-2'>
                <p >Developer</p>
                <h6>Risland India</h6>
                <p className='mt-5'>Lifts</p>
                <h6>3</h6>
              </div>
              <div className='col-lg-4'>
                <p >Project</p>
                <h6>VGN Fairmont</h6>

                <p className='mt-5'>Furnished Status</p>
                <h6>Unfurnished</h6>

              </div>


              <div className='col-lg-2'>
                <p >Transaction Type</p>
                <h6>New Property</h6>

                <p className='mt-5'>Bedroom</p>
                <h6>3</h6>

              </div>
            </div>
            <hr />
            <p className='m-4'>Posted on 10/10/2023</p>
          </div>




          < div className='card ' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
            {/* <h1 className='sell3'> More Details</h1> */}
            <table className="table">
              <tbody >
                <tr>


                  <td><p>Price Breakup</p></td>
                  <td><h6>{plotData.sale_price}</h6></td>


                </tr>
                <tr>


                  <td><p>Booking Amount</p></td>
                  <td><h6>
                    ₹ 1,00,000
                  </h6></td>

                </tr>
                <tr>
                  <td><p>Address</p></td>
                  <td>            <h6>
                    {plotData.location}{plotData.city}
                  </h6></td>
                </tr>
                <tr>
                  <td><p>Furnishing</p></td>
                  <td>
                    <h6>
                      Unfurnished
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td> <p>Flooring</p></td>
                  <td>          <h6>
                    Vitrified
                  </h6></td>
                </tr>
                <tr>
                  <td> <p>Loan Offered</p></td>
                  <td>          <h6>
                    Estimated EMI: ₹73966
                  </h6>
                    <p style={{ fontSize: '10px' }}>
                      Apply for Home Loan
                    </p>
                  </td>
                </tr>
                <tr>
                  <td> <p >Water Availability</p></td>
                  <td> <h6>24 Hours Available</h6></td>
                </tr>
                <tr>
                  <td> <p>Status of Electricity</p></td>
                  <td>          <h6>No/Rare Powercut</h6></td>
                </tr>
                <tr>
                  <td>   <p>Floors allowed for
                    construction</p></td>
                  <td><h6>10</h6></td>
                </tr>
                <tr>
                  <td>  <p>No. of lift</p></td>
                  <td> <h6>3</h6></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='row'>
            <div className="col d-flex justify-content-end">
              <button type="button" className="btn btn-outline-danger" style={{ width: '150px', margin: '3%' }} onClick={() => approvereject('reject', id, setIsReject)}>
                Reject
              </button>
              <button type="button" className="btn btn-success" style={{ width: '150px', margin: '3%' }} onClick={() => approvereject('approve', id, setIsApproved)}>
                Approve
              </button>
            </div>
          </div>

        </div>
      )
      };
    </div >
  );
}

export default Selling

