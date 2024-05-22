import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import R1 from "../Images/B1.png";
import p1 from "../Images/p1.png";
import m3 from "../Images/m3.png";
import R2 from "../Images/m2.png";
import R3 from "../Images/R3.png";
import mp1 from "../Images/mp1.png";
import mp2 from "../Images/mp2.png";
import mp3 from "../Images/mp3.png";
import mp4 from "../Images/mp4.png";
import home from "../Images/home.png";
import { DropdownButton } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import circle from "../Images/home.png";

const Result = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();
  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log("Selected item:", item);
  };

  const location = useLocation();
 const [locality,setLocality] = useState("")
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const property_type = queryParams.get("property_type");
    const subtype = queryParams.get("subtype");
    const direction_facing = queryParams.get("direction_facing");
    const min_area = queryParams.get("min_area");
    const max_area = queryParams.get("max_area");
    const min_price = queryParams.get("min_price");
    const max_price = queryParams.get("max_price");
    const postedby = queryParams.get("postedby");
    const bhk = queryParams.get("bhk");
    const status = queryParams.get("status");
    const condition = queryParams.get("condition");
    const locality = queryParams.get("location");
    setLocality(locality)
    // plot and land
    if (property_type === "plot" || "land") {
      axios
        .get(`${Baseurl}search`, {
          params: {
            subtype: subtype,
            property_type: property_type,
            location: locality,
            direction_facing: direction_facing,
            postedby: postedby,
            min_area: min_area,
            max_area: max_area,
            min_price: min_price,
            max_price: max_price,
          },
          UserConfig,
        })
        .then((res) => {
          console.log(res.data.results);
          setMyProperty(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (property_type === "residential") {
      axios
        .get(`${Baseurl}search`, {
          params: {
            subtype: subtype,
            property_type: property_type,
            bhk: bhk,
            location: locality,
            status: status,
            condition: condition,
            postedby: postedby,
            min_price: min_price,
            max_price: max_price,
          },
          UserConfig,
        })
        .then((res) => {
          console.log(res.data.results);
          setMyProperty(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (property_type === "commercial") {
      axios
        .get(`${Baseurl}search`, {
          params: {
            subtype: subtype,
            location: locality,
            property_type: property_type,
            status: status,
            condition: condition,
            postedby: postedby,
            min_price: min_price,
            max_price: max_price,
          },
          UserConfig,
        })
        .then((res) => {
          console.log(res.data.results);
          setMyProperty(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`${Baseurl}search`, {
          params: {
            property_type: property_type,
            location: locality,
          },
          UserConfig,
        })
        .then((res) => {
          console.log(res.data.results);
          setMyProperty(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location.search]);

  const handleViewDetails = () => {
    navigate("/builder");
  };

  

  const [myProperty, setMyProperty] = useState([]);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5" style={{ fontSize: "30px" }}>
        <Card style={{ width: "1170px", borderRadius: "10px", border: "none" }}>
          <div className="d-flex justify-content-between">  
            <div className="">
              <p
                className="text-start"
                style={{ fontSize: "30px", marginTop: "100px" }}
              >
                {myProperty?.length} results | Flats in {locality} for Sale
              </p>
            </div>

            <div className="">
              <div className="pt-5 mt-5">
                <DropdownButton
                  id="dropdown-basic-button"
                  type="button"
                  aria-expanded="false"
                  className=" "
                  title={selectedItem ? selectedItem : "Relevance"}
                >
                  <div className="custom-dropdown ">
                    <Dropdown.Item
                      onClick={() => handleItemClick("Relevance")}
                      href="#/action-1"
                    >
                      Relevance
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleItemClick("Popularity")}
                      href="#/action-2"
                    >
                      Popularity
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleItemClick("Price-LowtoHigh")}
                      href="#/action-3"
                    >
                      Price-Low to High
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleItemClick("Price-hightoLow")}
                      href="#/action-1"
                    >
                      Price-high toLow
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleItemClick("NewestFirst")}
                      href="#/action-2"
                    >
                      Newest First
                    </Dropdown.Item>
                  </div>
                </DropdownButton>
              </div>
            </div>
          </div>
        </Card>

        {/*  */}
        {myProperty?.map((prop, indx) => (
          <Card
            style={{
              width: "1170px",
              height: "450px",
              borderRadius: "10px",
              border: "1px solid #D7242A",
              cursor: "pointer",
            }}
            onClick={() => handleDetail(prop.id)}
            className="mb-3"
          >
            <div
              className="row mx-4 my-3"
              style={{ color: "#2D2D2D", fontSize: "20px" }}
            >
              {/* plot */}

              {prop?.property_type === "plot" && (
                <div className="col ms-2">
                  <img
                    src={prop?.plot_properties?.plot_images[0].image}
                    alt=""
                    style={{
                      height: "400px",
                      weight: "450px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )}

              {/* land */}

              {prop?.property_type === "land" && (
                <div className="col ms-2">
                  <img
                    src={prop?.land_properties?.land_images[0].image}
                    alt=""
                    style={{
                      height: "400px",
                      weight: "450px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )}

              {/* residential */}

              {prop?.property_type === "residential" && (
                <div className="col ms-2">
                  <img
                    src={
                      prop?.residential_properties?.apartment
                        ?.apartment_images[0].image ||
                      prop?.residential_properties?.house?.house_images[0].image
                    }
                    alt=""
                    style={{
                      height: "400px",
                      weight: "450px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )}

              {/* Commercial */}
              {prop?.property_type === "commercial" && (
                <div className="col ms-2">
                  <img
                    src={
                      prop?.commercial_properties?.showroom?.showroom_images[0]
                        .image ||
                      prop?.commercial_properties?.industrialbuilding
                        ?.industrialbuilding_images[0].image
                    }
                    alt=""
                    style={{
                      height: "400px",
                      weight: "450px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )}

              <div className="col ms-2">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Plot */}
                  {prop?.property_type === "plot" && (
                    <>
                      {prop?.you_are_here_to === "sell" && (
                        <p className="text-left mt-3 mb-0">
                          Plot for Sale in , {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  {/* Plot  rent*/}
                  {prop?.property_type === "plot" && (
                    <>
                      {prop?.you_are_here_to === "rent" && (
                        <p className="text-left mt-3 mb-0">
                          Plot for Rent in , {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  {/* Plot  lease*/}
                  {prop?.property_type === "plot" && (
                    <>
                      {prop?.you_are_here_to === "lease" && (
                        <p className="text-left mt-3 mb-0">
                          Plot for Lease in , {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  {/* land */}

                  {/* land */}
                  {prop?.property_type === "land" && (
                    <>
                      {prop?.you_are_here_to === "sell" && (
                        <p className="text-left mt-3 mb-0">
                          Land for Sale in Perungudi, {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  {/* land  rent*/}
                  {prop?.property_type === "land" && (
                    <>
                      {prop?.you_are_here_to === "rent" && (
                        <p className="text-left mt-3 mb-0">
                          Land for Rent in , {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  {/* land  lease*/}
                  {prop?.property_type === "land" && (
                    <>
                      {prop?.you_are_here_to === "lease" && (
                        <p className="text-left mt-3 mb-0">
                          Land for Lease in , {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  {/* residential */}

                  {/* residential */}
                  {prop?.property_type === "residential" && (
                    <>
                      {prop?.residential_properties?.residential_type ===
                        "house" && (
                        <>
                          {prop?.you_are_here_to === "sell" && (
                            <p className="text-left mt-3 mb-0">
                              {
                                prop?.residential_properties?.house
                                  ?.available_bhk
                              }{" "}
                              {prop?.residential_properties?.residential_type}{" "}
                              {""}
                              for Sale in {prop?.location}
                            </p>
                          )}
                        </>
                      )}

                      {/* Residential Rent */}
                      {prop?.you_are_here_to === "rent" && (
                        <p className="text-left mt-3 mb-0">
                          Land for Rent in {prop?.location}
                        </p>
                      )}

                      {/* Residential Lease */}
                      {prop?.you_are_here_to === "lease" && (
                        <p className="text-left mt-3 mb-0">
                          Land for Lease in {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  {/* commercial */}
                  {prop?.property_type === "commercial" && (
                    <>
                      {prop?.commercial_properties?.commercial_type ===
                        "office" && (
                        <>
                          {prop?.you_are_here_to === "sell" && (
                            <p className="text-left mt-3 mb-0">
                              {
                                prop?.commercial_properties?.showroom
                                  ?.built_up_area
                              }{" "}
                              sqft
                              {
                                prop?.commercial_properties?.commercial_type
                              }{" "}
                              {""}
                              for Sale in {prop?.location}
                            </p>
                          )}
                        </>
                      )}

                      {/* commercial Rent */}
                      {prop?.you_are_here_to === "rent" && (
                        <p className="text-left mt-3 mb-0">
                          {prop?.commercial_properties?.showroom?.built_up_area}{" "}
                          sqft {prop?.commercial_properties?.commercial_type}{" "}
                          for Rent in {prop?.location}
                        </p>
                      )}

                      {/* commercial Lease */}
                      {prop?.you_are_here_to === "lease" && (
                        <p className="text-left mt-3 mb-0">
                          {prop?.commercial_properties?.showroom?.built_up_area}{" "}
                          sqft
                          {prop?.commercial_properties?.commercial_type} for
                          Lease in {prop?.location}
                        </p>
                      )}
                    </>
                  )}

                  <div className="d-flex flex-column">
                    <p
                      className="text-right mb-0"
                      style={{
                        width: "163px",
                        height: "60px",
                        fontWeight: "600",
                        fontSize: "28px",
                        color: "#D7242A",
                      }}
                    >
                      {/* ₹ 1.24 Cr */}
                      {prop?.sale_price}
                    </p>
                    <p
                      className="text-right mb-0 me-3"
                      style={{
                        fontSize: "14px",
                        alignSelf: "flex-end",
                        color: "#2D2D2D",
                      }}
                    >
                      {/* ₹9,868 per sqft */}
                      {prop?.sale_price_per_sqft} per sqft
                    </p>
                  </div>
                </div>

                <p
                  className="text-left"
                  style={{ color: "#717171", fontSize: "20px" }}
                >
                  {prop?.title}
                </p>

                {/*plot  */}
                {prop?.property_type === "plot" && (
                  <div
                    className="card"
                    style={{ width: "640px", height: "120px" }}
                  >
                    <div className="row mx-2">
                      <div className="col mt-2">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          SQUARE AREA
                        </p>
                        <h6>{prop?.plot_properties?.total_area} sqft.</h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Type
                        </p>
                        <h6>{prop?.property_type}</h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Direction
                        </p>
                        <h6>{prop?.plot_properties?.direction_facing}</h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Length
                        </p>
                        <h6>
                          {prop?.plot_properties?.length}{" "}
                          {prop?.plot_properties?.length_unit}
                        </h6>
                      </div>
                    </div>
                    <div className="row mx-2">
                      <div className="col mt-2">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          breadth
                        </p>
                        <h6>
                          {prop?.plot_properties?.breadth}{" "}
                          {prop?.plot_properties?.breadth_unit}
                        </h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Category
                        </p>
                        <h6>{prop?.plot_properties?.plot_type}</h6>
                      </div>
                      <div className="col mt-2"></div>
                      <div className="col mt-2"></div>
                    </div>
                  </div>
                )}

                {/*land  */}
                {prop?.property_type === "land" && (
                  <div
                    className="card"
                    style={{ width: "640px", height: "120px" }}
                  >
                    <div className="row mx-2">
                      <div className="col mt-2">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          SQUARE AREA
                        </p>
                        <h6>{prop?.land_properties?.total_area} sqft.</h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Type
                        </p>
                        <h6>{prop?.property_type}</h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Direction
                        </p>
                        <h6>{prop?.land_properties?.direction_facing}</h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Length
                        </p>
                        <h6>
                          {prop?.land_properties?.length}{" "}
                          {prop?.land_properties?.length_unit}
                        </h6>
                      </div>
                    </div>
                    <div className="row mx-2">
                      <div className="col mt-2">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          breadth
                        </p>
                        <h6>
                          {prop?.land_properties?.breadth}{" "}
                          {prop?.land_properties?.breadth_unit}
                        </h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Category
                        </p>
                        <h6>{prop?.land_properties?.land_type}</h6>
                      </div>
                      <div className="col mt-2"></div>
                      <div className="col mt-2"></div>
                    </div>
                  </div>
                )}

                {/*residential  */}
                {prop?.property_type === "residential" && (
                  <div
                    className="card"
                    style={{ width: "640px", height: "120px" }}
                  >
                    <div className="row mx-2">
                      <div className="col mt-2">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          SQUARE AREA
                        </p>
                        <h6>
                          {prop?.residential_properties?.house?.built_up_area}{" "}
                          sqft.
                        </h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          STATUS
                        </p>
                        <h6>{prop?.residential_properties?.house?.status}</h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Condition
                        </p>
                        <h6>
                          {prop?.residential_properties?.house?.condition}
                        </h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Floors
                        </p>
                        <h6>
                          {prop?.residential_properties?.house?.total_floors}
                        </h6>
                      </div>
                    </div>
                    <div className="row mx-2">
                      <div className="col mt-2">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Type
                        </p>
                        <h6>
                          {
                            prop?.residential_properties?.house
                              ?.category_of_project
                          }
                        </h6>
                      </div>
                      <div className="col mt-2 border-start">
                        <p
                          style={{
                            fontSize: "9px",
                            width: "66px",
                            height: "15px",
                            marginBottom: "0",
                            textTransform: "uppercase",
                          }}
                        >
                          Category
                        </p>
                        <h6>
                          {prop?.residential_properties?.residential_type}
                        </h6>
                      </div>
                      <div className="col mt-2"></div>
                      <div className="col mt-2"></div>
                    </div>
                  </div>
                )}

                {/*commercial  */}
                {prop?.property_type === "commercial" && (
                  <>
                    {prop?.commercial_properties?.commercial_type ===
                      "office" && (
                      <div
                        className="card"
                        style={{ width: "640px", height: "120px" }}
                      >
                        <div className="row mx-2">
                          <div className="col mt-2">
                            <p
                              style={{
                                fontSize: "9px",
                                width: "66px",
                                height: "15px",
                                marginBottom: "0",
                                textTransform: "uppercase",
                              }}
                            >
                              SQUARE AREA
                            </p>
                            <h6>
                              {
                                prop?.commercial_properties?.showroom
                                  ?.built_up_area
                              }{" "}
                              sqft.
                            </h6>
                          </div>
                          <div className="col mt-2 border-start">
                            <p
                              style={{
                                fontSize: "9px",
                                width: "66px",
                                height: "15px",
                                marginBottom: "0",
                                textTransform: "uppercase",
                              }}
                            >
                              STATUS
                            </p>
                            <h6>
                              {prop?.commercial_properties?.showroom?.status}
                            </h6>
                          </div>
                          <div className="col mt-2 border-start">
                            <p
                              style={{
                                fontSize: "9px",
                                width: "66px",
                                height: "15px",
                                marginBottom: "0",
                                textTransform: "uppercase",
                              }}
                            >
                              Condition
                            </p>
                            <h6>
                              {prop?.commercial_properties?.showroom?.condition}
                            </h6>
                          </div>
                          <div className="col mt-2 border-start">
                            <p
                              style={{
                                fontSize: "9px",
                                width: "66px",
                                height: "15px",
                                marginBottom: "0",
                                textTransform: "uppercase",
                              }}
                            >
                              Floors
                            </p>
                            <h6>
                              {
                                prop?.commercial_properties?.showroom
                                  ?.total_floors
                              }
                            </h6>
                          </div>
                        </div>
                        <div className="row mx-2">
                          <div className="col mt-2">
                            <p
                              style={{
                                fontSize: "9px",
                                width: "66px",
                                height: "15px",
                                marginBottom: "0",
                                textTransform: "uppercase",
                              }}
                            >
                              Type
                            </p>
                            <h6>
                              {
                                prop?.commercial_properties?.showroom
                                  ?.category_of_project
                              }
                            </h6>
                          </div>
                          <div className="col mt-2 border-start">
                            <p
                              style={{
                                fontSize: "9px",
                                width: "66px",
                                height: "15px",
                                marginBottom: "0",
                                textTransform: "uppercase",
                              }}
                            >
                              Category
                            </p>
                            <h6>
                              {prop?.commercial_properties?.commercial_type}
                            </h6>
                          </div>
                          <div className="col mt-2"></div>
                          <div className="col mt-2"></div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/*  */}
                <div class="row" style={{ color: "#717171", fontSize: "20px" }}>
                  {/* polt */}
                  {prop?.property_type === "plot" &&
                    prop?.plot_properties?.facilities.map((faci, index) => (
                      <div className="col mt-3" key={index}>
                        <div
                          className="card"
                          style={{ width: "100px", height: "92px" }}
                        >
                          <img
                            src={circle}
                            className="ms-3"
                            style={{ width: "30px", height: "32px" }}
                            alt="Description of the image"
                          />

                          <p
                            className="mt-3 ms-2"
                            style={{
                              fontWeight: "500",
                              fontSize: "12px",
                              alignItems: "center",
                              textTransform: "capitalize",
                            }}
                          >
                            {faci.name}
                          </p>
                        </div>
                      </div>
                    ))}

                  {/* land */}

                  {prop?.property_type === "land" &&
                    prop?.land_properties?.facilities.map((faci, index) => (
                      <div className="col mt-3" key={index}>
                        <div
                          className="card"
                          style={{ width: "100px", height: "92px" }}
                        >
                          <img
                            src={circle}
                            className="ms-3"
                            style={{ width: "30px", height: "32px" }}
                            alt="Description of the image"
                          />

                          <p
                            className="mt-3 ms-2"
                            style={{
                              fontWeight: "500",
                              fontSize: "12px",
                              alignItems: "center",
                              textTransform: "capitalize",
                            }}
                          >
                            {faci.name}
                          </p>
                        </div>
                      </div>
                    ))}

                  {/* residential */}

                  {prop?.property_type === "residential" &&
                    prop?.residential_properties?.house?.indoor_facilities.map(
                      (faci, index) => (
                        <div className="col mt-3" key={index}>
                          <div
                            className="card"
                            style={{ width: "100px", height: "92px" }}
                          >
                            <img
                              src={circle}
                              className="ms-3"
                              style={{ width: "30px", height: "32px" }}
                              alt="Description of the image"
                            />

                            <p
                              className="mt-3 ms-2"
                              style={{
                                fontWeight: "500",
                                fontSize: "12px",
                                alignItems: "center",
                                textTransform: "capitalize",
                              }}
                            >
                              {faci.facility.name}
                            </p>
                          </div>
                        </div>
                      )
                    )}

                  {/* commercial */}

                  {prop?.property_type === "commercial" &&
                    prop?.commercial_properties?.showroom?.outdoor_facilities.map(
                      (faci, index) => (
                        <div className="col mt-3" key={index}>
                          <div
                            className="card"
                            style={{ width: "100px", height: "92px" }}
                          >
                            <img
                              src={circle}
                              className="ms-3"
                              style={{ width: "30px", height: "32px" }}
                              alt="Description of the image"
                            />

                            <p
                              className="mt-3 ms-2"
                              style={{
                                fontWeight: "500",
                                fontSize: "12px",
                                alignItems: "center",
                                textTransform: "capitalize",
                              }}
                            >
                              {faci.facility.name}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                </div>

                <p
                  className="mt-3"
                  style={{ fontWeight: "400px", fontSize: "10px" }}
                >
                  {prop?.description}
                  {/* Lorem Ipsum is simply . dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. Lorem Ipsum is simply dummy text of
                  the printing...... */}
                </p>
              </div>
            </div>

            {/*  */}
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Result;
