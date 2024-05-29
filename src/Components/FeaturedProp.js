import React, { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl } from "./request";

const FeaturedProp = () => {
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/builder/${id}`);
  };

  const handleViewAllProjects = () => {
    navigate("/result");
  };

  const [prop, setProp] = useState([]);

  useEffect(() => {
    axios
      .get(`${Baseurl}search/`)
      .then((res) => {
        console.log(res.data.results);
        setProp(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const propertyChunks = chunkArray(prop, 3);

  return (
    <div className="container py-5">
      <div className="mt-5 pt-5 mx-5 d-flex justify-content-between flex-column flex-md-row">
        <div>
          <h3 className="mt-5 pt-5 mx-1 text-lg-start bigvalue underline">
            Recommended Properties
          </h3>
        </div>
        <div>
          <p
            className="mt-3 pt-3"
            style={{ color: "#D7242A", cursor: "pointer" }}
            onClick={handleViewAllProjects}
          >
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <div
          id="carouselExampleDark"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {propertyChunks.map((chunk, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex justify-content-evenly">
                  {chunk.map((property) => (
                    <div
                      className="card border-0 rounded-pill"
                      style={{ width: "18rem" }}
                      key={property.id}
                    >
                      <img
                        src={
                          property.plot_properties?.plot_images[0]?.image ||
                          property.residential_properties?.house
                            ?.house_images[0]?.image ||
                          property.residential_properties?.apartment
                            ?.apartment_images[0]?.image ||
                          property.commercial_properties?.industrialbuilding
                            ?.industrialbuilding_images[0]?.image ||
                          property.commercial_properties?.factory
                            ?.factory_images[0]?.image ||
                          property.commercial_properties?.pg_colony
                            ?.pgcolony_images[0]?.image
                        }
                        className="card-img-top"
                        style={{ height: "170px" }}
                        alt={property.title}
                      />
                      <div className="p-2 d-flex flex-column gap-2 justify-content-center border-end border-start m-0">
                        <h6
                          className="text-secondary"
                          style={{ fontWeight: "100", fontSize: "12px" }}
                        >
                          {/* plot */}
                          {property?.plot_properties?.plot_type}
                          {/* residential */}
                          {property?.residential_properties?.house
                            ?.available_bhk ||
                            property?.residential_properties?.apartment
                              ?.available_bhk}{" "}
                          {property?.residential_properties?.residential_type}
                          {/* commercial */}
                          {property?.commercial_properties?.industrialbuilding
                            ?.status ||
                            property?.commercial_properties?.house
                              ?.available_bhk ||
                            property?.commercial_properties?.factory
                              ?.status}{" "}
                          {property?.commercial_properties?.commercial_type}
                        </h6>
                        <div className="p-0 m-0 d-flex w-100">
                          <div className="w-25 border-end">
                            {property.sale_price ||
                              property.rent ||
                              property.lease_amount}
                          </div>
                          <div className="ps-2">
                            {property.property_type === "plot"
                              ? `${
                                  property.plot_properties?.total_area || ""
                                } ${
                                  property.plot_properties?.total_area_unit ||
                                  ""
                                }`
                              : property.residential_properties?.house
                              ? `${
                                  property.residential_properties.house
                                    ?.built_up_area || ""
                                } ${
                                  property.residential_properties.house
                                    ?.built_up_area_unit || ""
                                }`
                              : property.residential_properties?.apartment
                              ? `${
                                  property.residential_properties.apartment
                                    ?.built_up_area || ""
                                } ${
                                  property.residential_properties.apartment
                                    ?.built_up_area_unit || ""
                                }`
                              : property.commercial_properties
                                  ?.industrialbuilding
                              ? `${
                                  property.commercial_properties
                                    .industrialbuilding?.built_up_area || ""
                                } ${
                                  property.commercial_properties
                                    .industrialbuilding?.built_up_area_unit ||
                                  ""
                                }`
                              : property.commercial_properties?.factory
                              ? `${
                                  property.commercial_properties.factory
                                    ?.built_up_area || ""
                                } ${
                                  property.commercial_properties.factory
                                    ?.built_up_area_unit || ""
                                }`
                              : ""}
                          </div>
                        </div>
                        <div className="text-secondary fw-light">
                          In {property.title}, {property.location}
                        </div>
                        <div
                          className="p-0 m-0 d-flex w-100"
                          style={{ fontSize: "12px" }}
                        >
                          {property.owner && (
                            <div className="w-50 border-end text-secondary">
                              Posted by owner
                            </div>
                          )}
                          {property.agent && (
                            <div className="w-50 border-end text-secondary">
                              Posted by agent
                            </div>
                          )}
                          {property.builder && (
                            <div className="w-50 border-end text-secondary">
                              Posted by builder
                            </div>
                          )}
                          <div className="text-success ps-2">
                            {property.created_at}
                          </div>
                        </div>
                      </div>
                      <button
                        className="bg-danger text-white border-0 py-2 m-0 overflow-hidden rounded-bottom"
                        onClick={() => handleViewDetails(property.id)}
                      >
                        View details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleDark"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleDark"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProp;
