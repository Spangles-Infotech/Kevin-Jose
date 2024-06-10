import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function Propertiessatues() {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState({});
  const [isActionTaken, setIsActionTaken] = useState(false);
  const navigate = useNavigate();
  const [landData, setLandData] = useState({});
  const [houseData, setHouseData] = useState([]);
  const [serviceApartmentData, setServiceApartmentData] = useState({});
  const [factoryData, setFactoryData] = useState({});
  const [industrialBuildingData, setIndustrialBuildingData] = useState({});
  const [showroomData, setShowroomData] = useState({});
  const [apartmentData, setApartmentData] = useState({});
  const [properties, setProperties] = useState({});
  const [pgColonyData, setPgColonyData] = useState({});


  const [showMore, setShowMore] = useState(false);
  const [showMoreIndustrialBuilding, setShowMoreIndustrialBuilding] = useState(false);
  const [showMoreLand, setShowMoreLand] = useState(false);
  const [showMoreShowroom, setShowMoreShowroom] = useState(false);
  const [showMoreServiceApartment, setShowMoreServiceApartment] = useState(false);
  const [showMoreFactory, setShowMoreFactory] = useState(false);
  const [apartmentimages, setApartmentimages] = useState(false);
  const [showMorePgColony, setShowMorePgColony] = useState(false);
  useEffect(() => {
    const fetchPlotData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get(`http://127.0.0.1:8000/api/properties/${id}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const data = response.data;
        setPropertyData(data);
        setLandData(data);
        setHouseData(data);
        setServiceApartmentData(data);
        setFactoryData(data);
        setIndustrialBuildingData(data);
        setShowroomData(data);
        setApartmentData(data);
        setPgColonyData(data);
        setIsActionTaken(data.approved !== undefined);
      } catch (error) {
        if (error.response?.status === 401) {
          console.error('User unauthorized. Redirecting to login page...');
          navigate('/login');
        } else {
          console.error('Error fetching plot data:', error);
        }
      }
    };
    fetchPlotData();
  }, [id, navigate]);

  const handleDone = () => {
    navigate(`/Enquired`);
  };

  return (
    <div className='Propertiessatues'>
      <div className='row' style={{ marginBottom: '10%' }}>
        {propertyData && (
          <div className='col'>
            <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
              <div className='row m-4'>
                <div className='col-lg-3'>
                  <h1 style={{ color: 'rgba(215, 36, 42, 1)' }}>
                    {propertyData?.sale_price}
                    {propertyData?.rent}
                    {propertyData?.lease_amount}
                    {propertyData?.advance}
                  </h1>
                </div>
                <div className='col-lg-9'>
                  <h6 className='sell2'>{propertyData.you_are_here_to}</h6>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <h6 className='mb-2 mt-2 p-2' style={{ textAlign: 'start', color: '#717171', marginLeft: '3%' }}>
                    3 BHK Flat for Sale in Perungudi, Chennai</h6>
                </div>
                <div className='col-sm-6'>
                  <h6 className='mb-2 mt-2 p-2' style={{ textAlign: 'end', color: '#717171', marginRight: '3%' }}>
                    Posted {propertyData?.created_at}</h6>
                </div>
              </div>

              <div className="row" style={{ margin: '2%' }}>
                {propertyData.plot_properties?.plot_images?.slice(0, showMore ? undefined : 4).map((imageObj, index) => (
                  <div key={`plot-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`Plot ${index}`} style={{ width: '100%', height: '300px', margin: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {propertyData.plot_properties?.plot_images?.length > 4 && (
                  <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {showMore ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

                {houseData?.residential_properties?.house?.house_images?.slice(0, showMore ? undefined : 4).map((imageObj, index) => (
                  <div key={`house-image-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`House Image ${index}`} style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {houseData?.residential_properties?.house?.house_images?.length > 4 && (
                  <span onClick={() => setShowMore(!showMore)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {showMore ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

                {landData.land_properties?.land_images?.slice(0, showMoreLand ? undefined : 4).map((imageObj, index) => (
                  <div key={`land-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`Land Image ${index}`} style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {landData.land_properties?.land_images?.length > 4 && (
                  <span onClick={() => setShowMoreLand(!showMoreLand)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {showMoreLand ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

                {serviceApartmentData.commercial_properties?.service_apartment?.service_apartment_images?.slice(0, showMoreServiceApartment ? undefined : 4).map((imageObj, index) => (
                  <div key={`service-apartment-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`Service Apartment ${index}`} style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {serviceApartmentData.commercial_properties?.service_apartment?.service_apartment_images?.length > 4 && (
                  <span onClick={() => setShowMoreServiceApartment(!showMoreServiceApartment)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {showMoreServiceApartment ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

                {factoryData.commercial_properties?.factory?.factory_images?.slice(0, showMoreFactory ? undefined : 4).map((imageObj, index) => (
                  <div key={`factory-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`Factory ${index}`} style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {factoryData.commercial_properties?.factory?.factory_images?.length > 4 && (
                  <span onClick={() => setShowMoreFactory(!showMoreFactory)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {showMoreFactory ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

                {industrialBuildingData.commercial_properties?.industrialbuilding?.industrialbuilding_images?.slice(0, showMoreIndustrialBuilding ? undefined : 4).map((imageObj, index) => (
                  <div key={`industrial-building-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`Industrial Building ${index}`} style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {industrialBuildingData.commercial_properties?.industrialbuilding?.industrialbuilding_images?.length > 4 && (
                  <span onClick={() => setShowMoreIndustrialBuilding(!showMoreIndustrialBuilding)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {showMoreIndustrialBuilding ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

                {showroomData.commercial_properties?.showroom?.showroom_images?.slice(0, showMoreShowroom ? undefined : 4).map((imageObj, index) => (
                  <div key={`showroom-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`Showroom ${index}`} style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {showroomData.commercial_properties?.showroom?.showroom_images?.length > 4 && (
                  <span onClick={() => setShowMoreShowroom(!showMoreShowroom)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {showMoreShowroom ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

                {apartmentData.residential_properties?.apartment?.apartment_images?.slice(0, apartmentimages ? undefined : 4).map((imageObj, index) => (
                  <div key={`apartment-${index}`} className="col-lg-3">
                    <img src={imageObj.image} alt={`Apartment ${index}`} style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}
                {apartmentData.residential_properties?.apartment?.apartment_images?.length > 4 && (
                  <span onClick={() => setApartmentimages(!apartmentimages)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    {apartmentimages ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}



                {pgColonyData.commercial_properties?.pg_colony?.pgcolony_images?.slice(0, showMorePgColony ? undefined : 4).map((imageObj, index) => (
                  <div key={`pg_colony-${index}`} className="col-lg-3 ">
                    <img src={imageObj.image} alt={`pg_colony ${index}`} className="img-fluid" style={{ width: '100%', height: '300px', marginTop: '2%', borderRadius: '20px' }} />
                  </div>
                ))}

                {pgColonyData.commercial_properties?.pg_colony?.pgcolony_images?.length > 4 && (
                  <span onClick={() => setShowMorePgColony(!showMorePgColony)} className="text-primary" style={{ textAlign: 'center', cursor: 'pointer', display: 'block' }}>
                    {showMorePgColony ? 'Show Less Images' : 'View More Images'}
                  </span>
                )}

              </div>
            </div>

            {propertyData.property_type === "plot" && (
              <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
                <div className="container">
                  <div className="row mb-5 mt-5">
                    {propertyData?.you_are_here_to === "sell" && (
                      <>

                        <div className="row mt-3">
                          <div className="col-sm-6">Sale Price</div>
                          <div className="col-sm-6">{propertyData?.sale_price}</div>

                        </div>

                        <div className="row mt-3">
                          <div className="col-sm-6">Price per sqft</div>
                          <div className="col-sm-6">{propertyData?.sale_price_per_sqft}</div>

                        </div>
                      </>
                    )}

                    {propertyData?.you_are_here_to === "rent" && (
                      <div className="row mt-3">
                        <div className="col-sm-6">Rent Price</div>
                        <div className="col-sm-6">{propertyData?.rent}</div>

                      </div>
                    )}

                    {propertyData?.you_are_here_to === "lease" && (
                      <div className="row mt-3">
                        <div className="col-sm-6">Lease Price</div>
                        <div className="col-sm-6">{propertyData?.lease_amount}</div>

                      </div>
                    )}

                    <div className="row mt-3">
                      <div className="col-sm-6">Address</div>
                      <div className="col-sm-6">{propertyData?.location}</div>

                    </div>

                    <div className="row mt-3">
                      <div className="col-sm-6">Area</div>
                      <div className="col-sm-6">
                        {propertyData?.plot_properties?.total_area}{" "}
                        {propertyData?.plot_properties?.total_area_unit}

                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-sm-6">Length</div>
                      <div className="col-sm-6">
                        {propertyData?.plot_properties?.length}{" "}
                        {propertyData?.plot_properties?.length_unit}
                      </div>

                    </div>

                    <div className="row mt-3">
                      <div className="col-sm-6">Type</div>
                      <div className="col-sm-6">{propertyData?.plot_properties?.plot_type}</div>

                    </div>

                    <div className="row mt-3">
                      <div className="col-sm-6">Breadth</div>
                      <div className="col-sm-6">
                        {propertyData?.plot_properties?.breadth}{" "}
                        {propertyData?.plot_properties?.breadth_unit}

                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-sm-6">Road Width</div>
                      <div className="col-sm-6">
                        {propertyData?.plot_properties?.road_width}{" "}
                        {propertyData?.plot_properties?.road_width_unit}
                      </div>
                    </div>



                    <div className="row mt-3">
                      <div className="col-sm-6">Facilities</div>
                      <div className="col-sm-6">
                        {propertyData?.plot_properties?.facilities.map((indoor, ind) => (
                          <span key={ind}>
                            {indoor?.name}{" "}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}


            {propertyData.property_type === "land" && (
              <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
                <div className="container">
                  <div className="row mt-5 mb-5 ">
                    {propertyData?.you_are_here_to === "sell" && (
                      <>
                        <div className="col-sm-6 mt-3">
                          <strong>Sale Price</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          {propertyData?.sale_price}
                        </div>

                        <div className="col-sm-6 mt-3">
                          <strong>Price per sqft</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          {propertyData?.sale_price_per_sqft}
                        </div>
                      </>
                    )}

                    {propertyData?.you_are_here_to === "rent" && (
                      <>
                        <div className="col-sm-6 mt-3">
                          <strong>Rent Price</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          {propertyData?.rent}
                        </div>
                      </>
                    )}

                    {propertyData?.you_are_here_to === "lease" && (
                      <>
                        <div className="col-sm-6 mt-3">
                          <strong>Lease Price</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          {propertyData?.lease_amount}
                        </div>

                        <div className="col-sm-6 mt-3">
                          <strong>Advance Amount</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          {propertyData?.advance}
                        </div>
                      </>
                    )}

                    <div className="col-sm-6 mt-3">
                      <strong>Address</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.location}
                    </div>

                    {propertyData?.owner && (
                      <>
                        <div className="col-sm-6 mt-3">
                          <strong>Posted by</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          Owner
                        </div>
                      </>
                    )}

                    {propertyData?.agent && (
                      <>
                        <div className="col-sm-6 mt-3">
                          <strong>Posted by</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          Agent
                        </div>
                        <div className="col-sm-6 mt-3">
                          <strong>Agent Commission</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          55
                        </div>
                      </>
                    )}

                    {propertyData?.builder && (
                      <>
                        <div className="col-sm-6 mt-3">
                          <strong>Posted by</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          Agent
                        </div>
                        <div className="col-sm-6 mt-3">
                          <strong>Agent Commission</strong>
                        </div>
                        <div className="col-sm-6 mt-3">
                          55
                        </div>
                      </>
                    )}

                    <div className="col-sm-6 mt-3">
                      <strong>Area</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.land_properties?.total_area} {propertyData?.land_properties?.total_area_unit}
                    </div>

                    <div className="col-sm-6 mt-3">
                      <strong>Length</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.land_properties?.length} {propertyData?.land_properties?.length_unit}
                    </div>

                    <div className="col-sm-6 mt-3">
                      <strong>Type</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.land_properties?.land_type}
                    </div>

                    <div className="col-sm-6 mt-3">
                      <strong>Direction</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.land_properties?.direction_facing}
                    </div>

                    <div className="col-sm-6 mt-3">
                      <strong>Breadth</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.land_properties?.breadth} {propertyData?.land_properties?.breadth_unit}
                    </div>

                    <div className="col-sm-6 mt-3">
                      <strong>Road Width</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.land_properties?.road_width} {propertyData?.land_properties?.road_width_unit}
                    </div>

                    <div className="col-sm-6 mt-3">
                      <strong>Facilities</strong>
                    </div>
                    <div className="col-sm-6 mt-3">
                      {propertyData?.land_properties?.facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor?.name} </span>
                        )
                      )}
                    </div>
                  </div></div>
              </div>
            )}



            {/* 3..th  */}
            {propertyData.property_type === "residential" && (
              <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
                <div className="container">
                  <div className="row mt-5 mb-5">
                    <div className="col-12">
                      {propertyData?.you_are_here_to === "sell" && (
                        <>
                          <div className="row mt-3">
                            <div className="col-sm-6">Sale Price</div>
                            <div className="col-sm-6">{propertyData?.sale_price}</div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-sm-6">Price per sqft</div>
                            <div className="col-sm-6">{propertyData?.sale_price_per_sqft}</div>
                          </div>
                          {propertyData.agent && (
                            <div className="row mt-3">
                              <div className="col-sm-6">Agent Commission</div>
                              <div className="col-sm-6">{propertyData?.agent_commission}</div>
                            </div>
                          )}
                        </>
                      )}
                      {propertyData?.you_are_here_to === "rent" && (
                        <>
                          <div className="row mt-3">
                            <div className="col-sm-6">Rent Price</div>
                            <div className="col-sm-6">{propertyData?.rent}</div>
                          </div>
                          {propertyData.agent && (
                            <div className="row">
                              <div className="col-sm-6">Agent Commission</div>
                              <div className="col-sm-6">{propertyData?.agent_commission}</div>
                            </div>
                          )}
                        </>
                      )}
                      {propertyData?.you_are_here_to === "lease" && (
                        <>
                          <div className="row mt-3">
                            <div className="col-sm-6">Lease Price</div>
                            <div className="col-sm-6">{propertyData?.lease_amount}</div>
                          </div>
                          {propertyData.agent && (
                            <div className="row">
                              <div className="col-sm-6">Agent Commission</div>
                              <div className="col-sm-6">{propertyData?.agent_commission}</div>
                            </div>
                          )}
                        </>
                      )}
                      <div className="row mt-3">
                        <div className="col-sm-6">Address</div>
                        <div className="col-sm-6">{propertyData?.location}</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">Furnishing</div>
                        <div className="col-sm-6">
                          {propertyData?.residential_properties?.house?.status}
                          {propertyData?.residential_properties?.apartment?.status}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">Condition</div>
                        <div className="col-sm-6">
                          {propertyData?.residential_properties?.house?.condition}
                          {propertyData?.residential_properties?.apartment?.condition}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">Type</div>
                        <div className="col-sm-6">{propertyData?.residential_properties?.residential_type}</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">Built Area</div>
                        <div className="col-sm-6">
                          {propertyData?.residential_properties?.apartment?.built_up_area}
                          {propertyData?.residential_properties?.house?.built_up_area}{" "}
                          {propertyData?.residential_properties?.house?.built_up_area_unit}
                          {propertyData?.residential_properties?.apartment?.built_up_area_unit}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">Indoor Facilities</div>
                        <div className="col-sm-6">
                          {propertyData?.residential_properties?.house?.indoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.residential_properties?.apartment?.indoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">Outdoor Facilities</div>
                        <div className="col-sm-6">
                          {propertyData?.residential_properties?.house?.outdoor_facilities.map(
                            (outdoor, ind) => (
                              <span key={ind}>{outdoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.residential_properties?.apartment?.outdoor_facilities.map(
                            (outdoor, ind) => (
                              <span key={ind}>{outdoor.facility.name} </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}




            {/* commercial    */}
            {propertyData.property_type === "commercial" && (
              <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
                <div className="container">
                  <div className="row mt-5 mb-5">

                    {propertyData?.you_are_here_to === "sell" && (
                      <div className="row">
                        <div className="col-sm-6">

                          <p>Sale Price</p>
                          <p>{propertyData?.sale_price}</p>

                        </div>
                        <div className="col-sm-6">

                          <p>Price per sqft</p>
                          <p>{propertyData?.sale_price_per_sqft}</p>

                        </div>
                      </div>
                    )}

                    {propertyData?.you_are_here_to == "rent" && (
                      <>
                        <div className='row mt-3'>


                          <div className='col-sm-6'>
                            <p>Rent Price</p>
                          </div>
                          <div className='col-sm-6'>
                            <p>
                              {propertyData?.rent}
                              {propertyData?.advance}
                            </p>
                          </div>


                          {propertyData?.agent_commission && (
                            <div className='row mt-3'>
                              <div className='col-sm-6'>
                                <p>Agent Commision</p>
                              </div>

                              <div className='col-sm-6'>

                                <p>{propertyData?.agent_commission}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                    {propertyData?.you_are_here_to === "lease" && (
                      <div className='row mt-3'>
                        <div className='col-sm-6'>
                          <p>Lease Price</p>
                        </div>
                        <div className='col-sm-6'>
                          <p>{propertyData?.lease_amount}</p>
                        </div>
                      </div>
                    )}

                    <div className='row'>
                      <div className='col-sm-6'>
                        <p>Address</p>
                      </div>
                      <div className='col-sm-6'>
                        <p>{propertyData?.location}</p>
                      </div>
                    </div>


                    <div className='row mt-3'>
                      <div className=' col-sm-6'>

                        <p>Furnishing</p>
                      </div>
                      <div className='col-sm-6'>
                        <p>
                          {propertyData?.commercial_properties?.industrialbuilding?.status}
                          {propertyData?.commercial_properties?.showroom?.status}
                          {propertyData?.commercial_properties?.service_apartment?.status}
                          {propertyData?.commercial_properties?.factory?.status}
                          {propertyData?.commercial_properties?.pg_colony?.status}</p>
                      </div>
                    </div>


                    {propertyData?.commercial_properties?.industrialbuilding && (
                      <>
                        <div className='row mt-3'>
                          <div className='col-sm-6'>
                            <p>Condition</p>
                          </div>
                          <div className='col-sm-6'>


                            <p>
                              {propertyData?.commercial_properties?.industrialbuilding
                                ?.condition ||
                                propertyData?.commercial_properties?.showroom
                                  ?.condition ||
                                propertyData?.commercial_properties?.factory
                                  ?.condition ||
                                propertyData?.commercial_properties?.pg_colony
                                  ?.condition}
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {propertyData?.commercial_properties?.industrialbuilding && (
                      <div className='row mt-3'>
                        <div className='col-sm-6'>
                          <td>Type</td>
                        </div>

                        <div className='col-sm-6 '>
                          <p>
                            {propertyData?.commercial_properties?.industrialbuilding
                              ?.category_of_project ||
                              propertyData?.commercial_properties?.showroom
                                ?.category_of_project}
                          </p>
                        </div>
                      </div>
                    )}

                    {propertyData?.commercial_properties?.service_apartment && (
                      <>
                        <div className='row mt-3'>
                          <div className='col-sm-6'>
                            <p>Area:</p>{" "}

                          </div>
                          <div className='col-sm-6'>
                            {propertyData?.commercial_properties?.service_apartment?.built_up_area} Sqft

                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-sm-6'>
                            <p>Floors:</p>{" "}

                          </div>
                          <div className='col-sm-6'>
                            {propertyData?.commercial_properties?.service_apartment?.available_floors}

                          </div></div>


                        <div className='row mt-3'>
                          <div className='col-sm-6'>
                            <p>Car Parking:</p>{" "}

                          </div>
                          <div className='col-sm-6'>
                            {propertyData?.commercial_properties?.service_apartment?.no_of_car_parking}

                          </div>
                        </div>

                      </>
                    )}


                    <div className='row mt-3'>
                      <div className='col-sm-6'>
                        <p>Built Area</p>
                      </div>
                      <div className='col-sm-6'>
                        <p>
                          {propertyData?.commercial_properties?.industrialbuilding
                            ?.built_up_area ||
                            propertyData?.commercial_properties?.showroom
                              ?.built_up_area}{" "}
                          {propertyData?.commercial_properties?.industrialbuilding
                            ?.built_up_area ||
                            propertyData?.commercial_properties?.factory
                              ?.built_up_area ||
                            propertyData?.commercial_properties?.service_apartment
                              ?.built_up_area}{" "}
                          Sqft
                        </p>
                      </div>


                    </div>

                    {propertyData?.commercial_properties?.industrialbuilding && (
                      <div className='row mt-3'>
                        <div className='col-sm-6'>
                          <p>Road Width</p>
                        </div>

                        <div className='col-sm-6'>
                          <p>
                            {
                              propertyData?.commercial_properties?.industrialbuilding
                                ?.road_width
                            }{" "}
                            {
                              propertyData?.commercial_properties?.industrialbuilding
                                ?.road_width_unit
                            }
                          </p>
                        </div>
                      </div>
                    )}

                    {propertyData?.commercial_properties?.pg_colony && (
                      <>
                        <div className='row  mt-3 '>
                          <div className=' col-sm-6'>
                            <p>Gender</p>
                          </div>
                          <div className='col-sm-6'>
                            <p>
                              {propertyData?.commercial_properties?.pg_colony?.gender}
                            </p>
                          </div>

                        </div>
                        <div className='row mt-3'>


                          <div className='col-sm-6'>
                            <td>Tenanats Preffered</td>

                          </div>
                          <div className='col-sm-6'>
                            <p>
                              {
                                propertyData?.commercial_properties?.pg_colony
                                  ?.tenants_preferred
                              }
                            </p>
                          </div>

                        </div>
                        <div className='row mt-3'>
                          <div className='col-sm-6'>
                            <p>Total Floors</p>

                          </div>
                          <div className='col-sm-6'>
                            <p>
                              {
                                propertyData?.commercial_properties?.pg_colony
                                  ?.total_floors
                              }
                            </p>
                          </div>

                        </div>
                        <div className='row mt-3'>
                          <div className='col-sm-6'>
                            <p>Security Deposit</p>

                          </div>
                          <div className='col-sm-6'>
                            <p>
                              {
                                propertyData?.commercial_properties?.pg_colony
                                  ?.security_deposit
                              }
                            </p>
                          </div>

                        </div>
                      </>
                    )}

                    <div className='row mt-3'>
                      <div className='col-sm-6'>
                        <p>Indoor Facilities</p>

                      </div>
                      <div className='col-sm-6'>
                        <p>
                          {propertyData?.commercial_properties?.showroom?.indoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.industrialbuilding?.indoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.service_apartment?.indoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.factory?.indoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.pg_colony?.indoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                        </p>
                      </div>

                    </div>

                    <div className='mt-3 row'>
                      <div className='col-sm-6'>
                        <td>Outdoor Facilities</td>

                      </div>
                      <div className='col-sm-6'>
                        <p>
                          {propertyData?.commercial_properties?.showroom?.outdoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.industrialbuilding?.outdoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.service_apartment?.outdoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.factory?.outdoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                          {propertyData?.commercial_properties?.pg_colony?.outdoor_facilities.map(
                            (indoor, ind) => (
                              <span key={ind}>{indoor.facility.name} </span>
                            )
                          )}
                        </p>

                      </div>

                    </div>
                  </div></div>

              </div>
            )}




































            <div className='row'>
              <div className="col d-flex justify-content-end">

                <button type="button" className="btn btn-danger" style={{ width: '150px', margin: '3%' }} onClick={handleDone} >
                  Done
                </button>
              </div>
            </div>


          </div>
        )}
      </div>
    </div >
  );
}

export default Propertiessatues;



