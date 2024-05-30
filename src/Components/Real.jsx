import React from "react";
import { Curate } from "./Curate"; // Import your data array
import { Card } from "react-bootstrap";

const Real = ({ curate }) => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-5">
        <div>
          <h3 className="mt-3 pt-5 mx-1 text-lg-start bigvalue underline fw-semibold">
            Total Properties
          </h3>
        </div>
      </div>

      <div className="row ">
        {Curate.map((item) => (
          <div key={item.id} className="col-3  p-0 m-0">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-3 m-2 rounded-4 border border-danger">
              <img
                src={item.thumbnail}
                className="card-img-top"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
                alt="Property"
              />

              <h5 className="fw-semibold">{item.title}</h5>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                {item.feet}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Real;
