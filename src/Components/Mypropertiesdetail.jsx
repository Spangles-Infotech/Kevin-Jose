import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import l1 from "../Images/l1.png";
import l2 from "../Images/l2.png";
import l3 from "../Images/l3.png";
import B1 from "../Images/B1.png";
import B2 from "../Images/B2.png";
import b3 from "../Images/b3.png";
import b4 from "../Images/b4.png";
import b5 from "../Images/b5.png";
import b6 from "../Images/b6.png";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
import { useParams } from "react-router-dom";
export const Mypropertiesdetail = () => {
  const data = [
    ["Super Built-Up Area", "Developer", "Project", "Transaction Type"],
    ["1662 sqft", "Risland India", "VGN Fairmont", "New Property"],
    ["₹ 9,868/sqft", "", "", ""],
    ["Status", "Lifts", "Furnished Status", "Bedroom"],
    ["Ready to Move", "3", "Unfurnished", "3"],
  ];
  const value = [
    ["Price Breakup", "₹ 2.64 Cr"],
    ["Booking Amount", "₹ 1,00,000"],
    ["RERA ID", "TN/01/Building/0111/2019"],
    ["Address", "Perungudi, Chennai - South, Tamil Nadu"],
    ["Furnishing", "Unfurnished"],
    ["Flooring", "Verified"],
    ["Water Availability", "24 Hours Available"],
    ["Status of Electricity", "No/Rare Powercut"],
    ["Floors allowed for construction", "10"],
    ["No. of lift", "3"],
  ];
  const tableCellStyle = {
    border: "none",
    padding: "8px",

    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",

    color: "#717171",
  };

  const headerCellStyle = {
    ...tableCellStyle,

    fontSize: "18px",

    color: "#2D2D2D",
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

  const handleDelete = () => {
    axios
      .delete(`${Baseurl}properties/${id}`, UserConfig)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container detail mt-5">
        <Card
          className="mt-5"
          style={{ width: "1170px", border: "1px solid #D7242A" }}
        >
          <Row className="mx-4" style={{ color: "#D7242A" }}>
            <Col xs={6}>
              <p
                className="mx-4 my-4 d-flex"
                style={{
                  color: "#D7242A",
                  fontSize: "40px",
                  fontWeight: "800",
                }}
              >
                {details?.sale_price}
                {details?.rent_price}
                {details?.lease_amount}
                <span>
                  <button
                    type="button"
                    style={{
                      color: "white",
                      width: "100px",
                      height: "30px",
                      fontSize: "12px",
                      backgroundColor: "#D76724",
                      border: "none",
                    }}
                    className="btn btn-success  ms-3 mb-2"
                  >
                    onprogress
                  </button>
                </span>
              </p>
              <div className="d-flex gap-3">
                {/* Plot */}
                {details?.property_type === "plot" && (
                  <>
                    {details?.you_are_here_to === "sell" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Plot for Sale in , {details?.location}
                      </Col>
                    )}
                  </>
                )}

                {/* Plot  rent*/}
                {details?.property_type === "plot" && (
                  <>
                    {details?.you_are_here_to === "rent" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Plot for Rent in , {details?.location}
                      </Col>
                    )}
                  </>
                )}

                {/* Plot  lease*/}
                {details?.property_type === "plot" && (
                  <>
                    {details?.you_are_here_to === "lease" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Plot for Lease in , {details?.location}
                      </Col>
                    )}
                  </>
                )}

                {/* land */}
                {details?.property_type === "land" && (
                  <>
                    {details?.you_are_here_to === "sell" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Land for Sale in {details?.location}
                      </Col>
                    )}
                  </>
                )}

                {/* land  rent*/}
                {details?.property_type === "land" && (
                  <>
                    {details?.you_are_here_to === "rent" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Land for Rent in , {details?.location}
                      </Col>
                    )}
                  </>
                )}

                {/* land  lease*/}
                {details?.property_type === "land" && (
                  <>
                    {details?.you_are_here_to === "lease" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Land for Lease in , {details?.location}
                      </Col>
                    )}
                  </>
                )}

                {/* Land */}
                {details?.property_type === "residential" && (
                  <>
                    {/* Land for Sale */}
                    {details?.residential_properties?.residential_type ===
                      "house" &&
                      details?.you_are_here_to === "sell" && (
                        <Col
                          className=""
                          style={{
                            color: "#2D2D2D",
                            fontWeight: "500",
                            fontSize: "15px",
                          }}
                        >
                          {
                            details?.residential_properties?.house
                              ?.available_bhk
                          }{" "}
                          {details?.residential_properties?.residential_type}
                          for Sale in {details?.location}
                        </Col>
                      )}

                    {/* Land for Rent */}
                    {details?.you_are_here_to === "rent" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Land for Rent in {details?.location}
                      </Col>
                    )}

                    {/* Land for Lease */}
                    {details?.you_are_here_to === "lease" && (
                      <Col
                        className=""
                        style={{
                          color: "#2D2D2D",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Land for Lease in {details?.location}
                      </Col>
                    )}
                  </>
                )}

                <Col
                  style={{
                    color: "#2D2D2D",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Posted {details?.created_at}
                </Col>
              </div>
            </Col>
          </Row>

          {/* Plot */}
          {details?.property_type === "plot" && (
            <div className="d-flex flex-wrap gap-3 mx-4">
              {details?.plot_properties?.plot_images?.map((img, index) => (
                <img
                  src={img.image}
                  alt={`Image ${index + 1}`}
                  style={
                    index === 0
                      ? { width: "440px", height: "260px" }
                      : index === 1
                      ? { width: "270px", height: "260px" }
                      : index === 2
                      ? { width: "330px", height: "260px" }
                      : index === 3
                      ? { width: "330px", height: "260px" }
                      : index === 4
                      ? { width: "330px", height: "260px" }
                      : index === 5
                      ? { width: "270px", height: "260px" }
                      : index === 6
                      ? { width: "270px", height: "260px" }
                      : {}
                  }
                  className="mx-2 img-fluid rounded-3"
                  key={index}
                />
              ))}
            </div>
          )}

          {/* land */}
          {details?.property_type === "land" && (
            <div className="d-flex flex-wrap gap-3 mx-4">
              {details?.land_properties?.land_images?.map((img, index) => (
                <img
                  src={img.image}
                  alt={`Image ${index + 1}`}
                  style={
                    index === 0
                      ? { width: "440px", height: "260px" }
                      : index === 1
                      ? { width: "270px", height: "260px" }
                      : index === 2
                      ? { width: "330px", height: "260px" }
                      : index === 3
                      ? { width: "330px", height: "260px" }
                      : index === 4
                      ? { width: "330px", height: "260px" }
                      : index === 5
                      ? { width: "270px", height: "260px" }
                      : index === 6
                      ? { width: "270px", height: "260px" }
                      : {}
                  }
                  className="mx-2 img-fluid rounded-3"
                  key={index}
                />
              ))}
            </div>
          )}

          {/* residential */}
          {details?.property_type === "residential" && (
            <div className="d-flex flex-wrap gap-3 mx-4">
              {details?.residential_properties?.house?.house_images?.map(
                (img, index) => (
                  <img
                    src={img.image}
                    alt={`Image ${index + 1}`}
                    style={
                      index === 0
                        ? { width: "440px", height: "260px" }
                        : index === 1
                        ? { width: "270px", height: "260px" }
                        : index === 2
                        ? { width: "330px", height: "260px" }
                        : index === 3
                        ? { width: "330px", height: "260px" }
                        : index === 4
                        ? { width: "330px", height: "260px" }
                        : index === 5
                        ? { width: "270px", height: "260px" }
                        : index === 6
                        ? { width: "270px", height: "260px" }
                        : {}
                    }
                    className="mx-2 img-fluid rounded-3"
                    key={index}
                  />
                )
              )}
            </div>
          )}

          {/* commercial */}
          {details?.property_type === "commercial" && (
            <div className="d-flex flex-wrap gap-3 mx-4">
              {details?.commercial_properties?.showroom?.showroom_images?.map(
                (img, index) => (
                  <img
                    src={img.image}
                    alt={`Image ${index + 1}`}
                    style={
                      index === 0
                        ? { width: "440px", height: "260px" }
                        : index === 1
                        ? { width: "270px", height: "260px" }
                        : index === 2
                        ? { width: "330px", height: "260px" }
                        : index === 3
                        ? { width: "330px", height: "260px" }
                        : index === 4
                        ? { width: "330px", height: "260px" }
                        : index === 5
                        ? { width: "270px", height: "260px" }
                        : index === 6
                        ? { width: "270px", height: "260px" }
                        : {}
                    }
                    className="mx-2 img-fluid rounded-3"
                    key={index}
                  />
                )
              )}
            </div>
          )}

          <Card.Body>
            <p
              className="ms-3 mt-2"
              style={{
                color: "#2D2D2D",
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              More Details
            </p>
            {/* plot */}

            {details.property_type == "plot" && (
              <table className="table">
                <thead>
                  {details?.you_are_here_to === "sell" && (
                    <>
                      <tr>
                        <td>Sale Price</td>
                        <td>{details?.sale_price}</td>
                      </tr>

                      <tr>
                        <td>Price per sqft</td>
                        <td>{details?.sale_price_per_sqft}</td>
                      </tr>
                    </>
                  )}

                  {details?.you_are_here_to === "rent" && (
                    <tr>
                      <td>Rent Price</td>
                      <td>{details?.rent}</td>
                    </tr>
                  )}

                  {details?.you_are_here_to === "lease" && (
                    <tr>
                      <td>Lease Price</td>
                      <td>{details?.lease_amount}</td>
                    </tr>
                  )}
                  <tr>
                    <td>Address</td>
                    <td>{details?.location}</td>
                  </tr>

                  <tr>
                    <td>Area</td>
                    <td>
                      {details?.plot_properties?.total_area}{" "}
                      {details?.plot_properties?.total_area_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Length</td>
                    <td>
                      {details?.plot_properties?.length}{" "}
                      {details?.plot_properties?.length_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>{details?.plot_properties?.plot_type}</td>
                  </tr>

                  <tr>
                    <td>Breadth</td>
                    <td>
                      {details?.plot_properties?.breadth}{" "}
                      {details?.plot_properties?.breadth_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Road Width</td>
                    <td>
                      {details?.plot_properties?.road_width}{" "}
                      {details?.plot_properties?.road_width_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Facilities</td>
                    <td>
                      {details?.plot_properties?.facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>
                            {indoor?.name} {""}
                          </span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            )}

            {/* land */}

            {details.property_type == "land" && (
              <table className="table">
                <thead>
                  {details?.you_are_here_to === "sell" && (
                    <>
                      <tr>
                        <td>Sale Price</td>
                        <td>{details?.sale_price}</td>
                      </tr>

                      <tr>
                        <td>Price per sqft</td>
                        <td>{details?.sale_price_per_sqft}</td>
                      </tr>
                    </>
                  )}

                  {details?.you_are_here_to === "rent" && (
                    <tr>
                      <td>Rent Price</td>
                      <td>{details?.rent}</td>
                    </tr>
                  )}

                  {details?.you_are_here_to === "lease" && (
                    <>
                      <tr>
                        <td>Lease Price</td>
                        <td>{details?.lease_amount}</td>
                      </tr>

                      <tr>
                        <td>Advance Amount</td>
                        <td>{details?.advance}</td>
                      </tr>
                    </>
                  )}
                  <tr>
                    <td>Address</td>
                    <td>{details?.location}</td>
                  </tr>

                  {details?.owner && (
                    <tr>
                      <td>Posted by</td>
                      <td>Owner</td>
                    </tr>
                  )}

                  {details?.agent && (
                    <>
                      <tr>
                        <td>Posted by</td>
                        <td>Agent</td>
                      </tr>
                      <tr>
                        <td>Agent Commision</td>
                        <td>55</td>
                      </tr>
                    </>
                  )}

                  {details?.builder && (
                    <>
                      <tr>
                        <td>Posted by</td>
                        <td>Agent</td>
                      </tr>
                      <tr>
                        <td>Agent Commision</td>
                        <td>55</td>
                      </tr>
                    </>
                  )}

                  <tr>
                    <td>Area</td>
                    <td>
                      {details?.land_properties?.total_area}{" "}
                      {details?.land_properties?.total_area_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Length</td>
                    <td>
                      {details?.land_properties?.length}{" "}
                      {details?.land_properties?.length_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>{details?.land_properties?.land_type}</td>
                  </tr>

                  <tr>
                    <td>Direction</td>
                    <td>{details?.land_properties?.direction_facing}</td>
                  </tr>

                  <tr>
                    <td>Breadth</td>
                    <td>
                      {details?.land_properties?.breadth}{" "}
                      {details?.land_properties?.breadth_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Road Width</td>
                    <td>
                      {details?.land_properties?.road_width}{" "}
                      {details?.land_properties?.road_width_unit}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Facilities</td>
                    <td>
                      {details?.land_properties?.facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor?.name} </span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            )}

            {/* residential forms */}

            {details.property_type == "residential" && (
              <table className="table">
                <thead>
                  {details?.you_are_here_to === "sell" && (
                    <>
                      <tr>
                        <td>Sale Price</td>
                        <td>{details?.sale_price}</td>
                      </tr>

                      <tr>
                        <td>Price per sqft</td>
                        <td>{details?.sale_price_per_sqft}</td>
                      </tr>

                      {details.agent && (
                        <tr>
                          <td>Agent Commision</td>
                          <td>{details?.agent_commission}</td>
                        </tr>
                      )}
                    </>
                  )}

                  {details?.you_are_here_to === "rent" && (
                    <>
                      <tr>
                        <td>Rent Price</td>
                        <td>{details?.rent}</td>
                      </tr>

                      {details.agent && (
                        <tr>
                          <td>Agent Commision</td>
                          <td>{details?.agent_commission}</td>
                        </tr>
                      )}
                    </>
                  )}

                  {details?.you_are_here_to === "lease" && (
                    <>
                      <tr>
                        <td>Lease Price</td>
                        <td>{details?.lease_amount}</td>
                      </tr>

                      {details.agent && (
                        <tr>
                          <td>Agent Commision</td>
                          <td>{details?.agent_commission}</td>
                        </tr>
                      )}
                    </>
                  )}
                  <tr>
                    <td>Address</td>
                    <td>{details?.location}</td>
                  </tr>

                  <tr>
                    <td>Furnishing</td>
                    <td>{details?.residential_properties?.house?.status}</td>
                  </tr>

                  <tr>
                    <td>Condition</td>
                    {/* <td>
                      {details?.residential_properties?.apartment?.condition}
                    </td> */}
                    <td>{details?.residential_properties?.house?.condition}</td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>{details?.residential_properties?.residential_type}</td>
                  </tr>

                  <tr>
                    <td>Built Area</td>
                    <td>
                      {
                        details?.residential_properties?.apartment
                          ?.built_up_area
                      }
                      {details?.residential_properties?.house?.built_up_area}{" "}
                      {
                        details?.residential_properties?.house
                          ?.built_up_area_unit
                      }
                      {
                        details?.residential_properties?.apartment
                          ?.built_up_area_unit
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Indoor Facilities</td>
                    {/* <td>
                      {details?.residential_properties?.apartment?.indoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td> */}
                    <td>
                      {details?.residential_properties?.house?.indoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name} </span>
                        )
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>Outdoor Facilities</td>
                    {/* <td>
                      {details?.residential_properties?.apartment?.outdoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td> */}
                    <td>
                      {details?.residential_properties?.house?.outdoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name} </span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            )}

            {/* commercial forms */}
            {details.property_type === "commercial" &&
              details?.commercial_properties?.commercial_type === "office" && (
                <table className="table">
                  <thead>
                    {details?.you_are_here_to == "sell" && (
                      <>
                        <tr>
                          <td>Sale Price</td>
                          <td>{details?.sale_price}</td>
                        </tr>
                        <tr>
                          <td>Price per sqft</td>
                          <td>{details?.sale_price_per_sqft}</td>
                        </tr>
                      </>
                    )}
                    {details?.you_are_here_to == "rent" && (
                      <>
                        <tr>
                          <td>Rent Price</td>
                          <td>{details?.rent}</td>
                        </tr>
                        <tr>
                          <td>Agent Commision</td>
                          <td>{details?.agent_commission}</td>
                        </tr>
                      </>
                    )}
                    {details?.you_are_here_to == "lease" && (
                      <tr>
                        <td>Sale Price</td>
                        <td>{details?.sale_price}</td>
                      </tr>
                    )}

                    <tr>
                      <td>Address</td>
                      <td>{details?.location}</td>
                    </tr>
                    <tr>
                      <td>Furnishing</td>
                      <td>
                        {details?.commercial_properties?.industrialbuilding
                          ?.status ||
                          details?.commercial_properties?.showroom?.status}
                      </td>
                    </tr>
                    <tr>
                      <td>Condition</td>
                      <td>
                        {details?.commercial_properties?.industrialbuilding
                          ?.condition ||
                          details?.commercial_properties?.showroom?.condition}
                      </td>
                    </tr>
                    <tr>
                      <td>Type</td>
                      <td>
                        {details?.commercial_properties?.industrialbuilding
                          ?.category_of_project ||
                          details?.commercial_properties?.showroom
                            ?.category_of_project}
                      </td>
                    </tr>
                    <tr>
                      <td>Built Area</td>
                      <td>
                        {details?.commercial_properties?.industrialbuilding
                          ?.built_up_area ||
                          details?.commercial_properties?.showroom
                            ?.built_up_area}{" "}
                        {details?.commercial_properties?.industrialbuilding
                          ?.built_up_area_unit ||
                          details?.commercial_properties?.showroom
                            ?.built_up_area_unit}
                      </td>
                    </tr>

                    {details?.commercial_properties?.industrialbuilding && (
                      <tr>
                        <td>Road Width</td>
                        <td>
                          {
                            details?.commercial_properties?.industrialbuilding
                              ?.road_width
                          }{" "}
                          {
                            details?.commercial_properties?.industrialbuilding
                              ?.road_width_unit
                          }
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td>Indoor Facilities</td>
                      <td>
                        {details?.commercial_properties?.showroom?.indoor_facilities.map(
                          (indoor, ind) => (
                            <span key={ind}>{indoor.facility.name} </span>
                          )
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>Outdoor Facilities</td>
                      <td>
                        {details?.commercial_properties?.showroom?.outdoor_facilities.map(
                          (indoor, ind) => (
                            <span key={ind}>{indoor.facility.name} </span>
                          )
                        )}
                      </td>
                    </tr>
                  </thead>
                </table>
              )}

            <div className="">
              <span className="mx-3" style={{ fontWeight: "bold" }}>
                Description:
              </span>
              <span>{details?.description}</span>
            </div>
          </Card.Body>
        </Card>

        {/* <Card
          className="mt-5"
          style={{ width: "1170px", border: " 1px solid #D7242A" }}
        >
          <Card.Body>
            <p
              className="ms-3 mt-2"
              style={{
                color: "#2D2D2D",
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              More Details
            </p>
            <table className="table">
              <tbody>
                {value.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="">
              <span className="mx-3" style={{ fontWeight: "bold" }}>
                Description:
              </span>
              <span>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </span>
            </div>
          </Card.Body>
        </Card> */}
        <div className="d-flex justify-content-end">
          <div className="row mt-5 mx-5 px-5">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-danger custom-btn"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-danger custom-btn1">
                Sold Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
