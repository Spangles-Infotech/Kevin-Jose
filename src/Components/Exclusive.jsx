import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Value } from "./Value"; // Assuming Value is imported correctly
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl } from "./request";


const Exclusive = () => {
  const navigate = useNavigate();
  const handleViewDetailss = () => {
    navigate("/result");
  };
  const handleViewDetails = (id) => {
    navigate(`builder/${id}`);
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
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="">
          <h3 className="mt-3 pt-5 mx-1 text-lg-start bigvalue underline">
            Recommended Land
          </h3>
        </div>

        <div className="">
          <p
            className=" pt-5 mx-1 text-lg-end"
            style={{ color: "#D7242A", cursor: "pointer" }}
            onClick={() => {
              handleViewDetailss();
            }}
          >
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>

      <Carousel className="carousel-value">
        {prop
         .filter(item => item.property_type === "land")
        .reduce((chunks, items, index) => {
          const chunkIndex = Math.floor(index / 4);
          if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
          chunks[chunkIndex].push(items);
          return chunks;
        }, []).map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <div className="row">
              {chunk.map((items) => (
                <div key={items.id} className="col-6 col-md-3">
                  <div className="card properties">
                    <img
                      src={items?.land_properties?.land_images[0].image}
                      style={{ width: "270px", height: "160px" }}
                      className="card-img-top"
                      alt="Property"
                    />
                    <div className="card-body">
                      <div className="">
                        <p
                          className="card-text"
                          style={{ fontSize: "10px", color: "#656565" }}
                        >
                          {items.title}
                        </p>
                        {/* <p className="card-text mx-5" style={{ fontSize: '10px', color: items.hrs === 'Ready to move' ? '#1D8F00' : '#FF0000' }}>{items.hrs}</p> */}
                      </div>
                      <div className="d-flex">
                        <p className="card-title">{items?.lease_amount}</p>
                        <span className="vr mx-3"></span>
                        <p className="card-text">{items?.land_properties?.total_area} Sqft</p>
                      </div>
                      <p className="card-text">{items.location}</p>
                      <button
                        className="btn btn-danger rounded-pill d-flex 
                      align-items-center justify-content-center"
                        onClick={()=>handleViewDetails(items?.id)}
                        style={{ alignSelf: "start" }}
                      >
                       View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Exclusive;
