import React, { useState } from "react";
import {
  bedroom,
  category,
  commercialFilter,
  condition,
  directions,
  furnishing,
  people,
  plotFilter,
  propType,
  residentialFilter,
  subType,
  subTypeTwo,
} from "../Data";
import image1 from "../../Images/image1.png";
import image2 from "../../Images/f1.png";
import image3 from "../../Images/f2.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import AreaRange from "./AreaRange";
import PriceRange from "./PriceRange";
import { set } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const hereFor = [
    {
      fe: "Buy",
      be: "sell",
    },
    {
      fe: "Rent",
      be: "rent",
    },
    {
      fe: "Lease",
      be: "lease",
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({
    purpose: "sell",
    selectedProp: "plot",
    subType: "",
    filter: "",
    direction: "",
    role: "",
    bedroom: "",
    furnishing: "",
    condition: "",
    category: "",
    location: "",
  });

  const [minAmount, setMinAmount] = useState(100000);
  const [maxAmount, setMaxAmount] = useState(4000000);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(1000);

  console.log(selectedOptions);

  const [propertyClick, setPropertyClick] = useState(false);
  const [budgetClick, setBudgetClick] = useState(false);

  const propertyTypeClick = (type) => {
    setSelectedOptions({
      ...selectedOptions,
      selectedProp: type,
      subType: "",
      filter: "",
      direction: "",
      role: "",
      bedroom: "",
      furnishing: "",
      condition: "",
      category: "",
    });
    setPropertyClick(false);
  };

  const handleSearch = () => {
    if (
      selectedOptions.selectedProp === "plot" ||
      selectedOptions.selectedProp === "land"
    ) {
      navigate(
        `/result?property_type=${selectedOptions.selectedProp}&subtype=${selectedOptions.subType}&location=${selectedOptions.location}&you_are_here_to=${selectedOptions.purpose}&direction_facing=${selectedOptions.direction}&postedby=${selectedOptions.role}&min_area=${minArea}&max_area=${maxArea}&min_price=${minAmount}&max_price=${maxAmount}`
      );
    } else if (selectedOptions.selectedProp === "residential_property") {
      navigate(
        `/result?property_type=${selectedOptions.selectedProp}&subtype=${selectedOptions.subType}&location=${selectedOptions.location}&you_are_here_to=${selectedOptions.purpose}&bhk=${selectedOptions.bedroom}&status=${selectedOptions.furnishing}&condition=${selectedOptions.condition}&postedby=${selectedOptions.role}&min_price=${minAmount}&max_price=${maxAmount}`
      );
    } else if (selectedOptions.selectedProp === "commercial_property") {
      navigate(
        `/result?property_type=${selectedOptions.selectedProp}&subtype=${selectedOptions.subType}&location=${selectedOptions.location}&you_are_here_to=${selectedOptions.purpose}&category=${selectedOptions.category}&status=${selectedOptions.furnishing}&condition=${selectedOptions.condition}&min_price=${minAmount}&max_price=${maxAmount}`
      );
    } else {
      navigate(
        `/result?property_type=${selectedOptions.selectedProp}&location=${selectedOptions.location}`
      );
    }
  };

  return (
    <div
      className="container-fluid   p-0"
      style={{ marginTop: "5.7%", height: "60vh" }}
    >
      <div
        style={{
          backgroundImage: "url('assets/Group 2449.png')",
          backgroundSize: "cover",
          height: "370px",
        }}
      >
        <h6
          className="text-white text-center fs-1 fw-semibold"
          style={{ paddingTop: "6%" }}
        >
          Welcome back, Let’s continue Your Search
        </h6>

        {/* bar starting */}
        <div
          className="container mx-auto"
          style={{ marginTop: "7%", position: "relative", zIndex: "10" }}
        >
          <div
            className="bg-white mx-auto d-flex justify-content-evenly align-items-center p-3 fw-medium rounded-3"
            style={{
              width: "60%",
              fontSize: "20px",
              boxShadow: "inset 0 -2px 3px rgba(255, 0, 0, 0.2)",
            }}
          >
            {hereFor?.map((itm) => (
              <div
                key={itm.fe}
                className={`cursor-point ${
                  selectedOptions.purpose === itm.be ? "text-danger" : ""
                }`}
                onClick={() =>
                  setSelectedOptions({ ...selectedOptions, purpose: itm.be })
                }
              >
                {itm.fe}
              </div>
            ))}
          </div>

          {/* search */}
          <div
            className="mx-auto bg-white rounded-5"
            style={{ fontSize: "18px", width: "78%" }}
          >
            <div
              className="d-flex mx-auto align-items-center border-bottom border-2 fw-medium"
              style={{ justifyContent: "space-around", fontSize: "18px" }}
            >
              {propType?.map((type, ind) => (
                <div
                  key={ind}
                  onClick={() => propertyTypeClick(type.be)}
                  className={`text-capitalize px-2 py-3 cursor-point ${
                    selectedOptions.selectedProp === type.be
                      ? "text-danger border-bottom border-danger border-3"
                      : ""
                  }`}
                >
                  {type.name}
                </div>
              ))}
            </div>

            <div
              className="border-bottom border-end border-start rounded-bottom-5"
              style={{ boxShadow: "0 2px 3px rgba(255, 0, 0, 0.2)" }}
            >
              <div
                className="d-flex justify-content-around rounded-bottom-5 py-3"
                style={{ boxShadow: "0 2px 3px rgba(255, 0, 0, 0.2)" }}
              >
                <div className="d-flex align-items-center justify-content-center p-2 gap-3 border-end">
                  <span>
                    <img
                      src={image1}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="border-0 outline-none"
                    placeholder="Enter location"
                    style={{ outline: "none" }}
                    onChange={(e) =>
                      setSelectedOptions({
                        ...selectedOptions,
                        location: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="d-flex align-items-center justify-content-center p-2 gap-3">
                  <span>
                    <img
                      src={image2}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </span>
                  <span>Property Type</span>
                  <span
                    onClick={() => {
                      setPropertyClick(!propertyClick);
                      setBudgetClick(false);
                    }}
                  >
                    {propertyClick ? (
                      <IoIosArrowUp className="cursor-point" />
                    ) : (
                      <IoIosArrowDown className="cursor-point" />
                    )}
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-center p-2 gap-3 ps-4 border-start">
                  <span>
                    <img
                      src={image3}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </span>
                  <span>Budget</span>
                  {budgetClick ? (
                    <IoIosArrowUp
                      className="cursor-point"
                      onClick={() => {
                        setBudgetClick(!budgetClick);
                        setPropertyClick(false);
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="cursor-point"
                      onClick={() => {
                        setBudgetClick(!budgetClick);
                        setPropertyClick(false);
                      }}
                    />
                  )}

                  <button
                    className="bg-danger text-white border-0 rounded-pill px-4 py-1 fw-medium d-flex align-items-center justify-content-center gap-3"
                    style={{ fontSize: "18px" }}
                    onClick={() => handleSearch()}
                  >
                    <IoSearchOutline />
                    Search
                  </button>
                </div>
              </div>

              {/* sub options */}

              {selectedOptions.selectedProp === "plot" && (
                <div
                  className={`bg-white mt-3 d-flex justify-content-evenly align-items-center py-4 rounded-bottom-5 ${
                    propertyClick ? "d-block" : "d-none"
                  }`}
                >
                  {subType.plot.map((type, ind) => (
                    <div
                      key={ind}
                      className={`rounded-pill p-2 m-0 px-5 text-secondary cursor-point fw-medium border-1 ${
                        selectedOptions.subType === type.be
                          ? "border border-danger text-danger"
                          : "border"
                      }`}
                      onClick={() =>
                        setSelectedOptions((prevOptions) => ({
                          ...prevOptions,
                          subType: type.be,
                        }))
                      }
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {selectedOptions.selectedProp === "land" && (
                <div
                  className={`bg-white mt-3 flex-wrap d-flex justify-content-evenly px-1 gap-2 align-items-center py-4 rounded-bottom-5 ${
                    propertyClick ? "d-block" : "d-none"
                  }`}
                >
                  {subType.land.map((type, ind) => (
                    <div
                      key={ind}
                      onClick={() =>
                        setSelectedOptions((prevOptions) => ({
                          ...prevOptions,
                          subType: type.be,
                        }))
                      }
                      className={`rounded-pill p-2 m-0 px-5 text-secondary cursor-point fw-medium border-1 ${
                        selectedOptions.subType === type.be
                          ? "border border-danger text-danger"
                          : "border"
                      }`}
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {selectedOptions.selectedProp === "residential_property" && (
                <div
                  className={`bg-white mt-3 flex-wrap d-flex justify-content-evenly gap-2 align-items-center py-4 rounded-bottom-5 ${
                    propertyClick ? "d-block" : "d-none"
                  }`}
                >
                  {subType.residential_property.map((type, ind) => (
                    <div
                      onClick={() =>
                        setSelectedOptions((prevOptions) => ({
                          ...prevOptions,
                          subType: type.be,
                        }))
                      }
                      key={ind}
                      className={`rounded-pill p-2 m-0 px-5 text-secondary cursor-point fw-medium border-1 ${
                        selectedOptions.subType === type.be
                          ? "border border-danger text-danger"
                          : "border"
                      }`}
                    >
                      {type.fe}
                    </div>
                  ))}
                  {subTypeTwo.residential_property.map((type, ind) => (
                    <div
                      key={ind}
                      onClick={() =>
                        setSelectedOptions((prevOptions) => ({
                          ...prevOptions,
                          subType: type.be,
                        }))
                      }
                      className={`rounded-pill p-2 m-0 px-5 text-secondary cursor-point fw-medium border-1 ${
                        selectedOptions.subType === type.be
                          ? "border border-danger text-danger"
                          : "border"
                      }`}
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {selectedOptions.selectedProp === "commercial_property" && (
                <div
                  className={`bg-white mt-3 flex-wrap d-flex justify-content-around gap-2 align-items-center py-4 rounded-bottom-5 px-3 ${
                    propertyClick ? "d-block" : "d-none"
                  }`}
                >
                  {subType.commercial_property.map((type, ind) => (
                    <div
                      onClick={() =>
                        setSelectedOptions((prevOptions) => ({
                          ...prevOptions,
                          subType: type.be,
                        }))
                      }
                      key={ind}
                      className={`rounded-pill p-2 m-0 px-5 text-secondary cursor-point fw-medium border-1 ${
                        selectedOptions.subType === type.be
                          ? "border border-danger text-danger"
                          : "border"
                      }`}
                    >
                      {type.fe}
                    </div>
                  ))}
                  {subTypeTwo.commercial_property.map((type, ind) => (
                    <div
                      key={ind}
                      onClick={() =>
                        setSelectedOptions((prevOptions) => ({
                          ...prevOptions,
                          subType: type.be,
                        }))
                      }
                      className={`rounded-pill p-2 m-0 px-5 text-secondary cursor-point fw-medium border-1 ${
                        selectedOptions.subType === type.be
                          ? "border border-danger text-danger"
                          : "border"
                      }`}
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {/* filter options */}
              {/* plot and land */}
              {(selectedOptions.selectedProp === "plot" ||
                selectedOptions.selectedProp === "land") &&
                selectedOptions.subType !== "" &&
                propertyClick && (
                  <div className="bg-white mt-3 d-flex justify-content-evenly gap-5 align-items-center py-4 border-top rounded-bottom-5 border-2">
                    {plotFilter.map((type, ind) => (
                      <div
                        key={ind}
                        className={`border rounded-pill p-2 m-0 px-5 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 cursor-point ${
                          selectedOptions.filter === type
                            ? "border-danger searchbtn"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedOptions({
                            ...selectedOptions,
                            filter: selectedOptions.filter === type ? "" : type,
                          })
                        }
                      >
                        {type}{" "}
                        {selectedOptions.filter === type ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                    ))}
                  </div>
                )}

              {/* residential */}
              {selectedOptions.selectedProp === "residential_property" &&
                selectedOptions.subType !== "" &&
                propertyClick && (
                  <div className="bg-white mt-3 d-flex justify-content-evenly gap-5 align-items-center py-4 border-top rounded-bottom-5 border-2">
                    {residentialFilter.map((type, ind) => (
                      <div
                        key={ind}
                        className={`border rounded-pill p-2 m-0 px-3 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 cursor-point ${
                          selectedOptions.filter === type
                            ? "border-danger searchbtn"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedOptions({
                            ...selectedOptions,
                            filter: selectedOptions.filter === type ? "" : type,
                          })
                        }
                      >
                        {type}{" "}
                        {selectedOptions.filter === type ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                    ))}
                  </div>
                )}

              {/* commercial */}
              {selectedOptions.selectedProp === "commercial_property" &&
                selectedOptions.subType !== "" &&
                propertyClick && (
                  <div className="bg-white mt-3 d-flex justify-content-evenly gap-5 align-items-center py-4 border-top rounded-bottom-5 border-2">
                    {commercialFilter.map((type, ind) => (
                      <div
                        key={ind}
                        className={`border rounded-pill p-2 m-0 px-3 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 cursor-point ${
                          selectedOptions.filter === type
                            ? "border-danger searchbtn"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedOptions({
                            ...selectedOptions,
                            filter: selectedOptions.filter === type ? "" : type,
                          })
                        }
                      >
                        {type}{" "}
                        {selectedOptions.filter === type ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                    ))}
                  </div>
                )}

              {/* filter by */}
              {/* direction */}

              {selectedOptions.filter === "Facing" && propertyClick && (
                <div className="bg-white mt-3 d-flex flex-wrap justify-content-center px-3 gap-5 align-items-center py-4 pb-4 border-top border-2 rounded-bottom-5">
                  {directions.map((type, ind) => (
                    <div
                      key={ind}
                      className={`border rounded-pill p-2 m-0 px-3 text-secondary fw-medium border-1 d-flex align-items-center cursor-point justify-content-center gap-3 ${
                        selectedOptions.direction === type.value
                          ? "border-danger searchbtn"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedOptions({
                          ...selectedOptions,
                          direction: type.value,
                        })
                      }
                    >
                      {type.label}
                    </div>
                  ))}
                </div>
              )}

              {/* posted by */}
              {selectedOptions.filter === "Posted By" && propertyClick && (
                <div className="bg-white mt-3 d-flex  flex-wrap justify-content-around px- gap-3 align-items-center py-4 pb-4 border-top border-2 rounded-bottom-5">
                  {people.map((type, ind) => (
                    <div
                      key={ind}
                      onClick={() =>
                        setSelectedOptions({
                          ...selectedOptions,
                          role: type,
                        })
                      }
                      className={`border text-capitalize cursor-point rounded-pill p-2 m-0 px-5 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 ${
                        selectedOptions.role === type &&
                        "border-danger searchbtn"
                      }`}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}

              {/* Bedroom */}
              {selectedOptions.filter === "Bedroom" && propertyClick && (
                <div className="bg-white mt-3 d-flex flex-wrap justify-content-around px- gap-3 align-items-center py-4 pb-4 border-top border-2 rounded-bottom-5">
                  {bedroom.map((type, ind) => (
                    <div
                      key={ind}
                      className={`border text-capitalize cursor-point rounded-pill p-2 m-0 px-5 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 ${
                        selectedOptions.bedroom === type.be &&
                        "border-danger searchbtn"
                      }`}
                      onClick={() =>
                        setSelectedOptions({
                          ...selectedOptions,
                          bedroom: type.be,
                        })
                      }
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {/* furnishing */}
              {selectedOptions.filter === "Furnishing" && propertyClick && (
                <div className="bg-white mt-3 d-flex flex-wrap justify-content-around px- gap-3 align-items-center py-4 pb-4 border-top border-2 rounded-bottom-5">
                  {furnishing.map((type, ind) => (
                    <div
                      key={ind}
                      className={`border text-capitalize cursor-point rounded-pill p-2 m-0 px-5 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 ${
                        selectedOptions.furnishing === type.be &&
                        "border-danger searchbtn"
                      }`}
                      onClick={() =>
                        setSelectedOptions({
                          ...selectedOptions,
                          furnishing: type.be,
                        })
                      }
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {/* condition */}
              {selectedOptions.filter === "Condition" && propertyClick && (
                <div className="bg-white mt-3 d-flex flex-wrap justify-content-center px- gap-4 align-items-center py-4 pb-4 border-top border-2 rounded-bottom-5">
                  {condition.map((type, ind) => (
                    <div
                      key={ind}
                      className={`border text-capitalize cursor-point rounded-pill p-2 m-0 px-5 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 ${
                        selectedOptions.condition === type.be &&
                        "border-danger searchbtn"
                      }`}
                      onClick={() =>
                        setSelectedOptions({
                          ...selectedOptions,
                          condition: type.be,
                        })
                      }
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {/* category */}
              {selectedOptions.filter === "Category" && propertyClick && (
                <div className="bg-white mt-3 d-flex flex-wrap justify-content-around px- gap-3 align-items-center py-4 pb-4 border-top border-2 rounded-bottom-5">
                  {category.map((type, ind) => (
                    <div
                      key={ind}
                      className={`border text-capitalize cursor-point rounded-pill p-2 m-0 px-5 text-secondary fw-medium border-1 d-flex align-items-center justify-content-center gap-3 ${
                        selectedOptions.category === type.be &&
                        "border-danger searchbtn"
                      }`}
                      onClick={() =>
                        setSelectedOptions({
                          ...selectedOptions,
                          category: type.be,
                        })
                      }
                    >
                      {type.fe}
                    </div>
                  ))}
                </div>
              )}

              {/* area */}

              {propertyClick && selectedOptions.filter === "Area" && (
                <AreaRange lowArea={setMinArea} highArea={setMaxArea} />
              )}

              {/* area */}

              {budgetClick && (
                <PriceRange
                  setMaxAmount={setMaxAmount}
                  setMinAmount={setMinAmount}
                />
              )}
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-3 my-4">
            <span className=" fw-medium">Recent Searches :</span>
            <span className="border rounded-pill p-0 m-0  px-4 py-2 text-secondary" style={{fontSize:"14px"}}>Residential Plot, Chennai</span>
          </div>
        </div>
      </div>
    </div>
  );
}
