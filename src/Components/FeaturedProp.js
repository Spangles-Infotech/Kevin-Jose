import React, { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl } from "./request";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./Exclusive";

const FeaturedProp = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/builder/${id}`);
  };

  const [prop, setProp] = useState([]);

  useEffect(() => {
    axios
      .get(`${Baseurl}search/`)
      .then((res) => {
        setProp(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="mt-3 pt-5 mx-1 text-lg-start bigvalue underline fw-semibold">
            Recommended Properties
          </h3>
        </div>

        <div className="pe-3">
          <p
            className="pt-5 mx-1 text-lg-end"
            style={{ color: "#D7242A", cursor: "pointer" }}
            onClick={() => {
              navigate("/result");
            }}
          >
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {prop
            .filter((item) => item.property_type !== "land")
            .map((property, index) => (
              <div className="py-2">
                <div
                  onClick={() => handleViewDetails(property.id)}
                  className="card border-0 hover-box "
                  style={{ cursor: "pointer", width: "100%" }}
                  key={property.id}
                >
                  <img
                    src={
                      property.plot_properties?.plot_images[0]?.image ||
                      property.residential_properties?.house?.house_images[0]
                        ?.image ||
                      property.residential_properties?.apartment
                        ?.apartment_images[0]?.image ||
                      property.commercial_properties?.industrialbuilding
                        ?.industrialbuilding_images[0]?.image ||
                      property.commercial_properties?.factory?.factory_images[0]
                        ?.image ||
                      property.commercial_properties?.pg_colony
                        ?.pgcolony_images[0]?.image ||
                      property.commercial_properties?.showroom
                        ?.showroom_images[0]?.image
                    }
                    className="card-img-top rounded-top-5"
                    style={{ height: "190px" }}
                    alt={property.title}
                  />
                  <div className="p-2 pt-3 d-flex flex-column gap-2 justify-content-center   m-0 hover-box-border">
                    <h6 className="card-head poppins-thin">
                      {/* plot */}
                      {property?.plot_properties?.plot_type}
                      {/* residential */}
                      {property?.residential_properties?.house?.available_bhk ||
                        property?.residential_properties?.apartment
                          ?.available_bhk}{" "}
                      {property?.residential_properties?.residential_type}
                      {/* commercial */}
                      {property?.commercial_properties?.industrialbuilding
                        ?.status ||
                        property?.commercial_properties?.house?.available_bhk ||
                        property?.commercial_properties?.factory?.status}{" "}
                      {property?.commercial_properties?.commercial_type}
                    </h6>
                    <div className="p-0 m-0 d-flex w-100 fs-6 fw-medium">
                      <div className="w-50 border-end">
                        {property.sale_price ||
                          property.rent ||
                          property.lease_amount ||
                          property?.commercial_properties?.pg_colony
                            ?.double_room_price_for_ac_display}
                      </div>
                      <div className="text-center w-50">
                        {property.property_type === "plot"
                          ? `${property.plot_properties?.total_area || ""} ${
                              property.plot_properties?.total_area_unit || ""
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
                          : property.commercial_properties?.industrialbuilding
                          ? `${
                              property.commercial_properties.industrialbuilding
                                ?.built_up_area || ""
                            } ${
                              property.commercial_properties.industrialbuilding
                                ?.built_up_area_unit || ""
                            }`
                          : property.commercial_properties?.factory
                          ? `${
                              property.commercial_properties.factory
                                ?.built_up_area || ""
                            } ${
                              property.commercial_properties.factory
                                ?.built_up_area_unit || ""
                            }`
                          : property.commercial_properties?.pg_colony
                          ? `${property.commercial_properties.pg_colony?.room_types}`
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
                        <div className="w-50 text-secondary">
                          Posted by owner
                        </div>
                      )}
                      {property.agent && (
                        <div className="w-50  text-secondary">
                          Posted by agent
                        </div>
                      )}
                      {property.builder && (
                        <div className="w-50  text-secondary">
                          Posted by builder
                        </div>
                      )}
                      <div className="text-success ps-2">
                        {property.created_at}
                      </div>
                    </div>
                  </div>
                  <button
                    className="bg-danger text-white border-0 py-3 m-0 overflow-hidden rounded-bottom-5"
                    onClick={() => handleViewDetails(property.id)}
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProp;
