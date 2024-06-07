import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import circle from "../Images/home.png";
import b3 from "../Images/b3.png";

const Result = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();
  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log("Selected item:", item);
  };

  const location = useLocation();
  const [locality, setLocality] = useState("");
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
    const you_are_here_to = queryParams.get("you_are_here_to");
    const condition = queryParams.get("condition");
    const locality = queryParams.get("location");
    setLocality(locality);
    // plot and land
    if (property_type === "plot" || property_type ==="land") {
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
            you_are_here_to: you_are_here_to,
            filter_by: selectedItem
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
            you_are_here_to: you_are_here_to,
            filter_by: selectedItem
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
            you_are_here_to: you_are_here_to,
            filter_by: selectedItem
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
        .get(`${Baseurl}search/`, {
          params: {
            property_type: property_type,
            location: locality,
            filter_by: selectedItem
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
  }, [location.search,selectedItem]);

  const handleViewDetails = () => {
    navigate("/builder");
  };

  const [myProperty, setMyProperty] = useState([]);

  const handleDetail = (id) => {
    navigate(`/builder/${id}`);
  };

  console.log(selectedItem);
  return (
    <>
      <Navbar />
 
      <div className="w-100 mx-auto" style={{ marginTop: "9%" }}>
        <div className="container d-flex align-items-center justify-content-between">
          {/* <h2>{myProperty?.length} results | Flats in Chennai for Sale</h2> */}
          <h2>{myProperty?.length} results found</h2>
          <DropdownButton
            id="dropdown-basic-button"
            type="button"
            aria-expanded="false"
            className=" "
            title={selectedItem ? selectedItem : "relevance"}
          >
            <div className="custom-dropdown ">
              <Dropdown.Item onClick={() => handleItemClick("relevance")}>
                Relevance
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleItemClick("popularity")}>
                Popularity
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleItemClick("low_to_high")}
              >
                Price-Low to High
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleItemClick("high_to_low")}
                href="#/Price-hightoLow "
              >
                Price-high toLow
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleItemClick("newest_first")}
                href="#/newest_first"
              >
                Newest First
              </Dropdown.Item>
            </div>
          </DropdownButton>
        </div>

        {myProperty.map((details, indx) => (
          <div
            className="container border rounded-4 border-danger mx-auto mt-3 cursor-pointer"
            style={{ cursor: "pointer" }}
            key={indx}
            onClick={() => handleDetail(details.id)}
          >
            <div className="row p-3">
              <div className="col-5  p-0 m-0 ">
                <img
                  src={
                    details?.plot_properties?.plot_images[0].image ||
                    details?.land_properties?.land_images[0].image ||
                    details?.residential_properties?.apartment
                      ?.apartment_images[0].image ||
                    details?.residential_properties?.house?.house_images[0]
                      .image ||
                    details?.commercial_properties?.showroom?.showroom_images[0]
                      .image ||
                    details?.commercial_properties?.industrialbuilding
                      ?.industrialbuilding_images[0].image ||
                    details?.commercial_properties?.service_apartment
                      ?.service_apartment_images[0].image ||
                    details?.commercial_properties?.factory?.factory_images[0]
                      .image ||
                    details?.commercial_properties?.pg_colony
                      ?.pgcolony_images[0].image
                  }
                  alt="image"
                  className="rounded-4 "
                  style={{ height: "400px", width: "95%" }}
                />
              </div>

              <div className="col-7  p-0 m-0 mx-auto">
                <div className="d-flex justify-content-between  ">
                  <div>
                    {/* plot heading */}
                    {details?.plot_properties && (
                      <h6 className="pt-3">
                        {details?.plot_properties?.total_area}{" "}
                        {details?.plot_properties?.total_area_unit}{" "}
                        {details?.plot_properties?.plot_type} for{" "}
                        {details?.you_are_here_to === "sell" && (
                          <span>Sale</span>
                        )}
                        {details?.you_are_here_to === "rent" && (
                          <span>Rent</span>
                        )}
                        {details?.you_are_here_to === "lease" && (
                          <span>Lease</span>
                        )}{" "}
                        in {details?.location}
                      </h6>
                    )}

                    {/* land heading*/}
                    {details?.land_properties && (
                      <h6 className="pt-3">
                        {details?.land_properties?.total_area}{" "}
                        {details?.land_properties?.total_area_unit}{" "}
                        {details?.land_properties?.land_type} for{" "}
                        {details?.you_are_here_to === "sell" && (
                          <span>Sale</span>
                        )}
                        {details?.you_are_here_to === "rent" && (
                          <span>Rent</span>
                        )}
                        {details?.you_are_here_to === "lease" && (
                          <span>Lease</span>
                        )}{" "}
                        in {details?.location}
                      </h6>
                    )}

                    {/* residential --> house heading*/}
                    {details?.residential_properties?.house && (
                      <h6 className="pt-3">
                        {details?.residential_properties?.house?.available_bhk}{" "}
                        {details?.residential_properties?.residential_type?.toUpperCase()}{" "}
                        for{" "}
                        {details?.you_are_here_to === "sell" && (
                          <span>Sale</span>
                        )}
                        {details?.you_are_here_to === "rent" && (
                          <span>Rent</span>
                        )}
                        {details?.you_are_here_to === "lease" && (
                          <span>Lease</span>
                        )}{" "}
                        in {details?.location}
                      </h6>
                    )}
                    {/* residential --> apartment heading*/}
                    {details?.residential_properties?.apartment && (
                      <h6 className="pt-3">
                        {
                          details?.residential_properties?.apartment
                            ?.available_bhk
                        }{" "}
                        {details?.residential_properties?.residential_type?.toUpperCase()}{" "}
                        for{" "}
                        {details?.you_are_here_to === "sell" && (
                          <span>Sale</span>
                        )}
                        {details?.you_are_here_to === "rent" && (
                          <span>Rent</span>
                        )}
                        {details?.you_are_here_to === "lease" && (
                          <span>Lease</span>
                        )}{" "}
                        in {details?.location}
                      </h6>
                    )}

                    {/* commercial --> industrial heading*/}
                    {details?.commercial_properties?.industrialbuilding && (
                      <h6 className="pt-3">
                        {
                          details?.commercial_properties?.industrialbuilding
                            ?.built_up_area
                        }{" "}
                        {
                          details?.commercial_properties?.industrialbuilding
                            ?.built_up_area_unit
                        }{" "}
                        {details?.commercial_properties?.commercial_type?.toUpperCase()}{" "}
                        for{" "}
                        {details?.you_are_here_to === "sell" && (
                          <span>Sale</span>
                        )}
                        {details?.you_are_here_to === "rent" && (
                          <span>Rent</span>
                        )}
                        {details?.you_are_here_to === "lease" && (
                          <span>Lease</span>
                        )}{" "}
                        in {details?.location}
                      </h6>
                    )}

                    {/* commercial --> factory*/}
                    {details?.commercial_properties?.factory && (
                      <h6 className="pt-3">
                        {details?.commercial_properties?.factory?.built_up_area}{" "}
                        {
                          details?.commercial_properties?.factory
                            ?.built_up_area_unit
                        }{" "}
                        {details?.commercial_properties?.commercial_type?.toUpperCase()}{" "}
                        for{" "}
                        {details?.you_are_here_to === "sell" && (
                          <span>Sale</span>
                        )}
                        {details?.you_are_here_to === "rent" && (
                          <span>Rent</span>
                        )}
                        {details?.you_are_here_to === "lease" && (
                          <span>Lease</span>
                        )}{" "}
                        in {details?.location}
                      </h6>
                    )}

                    {/* commercial --> showroom*/}
                    {details?.commercial_properties?.showroom && (
                      <h6 className="pt-3">
                        {
                          details?.commercial_properties?.showroom
                            ?.built_up_area
                        }{" "}
                        {
                          details?.commercial_properties?.showroom
                            ?.built_up_area_unit
                        }{" "}
                        {details?.commercial_properties?.commercial_type?.toUpperCase()}{" "}
                        for{" "}
                        {details?.you_are_here_to === "sell" && (
                          <span>Sale</span>
                        )}
                        {details?.you_are_here_to === "rent" && (
                          <span>Rent</span>
                        )}
                        {details?.you_are_here_to === "lease" && (
                          <span>Lease</span>
                        )}{" "}
                        in {details?.location}
                      </h6>
                    )}

                    <p className="text-secondary text-uppercase fw-medium pt-2">
                      {details?.title}
                    </p>
                  </div>
                  <div>
                    <h1 className="fw-bold text-danger">
                      {details?.sale_price}
                      {details?.rent}
                      {details?.lease_amount}
                    </h1>
                    <p>₹9,868 per sqft</p>
                  </div>
                </div>

                {/* plot */}
                {(details.property_type === "plot" ||
                  details.property_type === "land") && (
                  <div className="border mx-auto row p-3  rounded-4">
                    <div className="col-3  ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Square Area
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.plot_properties?.total_area ||
                          details?.land_properties?.total_area}{" "}
                        sqft.
                      </p>
                    </div>
                    <div className="col-3   border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Type
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.property_type}
                      </p>
                    </div>
                    <div className="col-3 border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Direction
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-uppercase"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.plot_properties?.direction_facing ||
                          details?.land_properties?.direction_facing}
                      </p>
                    </div>

                    <div className="col-3 border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Length
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.plot_properties?.length ||
                          details?.land_properties?.length}{" "}
                        {details?.plot_properties?.length_unit ||
                          details?.land_properties?.length_unit}
                      </p>
                    </div>

                    <div className="col-3 mt-3">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        breadth
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.plot_properties?.breadth ||
                          details?.land_properties?.breadth}{" "}
                        {details?.plot_properties?.breadth_unit ||
                          details?.land_properties?.breadth_unit}
                      </p>
                    </div>
                  </div>
                )}
                {/* residential appartment & house */}
                {details.property_type === "residential" && (
                  <div className="border mx-auto row p-3  rounded-4">
                    <div className="col-3  ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Square Area
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.residential_properties?.house
                          ?.built_up_area ||
                          details?.residential_properties?.apartment
                            ?.built_up_area}{" "}
                        sqft.
                      </p>
                    </div>
                    <div className="col-3   border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Property Type
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.property_type}
                      </p>
                    </div>
                    <div className="col-3 border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        STATUS
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.residential_properties?.house?.status ||
                          details?.residential_properties?.apartment?.status}
                      </p>
                    </div>

                    <div className="col-3 border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Condition
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.residential_properties?.house?.condition ||
                          details?.residential_properties?.apartment?.condition}
                      </p>
                    </div>

                    <div className="col-3 mt-3">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Floors
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.residential_properties?.house?.total_floors ||
                          details?.residential_properties?.apartment
                            ?.total_floors}
                      </p>
                    </div>

                    <div className="col-3 mt-3 border-start">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Type
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.residential_properties?.house
                          ?.category_of_project ||
                          details?.residential_properties?.apartment
                            ?.category_of_project}
                      </p>
                    </div>
                  </div>
                )}

                {/* commercial */}
                {details.property_type === "commercial" && (
                  <div className="border mx-auto row p-3  rounded-4">
                    {details?.commercial_properties?.pg_colony ? (
                      <>
                        <div className="col-3  ">
                          <p
                            className="p-0 m-0 text-secondary text-uppercase"
                            style={{ fontSize: "12px" }}
                          >
                            Gender
                          </p>
                          <p
                            className="pt-2 m-0 fw-medium"
                            style={{ fontSize: "13px" }}
                          >
                            {details?.residential_properties?.house
                              ?.built_up_area ||
                              details?.residential_properties?.apartment
                                ?.built_up_area}{" "}
                            {details?.commercial_properties?.pg_colony?.gender}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="col-3  ">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Square Area
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium"
                          style={{ fontSize: "13px" }}
                        >
                          {details?.commercial_properties?.showroom
                            ?.built_up_area ||
                            details?.commercial_properties?.industrialbuilding
                              ?.built_up_area ||
                            details?.commercial_properties?.service_apartment
                              ?.built_up_area ||
                            details?.commercial_properties?.pg_colony
                              ?.built_up_area ||
                            details?.commercial_properties?.factory
                              ?.built_up_area}{" "}
                          sqft.
                        </p>
                      </div>
                    )}

                    <div className="col-3   border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Property Type
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.property_type}
                      </p>
                    </div>
                    <div className="col-3 border-start ">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        STATUS
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.commercial_properties?.showroom?.status ||
                          details?.commercial_properties?.industrialbuilding
                            ?.status ||
                          details?.commercial_properties?.service_apartment
                            ?.status ||
                          details?.commercial_properties?.pg_colony?.status ||
                          details?.commercial_properties?.factory?.status}
                      </p>
                    </div>
                    {/* industrial and factory */}
                    {(details?.commercial_properties?.industrialbuilding ||
                      details?.commercial_properties?.factory) && (
                      <div className="col-3 border-start ">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Condition
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium text-capitalize"
                          style={{ fontSize: "13px" }}
                        >
                          {details?.commercial_properties?.industrialbuilding
                            ?.condition ||
                            details?.commercial_properties?.factory?.condition}
                        </p>
                      </div>
                    )}

                    {/* service appartment */}

                    {(details?.commercial_properties?.service_apartment ||
                      details?.commercial_properties?.showroom) && (
                      <div className="col-3 border-start ">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Car Parking
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium text-capitalize"
                          style={{ fontSize: "13px" }}
                        >
                          {details?.commercial_properties?.service_apartment
                            ?.no_of_car_parking ||
                            details?.commercial_properties?.showroom
                              ?.no_of_car_parking}
                        </p>
                      </div>
                    )}

                    {/* PG hostel */}

                    {(details?.commercial_properties?.pg_colony ||
                      details?.commercial_properties?.pg_hostel) && (
                      <div className="col-3 border-start ">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Preffered
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium text-capitalize"
                          style={{ fontSize: "13px" }}
                        >
                          {
                            details?.commercial_properties?.pg_colony
                              ?.tenants_preferred
                          }
                        </p>
                      </div>
                    )}
                    {/* industry --->showroom -->pg colony */}
                    {(details?.commercial_properties?.showroom ||
                      details?.commercial_properties?.service_apartment ||
                      details?.commercial_properties?.pg_colony) && (
                      <div className="col-3 mt-3">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Floors
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium"
                          style={{ fontSize: "13px" }}
                        >
                          {details?.commercial_properties?.showroom
                            ?.total_floors ||
                            details?.commercial_properties?.showroom
                              ?.pg_colony ||
                            details?.commercial_properties?.service_apartment
                              ?.available_floors}
                        </p>
                      </div>
                    )}

                    {(details?.commercial_properties?.industrialbuilding ||
                      details?.commercial_properties?.factory) && (
                      <div className="col-3 mt-3">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Plot Area
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium"
                          style={{ fontSize: "13px" }}
                        >
                          {details?.commercial_properties?.industrialbuilding
                            ?.plot_area ||
                            details?.commercial_properties?.factory
                              ?.plot_area}{" "}
                          Sqft
                        </p>
                      </div>
                    )}

                    {(details?.commercial_properties?.industrialbuilding ||
                      details?.commercial_properties?.factory ||
                      details?.commercial_properties?.pg_colony) && (
                      <div className="col-3 mt-3 border-start">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Type
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium text-capitalize"
                          style={{ fontSize: "13px" }}
                        >
                          {details?.commercial_properties?.industrialbuilding
                            ?.category_of_project ||
                            details?.commercial_properties?.factory
                              ?.category_of_project ||
                            details?.commercial_properties?.pg_colony
                              ?.category_of_project}
                        </p>
                      </div>
                    )}

                    {details?.commercial_properties?.service_apartment && (
                      <div className="col-3 mt-3 border-start">
                        <p
                          className="p-0 m-0 text-secondary text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          Flats
                        </p>
                        <p
                          className="pt-2 m-0 fw-medium text-capitalize"
                          style={{ fontSize: "13px" }}
                        >
                          {
                            details?.commercial_properties?.service_apartment
                              ?.no_of_flats
                          }
                        </p>
                      </div>
                    )}

                    <div className="col-3 mt-3 border-start">
                      <p
                        className="p-0 m-0 text-secondary text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Category
                      </p>
                      <p
                        className="pt-2 m-0 fw-medium text-capitalize"
                        style={{ fontSize: "13px" }}
                      >
                        {details?.commercial_properties?.commercial_type}
                      </p>
                    </div>
                  </div>
                )}

                <div className=" mx-auto row  gap-2 p-0 m-0">
                  {/* plot */}
                  {details?.property_type === "plot" &&
                    details?.plot_properties?.facilities.map((faci, index) => (
                      <div className="col-2 border rounded-3 py-2 gap-2 d-flex flex-column justify-content-center">
                        <img
                          src={circle}
                          style={{ width: "40px", height: "40px" }}
                        />
                        <span
                          style={{ fontSize: "12px" }}
                          className="fw-medium text-capitalize"
                        >
                          {faci.name}
                        </span>
                      </div>
                    ))}

                  {/* land */}
                  {details?.property_type === "land" &&
                    details?.land_properties?.facilities.map((faci, index) => (
                      <div className="col-2 border rounded-3 py-2 gap-2 d-flex flex-column justify-content-center">
                        <img
                          src={circle}
                          style={{ width: "40px", height: "40px" }}
                        />
                        <span
                          style={{ fontSize: "12px" }}
                          className="fw-medium text-capitalize"
                        >
                          {faci.name}
                        </span>
                      </div>
                    ))}

                  {/* residential */}
                  {details?.property_type === "residential" &&
                    (
                      details?.residential_properties?.house
                        ?.indoor_facilities ||
                      details?.residential_properties?.apartment
                        ?.indoor_facilities
                    )?.map((faci, index) => (
                      <div className="col-2 border rounded-3 py-2 gap-2 d-flex flex-column justify-content-center">
                        <img
                          src={circle}
                          style={{ width: "40px", height: "40px" }}
                        />
                        <span
                          style={{ fontSize: "12px" }}
                          className="fw-medium text-capitalize"
                        >
                          {faci.facility.name}
                        </span>
                      </div>
                    ))}

                  {/* commercial */}

                  {details?.property_type === "commercial" &&
                    (
                      details?.commercial_properties?.showroom
                        ?.outdoor_facilities ||
                      details?.commercial_properties?.industrialbuilding
                        ?.outdoor_facilities ||
                      details?.commercial_properties?.service_apartment
                        ?.outdoor_facilities ||
                      details?.commercial_properties?.pg_colony
                        ?.outdoor_facilities ||
                      details?.commercial_properties?.factory
                        ?.outdoor_facilities
                    )?.map((faci, index) => (
                      <div className="col-2 border rounded-3 py-2 gap-2 d-flex flex-column justify-content-center">
                        <img
                          src={circle}
                          style={{ width: "40px", height: "40px" }}
                        />
                        <span
                          style={{ fontSize: "12px" }}
                          className="fw-medium text-capitalize"
                        >
                          {faci.facility.name}
                        </span>
                      </div>
                    ))}
                </div>
                <div className="mt-3 ps-3">
                  <p className="text-secondary" style={{ fontSize: "15px" }}>
                    {details?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Result;
