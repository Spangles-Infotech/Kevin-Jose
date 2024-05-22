
import React from 'react'
import { Button, Card, Form, Row, Col, Dropdown, DropdownToggle } from 'react-bootstrap';
import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { log } from "util";
import { toast } from "react-toastify";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
import { useNavigate } from 'react-router-dom';
const FactoryLease = ({ 
  four,
  activeButton,
   user,
  second,
  selectedPropType }) => {
    const navigate =  useNavigate()
  const [plot, setPlot] = useState(false);
  const [land, setLand] = useState(false);
  const [residential, setResidential] = useState(false);
  const [Commercial, setCommercial] = useState(false);

  const handleplotClick = (items) => {
    if (items === 1) {
      setPlot(true);
      setLand(false);
      setResidential(false);
      setCommercial(false)
    } else if (items === 2) {
      setLand(true);
      setPlot(false);
      setCommercial(false)
      setResidential(false);
    } else if (items === 3) {
      setLand(false);
      setPlot(false);
      setCommercial(false)
      setResidential(true);
    } else if (items === 4) {
      setLand(false);
      setPlot(false);
      setCommercial(true);
      setResidential(false);
    }
  };


  const formControlStyle = {
    borderColor: '#D7242A',
    width: '500px',
    height: '60px',
    borderRadius: '20px'
  }
  const formControllStyle = {
    borderColor: '#D7242A',
    width: '1150px',
    height: '60px',
    borderRadius: '20px'
  }
  // images upload code



  const navLinkHoverStyle = {
    Color: '#D7242A',
    transition: 'background-color 0.3s ease',
  };
  const handleMouseEnter = (e) => {
    e.target.style.Color = navLinkHoverStyle.Color;
    e.target.style.color = navLinkHoverStyle.Color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '';
    e.target.style.color = navLinkStyle.color;

  };

  const buttonStyle = {
    backgroundColor: '#FFFFFF',
    color: '#656565',
    border: '1px solid #C5C5C5',
    margin: '0 0.5rem',

  };
  const navbarStyle = {
    backgroundColor: '#FFFFFF4D',

    width: '100%',
  };
  const navLinkStyle = {
    color: '#000000',
    fontSize: '12px'
  };
  const newArray = [
    "Officeroom",
    "EmployeeQuarter",
    'AirConditioning',
    "CoffeeBar",
    "WIFI",
    "Lift",
    " PowerBackup",
    "Labourrooms",
  ];
  const [buttonValue, setButtonvalue] = useState({
    Officeroom: false,
    EmployeeQuarters: false,
    AirConditioning: false,
    CoffeeBar: false,
    WIFI: false,
    Lift: false,
    PowerBackup: false,
    "Labourrooms": false
  });
  const [count, setCount] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddCount = () => {
    if (inputValue.trim() !== "") {
      setCount((prevCount) => [...prevCount, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCount();
    }
  };
  const handleButton = (type) => {
    if (!buttonValue[type]) {
      setButtonvalue((prevValue) => ({
        ...prevValue,
        [type]: true,
      }));
      setCount((prevCount) => [...prevCount, type]);
    }
  };
  const handleRemoveCount = (itemRemove) => {
    if (newArray.includes(itemRemove)) {
      setButtonvalue((prevValue) => ({
        ...prevValue,
        [itemRemove]: false,
      }));
      setCount((prevCount) =>
        prevCount.filter((outdoor) => outdoor !== itemRemove)
      );
    } else {
      setCount((prevCount) =>
        prevCount.filter((outdoor) => outdoor !== itemRemove)
      );
    }
  };
  const [buttonAdd, setButtonAdd] = useState({
    "Car Parking": false,
    Security: false,
    "Street Lights": false,
    "Avenue Trees": false,
    Compound: false,

    "Club House": false,
    "Community Hall": false,
    Saloon: false,
    Pool: false,


  });

  const newvalue = [
    "Car Parking",
    "Security",
    "Street Lights",
    "Avenue Trees",


    "Compound",
    "ClubHouse",
    "Community Hall",
    "Saloon",
    " Pool",


  ];

  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setData((prevData) => [...prevData, input]);
      setInput("");
    }
  };

  const handleKeys = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleButtonClickss = (datta) => {
    if (!buttonAdd[datta]) {
      setButtonAdd((prevButtonAdd) => ({
        ...prevButtonAdd,
        [datta]: true,
      }));
      setData((prevData) => [...prevData, datta]);
    }
  };

  const handleRemoveData = (Remove) => {
    if (newvalue.includes(Remove)) {
      setButtonAdd((prevButtonAdd) => ({
        ...prevButtonAdd,
        [Remove]: false,
      }));
      setData((prevData) => prevData.filter((item) => item !== Remove));
    } else {
      setData((prevData) => prevData.filter((item) => item !== Remove));
    }
  };
  const newData = [


    "Residential",
    "Commercial",
    "Industrial",
    " Agricultural:",
    " GovtUse",
    "  Lift",
    "PublicUtilities",
    "Special Economic",
    "Natural Conservation",
    "  Transport",
    "  Communication",
    " OpenSpace",
    'Public&Semi-Publicuse'



  ]
  const [buttonStates, setButtonStates] = useState({
    Residential: false,
    Commercial: false,
    Industrial: false,
    Agricultural: false,
    GovtUse: false,
    Lift: false,
    PublicUtilities: false,
    SpecialEconomic: false,
    NaturalConservation: false,
    Transport: false,
    Communication: false,
    OpenSpace: false,
    'Public&Semi-Publicuse': false,

  });

  const [content, setContent] = useState([]);
  const [inputtype, setInputType] = useState("");

  const handleinput = () => {
    if (inputtype.trim() !== "") {
      setContent((prevContent) => [...prevContent, inputtype]);
      setInputType("");
    }
  }

  const handleButtonContent = (buttonName) => {

    if (!buttonStates[buttonName]) {
      setButtonStates((prevStates) => ({
        ...prevStates,
        [buttonName]: true,
      }));

      setContent((prevContent) => [...prevContent, buttonName]);


    }
  };

  const handleKeytype = (e) => {
    if (e.key === "Enter") {
      handleinput();
    }
  };




  const handleRemoveContent = (itemToRemove) => {
    if (newData.includes(itemToRemove)) {
      setButtonAdd((prevStates) => ({
        ...prevStates,
        [itemToRemove]: false,
      }));
      setContent((prevContent) => prevContent.filter((item) => item !== itemToRemove));
    } else {
      setContent((prevContent) => prevContent.filter((item) => item !== itemToRemove));
    }
  };


  const [upload, setupload] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedvalue, setselectedvalue] = useState('');
  const [selectedLogo, setselectedLogo] = useState('');
  const [selectedroom, setselectedroom] = useState('');
  const [selectedKitchen, setselectedKitchen] = useState('');
  const [selectedPlan, setselectedPlan] = useState('');
  const [selectedmap, setselectedmap] = useState('');
  const handleUpload = () => {
    if (upload === 'Site View' && selectedImage) {
      console.log('Uploading Site View image:', selectedImage);

      setSelectedImage('');
    } else if (upload === 'FMB' && selectedFile) {
      console.log('Uploading FMB image:', selectedFile);

      setSelectedFile('');
    } else if (upload === 'Location Map' && selectedvalue) {
      console.log('Uploading Location Map image:', selectedvalue);

      setselectedvalue('');
    } else if (upload === 'Logo' && selectedLogo) {
      console.log('Uploading Logo image:', selectedLogo);

      setSelectedImage('');
    } else {
      console.log('No image selected');
    }
  };

  const handleImage = (values) => {

    setupload(values)

  }




  const handleImageChange = (event) => {
    const file = event.target.files[0];



    setSelectedImage(file);

  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleImagevalue = (event) => {
    const file = event.target.files[0];



    setselectedvalue(file);

  };
  const handleImagerooms = (event) => {
    const file = event.target.files[0];



    setselectedroom(file);

  }

  const handleFileKitchen = (event) => {
    const file = event.target.files[0];


    setselectedKitchen(file);
  }

  const handleImageplan = (event) => {
    const file = event.target.files[0];


    setselectedPlan(file);
  }
  const handleImagemap = (event) => {
    const file = event.target.files[0];
    setselectedmap(file)
  }

  const handleImageLogo = (event) => {
    const file = event.target.files[0];



    setselectedLogo(file);

  };
  const removeSelectedImage = () => {
    setSelectedImage('');
  };

  const removeSelectedImage1 = () => {
    setSelectedFile('');
  };


  const removeSelectedImage2 = () => {
    setselectedvalue('');
  };
  const removeSelectedroom = () => {
    setselectedroom('');
  }

  const removeSelectedKitchen = () => {
    setselectedKitchen("");
  }
  const removeSelectedplan = () => {
    setselectedPlan('');
  }
  const removeSelectedmap = () => {
    setselectedmap('');
  }
  const removeSelectedLogo = () => {
    setselectedLogo('');
  };
  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    address: "",
    propertyLocation: "",
    city: "",
    buildArea: "",
    ploatArea: "",
    roadWidth: "",
    category: "",
    status: "",
    condition: "",
    leasePrice: "",
    leasePricepermonth: "",
    advanceAmount: "",
    description: "",
    typeoffactory: "",
    leasePeriod: "",
    agentCommision:"",
    age:"",
    month:""
  });
  //onchange function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  //form validation
  const validateFormData = (data) => {
    const errors = {};

    if (!data.propertyLocation.trim()) {
      errors.propertyLocation = "Please enter a property location";
    }
    if (!data.city.trim()) {
      errors.city = "Please enter city name";
    }
    if (!data.buildArea.trim()) {
      errors.buildArea = "Please enter build up area";
    }
    if (!data.ploatArea.trim()) {
      errors.ploatArea = "Please enter plot area ";
    }
    if (!data.roadWidth.trim()) {
      errors.roadWidth = "Please enter road width";
    }
    if (!data.address.trim()) {
      errors.address = "Please enter the address";
    }

    if (!data.leasePrice.trim()) {
      errors.leasePrice = "Please enter lease price";
    }
    if (!data.advanceAmount.trim()) {
      errors.advanceAmount = "Please enter advance amount";
    }

    if (!data.description.trim()) {
      errors.description = "Please enter description";
    }
    if (!data.typeoffactory.trim()) {
      errors.typeoffactory = "Please enter factory";
    }

    if (!data.leasePeriod.trim()) {
      errors.leasePeriod = "Please enter leasePeriod";
    }
    if(activeButton === "Agent"){
      if (!data.agentCommision.trim()) {
        errors.agentCommision = "Please enter agentCommision";
      }
    }
    // if (!data.leasePricepermonth.trim()) {
    //   errors.leasePricepermonth = "Please enter leasePricepermonth";
    // }
    // form submition request

    // form submition request
    return errors;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateFormData(formValue);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("please fill required field before submiting", {
        hideProgressBar: true,
      });
      return;
    }
    submitForm(formValue);
  };
  console.log(input);
  console.log(formValue);
 
