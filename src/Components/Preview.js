import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { log } from "util";

const Preview = () => {
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

        {/* plot */}

        {details?.property_type === "plot" && (
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
                  {details?.sale_price}
                  {details?.rent}
                  {details?.lease_amount}
                </p>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mx-4 px-2">
              <div className="">
                <p
                  className=""
                  style={{
                    color: "#2D2D2D",
                    weight: "500",
                    fontSize: "18px",
                  }}
                >
                  {details?.plot_properties?.total_area} Sqft{" "}
                  {details?.plot_properties?.plot_type} for{" "}
                  {details?.you_are_here_to === "sell" && <span>Sale</span>}
                  {details?.you_are_here_to === "rent" && <span>Rent</span>}
                  {details?.you_are_here_to === "lease" && <span>Lease</span>}
                </p>
              </div>
              <div className="text-end">
                <p className="" style={{ fontSize: "13px", color: "#717171" }}>
                  Posted {details?.created_at}
                </p>
              </div>
            </div>

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
                    <>
                      <tr>
                        <td>Rent Price</td>
                        <td>{details?.rent}</td>
                      </tr>
                    </>
                  )}

                  {details?.you_are_here_to === "lease" && (
                    <tr>
                      <td>Lease Price</td>
                      <td>{details?.lease_amount}</td>
                    </tr>
                  )}

                  <tr>
                    <td>Advance</td>
                    <td>{details?.advance}</td>
                  </tr>
                  <tr>
                    <td>Property Name</td>
                    <td>{details?.title}</td>
                  </tr>

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
                    <td>{details?.plot_properties?.length} m</td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>{details?.plot_properties?.plot_type}</td>
                  </tr>

                  <tr>
                    <td>Breadth</td>
                    <td>{details?.plot_properties?.breadth} m</td>
                  </tr>

                  <tr>
                    <td>Road Width</td>
                    <td>{details?.plot_properties?.road_width} ft</td>
                  </tr>

                  <tr>
                    <td>Direction</td>
                    <td>{details?.plot_properties?.direction_facing} </td>
                  </tr>

                  <tr>
                    <td>Approval</td>
                    <td>{details?.plot_properties?.approval} </td>
                  </tr>

                  <tr>
                    <td>Posted by</td>
                    {details?.owner && <td>Owner</td>}
                    {details?.agent && <td>Agent</td>}
                    {details?.builder && <td>Builder</td>}
                  </tr>

                  {details?.agent && (
                    <tr>
                      <td>Agent Commission</td>
                      <td>{details?.agent_commission}</td>
                    </tr>
                  )}

                  <tr>
                    <td>Facilities</td>
                    <td>
                      {details?.plot_properties?.facilities.map(
                        (indoor, ind, arr) => (
                          <span key={ind}>
                            {indoor?.name} {ind < arr.length - 1 ? ", " : ""}
                          </span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>

              <div className="">
                <span className="mx-3" style={{ fontWeight: "bold" }}>
                  Description:
                </span>
                <span>{details?.description}</span>
              </div>
            </Card.Body>
          </Card>
        )}

        {/* Land */}

        {details?.property_type === "land" && (
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
                  {details?.sale_price}
                  {details?.rent}
                  {details?.lease_amount}
                </p>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mx-4 px-2">
              <div className="">
                <p
                  className=""
                  style={{
                    color: "#2D2D2D",
                    weight: "500",
                    fontSize: "18px",
                  }}
                >
                  {details?.land_properties?.total_area} Sqft{" "}
                  {details?.land_properties?.land_type} for{" "}
                  {details?.you_are_here_to === "sell" && <span>Sale</span>}
                  {details?.you_are_here_to === "rent" && <span>Rent</span>}
                  {details?.you_are_here_to === "lease" && <span>Lease</span>}
                </p>
              </div>
              <div className="text-end">
                <p className="" style={{ fontSize: "13px", color: "#717171" }}>
                  Posted {details?.created_at}
                </p>
              </div>
            </div>

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
              {/* land */}

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
                    <>
                      <tr>
                        <td>Rent Price</td>
                        <td>{details?.rent}</td>
                      </tr>
                    </>
                  )}

                  {details?.you_are_here_to === "lease" && (
                    <tr>
                      <td>Lease Price</td>
                      <td>{details?.lease_amount}</td>
                    </tr>
                  )}

                  <tr>
                    <td>Advance</td>
                    <td>{details?.advance}</td>
                  </tr>
                  <tr>
                    <td>Property Name</td>
                    <td>{details?.title}</td>
                  </tr>

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
                    <td>{details?.land_properties?.length} m</td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>{details?.land_properties?.land_type}</td>
                  </tr>

                  <tr>
                    <td>Breadth</td>
                    <td>{details?.land_properties?.breadth} m</td>
                  </tr>

                  <tr>
                    <td>Road Width</td>
                    <td>{details?.land_properties?.road_width} ft</td>
                  </tr>

                  <tr>
                    <td>Direction</td>
                    <td>{details?.land_properties?.direction_facing} </td>
                  </tr>

                  <tr>
                    <td>Approval</td>
                    <td>{details?.land_properties?.approval} </td>
                  </tr>

                  <tr>
                    <td>Posted by</td>
                    {details?.owner && <td>Owner</td>}
                    {details?.agent && <td>Agent</td>}
                    {details?.builder && <td>Builder</td>}
                  </tr>

                  {details?.agent && (
                    <tr>
                      <td>Agent Commission</td>
                      <td>{details?.agent_commission}</td>
                    </tr>
                  )}

                  <tr>
                    <td>Facilities</td>
                    <td>
                      {details?.land_properties?.facilities.map(
                        (indoor, ind, arr) => (
                          <span key={ind}>
                            {indoor?.name} {ind < arr.length - 1 ? ", " : ""}
                          </span>
                        )
                      )}
                    </td>
                  </tr>
                </thead>
              </table>

              <div className="">
                <span className="mx-3" style={{ fontWeight: "bold" }}>
                  Description:
                </span>
                <span>{details?.description}</span>
              </div>
            </Card.Body>
          </Card>
        )}

        {/* Residential ---> House */}

        {details?.residential_properties?.house && (
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
                  {details?.sale_price}
                  {details?.rent}
                  {details?.lease_amount}
                </p>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mx-4 px-2">
              <div className="">
                <p
                  className=""
                  style={{
                    color: "#2D2D2D",
                    weight: "500",
                    fontSize: "18px",
                  }}
                >
                  {details?.residential_properties?.house?.available_bhk}{" "}
                  {details?.residential_properties?.house?.built_up_area} Sqft{" "}
                  {details?.residential_properties?.residential_type} for{" "}
                  {details?.you_are_here_to === "sell" && <span>Sale</span>}
                  {details?.you_are_here_to === "rent" && <span>Rent</span>}
                  {details?.you_are_here_to === "lease" && <span>Lease</span>}
                </p>
              </div>
              <div className="text-end">
                <p className="" style={{ fontSize: "13px", color: "#717171" }}>
                  Posted {details?.created_at}
                </p>
              </div>
            </div>

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
              {/* house */}

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
                    <>
                      <tr>
                        <td>Rent Price</td>
                        <td>{details?.rent}</td>
                      </tr>
                    </>
                  )}

                  {details?.you_are_here_to === "lease" && (
                    <tr>
                      <td>Lease Price</td>
                      <td>{details?.lease_amount}</td>
                    </tr>
                  )}

                  <tr>
                    <td>Advance</td>
                    <td>{details?.advance}</td>
                  </tr>
                  <tr>
                    <td>Property Name</td>
                    <td>{details?.title}</td>
                  </tr>

                  <tr>
                    <td>Address</td>
                    <td>{details?.location}</td>
                  </tr>

                  <tr>
                    <td>Area</td>
                    <td>
                      {details?.residential_properties?.house?.built_up_area}{" "}
                      {
                        details?.residential_properties?.house
                          ?.built_up_area_unit
                      }{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Available BHK</td>
                    <td>
                      {details?.residential_properties?.house?.available_bhk}
                    </td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>{details?.residential_properties?.residential_type}</td>
                  </tr>

                  <tr>
                    <td>Condition</td>
                    <td>
                      {details?.residential_properties?.house?.condition}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Category</td>
                    <td>
                      {
                        details?.residential_properties?.house
                          ?.category_of_project
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Units in project</td>
                    <td>
                      {
                        details?.residential_properties?.house
                          ?.no_of_units_in_project
                      }{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Total floors</td>
                    <td>
                      {details?.residential_properties?.house?.total_floors}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>Status</td>
                    <td>{details?.residential_properties?.house?.status} </td>
                  </tr>

                  <tr>
                    <td>Posted by</td>
                    {details?.owner && <td>Owner</td>}
                    {details?.agent && <td>Agent</td>}
                    {details?.builder && <td>Builder</td>}
                  </tr>

                  {details?.agent && (
                    <tr>
                      <td>Agent Commission</td>
                      <td>{details?.agent_commission}</td>
                    </tr>
                  )}

                  <tr>
                    <td>Indoor Facilities</td>
                    <td>
                      {details?.residential_properties?.house?.indoor_facilities.map(
                        (indoor, ind, arr) => (
                          <span key={ind}>
                            {indoor?.facility.name}{" "}
                            {ind < arr.length - 1 ? ", " : ""}
                          </span>
                        )
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>Outdoor Facilities</td>
                    <td>
                      {details?.residential_properties?.house?.outdoor_facilities.map(
                        (indoor, ind, arr) => (
                          <span key={ind}>
                            {indoor?.facility.name}{" "}
                            {ind < arr.length - 1 ? ", " : ""}
                          </span>
                        )
                      )}
                    </td>
                  </tr>

                </thead>
              </table>

              <div className="">
                <span className="mx-3" style={{ fontWeight: "bold" }}>
                  Description:
                </span>
                <span>{details?.description}</span>
              </div>
            </Card.Body>
          </Card>
        )}

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

export default Preview;
