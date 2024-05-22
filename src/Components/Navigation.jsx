import React from "react";
import background from "../Images/bg.jpg";
import image1 from "../Images/image1.png";
import image2 from "../Images/f1.png";
import image3 from "../Images/f2.png";
import { Row, Col, Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Dropdown, Card, DropdownToggle } from "react-bootstrap";
import { useState } from "react";
import Budget from "./Budget";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RealBudget from "./realBudjet";
 
const Navigation = () => {
  const navigate = useNavigate();

  const navStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "350px", // Adjust height as needed
    marginTop: "85px",
  };
  const buttonStyle = {
    backgroundColor: "#FFFFFF", // Set background color to white
    color: "#656565", // Set text color
    border: "1px solid #C5C5C5", // Set border color and style
    margin: "0 0.5rem", // Adjust margin as needed
    // Add other styles as needed
  };
  const dropdownToggle = {
    border: "none",
  };
  const navbarStyle = {
    backgroundColor: "#FFFFFF4D",

    width: "100%",
  };

  const navLinkStyle = {
    color: "#000000",
  };

  const containerbudget = {};

  const navLinkHoverStyle = {
    Color: "#D7242A",
    transition: "background-color 0.3s ease",
  };
  const handleMouseEnter = (e) => {
    e.target.style.Color = navLinkHoverStyle.Color;
    e.target.style.color = navLinkHoverStyle.Color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = navLinkStyle.color;
  };

  const activeLinkStyle = {
    color: "#D7242A",
  };

  const [color, setcolor] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [plott, setPlott] = useState("");
  const [facing, setFacing] = useState("");
  const [residential, setResidential] = useState("");
  const [Bedroom, setBedroom] = useState("");
  const [Commercial, setCommercial] = useState("");
  const [Category, setCategory] = useState("");
  const [pgrent, setPgrent] = useState(false);
  const [Gender, setGender] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeLink, setActiveLink] = useState("");
  const [price, setprice] = useState(false);
  const [link, setLink] = useState("Buy"); // State to track active link
  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(dropdown);
    setActiveLink(dropdown);
    setPropertyType("");
    setPlott("");
    setFacing("");
    setCategory("");
    setCommercial("");
    setBedroom("");
    setResidential("");
    setPgrent("");
    setGender("");
    setSelectedOption("");
    setprice(false);
  };
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");
  const [tenants, setTenants] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(500000);
  const [furnishing, setFurnishing] = useState("");
  const [condition, setCondition] = useState("");
  console.log(activeDropdown); //type of prop
  // console.log(plott); //plot type
  // console.log(selectedOption); //direction
  // console.log(postedBy); //owner
  // console.log(minPrice); //minprice
  // console.log(maxPrice); //maxPrice
  // console.log(minArea); //minprice
  // console.log(maxArea); //maxPrice

  // residential

  // console.log(selectedOption);
  // console.log(residential);
  // console.log(furnishing);
  // console.log(condition);
  // console.log(postedBy); //owner
  // console.log(activeDropdown); //type of prop

  // commercial
  console.log(activeDropdown); //type of prop
  console.log(color); //subtype
  console.log(selectedOption); //category
  console.log(furnishing); //condition
  console.log(condition);

  // hoste
  console.log(Gender);
  console.log(tenants);

  const handleSearch = () => {
    if (activeDropdown === "plot" || activeDropdown === "land") {
      navigate(
        `/result?property_type=${activeDropdown}&subtype=${plott}&location=${location}&direction_facing=${selectedOption}&postedby=${postedBy}&min_area=${minArea}&max_area=${maxArea}&min_price=${minPrice}&max_price=${maxPrice}`
      );
    } else if (activeDropdown === "residential") {
      navigate(
        `/result?property_type=${activeDropdown}&subtype=${residential}&location=${location}&bhk=${selectedOption}&status=${furnishing}&condition=${condition}&postedby=${postedBy}&min_price=${minPrice}&max_price=${maxPrice}`
      );
    } else if (activeDropdown === "commercial") {
      navigate(
        `/result?property_type=${activeDropdown}&subtype=${color}&location=${location}&category=${selectedOption}&status=${furnishing}&condition=${condition}&min_price=${minPrice}&max_price=${maxPrice}`
      );
    }else{
      navigate(`/result?property_type=${activeDropdown}&location=${location}`)
    }
  };

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const handlePropertyTypeClick = (type) => {
    setPropertyType(type);
    setprice(false);
  };
  const handleButtonClick = (items) => {
    setPlott(items);
  };

  const handleplot = (plot) => {
    setFacing(plot);
  };
  const handleplotss = (value) => {
    setBedroom(value);
  };

  const handleButtonres = (button) => {
    setResidential(button);
  };
  const handlecommercial = (handle) => {
    setcolor(handle);
    if (handle === "PG_home" || handle === "PG_hostel") {
      setPgrent(false);
      setCommercial(false);
    } else {
      setPgrent(false);
      setCommercial(true);
    }
  };
  const handleplotcommercial = (data) => {
    setCategory(data);
  };

  const handleGender = (Gender) => {
    setGender(Gender);
  };
  const handleBudget = (budget) => {
    setprice((prevPrice) => !prevPrice);
    setPropertyType(false);
    setActiveDropdown(false);
  };

  const handleLinkClick = (link) => {
    setLink(link);
  };
  return (
    <div className="bg-image" style={navStyle}>
      <nav className="navbar navbar-expand-lg ">
        <div className="" style={navbarStyle}>
          <ul className="navbar-nav d-flex flex-row justify-content-between mx-5">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={link === "Buy" ? activeLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick("Buy")}
              >
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Rent"
                className="nav-link"
                style={link === "Rent" ? activeLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick("Rent")}
              >
                Rent
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Lease"
                className="nav-link"
                style={link === "Lease" ? activeLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick("Lease")}
              >
                Lease
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Help"
                className="nav-link"
                style={link === "Help" ? activeLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick("Help")}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="text-center my-5 text-white-50">
        Welcome back, Let’s continue Your Search{" "}
      </h1>

      {/* search */}

      <div className="card bg-light text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right">
        {/* Navbar for search */}
        <nav className="navbar navbar-expand-lg">
          <div
            className="container"
            style={{ backgroundColor: "#FFFFFF4D", width: "100%" }}
          >
            <ul className="navbar-nav d-flex flex-row justify-content-center justify-content-between w-md-100 w-100 value">
              <li className="nav-item ">
                <a
                  className={`nav-link ${
                    activeLink === "plot" ? "design" : ""
                  }`}
                  style={{ color: "#000000" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDropdownClick("plot")}
                >
                  Plot
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "land" ? "design" : ""
                  }`}
                  style={{ color: "#000000" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDropdownClick("land")}
                >
                  Land
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "residential" ? "design" : ""
                  }`}
                  style={{ color: "#000000" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDropdownClick("residential")}
                >
                  Residential
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "commercial" ? "design" : ""
                  }`}
                  style={{ color: "#000000" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDropdownClick("commercial")}
                >
                  Commercial
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <hr className="dropdown-divider" />

        <hr />
        <div className="container">
          <div className="row text-black justify-content-between">
            <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
              <a className="" href="/">
                <img className="img-fluid me-2  " src={image1} alt="Logo" />
              </a>
              <input
                type="text"
                className="border-0 w-50"
                placeholder="  Enter Location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                style={{ outline: "0", background: "#FFFFFF4D" }}
              />
              {/* <span className="ms-2">Chennai</span> */}
              <div className="vertical-line"></div>
            </div>

            <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
              <a className="" href="/">
                <img className="img-fluid me-2" src={image2} alt="Logo" />
              </a>
              <span
                className="ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => handlePropertyTypeClick("Property Type")}
              >
                Property Type <IoIosArrowDown />
              </span>
              <div className="vertical-line"></div>
            </div>

            <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
              <a className="" href="/">
                <img className="img-fluid me-2" src={image3} alt="Logo" />
              </a>
              <span
                className="ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => handleBudget("Budget")}
              >
                Budget <IoIosArrowDown />
              </span>
            </div>

            <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-danger rounded-pill py-3 w-100 w-md-50"
                onClick={() => handleSearch("Budget")}
              >
                <IoSearchOutline />
                <span className="ms-2">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {price && !propertyType && (
        <Card
          className=" text-dark custom-border-radius mx-auto w-50 right"
          style={{ backgroundColor: "white", zIndex: 1 }}
        >
          <RealBudget
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </Card>
      )}

      {/* plot */}
      {propertyType && (
        <>
          {activeDropdown === "plot" && (
            <div
              className="card bg-light text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
              style={{ backgroundColor: "white", zIndex: 1 }}
            >
              <div className=" d-flex flex-wrap gap-2 mx-3 my-3">
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill  ${
                    plott === "residential_plot" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("residential_plot")}
                >
                  Residential plot
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "commercial_plot" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("commercial_plot")}
                >
                  Commercial Plot
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "industrial_plot" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("industrial_plot")}
                >
                  Industrial Plot
                </Button>

                <div></div>
              </div>
            </div>
          )}
          {/* land */}
          {activeDropdown === "land" && (
            <div
              className="card bg-light text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
              style={{ backgroundColor: "white", zIndex: 1 }}
            >
              <div className="d-flex flex-wrap gap-3 mx-3 my-3 ">
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "residential_land" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("residential_land")}
                >
                  Residential Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "industrial_land" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("industrial_land")}
                >
                  Industrial Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "agricultural_land" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("agricultural_land")}
                >
                  Agricultural Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "plantation" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("plantation")}
                >
                  Plantation
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "estate" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("estate")}
                >
                  Estate
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "farm_land" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("farm_land")}
                >
                  Farm Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    plott === "furnishing" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonClick("furnishing")}
                >
                  Furnishing
                </Button>
              </div>
            </div>
          )}
          {/* residential */}
          {activeDropdown === "residential" && (
            <div
              className="card bg-light text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
              style={{ backgroundColor: "white", zIndex: 1 }}
            >
              <div className="d-flex  flex-wrap gap-2 my-2 mx-2">
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "house" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("house")}
                >
                  House
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "villa" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("villa")}
                >
                  Villa
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "bungalow" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("bungalow")}
                >
                  Bungalow
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "duplex_house" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("duplex_house")}
                >
                  Duplex House
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "row_house" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("row_house")}
                >
                  Row House
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "pent_house" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("pent_house")}
                >
                  Pant House
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "farm_house" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("farm_house")}
                >
                  Farm house
                </Button>

                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "flat" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("flat")}
                >
                  Flat
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "apartment" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("apartment")}
                >
                  Apartment
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "builder_floor_apartment" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("builder_floor_apartment")}
                >
                  BuilderFloor Apartment
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "multi_storey_apartment" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("multi_storey_apartment")}
                >
                  Multi storey Apartment
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "luxury_apartment" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("luxury_apartment")}
                >
                  Luxury Apartment
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    residential === "studio_apartment" ? "rest1" : ""
                  }`}
                  onClick={() => handleButtonres("studio_apartment")}
                >
                  Studio Apartment
                </Button>
              </div>
            </div>
          )}

          {/* commercial */}

          {activeDropdown === "commercial" && (
            <div
              className="card bg-light text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
              style={{ backgroundColor: "white", zIndex: 1 }}
            >
              <div className="d-flex flex-wrap gap-2 my-2 mx-2">
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "office" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("office")}
                >
                  Office
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "shop" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("shop")}
                >
                  Shop
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "showroom" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("showroom")}
                >
                  Showroom
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "godown" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("godown")}
                >
                  Godown
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "shed" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("shed")}
                >
                  Shed
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "co_working_space" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("co_working_space")}
                >
                  Co-working Space
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "commercial_complex" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("commercial_complex")}
                >
                  Commercial complex
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "industrialbuilding" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("industrialbuilding")}
                >
                  Industrial Building
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "industrial_shed" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("industrial_shed")}
                >
                  Industrial shed
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "factory" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("factory")}
                >
                  Factory
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "service_apartment" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("service_apartment")}
                >
                  Service Apartment
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "PG_home" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("PG_home")}
                >
                  PG Home
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    color === "PG_hostel" ? "rest1" : ""
                  }`}
                  onClick={() => handlecommercial("PG_hostel")}
                >
                  PG Hostel
                </Button>
              </div>
            </div>
          )}

          {/* plot */}
          {activeDropdown === "plot" && plott && (
            <>
              <Card
                className="text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
                style={{ backgroundColor: "white", zIndex: 1 }}
              >
                <Card.Body>
                  <div className="d-flex gap-3 flex-row">
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        facing === "Facing" ? "rest1" : ""
                      }`}
                      onClick={() => handleplot("Facing")}
                    >
                      Facing{" "}
                      {facing === "Facing" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        facing === "PostedBy" ? "rest1" : ""
                      }`}
                      onClick={() => handleplot("PostedBy")}
                    >
                      PostedBy{" "}
                      {facing === "PostedBy" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        facing === "Area" ? "rest1" : ""
                      }`}
                      onClick={() => handleplot("Area")}
                    >
                      Area{" "}
                      {facing === "Area" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              {facing === "Facing" && (
                <Card
                  className="text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
                  style={{ backgroundColor: "white", zIndex: 1 }}
                >
                  <Card.Body>
                    <div className="d-flex flex-wrap">
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "north" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("north")}
                      >
                        North
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "east" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("east")}
                      >
                        East
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "south" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("south")}
                      >
                        South
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "west" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("west")}
                      >
                        West
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}
              {facing === "PostedBy" && (
                <Card
                  className="text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
                  style={{ backgroundColor: "white", zIndex: 1 }}
                >
                  <Card.Body>
                    <div className="d-flex flex-wrap">
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          postedBy === "owner" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("owner")}
                      >
                        Owner
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          postedBy === "agent" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("agent")}
                      >
                        Agent
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          postedBy === "builder" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("builder")}
                      >
                        Builder
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "Plot Developer" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("Plot Developer")}
                      >
                        Plot Developer
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}

              {facing === "Area" && (
                <Card
                  className="text-dark custom-border-radius mx-auto w-100 mx-5 right"
                  style={{ backgroundColor: "white", zIndex: 2 }}
                >
                  <Budget
                    name
                    minArea={minArea}
                    setMinArea={setMinArea}
                    maxArea={maxArea}
                    setMaxArea={setMaxArea}
                  />
                </Card>
              )}
            </>
          )}

          {/* land */}
          {activeDropdown === "land" && plott && (
            <>
              <Card
                className="text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
                style={{ backgroundColor: "white", zIndex: 1 }}
              >
                <Card.Body>
                  <div className="d-flex gap-3 flex-row">
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        facing === "Facing" ? "rest1" : ""
                      }`}
                      onClick={() => handleplot("Facing")}
                    >
                      Facing{" "}
                      {facing === "Facing" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        facing === "PostedBy" ? "rest1" : ""
                      }`}
                      onClick={() => handleplot("PostedBy")}
                    >
                      PostedBy{" "}
                      {facing === "PostedBy" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        facing === "Area" ? "rest1" : ""
                      }`}
                      onClick={() => handleplot("Area")}
                    >
                      Area{" "}
                      {facing === "Area" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              {facing === "Facing" && (
                <Card
                  className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                  style={{ backgroundColor: "white", zIndex: 2 }}
                >
                  <Card.Body>
                    <div className="d-flex flex-wrap">
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "north" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("north")}
                      >
                        North
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "east" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("east")}
                      >
                        East
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "south" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("south")}
                      >
                        South
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          selectedOption === "west" ? "rest1" : ""
                        }`}
                        onClick={() => handleClick("west")}
                      >
                        West
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}
              {facing === "PostedBy" && (
                <Card
                  className="text-dark custom-border-radius mx-auto w-100 mx-5 right"
                  style={{ backgroundColor: "white", zIndex: 2 }}
                >
                  <Card.Body>
                    <div className="d-flex flex-wrap">
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          postedBy === "owner" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("owner")}
                      >
                        Owner
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          postedBy === "agent" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("agent")}
                      >
                        Agent
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          postedBy === "builder" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("builder")}
                      >
                        Builder
                      </Button>
                      <Button
                        type="button"
                        className={`btn btn-outline-light me-2 customplot rounded-pill ${
                          postedBy === "Plot Developer" ? "rest1" : ""
                        }`}
                        onClick={() => setPostedBy("Plot Developer")}
                      >
                        Plot Developer
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}

              {facing === "Area" && (
                <Card
                  className="text-dark custom-border-radius mx-auto  w-100 right"
                  style={{ backgroundColor: "white", zIndex: 2 }}
                >
                  <Budget
                    name
                    minArea={minArea}
                    setMinArea={setMinArea}
                    maxArea={maxArea}
                    setMaxArea={setMaxArea}
                  />
                </Card>
              )}
            </>
          )}

          {/* residential */}
          {activeDropdown === "residential" && (
            <>
              {residential && (
                <>
                  <Card
                    className="text-dark custom-border-radius mx-auto pb-5 w-100 mx-5 right"
                    style={{ backgroundColor: "white", zIndex: 1 }}
                  >
                    <Card.Body>
                      <div className="d-flex column-gap-3">
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Bedroom === "Bedroom" ? "rest1" : ""
                          }`}
                          onClick={() => handleplotss("Bedroom")}
                        >
                          Bedroom{" "}
                          {Bedroom === "Bedroom" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Bedroom === "Furnishing" ? "rest1" : ""
                          }`}
                          onClick={() => handleplotss("Furnishing")}
                        >
                          Furnishing
                          {Bedroom === "Furnishing" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Bedroom === "Condition" ? "rest1" : ""
                          }`}
                          onClick={() => handleplotss("Condition")}
                        >
                          Condition
                          {Bedroom === "Condition" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Bedroom === "Posted By" ? "rest1" : ""
                          }`}
                          onClick={() => handleplotss("Posted By")}
                        >
                          Posted By
                          {Bedroom === " Posted By" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  {Bedroom === "Bedroom" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 2 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "1BHK" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("1BHK")}
                          >
                            1 BHK
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "2BHK" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("2BHK")}
                          >
                            2 BHK
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "3BHK" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("3BHK")}
                          >
                            3 BHK
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "4 BHK" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("4BHK")}
                          >
                            4 BHK
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Bedroom === "Furnishing" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 2 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "fully_furnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("fully_furnished")}
                          >
                            Fully Furnished
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "semi_furnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("semi_furnished")}
                          >
                            Semi Furnished
                          </Button>

                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "unfurnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("unfurnished")}
                          >
                            Un Furnished
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Bedroom === "Condition" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 2 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              condition === "ready_to_move" ? "rest1" : ""
                            }`}
                            onClick={() => setCondition("ready_to_move")}
                          >
                            Ready to Move
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              condition === "under_construction" ? "rest1" : ""
                            }`}
                            onClick={() => setCondition("under_construction")}
                          >
                            Under Construction
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Bedroom === "Posted By" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 2 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              postedBy === "owner" ? "rest1" : ""
                            }`}
                            onClick={() => setPostedBy("owner")}
                          >
                            Owner
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              postedBy === "Agent" ? "rest1" : ""
                            }`}
                            onClick={() => setPostedBy("agent")}
                          >
                            Agent
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              postedBy === "builder" ? "rest1" : ""
                            }`}
                            onClick={() => setPostedBy("builder")}
                          >
                            Builder
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              postedBy === "Plot Developer" ? "rest1" : ""
                            }`}
                            onClick={() => setPostedBy("Plot Developer")}
                          >
                            Plot Developer
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                </>
              )}
            </>
          )}

          {/* commercial */}

          {activeDropdown === "commercial" && (
            <>
              {Commercial && (
                <>
                  <Card
                    className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                    style={{ backgroundColor: "white", zIndex: 1 }}
                  >
                    <Card.Body>
                      <div className="d-flex flex-wrap">
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Category === "Category" ? "rest1" : ""
                          }`}
                          onClick={() => handleplotcommercial("Category")}
                        >
                          Category{" "}
                          {Category === "Category" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Category === "Furnishing" ? "rest1" : ""
                          }`}
                          onClick={() => handleplotcommercial("Furnishing")}
                        >
                          Furnishing{" "}
                          {Category === "Furnishing" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Category === "Condition" ? "rest1" : ""
                          }`}
                          onClick={() => handleplotcommercial("Condition")}
                        >
                          Condition{" "}
                          {Category === "Condition" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  {Category === "Category" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 1 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "new" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("new")}
                          >
                            New
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "resale" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("resale")}
                          >
                            Resale
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Category === "Furnishing" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 2 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "fully_furnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("fully_furnished")}
                          >
                            Fully Furnished
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "semi_furnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("semi_furnished")}
                          >
                            Semi Furnished
                          </Button>

                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "unfurnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("unfurnished")}
                          >
                            Un Furnished
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Category === "Condition" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 1 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              condition === "ready_to_move" ? "rest1" : ""
                            }`}
                            onClick={() => setCondition("ready_to_move")}
                          >
                            Ready to Move
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              condition === "under_construction" ? "rest1" : ""
                            }`}
                            onClick={() => setCondition("under_construction")}
                          >
                            Under Construction
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                </>
              )}
            </>
          )}
          {activeDropdown === "commercial" && (
            <>
              {pgrent && (
                <>
                  <Card
                    className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                    style={{ backgroundColor: "white", zIndex: 1 }}
                  >
                    <Card.Body>
                      <div className="d-flex flex-wrap gap-3">
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Gender === "Gender" ? "rest1" : ""
                          }`}
                          onClick={() => handleGender("Gender")}
                        >
                          Gender{" "}
                          {Gender === "Gender" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Gender === "Tenants" ? "rest1" : ""
                          }`}
                          onClick={() => handleGender("Tenants")}
                        >
                          Tenants{" "}
                          {Gender === "Tenants" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Gender === "Furnishing" ? "rest1" : ""
                          }`}
                          onClick={() => handleGender("Furnishing")}
                        >
                          Furnishing{" "}
                          {Gender === "Furnishing" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Gender === "Rooms" ? "rest1" : ""
                          }`}
                          onClick={() => handleGender("Rooms")}
                        >
                          Rooms{" "}
                          {Gender === "Rooms" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                        <Button
                          type="button"
                          className={`btn btn-outline-light me-2 customplot rounded-pill ${
                            Gender === "Sharing" ? "rest1" : ""
                          }`}
                          onClick={() => handleGender("Sharing")}
                        >
                          Sharing{" "}
                          {Gender === "Sharing" ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  {Gender === "Gender" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 1 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              Gender === "boys" ? "rest1" : ""
                            }`}
                            onClick={() => setGender("boys")}
                          >
                            {" "}
                            Male
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              Gender === "girls" ? "rest1" : ""
                            }`}
                            onClick={() => setGender("girls")}
                          >
                            Female
                          </Button>

                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              Gender === "transgender" ? "rest1" : ""
                            }`}
                            onClick={() => setGender("transgender")}
                          >
                            Transgender
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              Gender === "Both" ? "rest1" : ""
                            }`}
                            onClick={() => setGender("both")}
                          >
                            Both
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Gender === "Tenants" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 1 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              tenants === "students" ? "rest1" : ""
                            }`}
                            onClick={() => setTenants("students")}
                          >
                            Students
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              tenants === "professionals" ? "rest1" : ""
                            }`}
                            onClick={() => setTenants("professionals")}
                          >
                            Professionals
                          </Button>

                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              tenants === "both" ? "rest1" : ""
                            }`}
                            onClick={() => setTenants("both")}
                          >
                            Both
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Gender === "Furnishing" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 2 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "fully_furnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("fully_furnished")}
                          >
                            Fully Furnished
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "semi_furnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("semi_furnished")}
                          >
                            Semi Furnished
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              furnishing === "unfurnished" ? "rest1" : ""
                            }`}
                            onClick={() => setFurnishing("unfurnished")}
                          >
                            Un Furnished
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Gender === "Rooms" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 1 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              rooms === "A/C_rooms" ? "rest1" : ""
                            }`}
                            onClick={() => setRooms("A/C_rooms")}
                          >
                            A/c
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              rooms === "Non_A/C_rooms" ? "rest1" : ""
                            }`}
                            onClick={() => setRooms("Non_A/C_rooms")}
                          >
                            non A/C
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              rooms === "A/C_&_Non_A/C_rooms" ? "rest1" : ""
                            }`}
                            onClick={() => setRooms("A/C_&_Non_A/C_rooms")}
                          >
                            A/c or non A/C
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                  {Gender === "Sharing" && (
                    <Card
                      className="text-dark custom-border-radius mx-auto  w-100 mx-5 right"
                      style={{ backgroundColor: "white", zIndex: 1 }}
                    >
                      <Card.Body>
                        <div className="d-flex flex-wrap">
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "Single Sharing" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("Single Sharing")}
                          >
                            Single Sharing
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "Double Sharing" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("Double Sharing")}
                          >
                            Double Sharing
                          </Button>
                          <Button
                            type="button"
                            className={`btn btn-outline-light me-2 customplot rounded-pill ${
                              selectedOption === "Triple Sharing" ? "rest1" : ""
                            }`}
                            onClick={() => handleClick("Triple Sharing")}
                          >
                            Triple Sharing
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Navigation;
