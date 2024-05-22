import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import l1 from "../Images/l1.png";
import l2 from "../Images/l2.png";
import l3 from "../Images/l3.png";
import B1 from "../Images/B1.png";
import B2 from "../Images/B2.png";
import b3 from "../Images/b3.png";
import b4 from "../Images/b4.png";
import b5 from "../Images/b5.png";
import b6 from "../Images/b6.png";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { log } from "util";

const Postcheck = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState(location.state);
  const handleContact = () => {
    navigate("/mobile");
  };
  const handleClick = () => {
    // Navigate to a different page
    navigate("/");
  };

  const commercialTable = ["Price", "price per sqft", "sd"];
  const data = [
    ["Super Built-Up Area", "Developer", "Project", "Transaction Type"],
    ["1662 sqft", "Risland India", details?.title, "New Property"],
    [details?.sale_price, "", "", ""],
    ["Status", "Lifts", "Furnished Status", "Bedroom"],
    ["Ready to Move", "3", "Unfurnished", "3"],
  ];

  const value = [
    ["Price Breakup"],
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

    color: "#2D2D2D", // Text color for the 2nd row
  };
  console.log(details);
  return (
    <div>
      <Navbar />

      <div className="container pt-5">
        <FiArrowLeft
          className="mt-5"
          style={{
            width: "40px",
            height: "31px",
            color: "#D7242A",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />

        <Card
          className="mt-5"
          style={{ width: "1170px", border: " 1px solid #D7242A" }}
        >
          <Row className="mx-3" style={{ color: "#D7242A" }}>
            <Col xs={6}>
              <p
                className=" my-4 d-flex"
                style={{
                  color: "#D7242A",
                  fontSize: "40px",
                  fontWeight: "800px",
                }}
              >
                {/*  2.64 Cr */} {details?.sale_price}
              </p>
            </Col>
          </Row>
          <div className="d-flex justify-content-between mx-4 px-2">
            <div className="">
              {details?.property_type == "land" && (
                <p
                  className=""
                  style={{ color: "#2D2D2D", weight: "500", fontSize: "18px" }}
                >
                  {/* 3 BHK Flat for Sale in Perungudi, Chennai */}
                  {details?.land_properties?.total_area}{" "}
                  {details?.land_properties?.total_area_unit} land for{" "}
                  {details?.you_are_here_to} in {details?.location}
                </p>
              )}
            </div>
            <div className="text-end">
              <p className="" style={{ fontSize: "13px", color: "#717171" }}>
                Posted {details?.created_at}
                {/* 5 days ago */}
              </p>
            </div>
          </div>

          {/* plot */}
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
              {details?.residential_properties?.house?.house_images?.map ||
                details?.residential_properties?.apartment?.apartment_images?.map(
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
              {details?.commercial_properties?.industrialbuilding
                ?.industrialbuilding_images?.map ||
                details?.commercial_properties?.showroom?.showroom_images?.map(
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
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    style={rowIndex === 0 ? tableCellStyle : headerCellStyle}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        style={
                          rowIndex === 0 ? headerCellStyle : tableCellStyle
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </Card.Body>
        </Card>

        <Card
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
                          <span key={ind}>{indoor?.name}</span>
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
                    <td>Furnishing</td>
                    <td>
                      {details?.residential_properties?.apartment?.status}
                    </td>
                    <td>{details?.residential_properties?.house?.status}</td>
                  </tr>

                  <tr>
                    <td>Condition</td>
                    <td>
                      {details?.residential_properties?.apartment?.condition}
                    </td>
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
                    <td>
                      {details?.residential_properties?.apartment?.indoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td>
                    <td>
                      {details?.residential_properties?.house?.indoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>Outdoor Facilities</td>
                    <td>
                      {details?.residential_properties?.apartment?.outdoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td>
                    <td>
                      {details?.residential_properties?.house?.outdoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            )}

            {/* commercial forms */}
            {details.property_type == "commercial" && (
              <table className="table">
                <thead>
                  <tr>
                    <td>Sale Price</td>
                    <td>{details?.sale_price}</td>
                  </tr>

                  <tr>
                    <td>Price per sqft</td>
                    <td>{details?.sale_price_per_sqft}</td>
                  </tr>

                  <tr>
                    <td>Address</td>
                    <td>
                      {
                        details?.location
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Furnishing</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.status
                          ||
                          details?.commercial_properties?.showroom
                          ?.status
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Condition</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.condition 
                          ||
                          details?.commercial_properties?.showroom
                          ?.condition
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.category_of_project ||
                          details?.commercial_properties?.showroom
                          ?.category_of_project 
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Built Area</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.built_up_area ||
                          details?.commercial_properties?.showroom
                          ?.built_up_area
                      }{" "}
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.built_up_area_unit ||
                          details?.commercial_properties?.showroom
                          ?.built_up_area_unit
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Plot Area</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.plot_area
                      }{" "}
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.plot_area_unit
                      }
                    </td>
                  </tr>

                  {details?.commercial_properties?.industrialbuilding && <tr>
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
                  </tr>}

                  <tr>
                    <td>Indoor Facilities</td>
                    <td>
                      {details?.commercial_properties?.industrialbuilding?.indoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            )}

            {/* commercial forms
            {details.property_type == "commercial" && (
              <table className="table">
                <thead>
                  <tr>
                    <td>Sale Price</td>
                    <td>{details?.sale_price}</td>
                  </tr>

                  <tr>
                    <td>Price per sqft</td>
                    <td>{details?.sale_price_per_sqft}</td>
                  </tr>

                  <tr>
                    <td>Address</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.address
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Furnishing</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.status
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Condition</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.condition
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.category_of_project
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Built Area</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.built_up_area
                      }{" "}
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.built_up_area_unit
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Plot Area</td>
                    <td>
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.plot_area
                      }{" "}
                      {
                        details?.commercial_properties?.industrialbuilding
                          ?.plot_area_unit
                      }
                    </td>
                  </tr>

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

                  <tr>
                    <td>Indoor Facilities</td>
                    <td>
                      {details?.commercial_properties?.industrialbuilding?.indoor_facilities.map(
                        (indoor, ind) => (
                          <span key={ind}>{indoor.facility.name}</span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            )} */}

            <div className="">
              <span className="mx-3" style={{ fontWeight: "bold" }}>
                Description:
              </span>
              <span>
                {details.description}
                {/* {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing......{" "} */}
              </span>
            </div>
          </Card.Body>
        </Card>

        <Card className="container" style={{ width: "1170px", border: "none" }}>
          <Card.Body>
            <button
              type="button"
              style={{
                color: "#FFFFFF",
                backgroundColor: "#D7242A",
                border: "none",
                borderRadius: "30px",
                width: "270px",
                height: "60px",
              }}
              className="btn float-end me-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Delete
            </button>
          </Card.Body>
        </Card>
      </div>
      {/*  */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Delete
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete your post?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
};

export default Postcheck;