// form submittion after validation
const submitForm = async (formValue) => {
  const formData = new FormData();
  formData.append("name", user?.userName);
  formData.append("phone", `+${user?.phone}`);
  formData.append("email", user?.email);
  formData.append("property_type", selectedPropType);
  formData.append("commercial.commercial_type",four);
  formData.append("you_are_here_to", second.toLowerCase());
  formData.append("owner", activeButton === "Owner");
  formData.append("agent", activeButton === "Agent");
  formData.append("builder", activeButton === "Builder");
  // formData.append("title", formValue?.propertyName);
  formData.append(
    "factory.built_up_area",
    parseInt(formValue?.buildArea)
  );
  formData.append("factory.built_up_area_unit", "sqft");
  formData.append("factory.address", formValue?.address);
  formData.append(
    "factory.available_floors",
    parseInt(formValue?.floors)
  );

  formData.append(
    "title",
    formValue?.typeoffactory
  );



  formData.append(
    "factory.plot_area",
    parseInt(formValue?.ploatArea)
  );
  formData.append("factory.plot_area_unit", "sqft");
  formData.append("factory.road_width", parseInt(formValue?.roadWidth));
  formData.append("factory.road_width_unit", "m");

  // dummy data to avoid errors

  // ddddd
  formData.append("factory.condition", formValue?.condition);
  formData.append("factory.status", formValue?.status);
  formData.append("description", formValue?.description);
  formData.append("location", formValue?.propertyLocation);
  formData.append("city", formValue?.city);
  formData.append("factory.floor_number", formValue?.floorNumber);
  formData.append("factory.age", formValue?.age);
  formData.append("factory.under_construction_months", formValue?.month);
  formData.append("lease_amount", formValue?.leasePrice);
  formData.append("lease_amount_per", formValue?.leasePricepermonth);
  formData.append("lease_period", formValue?.leasePeriod);
  // formData.append("lease_period_unit", formValue?.leasePrice);
  formData.append("advance", formValue?.advanceAmount);
  data.forEach((element, index) => {
    formData.append(
      `factory.outdoor_facilities[${index}]facility.name`,
      element
    );
  });
  count.forEach((element, index) => {
    formData.append(
      `factory.indoor_facilities[${index}]facility.name`,
      element
    );
  });
  content.forEach((element, index) => {
    formData.append(`factory.land_zone[${index}]name`, element);
  });
  if (selectedImage) {
    formData.append(`factory_images[${0}]section`, "exterior_view");
    formData.append(`factory_images[${0}]image`, selectedImage);
  }

  if (selectedFile) {
    formData.append(`factory_images[${1}]section`, "interior_view");
    formData.append(`factory_images[${1}]image`, selectedFile);
  }
  if (selectedroom) {
    formData.append(`factory_images[${2}]section`, "washroom");
    formData.append(`factory_images[${2}]image`, selectedroom);
  }
  if (selectedKitchen) {
    formData.append(`factory_images[${3}]section`, "floor_plan");
    formData.append(`factory_images[${3}]image`, selectedKitchen);
  }
  if (selectedmap) {
    formData.append(`factory_images[${4}]section`, "location_map");
    formData.append(`factory_images[${4}]image`, selectedmap);
  }
  if (selectedLogo) {
    formData.append(`factory_images[${5}]section`, "logo");
    formData.append(`factory_images[${5}]image`, selectedLogo);
  }
  try {
    const response = await axios.post(
      ` ${Baseurl}createproperty/`,
      formData,
      UserConfig
    );
    console.log(response);
    navigate("/check",{state : response.data})
  } catch (error) {
    console.error("Server error", error);
    toast.error("something went wrong", {
      hideProgressBar: true,
      position: "top-center",
    });
  }
};


