import React from "react";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
} from "react-bootstrap";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { FaTimes } from "react-icons/fa";
import request, { Baseurl, UserConfig, token } from "./request";
import { log } from "util";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const Sellform = ({ activeButton, user, first, second, selectedPropType }) => {
  const [plot, setPlot] = useState(false);
  const [land, setLand] = useState(false);
  const [residential, setResidential] = useState(false);
  const [Commercial, setCommercial] = useState(false);
  const [sell, setsell] = useState("Sell");
  const [rent, setrent] = useState("Rent");
  const [lease, setlease] = useState("");
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [activeLink, setActiveLink] = useState(1);
const navigate = useNavigate()
  const [formValue, setFormValue] = useState({});

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
 
  const [plotSizeUnit, setPlotSizeUnit] = useState("");
  const handleplotClick = (items) => {
    if (items === 1) {
      setPlot(true);
      setLand(false);
      setResidential(false);
      setCommercial(false);
    } else if (items === 2) {
      setLand(true);
      setPlot(false);
      setCommercial(false);
      setResidential(false);
    } else if (items === 3) {
      setLand(false);
      setPlot(false);
      setCommercial(false);
      setResidential(true);
    } else if (items === 4) {
      setLand(false);
      setPlot(false);
      setCommercial(true);
      setResidential(false);
    }
  };

  const handlePlotSizeUnitChange = (event) => {
    setPlotSizeUnit(event.target.value);
  };

  // const handleview = (e) => {
  //   e.preventDefault();
  //   request
  //     .post("createproperty/", formValue)
  //     .then((resp) => {
  //       console.log("res", resp);
  //       alert("sendmessage");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       alert("Failed to send message. Please try again.");
  //     });
  // };

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let errors = {};
    if (!formValue.propertyName) {
      errors.propertyName = "*Please enter a valid property name";
    }
    if (!formValue.propertyLocation) {
      errors.propertyLocation = "*Please enter property location";
    }
    if (!formValue.plotSize) {
      errors.plotSize = "*Please enter plot size";
    }
    if (!formValue.plotSize) {
      errors.plotSize = "*Please enter plot size";
    }
    if (!formValue.plotBreadth) {
      errors.plotBreadth = "*Please enter plot bredth";
    }
    if (!formValue.roadWidth) {
      errors.roadWidth = "*Please enter plot road width";
    }
    if (!formValue.salePrice) {
      errors.salePrice = "*Please enter sale price";
    }
    if (!formValue.totalArea) {
      errors.totalArea = "*Please enter total area";
    }
    if (!formValue.advanceAmout) {
      errors.advanceAmout = "*Please enter advance amount";
    }
    if (!formValue.description) {
      errors.description = "*Please enter description";
    }
    if (activeButton == "Agent") {
      if (!formValue.agentCommision) {
        errors.agentCommision = "*Please enter agent commision";
      }
    }
   if(selectedImage.length === 0){
    errors.image = "*please upload at least 1 image"
   }

    return errors;
  };

  const [units, setUnits] = useState({
    breadthUnit: "ft",
    lengthUnit: "ft",
    roadWidthUnit: "ft",
    totalAreaUnit: "sqft",
  });

  const formControlStyle = {
    borderColor: "#D7242A",
    width: "500px",
    height: "60px",
    borderRadius: "20px",
  };

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

  const buttonStyle = {
    backgroundColor: "#FFFFFF",
    color: "#656565",
    border: "1px solid #C5C5C5",
    margin: "0 0.5rem",
  };
  const navbarStyle = {
    backgroundColor: "#FFFFFF4D",

    width: "100%",
  };
  const navLinkStyle = {
    color: "#000000",
    fontSize: "20px",
  };

  const newArray = [
    "road",
    "park",
    "street light",
    "Avenue Trees",
    "security",
    "Compound",
    " Drainage",
    "Bore well",
    "Corner Plot",
    " water",
  ];
  const [buttonStates, setButtonStates] = useState({
    road: false,
    park: false,
    "street light": false,
    "Avenue Trees": false,

    security: false,
    Compound: false,
    Drainage: false,
    "Bore well": false,
    "Corner Plot": false,
    water: false,
  });

  const [content, setContent] = useState([]);

  const handleAddCount = () => {
    if (inputValue.trim() !== "") {
      setContent((prevCount) => [...prevCount, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCount();
    }
  };
  const handleButtonClickss = (buttonName) => {
    if (!buttonStates[buttonName]) {
      setButtonStates((prevStates) => ({
        ...prevStates,
        [buttonName]: true,
      }));

      setContent((prevContent) => [...prevContent, buttonName]);
    }
  };

  const handleRemoveContent = (itemToRemove) => {
    if (newArray.includes(itemToRemove)) {
      setButtonStates((prevValue) => ({
        ...prevValue,
        [itemToRemove]: false,
      }));
      setContent((prevContent) =>
        prevContent.filter((item) => item !== itemToRemove)
      );
    }
    // setButtonStates((prevStates) => ({
    //   ...prevStates,
    //   [itemToRemove]: false,
    // }));
    else {
      setContent((prevContent) =>
        prevContent.filter((item) => item !== itemToRemove)
      );
    }
  };
  const [upload, setupload] = useState("");
  // const [selectedImage, setSelectedImage] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);

  const [selectedFile, setSelectedFile] = useState("");
  const [selectedvalue, setselectedvalue] = useState("");
  const [selectedLogo, setselectedLogo] = useState("");

  const handleUpload = () => {
    if (upload === "Site View" && selectedImage) {
      console.log("Uploading Site View image:", selectedImage);

      setSelectedImage("");
    } else if (upload === "FMB" && selectedFile) {
      console.log("Uploading FMB image:", selectedFile);

      setSelectedFile("");
    } else if (upload === "Location Map" && selectedvalue) {
      console.log("Uploading Location Map image:", selectedvalue);

      setselectedvalue("");
    } else if (upload === "Logo" && selectedLogo) {
      console.log("Uploading Logo image:", selectedLogo);

      setSelectedImage("");
    } else {
      console.log("No image selected");
    }
  };

  const handleImage = (values) => {
    setupload(values);
  };

  // const handleImageChange = (event) => {
  //   const files = event.target.files;

  //   const newSelectedImages = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const fileItem = files[i];

  //     newSelectedImages.push(fileItem);
  //   }

  //   setSelectedImage(newSelectedImages);
  //   console.log(newSelectedImages);
  //   setupload("");
  // };

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files.length + selectedImage.length > 6) {
     
      alert("You can only upload a maximum of 6 images.");
      return;
    }
   
    setSelectedImage((prevImages) => [...prevImages, ...files]);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleImagevalue = (event) => {
    const file = event.target.files[0];

    setselectedvalue(file);
  };
  const handleImageLogo = (event) => {
    const file = event.target.files[0];

    setselectedLogo(file);
  };
 

  const removeSelectedImage = (indexToRemove) => {
    setSelectedImage((prevSelectedImages) =>
      prevSelectedImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeSelectedImage1 = () => {
    setSelectedFile("");
  };

  const removeSelectedImage2 = () => {
    setselectedvalue("");
  };
  const removeSelectedLogo = () => {
    setselectedLogo("");
  };

  // Fuction for collecting from values 18/3/24

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleUnit = (e) => {
    setUnits({
      ...units,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const formData = new FormData();
        formData.append("name", user?.userName);
        formData.append("phone", `+${user?.phone}`);
        formData.append("email", user?.email);
        if (selectedPropType === "plot") {
          formData.append("property_type", selectedPropType);
          formData.append("plot.plot_type", first);
          formData.append("plot.length", parseInt(formValue?.plotSize));
          formData.append("plot.breadth", parseInt(formValue?.plotBreadth));
          formData.append("plot.road_width", parseInt(formValue?.roadWidth));
          formData.append("plot.direction_facing", formValue?.direction);
          formData.append("plot.approval", formValue?.category);
          formData.append("plot.total_area", formValue?.totalArea);
          formData.append("plot.breadth_unit", units.breadthUnit);
          formData.append("plot.length_unit", units.lengthUnit);
          formData.append("plot.road_width_unit", units.roadWidthUnit);
          formData.append("plot.total_area_unit", units.totalAreaUnit);
          content.forEach((element, index) => {
            formData.append(`plot.facilities[${index}]name`, element);
          });

          if (selectedImage) {
            selectedImage.forEach((image, index) => {
              formData.append(`plot_images[${index}]section`, "siteview");
              formData.append(`plot_images[${index}]image`, image);
            });
          }
          if (selectedFile) {
            formData.append(`plot_images[${7}]section`, "FMB");
            formData.append(`plot_images[${7}]image`, selectedFile);
          }
          if (selectedvalue) {
            formData.append(`plot_images[${8}]section`, "location_map");
            formData.append(`plot_images[${8}]image`, selectedvalue);
          }
          if (activeButton === "Builder" && selectedLogo) {
            formData.append(`plot_images[${9}]section`, "logo");
            formData.append(`plot_images[${9}]image`, selectedLogo);
          }
        }
        if (selectedPropType === "land") {
          formData.append("property_type", selectedPropType);
          formData.append("land.land_type", first);
          formData.append("land.length", parseInt(formValue?.plotSize));
          formData.append("land.breadth", parseInt(formValue?.plotBreadth));
          formData.append("land.road_width", parseInt(formValue?.roadWidth));
          formData.append("land.direction_facing", formValue?.direction);
          formData.append("land.approval", formValue?.category);
          formData.append("land.total_area", parseInt(formValue?.totalArea));
          formData.append("land.breadth_unit", units.breadthUnit);
          formData.append("land.length_unit", units.lengthUnit);
          formData.append("land.road_width_unit", units.roadWidthUnit);
          formData.append("land.total_area_unit", units.totalAreaUnit);
          content.forEach((element, index) => {
            formData.append(`land.facilities[${index}]name`, element);
          });

          if (selectedImage) {
            selectedImage.forEach((image, index) => {
              formData.append(`land_images[${index}]section`, "siteview");
              formData.append(`land_images[${index}]image`, image);
            });
          }
          if (selectedFile) {
            formData.append(`land_images[${7}]section`, "FMB");
            formData.append(`land_images[${7}]image`, selectedFile);
          }
          if (selectedvalue) {
            formData.append(`land_images[${8}]section`, "location_map");
            formData.append(`land_images[${8}]image`, selectedvalue);
          }
          if (activeButton === "Builder" && selectedLogo) {
            formData.append(`land_images[${9}]section`, "logo");
            formData.append(`land_images[${9}]image`, selectedLogo);
          }
        }

        formData.append("you_are_here_to", second.toLowerCase());
        formData.append("owner", activeButton === "Owner");
        formData.append("agent", activeButton === "Agent");
        formData.append("builder", activeButton === "Builder");
        // formData.append("area_sqft", parseInt(formValue?.totalArea));
        formData.append("title", formValue?.propertyName);
        formData.append("description", formValue?.description);
        formData.append("location", formValue?.propertyLocation);
        formData.append("sale_price", formValue?.salePrice);
        if (activeButton === "Agent") {
          formData.append("agent_commission", formValue?.agentCommision);
        }

        formData.append("advance", formValue?.advanceAmout);

        const response = await axios.post(
          `${Baseurl}createproperty/`,
          formData,
          UserConfig
        );
        // console.log(response);
        // toast.success("Submitted", {
        //   hideProgressBar: true,
        //   position: "top-center",
        // });
        navigate("/check",{state : response.data})
        
      } catch (error) {
        console.error("Server error", error);
        toast.error("something went wrong", {
          hideProgressBar: true,
          position: "top-center",
        });
      }
    } else {
      setErrors(errors); // Set validation errors in state
      toast.error("please fill required field before submiting", {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div>
      <Form className="mx-3">
        <Row className="gx-md-5 gx-3">
          <Col>
            <Form.Group controlId="formGroup1">
              <Form.Label>Property Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                style={{ ...formControlStyle }}
                onChange={handleChange}
                name="propertyName"
                required
              />
              {errors.propertyName && (
                <div className="text-danger">{errors.propertyName}</div>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="propertyLocation">
              <Form.Label>Property Location </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Location"
                style={{ ...formControlStyle }}
                pattern="[A-Za-z\s]+"
                onChange={handleChange}
                name="propertyLocation"
                required
              />
              {errors.propertyLocation && (
                <div className="text-danger">{errors.propertyLocation}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="gx-md-5 gx-3 mt-5">
          <Col>
            <Form.Group controlId="formGroup3">
              <Form.Label>Plot size</Form.Label>
              <br />
              <div
                className="rounded-pill"
                style={{ position: "relative", display: "inline-block" }}
              >
                <Form.Control
                  type="number"
                  placeholder="length"
                  style={formControlStyle}
                  onChange={handleChange}
                  name="plotSize"
                  required
                />

                <select
                  className="rounded-end down border-start-0 ps-5"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100%",
                  }}
                  name="lengthUnit"
                  onChange={handleUnit}
                >
                  <option value="ft">ft</option>
                  <option value="mt">mt</option>
                </select>
              </div>
              {errors.plotSize && (
                <div className="text-danger">{errors.plotSize}</div>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroup4">
              <Form.Label>Breadth</Form.Label>
              <br />
              <div
                className="rounded-pill"
                style={{ position: "relative", display: "inline-block" }}
              >
                <Form.Control
                  type="number"
                  placeholder="Breadth"
                  style={formControlStyle}
                  onChange={handleChange}
                  name="plotBreadth"
                  required
                />
                <select
                  className="rounded-end down border-start-0 ps-5"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100%",
                  }}
                  name="breadthUnit"
                  onChange={handleUnit}
                >
                  <option value="ft">ft</option>
                  <option value="mt">mt</option>
                </select>
              </div>
              {errors.plotBreadth && (
                <div className="text-danger">{errors.plotBreadth}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="gx-md-5 gx-5 mt-5">
          <Col>
            <Form.Group controlId="formGroup5">
              <Form.Label>

              </Form.Label>

              <div
                className="rounded-pill"
                style={{ position: "relative", display: "inline-block" }}
              >
                <Form.Control
                  type="number"
                  placeholder="Total Area"
                  style={{ ...formControlStyle }}
                  onChange={handleChange}
                  name="totalArea"
                  required
                />
                <select
                  className="rounded-end down border-start-0 ps-5"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100%",
                  }}
                  name="totalAreaUnit"
                  onChange={handleUnit}
                >
                  <option value="sqft">sqft</option>
                </select>
              </div>
              {errors.totalArea && (
                <div className="text-danger">{errors.totalArea}</div>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroup6">
              <Form.Label></Form.Label>

              <div
                className="rounded-pill"
                style={{ position: "relative", display: "inline-block" }}
              >
                <Form.Control
                  type="number"
                  placeholder="Road width"
                  style={{ ...formControlStyle }}
                  onChange={handleChange}
                  name="roadWidth"
                  required
                />
                <select
                  className="rounded-end down border-start-0 ps-5"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100%",
                  }}
                  name="roadWidthUnit"
                  onChange={handleUnit}
                >
                  <option value="ft">ft</option>
                  <option value="mt">mt</option>
                </select>
              </div>
              {errors.roadWidth && (
                <div className="text-danger">{errors.roadWidth}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <h5 className="mt-4">Direction Facing</h5>
      <div className="custom-radio d-flex mt-4 flex-column flex-md-row" onChange={handleChange}>
  <div className="flex-grow-1">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="direction"
        id="exampleRadio1"
        value="east"
      />
      <label className="form-check-label mb-1" htmlFor="exampleRadio1">
        East
      </label>
    </div>
  </div>

  <div className="flex-grow-1">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="direction"
        id="exampleRadio2"
        value="west"
      />
      <label className="form-check-label" htmlFor="exampleRadio2">
        West
      </label>
    </div>
  </div>

  <div className="flex-grow-1">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="direction"
        id="exampleRadio3"
        value="north"
      />
      <label className="form-check-label" htmlFor="exampleRadio3">
        North
      </label>
    </div>
  </div>

  <div className="flex-grow-1">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="direction"
        id="exampleRadio4"
        value="south"
      />
      <label className="form-check-label" htmlFor="exampleRadio4">
        South
      </label>
    </div>
  </div>

  <div className="flex-grow-1 mb-3 mb-md-0">
    <input
      className="inp flex-grow-1"
      name="direction"
      onChange={handleChange}
      placeholder="other if any..."
    />
  </div>
</div>


      <div className="mt-3">
        <h5>Facility</h5>

        <Card
          style={{
            borderRadius: "10px",
            border: "1px solid #B3B3B3",
            width: "1170px",
          }}
        >
          <Card.Body>
            <div className="row mb-2">
              <div className="d-flex gap-3 flex-wrap">
                {content.map((item) => (
                  <button
                    key={item}
                    className="btn btn-values mb-2 me-2"
                    onClick={() => handleRemoveContent(item)}
                  >
                    {item} <FaTimes />
                  </button>
                ))}
                <input
                  placeholder="Type something"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  style={{ border: "none" }}
                />
              </div>

              <hr />

              <div className="container">
                <div className="row row-cols-6">
                  {Object.keys(buttonStates).map((buttonName) => (
                    <div key={buttonName} className="col mb-2 ">
                      <button
                        className={`btn ${
                          buttonStates[buttonName] ? "btn-Nam" : "btn-Name"
                        }`}
                        onClick={() => handleButtonClickss(buttonName)}
                        style={{ width: "100%" }}
                      >
                        {buttonName}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <h5 className="mt-5 gy-3">Category</h5>
      <div
        className="custom-radio d-flex mt-4 gx-3"
        onChange={handleChange}
        required
      >
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id="exampleRadio1"
            value="approved"
          />
          <label className="form-check-label ms-3" htmlFor="exampleRadio1">
            Approved
          </label>
        </div>

        <div className="form-check ms-5">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id="exampleRadio2"
            value="unapproved"
          />
          <label className="form-check-label ms-3" htmlFor="exampleRadio2">
            Unapproved
          </label>
        </div>
      </div>
      <Form className=" mx-2">
        <Row className="mt-5">
          <Col className="">
            <Form.Group controlId="formGroup3">
              <Form.Label>Sale Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rs"
                style={formControlStyle}
                name="salePrice"
                onChange={handleChange}
                required
              />
              {errors.salePrice && (
                <div className="text-danger">{errors.salePrice}</div>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroup4">
              <Form.Label>Advance Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rs"
                style={formControlStyle}
                name="advanceAmout"
                onChange={handleChange}
                required
              />
              {errors.advanceAmout && (
                <div className="text-danger">{errors.advanceAmout}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-5">
          {activeButton === "Agent" && (
            <Col className="">
              <Form.Group controlId="formGroup3">
                <Form.Label>Agentcommision</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Rs"
                  style={formControlStyle}
                  name="agentCommision"
                  onChange={handleChange}
                  required
                />
                {errors.agentCommision && (
                  <div className="text-danger">{errors.agentCommision}</div>
                )}
              </Form.Group>
            </Col>
          )}

          <Col>
            <Form.Group controlId="formGroup4">
              <Form.Label></Form.Label>
            </Form.Group>
          </Col>
        </Row>

        <h5 className="mb-5 gy-3">Description</h5>
        <textarea
          className="form-control mb-4"
          name="description"
          onChange={handleChange}
          style={{
            width: "1170px",
            height: "270px",
            borderRadius: "30px",
            border: "1px solid #D7242A",
          }}
          placeholder="Type something...."
          id="message"
          rows="5"
          required
        ></textarea>
        {errors.description && (
          <div className="text-danger">{errors.description}</div>
        )}
        <h5 className="mt-5 gy-3">Upload Photos</h5>
        <Card
          className="mt-5"
          style={{
            width: "1170px",
            height: "300px",
            borderRadius: "30px",
            border: "1px solid #D7242A",
          }}
        >
          <Card.Body>
            <nav className="navbar navbar-expand">
              <div
                className="d-flex justify-content-between gap-4"
                style={navbarStyle}
              >
                <ul className="navbar-nav value d-flex justify-content-between w-100">
                  <li className="nav-item mx-5">
                    <a
                      className={`nav-link ${
                        upload === "Site View" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Site View")}
                    >
                      Site View
                    </a>
                  </li>

                  <li className="nav-item mx-5">
                    <a
                      className={`nav-link ${upload === "FMB" ? "design" : ""}`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("FMB")}
                    >
                      FMB
                    </a>
                  </li>
                  <li className="nav-item mx-5">
                    <a
                      className={`nav-link ${
                        upload === "Location Map" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Location Map")}
                    >
                      Location Map
                    </a>
                  </li>
                  {activeButton === "Builder" && (
                    <li className="nav-item mx-5">
                      <a
                        className={`nav-link ${
                          upload === "Logo" ? "design" : ""
                        }`}
                        style={navLinkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleImage("Logo")}
                      >
                        Logo
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
            <hr />
            {/*        
         <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload} >
      <input
        type="file"
        name="file-input"
        id="file-input"
        class="file-input__input"
        accept="image/*" onChange={handleImageChange}
      />
      <label className="file-input__label" for="file-input">
    
        <span>Upload file</span></label
      >
    </div> */}
            {upload === "Site View" && (
              <div>
                <div
                  className="file-input d-flex justify-content-center align-items-center"
                  onClick={handleUpload}
                >
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="file-input__input"
                    accept="image/*"
                    onChange={handleImageChange}
                    multiple
                  />
                  <label className="file-input__label" htmlFor="file-input">
                    <span>Upload file</span>
                  </label>
                </div>

                <div className="row">
                  {selectedImage &&
                    selectedImage.map((image, index) => (
                      <div key={index} className="col-md-2 mb-3">
                        <div className="text-center">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={image ? image.name : "upload image"}
                            className="img-fluid"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100px",
                              borderRadius: "10px",
                              border: "1px solid",
                            }}
                          />
                          <button
                            onClick={() => removeSelectedImage(index)}
                            className="btn btn-danger btn-sm mb-5"
                          >
                            <i className="fas fa-times"></i> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {upload === "FMB" && (
              <div>
                <div className="file-input d-flex justify-content-center align-items-center">
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="file-input__input"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <label className="file-input__label" htmlFor="file-input">
                    <span>Upload file</span>
                  </label>
                </div>

                {selectedFile && (
                  <div className="mt-3 text-center">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt={selectedFile ? selectedFile.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedImage1}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}
            {upload === "Location Map" && (
              <div>
                <div
                  className="file-input d-flex justify-content-center align-items-center"
                  onClick={handleUpload}
                >
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="file-input__input"
                    accept="image/*"
                    onChange={handleImagevalue}
                  />
                  <label className="file-input__label" htmlFor="file-input">
                    <span>Upload file</span>
                  </label>
                </div>

                {selectedvalue && (
                  <div className="mt-3 text-center">
                    <img
                      src={URL.createObjectURL(selectedvalue)}
                      alt={selectedvalue ? selectedvalue.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedImage2}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}

            {upload === "Logo" && (
              <div>
                <div className="file-input d-flex justify-content-center align-items-center">
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="file-input__input"
                    accept="image/*"
                    onChange={handleImageLogo}
                  />
                  <label className="file-input__label" htmlFor="file-input">
                    <span>Upload file</span>
                  </label>
                </div>

                {selectedLogo && (
                  <div className="mt-3 text-center">
                    <img
                      src={URL.createObjectURL(selectedLogo)}
                      alt={selectedLogo ? selectedLogo.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedLogo}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-center">
      {errors.image && <div className="text-danger">{errors.image}</div>}
          <button
            type="button"
            className="buttonmobile mt-5"
            style={{ width: "370px" }}
            onClick={(e) => handleSubmit(e)}
          >
            Post Property
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Sellform;
