import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
import { useParams } from "react-router-dom";
const Builder = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/mobile");
  };

  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${Baseurl}properties/${id}`, UserConfig)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const imageStyles = [
    { width: "440px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "200px", height: "260px" },
    {},
  ];

  return (
    <>
      <Navbar />

      <div
        className="border container mx-auto px-4 py-5 rounded-4 border-danger"
        style={{ marginTop: "8%" }}
      >
        <h2 className="fw-bold text-danger" style={{ fontSize: "40px" }}>
          {details?.sale_price}
          {details?.rent}
          {details?.lease_amount}
        </h2>
        <p className="text-end text-secondary" style={{ fontSize: "12px" }}>
          Posted {details?.created_at}
        </p>

        {/* plot heading */}
        {details?.plot_properties && (
          <p className="fw-medium">
            {details?.plot_properties?.total_area}{" "}
            {details?.plot_properties?.total_area_unit}{" "}
            {details?.plot_properties?.plot_type} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* land heading*/}
        {details?.land_properties && (
          <p className="fw-medium">
            {details?.land_properties?.total_area}{" "}
            {details?.land_properties?.total_area_unit}{" "}
            {details?.land_properties?.land_type} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* residential --> house heading*/}
        {details?.residential_properties?.house && (
          <p className="fw-medium">
            {details?.residential_properties?.house?.available_bhk}{" "}
            {details?.residential_properties?.residential_type?.toUpperCase()}{" "}
            for {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}
        {/* residential --> apartment heading*/}
        {details?.residential_properties?.apartment && (
          <p className="fw-medium">
            {details?.residential_properties?.apartment?.available_bhk}{" "}
            {details?.residential_properties?.residential_type?.toUpperCase()}{" "}
            for {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> industrial heading*/}
        {details?.commercial_properties?.industrialbuilding && (
          <p className="fw-medium">
            {details?.commercial_properties?.industrialbuilding?.built_up_area}{" "}
            {
              details?.commercial_properties?.industrialbuilding
                ?.built_up_area_unit
            }{" "}
            {details?.commercial_properties?.commercial_type?.toUpperCase()} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> factory*/}
        {details?.commercial_properties?.factory && (
          <p className="fw-medium">
            {details?.commercial_properties?.factory?.built_up_area}{" "}
            {details?.commercial_properties?.factory?.built_up_area_unit}{" "}
            {details?.commercial_properties?.commercial_type?.toUpperCase()} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> showroom*/}
        {details?.commercial_properties?.showroom && (
          <p className="fw-medium">
            {details?.commercial_properties?.showroom?.built_up_area}{" "}
            {details?.commercial_properties?.showroom?.built_up_area_unit}{" "}
            {details?.commercial_properties?.commercial_type?.toUpperCase()} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/*plot  image*/}
        {details?.plot_properties?.plot_images.map((img, index) => (
          <img
            src={img.image}
            alt={`Image ${index + 1}`}
            style={imageStyles[index] || {}}
            className="mx-2 img-fluid rounded-3 mt-2"
            key={index}
          />
        ))}

        {/* land image  */}
        {details?.land_properties?.land_images.map((img, index) => (
          <img
            src={img.image}
            alt={`Image ${index + 1}`}
            style={imageStyles[index] || {}}
            className="mx-2 img-fluid rounded-3 mt-2"
            key={index}
          />
        ))}

        {/* residential apartment image*/}
        {details?.residential_properties?.apartment?.apartment_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* residential house image*/}
        {details?.residential_properties?.house?.house_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial industrialbuilding image*/}
        {details?.commercial_properties?.industrialbuilding?.industrialbuilding_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial factory image*/}
        {details?.commercial_properties?.factory?.factory_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial office image*/}
        {details?.commercial_properties?.showroom?.showroom_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}
      </div>

      <div className="border container mx-auto px-4 py-3 rounded-4 border-danger">
        <h4 className="fw-bold ps-2 pb-2">More Details</h4>

        {/* plot and land */}
        {(details.property_type === "plot" ||
          details.property_type === "land") && (
          <table className="table table-borderless w-75">
            <tbody>
              {details?.you_are_here_to === "sell" && (
                <>
                  <tr>
                    <td>Sale Price</td>
                    <td className="fw-semibold">{details?.sale_price}</td>
                  </tr>
                  <tr>
                    <td>Price per sqft</td>
                    <td className="fw-semibold">
                      {details?.sale_price_per_sqft}
                    </td>
                  </tr>
                </>
              )}

              {details?.you_are_here_to === "rent" && (
                <>
                  <tr>
                    <td>Rent Price</td>
                    <td className="fw-semibold">{details?.rent}</td>
                  </tr>
                </>
              )}

              {details?.you_are_here_to === "lease" && (
                <tr>
                  <td>Lease Price</td>
                  <td className="fw-semibold">{details?.lease_amount}</td>
                </tr>
              )}

              <tr>
                <td>Advance</td>
                <td className="fw-semibold">{details?.advance}</td>
              </tr>
              <tr>
                <td>Property Name</td>
                <td className="fw-semibold">{details?.title}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td className="fw-semibold">{details?.location}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td className="fw-semibold">
                  {details?.plot_properties?.total_area ||
                    details?.land_properties?.total_area}{" "}
                  {details?.plot_properties?.total_area_unit ||
                    details?.land_properties?.total_area_unit}{" "}
                </td>
              </tr>
              <tr>
                <td>Length</td>
                <td className="fw-semibold">
                  {details?.plot_properties?.length ||
                    details?.land_properties?.length}{" "}
                  {details?.plot_properties?.length_unit ||
                    details?.land_properties?.length_unit}{" "}
                </td>
              </tr>
              <tr>
                <td>Type</td>
                <td className="fw-semibold">
                  {details?.plot_properties?.plot_type ||
                    details?.land_properties?.land_type}
                </td>
              </tr>
              <tr>
                <td>Breadth</td>
                <td className="fw-semibold">
                  {details?.plot_properties?.breadth ||
                    details?.land_properties?.breadth}{" "}
                  {details?.plot_properties?.breadth_unit ||
                    details?.land_properties?.breadth_unit}{" "}
                </td>
              </tr>
              <tr>
                <td>Road Width</td>
                <td className="fw-semibold">
                  {details?.plot_properties?.road_width ||
                    details?.land_properties?.road_width}{" "}
                  {details?.plot_properties?.road_width_unit ||
                    details?.land_properties?.road_width_unit}{" "}
                </td>
              </tr>
              <tr>
                <td>Approval</td>
                <td className="fw-semibold">
                  {details?.plot_properties?.approval ||
                    details?.land_properties?.approval}
                </td>
              </tr>
              <tr>
                <td>Posted by</td>
                {details?.owner && <td className="fw-semibold">Owner</td>}
                {details?.agent && <td className="fw-semibold">Agent</td>}
                {details?.builder && <td className="fw-semibold">Builder</td>}
              </tr>

              {details?.agent && (
                <tr>
                  <td>Agent Commission</td>
                  <td className="fw-semibold">{details?.agent_commission}</td>
                </tr>
              )}

              <tr>
                <td>Facilities</td>
                <td className="fw-semibold">
                  {details?.plot_properties?.facilities?.map(
                    (facility, ind) => <span key={ind}>{facility?.name} </span>
                  ) ||
                    details?.land_properties?.facilities?.map(
                      (facility, ind) => (
                        <span key={ind}>{facility?.name} </span>
                      )
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* residential house and apartment */}
        {details.residential_properties && (
          <table className="table table-borderless w-75">
            <thead>
              {details?.you_are_here_to === "sell" && (
                <>
                  <tr>
                    <td>Sale Price</td>
                    <td className="fw-semibold">{details?.sale_price}</td>
                  </tr>

                  <tr>
                    <td>Price per sqft</td>
                    <td className="fw-semibold">
                      {details?.sale_price_per_sqft}
                    </td>
                  </tr>
                </>
              )}

              {details?.you_are_here_to === "rent" && (
                <>
                  <tr>
                    <td>Rent Price</td>
                    <td className="fw-semibold">{details?.rent}</td>
                  </tr>
                </>
              )}

              {details?.you_are_here_to === "lease" && (
                <tr>
                  <td>Lease Price</td>
                  <td className="fw-semibold">{details?.lease_amount}</td>
                </tr>
              )}

              <tr>
                <td>Advance</td>
                <td className="fw-semibold">{details?.advance}</td>
              </tr>
              <tr>
                <td>Property Name</td>
                <td className="fw-semibold">{details?.title}</td>
              </tr>

              <tr>
                <td>Address</td>
                <td className="fw-semibold">{details?.location}</td>
              </tr>

              <tr>
                <td>Area</td>
                <td className="fw-semibold">
                  {details?.residential_properties?.house?.built_up_area ||
                    details?.residential_properties?.apartment
                      ?.built_up_area}{" "}
                  {details?.residential_properties?.house?.built_up_area_unit ||
                    details?.residential_properties?.apartment
                      ?.built_up_area_unit}{" "}
                </td>
              </tr>

              <tr>
                <td>Available BHK</td>
                <td className="fw-semibold">
                  {details?.residential_properties?.house?.available_bhk ||
                    details?.residential_properties?.apartment?.available_bhk}
                </td>
              </tr>

              <tr>
                <td>Type</td>
                <td className="fw-semibold">
                  {details?.residential_properties?.residential_type}
                </td>
              </tr>

              <tr>
                <td>Condition</td>
                <td className="fw-semibold">
                  {details?.residential_properties?.house?.condition ||
                    details?.residential_properties?.apartment?.condition}{" "}
                </td>
              </tr>

              <tr>
                <td>Category</td>
                <td className="fw-semibold">
                  {details?.residential_properties?.house
                    ?.category_of_project ||
                    details?.residential_properties?.apartment
                      ?.category_of_project}
                </td>
              </tr>

              {details.residential_properties?.house && (
                <tr>
                  <td>Units in project</td>
                  <td className="fw-semibold">
                    {details?.residential_properties?.house
                      ?.no_of_units_in_project ||
                      details?.residential_properties?.apartment
                        ?.no_of_units_in_project}{" "}
                  </td>
                </tr>
              )}
              <tr>
                <td>Total floors</td>
                <td className="fw-semibold">
                  {details?.residential_properties?.house?.total_floors ||
                    details?.residential_properties?.apartment
                      ?.total_floors}{" "}
                </td>
              </tr>

              <tr>
                <td>Status</td>
                <td className="fw-semibold">
                  {details?.residential_properties?.house?.status ||
                    details?.residential_properties?.apartment?.status}{" "}
                </td>
              </tr>

              <tr>
                <td>Posted by</td>
                {details?.owner && <td className="fw-semibold">Owner</td>}
                {details?.agent && <td className="fw-semibold">Agent</td>}
                {details?.builder && <td className="fw-semibold">Builder</td>}
              </tr>

              {details?.agent && (
                <tr>
                  <td>Agent Commission</td>
                  <td className="fw-semibold">{details?.agent_commission}</td>
                </tr>
              )}

              <tr>
                <td>Indoor Facilities</td>
                <td className="fw-semibold">
                  {(details?.residential_properties?.house?.indoor_facilities
                    ?.length > 0
                    ? details?.residential_properties?.house?.indoor_facilities
                    : details?.residential_properties?.apartment
                        ?.indoor_facilities
                  )?.map((indoor, ind, arr) => (
                    <span key={ind}>
                      {indoor?.facility?.name}
                      {ind < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </td>
              </tr>

              <tr>
                <td>Outdoor Facilities</td>
                <td className="fw-semibold">
                  {(details?.residential_properties?.house?.outdoor_facilities
                    ?.length > 0
                    ? details?.residential_properties?.house?.outdoor_facilities
                    : details?.residential_properties?.apartment
                        ?.outdoor_facilities
                  )?.map((outdoor, ind, arr) => (
                    <span key={ind}>
                      {outdoor?.facility?.name}
                      {ind < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </td>
              </tr>
            </thead>
          </table>
        )}

        {/* commercial  industrial building */}
        {
          details.property_type === "commercial" && (
            // details?.commercial_properties?.commercial_type === "office" || "industrialbuilding" || "factory"  && (
            <table className="table table-borderless w-75">
              <thead>
                {details?.you_are_here_to === "sell" && (
                  <>
                    <tr>
                      <td>Sale Price</td>
                      <td className="fw-semibold">{details?.sale_price}</td>
                    </tr>

                    <tr>
                      <td>Price per sqft</td>
                      <td className="fw-semibold">
                        {details?.sale_price_per_sqft}
                      </td>
                    </tr>
                  </>
                )}

                {details?.you_are_here_to === "rent" && (
                  <>
                    <tr>
                      <td>Rent Price</td>
                      <td className="fw-semibold">{details?.rent}</td>
                    </tr>
                  </>
                )}

                {details?.you_are_here_to === "lease" && (
                  <tr>
                    <td>Lease Price</td>
                    <td className="fw-semibold">{details?.lease_amount}</td>
                  </tr>
                )}

                <tr>
                  <td>Advance</td>
                  <td className="fw-semibold">{details?.advance}</td>
                </tr>
                <tr>
                  <td>Property Name</td>
                  <td className="fw-semibold">{details?.title}</td>
                </tr>

                <tr>
                  <td>Property Type</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.commercial_type}
                  </td>
                </tr>

                <tr>
                  <td>Address</td>
                  <td className="fw-semibold">{details?.location}</td>
                </tr>

                <tr>
                  <td>Location</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.factory?.address ||
                      details?.commercial_properties?.industrialbuilding
                        ?.address ||
                      details?.commercial_properties?.showrrom?.address}
                  </td>
                </tr>

                <tr>
                  <td>Furnishing</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.industrialbuilding?.status}
                    {details?.commercial_properties?.showroom?.status}
                    {details?.commercial_properties?.service_apartment?.status}
                    {details?.commercial_properties?.factory?.status}
                    {details?.commercial_properties?.pg_colony?.status}
                  </td>
                </tr>

                <tr>
                  <td>Condition</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.industrialbuilding
                      ?.condition ||
                      details?.commercial_properties?.showroom?.condition ||
                      details?.commercial_properties?.factory?.condition ||
                      details?.commercial_properties?.pg_colony?.condition}
                  </td>
                </tr>

                <tr>
                  <td>Type</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.industrialbuilding
                      ?.category_of_project ||
                      details?.commercial_properties?.showroom
                        ?.category_of_project ||
                      details?.commercial_properties?.factory
                        ?.category_of_project}
                  </td>
                </tr>

                {/* service apartment */}
                {(details?.commercial_properties?.service_apartment ||
                  details?.commercial_properties?.showroom) && (
                  <>
                    <tr>
                      <td>Floors</td>
                      <td className="fw-semibold">
                        {
                          details?.commercial_properties?.service_apartment
                            ?.available_floors||
                            details?.commercial_properties?.showroom
                            ?.available_floors
                        }{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>Car Parking</td>
                      <td className="fw-semibold">
                        {
                          details?.commercial_properties?.service_apartment
                            ?.no_of_car_parking ||
                            details?.commercial_properties?.showroom
                            ?.no_of_car_parking 
                        }{" "}
                      </td>
                    </tr>
                  </>
                )}
                <tr>
                  <td>Built Area</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.industrialbuilding
                      ?.built_up_area ||
                      details?.commercial_properties?.showroom?.built_up_area ||
                      details?.commercial_properties?.factory?.built_up_area ||
                      details?.commercial_properties?.service_apartment
                        ?.built_up_area}{" "}
                    Sqft
                  </td>
                </tr>

                <tr>
                  <td>Plot Area</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.industrialbuilding
                      ?.plot_area ||
                      details?.commercial_properties?.showroom?.plot_area ||
                      details?.commercial_properties?.factory?.plot_area ||
                      details?.commercial_properties?.plot_area
                        ?.built_up_area}{" "}
                    Sqft
                  </td>
                </tr>

{/* not for service apartment and showrrom */}
                <tr>
                  <td>Road Width</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.industrialbuilding
                      ?.road_width ||
                      details?.commercial_properties?.factory?.road_width}{" "}
                    {details?.commercial_properties?.industrialbuilding
                      ?.road_width_unit ||
                      details?.commercial_properties?.factory?.road_width_unit}
                  </td>
                </tr>

                {/* pg */}
                {details?.commercial_properties?.pg_colony && (
                  <>
                    <tr>
                      <td>Gender</td>
                      <td>
                        {details?.commercial_properties?.pg_colony?.gender}
                      </td>
                    </tr>
                    <tr>
                      <td>Tenanats Preffered</td>
                      <td>
                        {
                          details?.commercial_properties?.pg_colony
                            ?.tenants_preferred
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Total Floors</td>
                      <td>
                        {
                          details?.commercial_properties?.pg_colony
                            ?.total_floors
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Security Deposit</td>
                      <td>
                        {
                          details?.commercial_properties?.pg_colony
                            ?.security_deposit
                        }
                      </td>
                    </tr>
                  </>
                )}

                <tr>
                  <td>Posted by</td>
                  {details?.owner && <td className="fw-semibold">Owner</td>}
                  {details?.agent && <td className="fw-semibold">Agent</td>}
                  {details?.builder && <td className="fw-semibold">Builder</td>}
                </tr>

                {details?.agent && (
                  <tr>
                    <td>Agent Commission</td>
                    <td className="fw-semibold">{details?.agent_commission}</td>
                  </tr>
                )}

                <tr>
                  <td>Indoor Facilities</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.showroom?.indoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.industrialbuilding?.indoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.service_apartment?.indoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.factory?.indoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.pg_colony?.indoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Outdoor Facilities</td>
                  <td className="fw-semibold">
                    {details?.commercial_properties?.showroom?.outdoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.industrialbuilding?.outdoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.service_apartment?.outdoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.factory?.outdoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                    {details?.commercial_properties?.pg_colony?.outdoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name} </span>
                      )
                    )}
                  </td>
                </tr>
              </thead>
            </table>
          )
          // )
        }

        <p className="ps-2">
          <span className="fw-semibold">Description:</span>{" "}
          {details?.description}
        </p>
      </div>

      <div className="container my-4 text-end ">
        <button className="border-0 p-2 px-5 py-3 rounded-pill bg-danger text-white">
          Contact Number
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Builder;
