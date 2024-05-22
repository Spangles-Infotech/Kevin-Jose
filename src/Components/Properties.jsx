import React, { useEffect, useState } from "react";
import { Data } from "./Data";
import p1 from "../Images/p1.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl } from "./request";

const Properties = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate( `/builder/${id}`);
  };

  const handleViewDetailss = () => {
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
            onClick={handleViewDetailss}
          >
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <div
          className="carousel slide"
          id="carouselExampleDark"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {prop
            .filter(item => item.property_type !== "land")
              .reduce((chunks, item, index) => {
                const chunkIndex = Math.floor(index / 3);
                if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
                chunks[chunkIndex].push(item);
                return chunks;
              }, [])
              .map((chunk, chunkIndex) => (
                <div
                  key={chunkIndex}
                  className={`carousel-item ${
                    chunkIndex === 0 ? "active" : ""
                  }`}
                >
                  <div className="row row-cols-1 row-cols-md-3 g-4 g-md-3">
                    {chunk.map((item) => (
                      <div key={item.id} className="col">
                        <div className="card properties">
                          {/* plot image */}
                          {item.property_type === "plot" && (
                            <img
                              src={item?.plot_properties?.plot_images[0].image}
                              className="card-img-top car-img"
                              alt="Property"
                            />
                          )}

                              {/* residential image */}
                              {item.property_type === "residential" && (
                            <img
                              src={
                                item?.residential_properties?.house
                                  ?.house_images[0].image
                              }
                              className="card-img-top car-img"
                              alt="Property"
                            />
                          )}

                          {/* commercial image */}
                          {item.property_type === "commercial" && (
                            <img
                              src={
                                item?.commercial_properties?.showroom
                                  ?.showroom_images[0].image
                              }
                              className="card-img-top car-img"
                              alt="Property"
                            />
                          )}

                          <div className="card-body">
                            {/* plot */}
                            {item?.property_type === "plot" && (
                              <>
                                <p className="card-text">
                                  {item?.plot_properties?.total_area} Sqft{" "}
                                  {item?.plot_properties?.plot_type} for {" "}
                                  {item?.you_are_here_to}
                                </p>
                                <div className="d-flex">
                                  <p className="card-title">
                                    {item.sale_price} 
                                  </p>
                                  <span className="vr mx-3"></span>
                                  <p className="card-text">
                                    {item?.plot_properties?.total_area} Sqft
                                  </p>
                                </div>
                                <p className="card-text">
                                  {item?.title}, {item?.location}
                                </p>
                                <div className="d-flex">
                                  {item?.owner && (
                                    <p className="card-text">Posted by owner</p>
                                  )}
                                  {item?.agent && (
                                    <p className="card-text">Posted by agent</p>
                                  )}
                                  {item?.builder && (
                                    <p className="card-text">
                                      Posted by builder
                                    </p>
                                  )}
                                  <p
                                    className="card-text mx-3"
                                    style={{ color: "#1D8F00" }}
                                  >
                                    {item.created_at}
                                  </p>
                                </div>
                              </>
                            )}

                               {/* residential */}
                               {item?.property_type === "residential" && (
                              <>
                                <p className="card-text">
                                  {item?.residential_properties?.house?.built_up_area} Sqft{" "}
                                  {item?.residential_properties?.residential_type} for {" "}
                                  {item?.you_are_here_to}
                                </p>
                                <div className="d-flex">
                                  <p className="card-title">
                                    {item.sale_price} 
                                  </p>
                                  <span className="vr mx-3"></span>
                                  <p className="card-text">
                                    {item?.residential_properties?.house?.built_up_area} Sqft
                                  </p>
                                </div>
                                <p className="card-text">
                                  {item?.title}, {item?.location}
                                </p>
                                <div className="d-flex">
                                  {item?.owner && (
                                    <p className="card-text">Posted by owner</p>
                                  )}
                                  {item?.agent && (
                                    <p className="card-text">Posted by agent</p>
                                  )}
                                  {item?.builder && (
                                    <p className="card-text">
                                      Posted by builder
                                    </p>
                                  )}
                                  <p
                                    className="card-text mx-3"
                                    style={{ color: "#1D8F00" }}
                                  >
                                    {item.created_at}
                                  </p>
                                </div>
                              </>
                            )}

                            {/* commercial */}

                            {item?.property_type === "commercial" && (
                              <>
                                <p className="card-text">
                                  {item?.commercial_properties?.showroom.built_up_area} Sqft{" "}
                                  {item?.commercial_properties?.commercial_type} for {" "}
                                  {item?.you_are_here_to}
                                </p>
                                <div className="d-flex">
                                  <p className="card-title">
                                    {item.sale_price} 
                                    {item?.rent} 
                                    {item?.lease_amount} 
                                  </p>
                                  <span className="vr mx-3"></span>
                                  <p className="card-text">
                                    {item?.commercial_properties?.showroom?.built_up_area} Sqft
                                  </p>
                                </div>
                                <p className="card-text">
                                  {item?.title}, {item?.location}
                                </p>
                                <div className="d-flex">
                                  {item?.owner && (
                                    <p className="card-text">Posted by owner</p>
                                  )}
                                  {item?.agent && (
                                    <p className="card-text">Posted by agent</p>
                                  )}
                                  {item?.builder && (
                                    <p className="card-text">
                                      Posted by builder
                                    </p>
                                  )}
                                  <p
                                    className="card-text mx-3"
                                    style={{ color: "#1D8F00" }}
                                  >
                                    {item.created_at}
                                  </p>
                                </div>
                              </>
                            )}

                            <button
                              type="button"
                              className="btn btn-danger w-100"
                              onClick={()=>handleViewDetails(item?.id)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
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
            className="carousel-control-next prop"
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

export default Properties;
