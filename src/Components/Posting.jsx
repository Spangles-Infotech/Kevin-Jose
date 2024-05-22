import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
} from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sellform from "./Sellform";
import Rentform from "./Rentform";
import Leaseform from "./Leaseform";
import Restform from "./Restform";
import Restland from "./Restland";
import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Restlease from "./Restlease";
import Flatapartsell from "./Flatapartsell";
import Flatapartrent from "./Flatapartrent";
import Flatapartlease from "./Flatapartlease";
import Commercialsell from "./Commercialsell";
import Commercialrent from "./Commercialrent";
import Commerciallease from "./commerciallease";
import Servicesell from "./Servicesell";
import Servicerent from "./Servicerent";
import Servicelease from "./Servicelease";
import Pgrent from "./Pgrent";
import FactorySell from "./FactorySell";
import FactoryRent from "./FactoryRent";
import FactoryLease from "./FactoryLease";
import Apartmentrent from "./Apartmentrent";
import Apartmentlease from "./Apartmentlease";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Posting = () => {
  const navbarStyle = {
    backgroundColor: "#FFFFFF4D",

    width: "100%",
  };
  const navLinkStyle = {
    color: "#000000",
    fontSize: "20px",
  };

  const navLinkHoverStyle = {
    Color: "#D7242A",
    transition: "background-color 0.4s ease",
  };
  const handleMouseEnter = (e) => {
    e.target.style.Color = navLinkHoverStyle.Color;
    e.target.style.color = navLinkHoverStyle.Color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = navLinkStyle.color;
  };

  const formControlStyle = {
    borderColor: "#D7242A",
    width: "560px",
    height: "60px",
    borderRadius: "20px",
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [phone, setPhone] = useState("");

  // Function to handle phone number changes
  const handlePhoneChange = (e) => {
    setUser({ ...user, phone: e });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Implement your image upload logic here
    if (selectedImage) {
      console.log("Uploading image:", selectedImage);
    } else {
      console.log("No image selected");
    }
  };
  const [restbutton, setRestbutton] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("Sell");
  const [third, setThird] = useState("");
  const [four, setFour] = useState("");

  const [plot, setPlot] = useState(true);
  const [land, setLand] = useState(false);
  const [residential, setResidential] = useState(false);
  const [Commercial, setCommercial] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  const [formdata, setformdata] = useState({
    land_type: "",
    length: "",
    breadth: "",
    total_area: "",
    road_width: "",
    direction_facing: "",
    approval: "",
    created_at: "",
    sale_price: "",
    sale_price_per_sqft: "",
    title: "",
    name: "",
    phone: "+91",
    email: "",
    you_are_here_to: "",
    property_type: "",
    description: "",
    location: "",
    city: "",
    area_sqft: "",
    unit: "",
    is_published: "",
    sold_out: "",
    owner: "",
    agent: "",
    builder: "",
    dealer: "",
    plotdeveloper: "",
  });

  const [selectedPropType, setSelectedPropType] = useState("plot");

  const handleplotClick = (items) => {
    setActiveLink(items);
    setFirst("");
    setSecond("Sell");
    setThird("");
    setFour("");

    if (items === 1) {
      setPlot(true);
      setLand(false);
      setResidential(false);
      setCommercial(false);
      setSelectedPropType("plot");
    } else if (items === 2) {
      setLand(true);
      setPlot(false);
      setCommercial(false);
      setResidential(false);
      setSelectedPropType("land");
    } else if (items === 3) {
      setLand(false);
      setPlot(false);
      setCommercial(false);
      setResidential(true);
      setSelectedPropType("residential");
    } else if (items === 4) {
      setLand(false);
      setPlot(false);
      setCommercial(true);
      setResidential(false);
      setSelectedPropType("commercial");
      setSelectedPropType("commercial");
    }
  };

  const handleButtonClicks = (plot) => {
    setFirst(plot);
  };
  console.log(first);
  const handlevalue = (view) => {
    setSecond(view);
  };
  const handlerest = (rest, name) => {
    console.log("Handlerest called with:", name);
    setThird(rest);
    setRestbutton(name);
  };

  const handlecommercial = (values) => {
    setFour(values);
  };

  const [activeButton, setActiveButton] = useState("Owner");

  const handleClicks = (buttonType) => {
    setActiveButton(buttonType);
    setFirst("");
    setSecond("Sell");
    setThird("");
    setFour("");
  };
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="text-center">
          <h3 className="mt-5 pt-5 mx-1 text-lg-start bigvalue underline">
            Start posting your property
          </h3>
        </div>
        <div className="text-start mt-5 ms-4">You are</div>

        <div className="text-start mt-3">
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Owner" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Owner")}
          >
            Owner
          </button>

          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Agent" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Agent")}
          >
            Agent
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Builder" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Builder")}
          >
            Builder
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Dealer" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Dealer")}
          >
            Dealer
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Plot Developer" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Plot Developer")}
          >
            Plot Developer
          </button>
        </div>

        <div className="text-start mt-5 ms-4">
          <Form>
            <Row className="gx-3 mb-3">
              <Col sm={6} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputFirstName"
                  >
                    First Name
                  </Form.Label>
                  <Form.Control
                    id="inputFirstName"
                    style={{ border: "1px solid #D7242A" }}
                    type="text"
                    placeholder="Enter your first name"
                    name="userName"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={6} lg={4} className="ms-lg-5">
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputLastName"
                  >
                    Last Name
                  </Form.Label>
                  <Form.Control
                    id="inputFirstName"
                    style={{ border: "1px solid #D7242A" }}
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Organization name and Location in a row */}
            <Row className="gx-3 mb-3">
              <Col sm={6} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label w-100"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputOrgName"
                  >
                    Phone Number
                  </Form.Label>

                  {/* <PhoneInput
                    className=" w-100"
                    value={`+91${phone}`}
                    onChange={handlePhoneChange}
                    defaultCountry="in"
                    inputStyle={{
                      borderColor: "#D7242A",
                      borderRadius: "4px",
                    }}
                  /> */}

                  <PhoneInput
                    className="w-100"
                    value={phone}
                    onChange={handlePhoneChange}
                    country={"in"}
                    inputStyle={{
                      borderColor: "#D7242A",
                      borderRadius: "4px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={6} lg={4} className="ms-lg-5">
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputFirstName"
                  >
                    Email
                  </Form.Label>
                  <Form.Control
                    id="inputEmail"
                    style={{ border: "1px solid #D7242A" }}
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="text-start mt-5 ms-4">You are here to</div>

        <div className="text-start mt-3">
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              second === "Sell" ? "active" : ""
            }`}
            onClick={() => handlevalue("Sell")}
          >
            Sell
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              second === "Rent" ? "active" : ""
            }`}
            onClick={() => handlevalue("Rent")}
          >
            Rent
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              second === "Lease" ? "active" : ""
            }`}
            onClick={() => handlevalue("Lease")}
          >
            Lease
          </button>
        </div>

        <div className="text-start mt-5 ms-4">Property Type</div>
        <Card
          className="my-4 my-card"
          style={{ width: "1170px", height: "300px", borderRadius: "30px" }}
        >
          <nav className="navbar navbar-expand-lg mx-lg-5">
            <div className="container-fluid" style={navbarStyle}>
              <ul className="navbar-nav mx-2 mx-md-5 justify-content-between w-100 d-flex flex-row">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 1 ? "design" : ""}`}
                    aria-current="page"
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(1)}
                  >
                    Plot
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li className="nav-item me-3 me-md-5">
                  <a
                    className={`nav-link  ${activeLink === 2 ? "design" : ""}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(2)}
                  >
                    Land
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 3 ? "design" : ""}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(3)}
                  >
                    Residential Property
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 4 ? "design" : ""}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(4)}
                  >
                    Commercial Property
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />
          <Dropdown>
            {plot && (
              <div className="d-flex gap-5 my-2 px-2 mx-5">
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "residential_plot" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("residential_plot")}
                >
                  Residential plot
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "commercial_plot" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("commercial_plot")}
                >
                  Commercial Plot
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "industrial_plot" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("industrial_plot")}
                >
                  Industrial Plot
                </Button>
              </div>
            )}

            {land && (
              <div className="d-flex my-2 px-2 mx-5">
                {/* Buttons */}
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "residential_land" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("residential_land")}
                >
                  Residential Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "industrial_land" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("industrial_land")}
                >
                  Industrial Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "agricultural_land" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("agricultural_land")}
                >
                  Agricultural Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "plantation" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("plantation")}
                >
                  Plantation
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "estate" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("estate")}
                >
                  Estate
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "farm_land" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("farm_land")}
                >
                  Farm Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "Furnishing" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("Furnishing")}
                >
                  Furnishing
                </Button>
              </div>
            )}
            {residential && (
              <div className="d-flex px-2 mx-5 justify-content-between">
                <div className="row">
                  <div className="col">
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "house" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "house")}
                    >
                      House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "villa" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "villa")}
                    >
                      Villa
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "bungalow" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "bungalow")}
                    >
                      Bungalow
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "duplex_house" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "duplex_house")}
                    >
                      Duplex House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "row_house" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "row_house")}
                    >
                      Row House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "plant_house" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "plant_house")}
                    >
                      Pant House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "farm_house" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "farm_house")}
                    >
                      Farm house
                    </Button>
                  </div>
                  <hr className="my-3" />
                  <div className="col">
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "flat" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "flat")}
                    >
                      Flat
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "apartment" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "apartment")}
                    >
                      Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "builder_floor_apartment" ? "rest" : ""
                      }`}
                      onClick={() =>
                        handlerest("bottom", "builder_floor_apartment")
                      }
                    >
                      BuilderFloor Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "multi_storey_apartment" ? "rest" : ""
                      }`}
                      onClick={() =>
                        handlerest("bottom", "multi_storey_apartment")
                      }
                    >
                      Multi storey Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "luxury_apartment" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "luxury_apartment")}
                    >
                      Luxury Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "studio_apartment" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "studio_apartment")}
                    >
                      Studio Apartment
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {Commercial && (
              <div className="d-md-flex px-2 mx-5 justify-content-between mb-3">
                <div className="row row-cols-auto gap-3">
                  {/* {able && second === 'Rent' && (
        <div>
          {four === 'PG Home' && <Pgrent/>}
          {four === 'PG Hostel' && <Pgrent/>}
        </div>
      )}
      {(second === 'Sell' || second === 'Lease') && (
        <div className="buttons-disabled">
          <button
            type="button"
            className="button-disabled"
            disabled
          >
            PG Home
          </button>
          <button
            type="button"
            className="button-disabled"
            disabled
          >
            PG Hostel
          </button>
        </div>
      )}
      {!able && (second !== 'Sell' && second !== 'Lease') && (
        <div>
          <button
            type="button"
            className={`button-normal ${four === 'PG Home' ? 'active' : ''}`}
            onClick={() => handlecommercial('PG Home')}
          >
            PG Home
          </button>
          <button
            type="button"
            className={`button-normal ${four === 'PG Hostel' ? 'active' : ''}`}
            onClick={() => handlecommercial('PG Hostel')}
          >
            PG Hostel
          </button>
        </div>
      )} */}

                  {/*  */}
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "office" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("office")}
                  >
                    Office
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light  customplot rounded-pill ${
                      four === "shop" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("shop")}
                  >
                    Shop
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "showroom" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("showroom")}
                  >
                    Showroom
                  </Button>

                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "godown" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("godown")}
                  >
                    Godown
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "shed" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("shed")}
                  >
                    Shed
                  </Button>

                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "co_working_space" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("co_working_space")}
                  >
                    Co-working Space
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "commercial_complex" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("commercial_complex")}
                  >
                    Commercial complex
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "industrialbuilding" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("industrialbuilding")}
                  >
                    Industrial Building
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "industrial_shed" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("industrial_shed")}
                  >
                    Industrial shed
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light me-2 customplot rounded-pill ${
                      four === "factory" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("factory")}
                  >
                    Factory
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "service_apartment" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("service_apartment")}
                    disabled={second === "Sell"}
                  >
                    Service Apartment
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "PG_home" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("PG_home")}
                    disabled={second === "Sell" || second === "Lease"}
                  >
                    PG Home
                  </Button>

                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "PG_hostel" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("PG_hostel")}
                    disabled={second === "Sell" || second === "Lease"}
                  >
                    PG Hostel
                  </Button>
                </div>
              </div>
            )}
          </Dropdown>
        </Card>
        {/*  */}

        {activeButton === "Owner" && first && second === "Sell" && (
          <Sellform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {activeButton === "Owner" && first && second === "Rent" && (
          <Rentform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {activeButton === "Owner" && first && second === "Lease" && (
          <Leaseform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {/* {four === "industrialbuilding" && second === "Sell" && (
          <Servicesell
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )} */}
        {four === "industrialbuilding" && second === "Rent" && (
          <Servicerent
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {four === "industrialbuilding" && second === "Lease" && (
          <Servicelease
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {/* {four === "industrial_shed" && second === "Sell" && (
          <Servicesell
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )} */}
        {four === "industrial_shed" && second === "Rent" && (
          <Servicerent
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {four === "industrial_shed" && second === "Lease" && (
          <Servicelease
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {four === "factory" && second === "Sell" && (
          <FactorySell
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {four === "factory" && second === "Rent" && (
          <FactoryRent
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {four === "factory" && second === "Lease" && (
          <FactoryLease
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {four === "service_apartment" && second === "Rent" && (
          <Apartmentrent
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {four === "service_apartment" && second === "Lease" && (
          <Apartmentlease
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {four === "PG_home" && second === "Rent" && (
          <Pgrent
            four={four}
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {activeButton === "Owner" &&
          four &&
          second === "Sell" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commercialsell
              four={four}
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four &&
          second === "Rent" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commercialrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four &&
          second === "Lease" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commerciallease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {/* {activeButton === "Owner" &&
          four === "industrialbuilding" &&
          second === "Sell" && (
            <Servicesell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )} */}
        {activeButton === "Owner" &&
          four === "industrialbuilding" &&
          second === "Rent" && (
            <Servicerent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four === "industrialbuilding" &&
          second === "Lease" && (
            <Servicelease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {/* {activeButton === "Owner" &&
          four === "industrialbuilding" &&
          second === "Sell" && (
            <Servicesell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )} */}
        {activeButton === "Owner" &&
          four === "industrial_shed" &&
          second === "Rent" && (
            <Servicerent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four === "industrial_shed" &&
          second === "Lease" && (
            <Servicelease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Owner" &&
          four === "factory" &&
          second === "Sell" && (
            <FactorySell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four === "factory" &&
          second === "Rent" && (
            <FactoryRent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Owner" &&
          four === "factory" &&
          second === "Lease" && (
            <FactoryLease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four === "service_apartment" &&
          second === "Rent" && (
            <Apartmentrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Owner" &&
          four === "service_apartment" &&
          second === "Lease" && (
            <Apartmentlease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four === "PG_home" &&
          second === "Rent" && (
            <Pgrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Owner" &&
          four === "PG_hostel" &&
          second === "Rent" && (
            <Pgrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Owner" && third === "Top" && second === "Sell" && (
          <Restform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            restbutton={restbutton}
          />
        )}
        {activeButton === "Owner" &&
          third === "bottom" &&
          second === "Sell" && (
            <Flatapartsell
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}

        {activeButton === "Owner" && third === "Top" && second === "Rent" && (
          <Restland
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            restbutton={restbutton}
          />
        )}
        {activeButton === "Owner" &&
          third === "bottom" &&
          second === "Rent" && (
            <Flatapartrent
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}
        {activeButton === "Owner" && third === "Top" && second === "Lease" && (
          <Restlease
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            setSelectedPropType={setSelectedPropType}
            restbutton={restbutton}
          />
        )}

        {activeButton === "Owner" &&
          third === "bottom" &&
          second === "Lease" && (
            <Flatapartlease
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}

        {activeButton === "Agent" && first && second === "Sell" && (
          <Sellform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {activeButton === "Agent" && first && second === "Rent" && (
          <Rentform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            restbutton={restbutton}
          />
        )}

        {activeButton === "Agent" && first && second === "Lease" && (
          <Leaseform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {activeButton === "Agent" && third === "Top" && second === "Sell" && (
          <Restform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            restbutton={restbutton}
          />
        )}
        {activeButton === "Agent" && third === "Top" && second === "Rent" && (
          <Restland
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            setSelectedPropType={setSelectedPropType}
            restbutton={restbutton}
          />
        )}
        {activeButton === "Agent" && third === "Top" && second === "Lease" && (
          <Restlease
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            setSelectedPropType={setSelectedPropType}
            restbutton={restbutton}
          />
        )}
        {activeButton === "Agent" &&
          third === "bottom" &&
          second === "Sell" && (
            <Flatapartsell
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}
        {activeButton === "Agent" &&
          third === "bottom" &&
          second === "Rent" && (
            <Flatapartrent
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}

        {activeButton === "Agent" &&
          third === "bottom" &&
          second === "Lease" && (
            <Flatapartlease
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}

        {activeButton === "Agent" &&
          four &&
          second === "Sell" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commercialsell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Agent" &&
          four &&
          second === "Rent" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed " &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commercialrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Agent" &&
          four &&
          second === "Lease" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commerciallease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {/* {activeButton === "Agent" &&
          four === "industrialbuilding" &&
          second === "Sell" && (
            <Servicesell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )} */}
        {activeButton === "Agent" &&
          four === "industrialbuilding" &&
          second === "Rent" && (
            <Servicerent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Agent" &&
          four === "industrialbuilding" &&
          second === "Lease" && (
            <Servicelease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {/* {activeButton === "Agent" &&
          four === "industrial_shed" &&
          second === "Sell" && (
            <Servicesell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )} */}
        {activeButton === "Agent" &&
          four === "industrial_shed" &&
          second === "Rent" && (
            <Servicerent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Agent" &&
          four === "industrial_shed" &&
          second === "Lease" && (
            <Servicelease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Agent" &&
          four === "factory" &&
          second === "Sell" && (
            <FactorySell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Agent" &&
          four === "factory" &&
          second === "Rent" && (
            <FactoryRent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Agent" &&
          four === "factory" &&
          second === "Lease" && (
            <FactoryLease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Agent" &&
          four === "service_apartment" &&
          second === "Rent" && (
            <Apartmentrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Agent" &&
          four === "service_apartment" &&
          second === "Lease" && (
            <Apartmentlease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Agent" &&
          four === "PG_home" &&
          second === "Rent" && (
            <Pgrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Agent" &&
          four === "PG_hostel" &&
          second === "Rent" && (
            <Pgrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {/* {activeButton === "Builder" && first && second === "Sell" && (
          <Sellform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )} */}
        {activeButton === "Builder" && first && second === "Rent" && (
          <Rentform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {activeButton === "Builder" && first && second === "Lease" && (
          <Leaseform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {activeButton === "Builder" && third === "Top" && second === "Sell" && (
          <Restform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
            restbutton={restbutton}
          />
        )}
        {activeButton === "Builder" && third === "Top" && second === "Rent" && (
          <Restland
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}
        {activeButton === "Builder" &&
          third === "Top" &&
          second === "Lease" && (
            <Restlease
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Builder" &&
          third === "bottom" &&
          second === "Sell" && (
            <Flatapartsell
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}
        {activeButton === "Builder" &&
          third === "bottom" &&
          second === "Rent" && (
            <Flatapartrent
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}

        {activeButton === "Builder" &&
          third === "bottom" &&
          second === "Lease" && (
            <Flatapartlease
              activeButton={activeButton}
              user={user}
              first={first}
              second={second}
              selectedPropType={selectedPropType}
              setSelectedPropType={setSelectedPropType}
              restbutton={restbutton}
            />
          )}

        {activeButton === "Builder" &&
          four &&
          second === "Sell" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commercialsell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Builder" &&
          four &&
          second === "Rent" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commercialrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Builder" &&
          four &&
          second === "Lease" &&
          four !== "service_apartment" &&
          four !== "industrialbuilding" &&
          four !== "industrial_shed" &&
          four !== "factory" &&
          four !== "PG_home" &&
          four !== "PG_hostel" && (
            <Commerciallease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {/* {activeButton === "Builder" &&
          four === "industrialbuilding" &&
          second === "Sell" && (
            <Servicesell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )} */}
        {activeButton === "Builder" &&
          four === "industrialbuilding" &&
          second === "Rent" && (
            <Servicerent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Builder" &&
          four === "industrialbuilding" &&
          second === "Lease" && (
            <Servicelease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {/* {activeButton === "Builder" &&
          four === "industrail_shed" &&
          second === "Sell" && (
            <Servicesell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )} */}
        {activeButton === "Builder" &&
          four === "industrial_shed" &&
          second === "Rent" && (
            <Servicerent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Builder" &&
          four === "industrial_shed" &&
          second === "Lease" && (
            <Servicelease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Builder" &&
          four === "factory" &&
          second === "Sell" && (
            <FactorySell
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Builder" &&
          four === "factory" &&
          second === "Rent" && (
            <FactoryRent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Builder" &&
          four === "factory" &&
          second === "Lease" && (
            <FactoryLease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Builder" &&
          four === "service_apartment" &&
          second === "Rent" && (
            <Apartmentrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}

        {activeButton === "Builder" &&
          four === "service_apartment" &&
          second === "Lease" && (
            <Apartmentlease
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Builder" &&
          four === "PG_home" &&
          second === "Rent" && (
            <Pgrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
        {activeButton === "Builder" &&
          four === "PG_hostel" &&
          second === "Rent" && (
            <Pgrent
              activeButton={activeButton}
              user={user}
              four={four}
              second={second}
              selectedPropType={selectedPropType}
            />
          )}
      </div>

      <Footer />
    </div>
  );
};

export default Posting;
