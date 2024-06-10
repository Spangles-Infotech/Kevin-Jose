import React, { useEffect } from "react";
import circle from "../Images/home.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";

const Myproperties = () => {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  const [myProperty, setMyProperty] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get(`${Baseurl}myproperties`, UserConfig)
      .then((res) => {
        console.log(res.data.results);
        setMyProperty(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "..............";
  };

  if (myProperty?.length === 0) {
    return (
      <>
        <Navbar />

        <div
          className="d-flex flex-column justify-content-center align-items-center py-5"
          style={{ marginTop: "10%" }}
        >
          <h2 className="mb-4">No properties posted</h2>
          <p className="text-muted">
            There are currently no properties posted.
          </p>
          <button
            className="btn btn-outline-danger"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          {/* You can add additional content or buttons here */}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="w-100 mx-auto" style={{ marginTop: "9%" }}>
        <div className="container py-2">
          <h2 className="fw-medium"> My Properties</h2>
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
                {/* <img
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
                  className="rounded-4 h-full"
                  style={{ height: "400px", width: "95%" }}
                /> */}
                <img
                  src={
                    details?.plot_properties?.plot_images?.[0]?.image ??
                    details?.land_properties?.land_images?.[0]?.image ??
                    details?.residential_properties?.apartment
                      ?.apartment_images?.[0]?.image ??
                    details?.residential_properties?.house?.house_images?.[0]
                      ?.image ??
                    details?.commercial_properties?.showroom
                      ?.showroom_images?.[0]?.image ??
                    details?.commercial_properties?.industrialbuilding
                      ?.industrialbuilding_images?.[0]?.image ??
                    details?.commercial_properties?.service_apartment
                      ?.service_apartment_images?.[0]?.image ??
                    details?.commercial_properties?.factory?.factory_images?.[0]
                      ?.image ??
                    details?.commercial_properties?.pg_colony
                      ?.pgcolony_images?.[0]?.image ??
                    " " // fallback image path
                  }
                  alt="image"
                  className="rounded-4 h-full"
                  style={{ height: "400px", width: "95%" }}
                />
              </div>

              <div className="col-7  p-0 m-0 mx-auto">
                <div>
                  {details.approved ? (
                    <button
                      type="button"
                      className="border-0 p-1 px-2 rounded-1 text-white bg-success"
                      style={{ fontSize: "12px" }}
                    >
                      Published
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="border-0 p-1 px-2 rounded-1 text-white"
                      style={{
                        fontSize: "12px",
                        backgroundColor: "rgba(215, 103, 36, 1)",
                      }}
                    >
                      On Progress
                    </button>
                  )}
                </div>
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

                      {/* commercial --> service*/}
                      {details?.commercial_properties?.service_apartment && (
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

                    {/* pg */}
                    {details?.commercial_properties?.pg_colony && (
                      <h6 className="pt-3">
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
                      {details?.commercial_properties?.pg_colony && 
                      <span>{details?.commercial_properties?.pg_colony?.single_room_price_for_ac_display} <span className="fs-6">onwards</span></span>
                      }
                    </h1>
                    {details?.you_are_here_to === "sell" && (
                      <p> {details?.sale_price_per_sqft} per sqft</p>
                    )}
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
                            details?.commercial_properties
                              ?.pg_colony?.total_floors ||
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
                  <p
                    className="text-secondary fw-light"
                    style={{ fontSize: "13px" }}
                  >
                    {truncateText(details?.description, 150)}
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

export default Myproperties;
