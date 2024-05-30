import React from "react";
import Carousel from "react-bootstrap/Carousel";
import T1 from "../Images/T1.png";
import ReactStars from "react-rating-star-with-type";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import c1 from "../Images/c1 (1).png";
import c2 from "../Images/c1 (2).png";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray",
        zIndex: 1,
        fontSize: "10px",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack size={50} />
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
        color: "gray",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <IoIosArrowForward size={50} />
    </div>
  );
};

const Enquiry = () => {
  const testmonialData = [
    {
      image: T1,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      count: "5",
      name: "Jeo James ",
      type: "Student",
    },
    {
      image: T1,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      count: "3",
      name: "Nikhil",
      type: "Student",
    },
    {
      image: T1,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      count: "4",
      name: "Jose varghese",
      type: "Student",
    },
  ];

  const [star, setStar] = useState(3);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const onChange = (newValue) => {
    setStar(newValue);
  };
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between mb-5">
        <div>
          <h3 className="mt-3 pt-5 mx-1 text-lg-start bigvalue underline fw-semibold">
            Testimonials
          </h3>
        </div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {testmonialData.map((itm, indx) => (
            <div className=" p-0 m-0" key={indx}>
              <div
                className="mx-auto  py-4 p-2 m-0   rounded-5 shadow my-3 position-relative"
                style={{ width: "80%" }}
              >
                {/* <span className="d-flex flex-column align-items-start p-0 m-0 position-relative"> */}
                <img src={c2} className="position-absolute " />
                <img
                  src={c1}
                  className="position-absolute "
                  style={{ bottom: "0", right: "5px" }}
                />
                {/* </span> */}
                <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                  <div>
                    <img
                      src={itm.image}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <p
                    className="text-center w-75 mt-1"
                    style={{ fontSize: "18px", fontWeight: "200" }}
                  >
                    {itm.content}
                  </p>
                  <div className="p-0 m-0">
                    <ReactStars
                      count={5}
                      onChange={onChange}
                      size={24}
                      activeColor="orange"
                      value={itm.count}
                    />
                  </div>
                  <h6 className="fw-bold">{itm.name}</h6>
                  <p style={{ fontSize: "12px" }} className="fw-medium">
                    {itm.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Enquiry;
