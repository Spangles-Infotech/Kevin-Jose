import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Value } from "./Value"; // Assuming Value is imported correctly
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl } from "./request";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "red",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle size={25} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "red",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle size={25}  />
    </div>
  );
};

const Exclusive = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/builder/${id}`);
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="mt-3 pt-5 mx-1 text-lg-start bigvalue underline fw-semibold">
            Recommended Land
          </h3>
        </div>
        <div>
          <p
            className="pt-5 mx-1 text-lg-end"
            style={{ color: "#D7242A", cursor: "pointer" }}
            onClick={() => navigate("/result")}
          >
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {prop
            .filter((item) => item.property_type === "land")
            .map((property, index) => (
              <div className=" py-3 m-0" key={index}>
                <div
                  onClick={() => handleViewDetails(property.id)}
                  className="card border-0 hover-box"
                  style={{ width: "100%", cursor: "pointer" }}
                  key={property.id}
                >
                  <img
                    src={property.land_properties?.land_images[0]?.image}
                    className="card-img-top rounded-top-5"
                    style={{ height: "190px" }}
                    alt={property.title}
                  />
                  <div className="p-2 pt-3 d-flex flex-column gap-2 justify-content-center m-0 border rounded-bottom-5">
                    <h6 className="card-head poppins-thin">
                      {property?.land_properties?.land_type}
                    </h6>
                    <div className="p-0 m-0 d-flex w-100 fs-6 fw-medium">
                      <div className="w-50 border-end">
                        {property.sale_price ||
                          property.rent ||
                          property.lease_amount}
                      </div>
                      <div className="ps-2 w-50">
                        {property?.land_properties?.total_area}{" "}
                        {property?.land_properties?.total_area_unit}
                      </div>
                    </div>
                    <div className="text-secondary fw-light">
                      {property.location}
                    </div>
                    <div className="p-1">
                      <button
                        className="bg-danger text-white border-0 rounded-pill py-1 text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDetails(property.id);
                        }}
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Exclusive;