return (
  <div>
    <div>
      <Form className="mx-3">
        <h5 className='mt-5 gy-3'>Address</h5>
        <textarea className="form-control mt-4"
          style={{
            width: '1170px', height: "270px",
            borderRadius: '30px',
            border: '1px solid #D7242A'
          }}
          placeholder="Enter full address.."
          id="message" rows="5"
          name="address"
          isInvalid={!!errors.address}
          value={formValue.address}
          onChange={handleChange} required></textarea>
        {errors.address && <div className="text-danger">{errors.address}</div>}
        <Row className="mt-5">
          <Col>
            <Form.Group controlId="formGroup1">
              <Form.Label>Type of Factory</Form.Label>
              <Form.Control type="text"
                placeholder="Enter Name"
                style={{ ...formControllStyle }}
                name="typeoffactory"
                isInvalid={!!errors.typeoffactory}
                value={formValue.typeoffactory}
                onChange={handleChange} />
            </Form.Group>
          </Col>

        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <Form.Group controlId="formGroup3">
              <Form.Label>Property Location</Form.Label>
              <Form.Control type="text"
                placeholder="Property Location"
                style={{ ...formControlStyle }}
                name="propertyLocation"
                isInvalid={!!errors.propertyLocation}
                value={formValue.propertyLocation}
                onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroup4">
              <Form.Label>City</Form.Label>
              <Form.Control type="text"
                placeholder="City"
                style={{ ...formControlStyle }}
                name="city"
                isInvalid={!!errors.city}
                value={formValue.city}
                onChange={handleChange} />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <Form.Group controlId="formGroup3">
              <Form.Label>Building Built Up Area</Form.Label>
              <div className='rounded-pill' style={{ position: 'relative', display: 'inline-block' }}>
                <Form.Control
                  type="number"
                  placeholder="Area"
                  style={{ ...formControlStyle }}
                  className="form-select"
                  name="buildArea"
                  isInvalid={!!errors.buildArea}
                  value={formValue.buildArea}
                  onChange={handleChange} />
                <select className='rounded-end down border-start-0 ps-2' style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', }}>
                  <option>Sq.ft</option>

                </select>
              </div>
              {errors.buildArea && (
                <div className="text-danger">{errors.buildArea}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroup5">
              <Form.Label>Plot /Land Area</Form.Label><br />
              <div className='rounded-pill' style={{ position: 'relative', display: 'inline-block' }}>
                <Form.Control
                  type="number"
                  placeholder="Area"
                  style={{ ...formControlStyle }}
                  name="ploatArea"
                  isInvalid={!!errors.ploatArea}
                  value={formValue.ploatArea}
                  onChange={handleChange}
                />
                <select className='rounded-end down border-start-0 ps-2' style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', }}>
                  <option>ft</option>
                  <option>mt</option>

                  <option>Sq.ft</option>
                </select>
              </div>
              {errors.ploatArea && (
                <div className="text-danger">{errors.ploatArea}</div>
              )}
            </Form.Group>
          </Col>
        </Row>



        <Row className="gx-md-3 mt-5">
          {/* Third Row */}
          <Col md={6}>
            <Form.Group controlId="formGroup5">
              <Form.Label>Road Width</Form.Label><br />
              <div className='rounded-pill' style={{ position: 'relative', display: 'inline-block' }}>
                <Form.Control
                  type="number"
                  placeholder="Road Width"
                  style={{ ...formControlStyle }}
                  name="roadWidth"
                  isInvalid={!!errors.roadWidth}
                  value={formValue.roadWidth}
                  onChange={handleChange}
                />
                <select className='rounded-end down border-start-0 ps-2' style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', }}>
                  <option>ft</option>
                  <option>mt</option>
                </select>
              </div>
              {errors.roadWidth && (
                <div className="text-danger">{errors.roadWidth}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>

          </Col>
        </Row>
      </Form>
      <div className='mt-5'>
        <h5 className='mb-5'>Land Zone</h5>

        <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3', width: '1170px' }}>
          <Card.Body>





            <div className="row mb-2">




              <div className='d-flex gap-3 flex-wrap'>
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
                  placeholder="Typesomething"
                  value={inputtype}
                  onChange={(e) => setInputType(e.target.value)}
                  onKeyPress={handleKeytype}
                  style={{ border: "none" }}
                />
              </div>

              <hr />

              <div className="container">
                <div className="d-flex gap-3 flex-wrap"> {/* Set the maximum number of buttons per row */}
                  {Object.keys(buttonStates).map((buttonName) => (
                    <div key={buttonName} className="col mb-2">
                      <button
                        className={`btn ${buttonStates[buttonName] ? 'btn-Nam' : 'btn-Name'}`}
                        onClick={() => handleButtonContent(buttonName)}
                        style={{ width: '100%' }} // Ensure buttons take full width
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
      <h5 className='mt-4'>Category of Project</h5>
      <div className='custom-radio d-flex mt-4' onChange={handleChange}>
        <div className="flex-grow-1 me-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadio1"
              value="new"
            />
            <label className="form-check-label mb-1" htmlFor="exampleRadio1">
              New
            </label>
          </div>
        </div>

        <div className="flex-grow-1 me-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="exampleRadio2"
              value="old"
            />
            <label className="form-check-label" htmlFor="exampleRadio2">
              Old
            </label>
          </div>
        </div>

        <div className="flex-grow-1 me-2">
          <input className="inp"
            placeholder="other if any..."
            name="age"
            onChange={handleChange} />
        </div>
      </div>

      <h5 className='mt-4'>Status</h5>
      <div className='custom-radio d-flex mt-4' onChange={handleChange}>
        <div className="flex-grow-1">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              value="fully_furnished"
              id="exampleRadio1"

            />
            <label className="form-check-label mb-1" htmlFor="exampleRadio1">
              Fully Furnished
            </label>
          </div>
        </div>

        <div className="flex-grow-1 ms-1">
          <div className="form-check ms-1">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="exampleRadio2"
              value="semi_furnished"
            />
            <label className="form-check-label" htmlFor="exampleRadio2">
              Semi Furnished
            </label>
          </div>
        </div>

        <div className="flex-grow-1">
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="exampleRadio3"
              value="unfurnished"
            />
            <label className="form-check-label" htmlFor="exampleRadio3">
              Unfurnished
            </label>
          </div>
        </div>
      </div>

      <h5 className='mt-4'>Condition</h5>
      <div className='custom-radio d-flex mt-4' onChange={handleChange}>
        <div className="flex-grow-1">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="condition"
              id="exampleRadio1"
              value="ready_to_move"
            />
            <label className="form-check-label mb-1" htmlFor="exampleRadio1">
              Ready to move
            </label>
          </div>
        </div>

        <div className="flex-grow-1 ms-2">
          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="condition"
              id="exampleRadio2"
              value="under_construction"
            />
            <label className="form-check-label" htmlFor="exampleRadio2">
              Under Construction
            </label>
          </div>
        </div>

        <div className="flex-grow-1 me-3">
          <input className="inp text-start"
            placeholder="If under construction...."
            onChange={handleChange}
            name="month" />
        </div>
      </div>

      <div className="mt-5">
        <h5 className="mb-5">Indoor Facility</h5>

        <Card
          style={{
            borderRadius: "10px",
            border: "1px solid #B3B3B3",
            width: "1170px",
          }}
        >
          <Card.Body>
            <div className="row mb-2">
              <div className="d-flex gap-3 flex-wrap ">
                {/** // <input placeholder="tyoe here " onClick={(e)=>setCount("e")} /> */}

                {count.map((items) => (
                  <button
                    key={items}
                    className="btn btn-values  mb-2 me-2"
                    onClick={() => handleRemoveCount(items)}
                  >
                    {items} <FaTimes />
                  </button>
                ))}
                {/** check this page --> sell --> residential --? duplex */}
                <input
                  placeholder="Typesomething"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  style={{ border: "none" }}
                />
              </div>

              <hr />
              <div className="row mb-2">
                <div className="d-flex flex-wrap" style={{ justifyContent: 'space-between', gap: '10px' }}>
                  {Object.keys(buttonValue).map((type) => (
                    <div key={type} className="col mb-2 me-2">
                      <button
                        className={`btn ${buttonValue[type] ? "btn-Nam" : "btn-Name"}`}
                        onClick={() => handleButton(type)}
                        style={{ width: "100%" }}
                      >
                        {type}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="mt-5">
        <h5 className="mb-5">Outdoor Facility</h5>
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
                {data.map((outdoors) => (
                  <button
                    key={outdoors}
                    className="btn btn-values mb-2 me-2"
                    onClick={() => handleRemoveData(outdoors)}
                  >
                    {outdoors} <FaTimes />
                  </button>
                ))}
                <input
                  placeholder="Type something"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeys}
                  style={{ border: "none" }}
                />
              </div>
              <hr />
              <div className="container">
                <div className="row row-cols-6">
                  {Object.keys(buttonAdd).map((datta) => (
                    <div key={datta} className="col mb-2 me-2">
                      <button
                        className={`btn ${buttonAdd[datta] ? "btn-Nam" : "btn-Name"
                          }`}
                        onClick={() => handleButtonClickss(datta)}
                        style={{ width: "100%" }}
                      >
                        {datta}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>






      <Form className=" mx-2">


        <Row className="mt-5">
          <Col className="">
            <Form.Group controlId="formGroup3">
              <Form.Label>LeasePeriod <span className='month'>(Per year)</span></Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                style={formControlStyle}
                name="leasePeriod"
                isInvalid={!!errors.leasePeriod}
                value={formValue.leasePeriod}
                onChange={handleChange} />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              {errors.leasePrice}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Group controlId="formGroup4">
              <Form.Label>Advance Amount</Form.Label>
              <Form.Control type="number"
                placeholder="Rs" style={formControlStyle}
                name="advanceAmount"
                isInvalid={!!errors.advanceAmount}
                value={formValue.advanceAmount}
                onChange={handleChange} />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              {errors.advanceAmount}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="">
            <Form.Group controlId="formGroup3">
              <Form.Label>Lease Amount</Form.Label><br />
              <div className='rounded-pill'
                style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                <Form.Control
                  type="number"
                  placeholder="Area"
                  style={{ ...formControlStyle }}
                  name="leasePrice"
                  isInvalid={!!errors.leasePrice}
                  value={formValue.leasePrice}
                  onChange={handleChange}
                />
                <select className='rounded-end down border-start-0' style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', }}
                  name="leasePricepermonth" onChange={handleChange}>
                  <option value="month">Per mnth</option>
                  <option value="year">Per yr</option>
                </select>
              </div>
            </Form.Group>
          </Col>
          <Row className="mt-5">
            {activeButton === "Agent" && (
              <Col className="">
                <Form.Group controlId="formGroup3">
                  <Form.Label>Agent Commision</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Rs"
                    style={formControlStyle}
                    name="agentCommision"
                    isInvalid={!!errors.agentCommision}
                    value={formValue.agentCommision}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                  {errors.agentCommision}
                </Form.Control.Feedback>
                </Form.Group>
              </Col>
            )}
            <Col>
              <Form.Group controlId="formGroup4">
              
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </Form>
      <h5 className='mt-5 gy-3'>Description</h5>
      <textarea className="form-control mt-4" style={{ width: '1170px', height: "270px", borderRadius: '30px', border: '1px solid #D7242A' }} placeholder="About the factory / Capacity / products / facilities etc.." id="message" rows="5"
        name="description"
        isInvalid={!!errors.description}
        value={formValue.description}
        onChange={handleChange}
        required></textarea>
      {errors.description && (
        <div className="text-danger">{errors.description}</div>
      )}
      <h5 className='mt-5 gy-3'>Upload Photos</h5>
      <Card className="mt-5" style={{ width: '1170px', height: "270px", borderRadius: '30px', border: '1px solid #D7242A' }}>
        <Card.Body>
          <nav className="navbar navbar-expand">
            <div className="d-flex justify-content-between" style={navbarStyle}>
              <ul className="navbar-nav value d-flex justify-content-between w-100">
                <li className="nav-item ">
                  <a
                    className={`nav-link ${upload === "Exterior View" ? 'design' : ''}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleImage('Exterior View')}
                  >
                    Exterior View
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className={`nav-link ${upload === "Interior" ? 'design' : ''}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    onClick={() => handleImage('Interior')}
                  >
                    Interior
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${upload === "Washroom" ? 'design' : ''}`}
                    style={navLinkStyle} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleImage('Washroom')}
                  >
                    Washroom
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${upload === "Floor Plan" ? 'design' : ''}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    onClick={() => handleImage('Floor Plan')}>
                    Floor Plan
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className={`nav-link ${upload === "Location Map" ? 'design' : ''}`}
                    style={navLinkStyle} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleImage('Location Map')} >
                    Location Map
                  </a>
                </li>
                {activeButton === "Builder" &&
                  <li className="nav-item ">
                    <a
                      className={`nav-link ${upload === "Logo" ? 'design' : ''}`}
                      style={navLinkStyle} onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage('Logo')}>
                      Logo
                    </a>
                  </li>
                }
              </ul>

            </div>
          </nav>
          <hr />
          {/* <div className="text-center text-end">
         <button className="btn btn-primary mt-2" style={{color:'#fff',backgroundColor:'#D7242A'}} onClick={handleUpload}>
         <input type="file" accept="image/*" onChange={handleImageChange}/>
         </button>
         </div> */}
          {/* <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload} >
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
            </div>

            {selectedImage && (
              <div className="mt-3 text-center">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt={selectedImage ? selectedImage.name : 'upload image'}
                  style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '10px', border: '1px solid' }}
                />
              </div>

            )} */}

          {upload === 'Exterior View' &&
            <div>
              <div className="file-input d-flex justify-content-center align-items-center">
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="file-input__input"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label className="file-input__label" htmlFor="file-input">
                  <span>Upload file</span>
                </label>
              </div>


              {selectedImage && (
                <div className="mt-3 text-center">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt={selectedImage ? selectedImage.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                  />
                  <button onClick={removeSelectedImage} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                  </button>
                </div>
              )}
            </div>
          }
          {upload === 'Interior' &&
            <div>
              <div className="file-input d-flex justify-content-center align-items-center" >
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
                    alt={selectedFile ? selectedFile.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                  />
                  <button onClick={removeSelectedImage1} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                  </button>
                </div>
              )}
            </div>
          }


          {upload === 'Washroom' &&
            <div>
              <div className="file-input d-flex justify-content-center align-items-center">
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="file-input__input"
                  accept="image/*"
                  onChange={handleImagerooms}
                />
                <label className="file-input__label" htmlFor="file-input">
                  <span>Upload file</span>
                </label>
              </div>


              {selectedroom && (
                <div className="mt-3 text-center">
                  <img
                    src={URL.createObjectURL(selectedroom)}
                    alt={selectedroom ? selectedroom.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                  />
                  <button onClick={removeSelectedroom} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                  </button>
                </div>
              )}
            </div>
          }
          {upload === 'Floor Plan' &&
            <div>
              <div className="file-input d-flex justify-content-center align-items-center" >
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="file-input__input"
                  accept="image/*"
                  onChange={handleFileKitchen}
                />
                <label className="file-input__label" htmlFor="file-input">
                  <span>Upload file</span>
                </label>
              </div>

              {selectedKitchen && (
                <div className="mt-3 text-center">
                  <img
                    src={URL.createObjectURL(selectedKitchen)}
                    alt={selectedKitchen ? selectedKitchen.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                  />
                  <button onClick={removeSelectedKitchen} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                  </button>
                </div>
              )}
            </div>
          }


          {upload === 'Location Map' && (
            <div>
              <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload}>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="file-input__input"
                  accept="image/*"
                  onChange={handleImagemap}
                />
                <label className="file-input__label" htmlFor="file-input">
                  <span>Upload file</span>
                </label>
              </div>

              {selectedmap && (
                <div className="mt-3 text-center">
                  <img
                    src={URL.createObjectURL(selectedmap)}
                    alt={selectedmap ? selectedmap.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                  />
                  <button onClick={removeSelectedmap} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                  </button>
                </div>
              )}
            </div>
          )}
          {upload === 'Logo' &&
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
                    alt={selectedLogo ? selectedLogo.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                  />
                  <button onClick={removeSelectedLogo} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                  </button>
                </div>
              )}
            </div>
          }



        </Card.Body>
      </Card>

    </div>

    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="buttonmobile mt-5"
        style={{ width: "370px" }}
        onClick={(e) => handleSubmit(e)}
      >
        Post Property
      </button>
    </div>
  </div>
)
}

export default FactoryLease
