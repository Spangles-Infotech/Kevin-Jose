import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import {
  BedroomSelect,
  DescriptionBox,
  Field,
  RadioField,
  SelectField,
} from "../FormComponent";
import { FaTimes } from "react-icons/fa";
import {
  CommercialImagesCat,
  foodType,
  indoorFacilities,
  occupancy,
  outdoorFacilities,
  pgImgCat,
  rentPeriod,
} from "../../Data";

import { Baseurl, UserConfig } from "../../request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PgHostel({ options, user }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  const navigate = useNavigate();
  // indoor
  const [inputValue, setInputValue] = useState("");
  const [selectedFacility, setSelectedFacility] = useState([]);
  const toggleFacility = (facility) => {
    if (selectedFacility.includes(facility)) {
      setSelectedFacility(selectedFacility.filter((item) => item !== facility));
    } else {
      setSelectedFacility([...selectedFacility, facility]);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputAdd = () => {
    if (
      inputValue.trim() !== "" &&
      !selectedFacility.includes(inputValue.trim())
    ) {
      setSelectedFacility([...selectedFacility, inputValue.trim()]);
      setInputValue("");
    }
  };

  // outdoor
  const [outInputValue, setOutInputValue] = useState("");
  const [outSelectedFacility, setOutSelectedFacility] = useState([]);
  const outoggleFacility = (facility) => {
    if (outSelectedFacility.includes(facility)) {
      setOutSelectedFacility(
        outSelectedFacility.filter((item) => item !== facility)
      );
    } else {
      setOutSelectedFacility([...outSelectedFacility, facility]);
    }
  };
  const handleOutInputChange = (e) => {
    setOutInputValue(e.target.value);
  };

  const handleOutInputAdd = () => {
    if (
      outInputValue.trim() !== "" &&
      !outSelectedFacility.includes(outInputValue.trim())
    ) {
      setOutSelectedFacility([...outSelectedFacility, outInputValue.trim()]);
      setOutInputValue("");
    }
  };

  //    land
  const [landinputValue, setLandinputValue] = useState("");
  const [selectedLandFacility, setSelectedLandFacility] = useState([]);

  const toggleLandFacility = (facility) => {
    if (selectedLandFacility.includes(facility)) {
      setSelectedLandFacility(
        selectedLandFacility.filter((item) => item !== facility)
      );
    } else {
      setSelectedLandFacility([...selectedLandFacility, facility]);
    }
  };
  const handleInputChangeLand = (e) => {
    setLandinputValue(e.target.value);
  };

  const handleInputAddLand = () => {
    if (
      landinputValue.trim() !== "" &&
      !selectedLandFacility.includes(landinputValue.trim())
    ) {
      setSelectedLandFacility([...selectedLandFacility, landinputValue.trim()]);
      setLandinputValue("");
    }
  };

  const [foodinputValue, setFoodinputValue] = useState("");
  const [selectedFood, setSelectedFood] = useState([]);

  const toggleFood = (facility) => {
    if (selectedFood.includes(facility)) {
      setSelectedFood(selectedFood.filter((item) => item !== facility));
    } else {
      setSelectedFood([...selectedFood, facility]);
    }
  };
  const handleInputChangeFood = (e) => {
    setFoodinputValue(e.target.value);
  };

  const handleInputAddFood = () => {
    if (
      foodinputValue.trim() !== "" &&
      !selectedFood.includes(foodinputValue.trim())
    ) {
      setSelectedFood([...selectedFood, foodinputValue.trim()]);
      setFoodinputValue("");
    }
  };

  const [imageCat, setImageCat] = useState("Exterior View");

  const [exterior, setExterior] = useState([]);
  const [living, setLiving] = useState([]);
  const [single, setSingle] = useState([]);
  const [double, setDouble] = useState([]);
  const [triple, setTriple] = useState([]);
  const [location, setLocation] = useState([]);
  const [logo, setLogo] = useState([]);

  const handleImageUpload = (event) => {
    if (imageCat === "Exterior View") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - exterior.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setExterior([...exterior, ...newImages]);
    } else if (imageCat === "Living Room") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - living.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setLiving([...living, ...newImages]);
    } else if (imageCat === "Bedrooms") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - single.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setSingle([...single, ...newImages]);
    } else if (imageCat === "Bathrooms") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - double.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setDouble([...double, ...newImages]);
    } else if (imageCat === "Kitchen") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - triple.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setTriple([...triple, ...newImages]);
    } else if (imageCat === "Location Map") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - location.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setLocation([...location, ...newImages]);
    } else if (imageCat === "logo") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - logo.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setLogo([...logo, ...newImages]);
    }
  };

  const handleRemoveImage = (id) => {
    if (imageCat === "Exterior View") {
      const filteredImages = exterior.filter((image) => image.id !== id);
      setExterior(filteredImages);
    } else if (imageCat === "Living Room") {
      const filteredImages = living.filter((image) => image.id !== id);
      setLiving(filteredImages);
    } else if (imageCat === "Bedrooms") {
      const filteredImages = single.filter((image) => image.id !== id);
      setSingle(filteredImages);
    } else if (imageCat === "Bathrooms") {
      const filteredImages = double.filter((image) => image.id !== id);
      setDouble(filteredImages);
    } else if (imageCat === "Kitchen") {
      const filteredImages = triple.filter((image) => image.id !== id);
      setTriple(filteredImages);
    } else if (imageCat === "Location Map") {
      const filteredImages = location.filter((image) => image.id !== id);
      setLocation(filteredImages);
    } else if (imageCat === "logo") {
      const filteredImages = logo.filter((image) => image.id !== id);
      setLogo(filteredImages);
    }
  };

  const onSubmit = async (formValue) => {
    console.log(formValue);
    const formData = new FormData();
    formData.append("name", user?.name);
    formData.append("phone", user?.phone);
    formData.append("email", user?.email);
    formData.append("property_type", "commercial");
    formData.append("commercial.commercial_type", options?.selectedSubType);
    formData.append("you_are_here_to", options?.selectedActivity);
    formData.append("owner", options?.selectedActivity === "sell");
    formData.append("agent", options?.selectedActivity === "rent");
    formData.append("builder", options?.selectedActivity === "lease");
    formData.append("title", formValue?.propertyName);
    formData.append("description", formValue?.description);
    formData.append("location", formValue?.propertyLocation);
    formData.append("city", formValue?.city);
    // formData.append("rent", formValue?.rentPrice);
    // Role condition ------>
    if (options?.selectedRole === "agent") {
      formData.append("agent_commission", formValue?.AgentCommision);
    }
    // pg
    formData.append("pgcolony.no_of_rooms", parseInt(formValue?.numberOfRoom));
    formData.append("pgcolony.address", formValue?.address);

    formData.append("pgcolony.total_floors", parseInt(formValue?.TotalFloor));
    formData.append("pgcolony.category_of_project", formValue?.category);
    formData.append("pgcolony.gender", formValue?.gender);
    formData.append("pgcolony.tenants_preferred", formValue?.tenantsPreferred);
    formData.append("pgcolony.status", formValue?.status);

    formData.append("pgcolony.room_types", formValue?.roomType);

    formData.append("pgcolony.single_room_price_for_ac", formValue?.singleAcRs);
    formData.append(
      "pgcolony.single_room_price_for_nonac",
      formValue?.singleNonAcRs
    );
    formData.append(
      "pgcolony.single_room_price_per_month",
      formValue?.singleRoomPeriod
    );
    formData.append("pgcolony.double_room_price_for_ac", formValue?.doubleAcRs);
    formData.append(
      "pgcolony.double_room_price_for_nonac",
      formValue?.doubleNonAcRs
    );
    formData.append(
      "pgcolony.double_room_price_per_month",
      formValue?.doubleRoomPeriod
    );
    formData.append(
      "pgcolony.triple_room_price_for_ac",
      formValue?.trippleAcRs
    );
    formData.append(
      "pgcolony.triple_room_price_for_nonac",
      parseInt(formValue?.trippleNonAcRs)
    );
    formData.append(
      "pgcolony.triple_room_price_per_month",
      formValue?.trippleRoomPeriod
    );
    formData.append(
      "pgcolony.security_deposit",
      parseInt(formValue?.securityDeposite)
    );
    // formData.append("pgcolony.occupancy", 5);

    selectedLandFacility.forEach((element, index) => {
      formData.append(`pgcolony.occupancy[${index}]name`, element);
    });
    outSelectedFacility.forEach((element, index) => {
      formData.append(
        `pgcolony.outdoor_facilities[${index}]facility.name`,
        element
      );
    });
    selectedFacility.forEach((element, index) => {
      formData.append(
        `pgcolony.indoor_facilities[${index}]facility.name`,
        element
      );
    });
    selectedFood.forEach((element, index) => {
      formData.append(`pgcolony.food_type[${index}]name`, element);
    });

    exterior?.forEach((image) => {
      formData.append(`pgcolony_images[${1}]section`, "exterior_view");
      formData.append(`pgcolony_images[${1}]image`, image.file);
    });
    living?.forEach((image) => {
      formData.append(`pgcolony_images[${2}]section`, "livingroom");
      formData.append(`pgcolony_images[${2}]image`, image.file);
    });
    single?.forEach((image) => {
      formData.append(`pgcolony_images[${3}]section`, "bedrooms");
      formData.append(`pgcolony_images[${3}]image`, image.file);
    });
    double?.forEach((image) => {
      formData.append(`pgcolony_images[${4}]section`, "bathrooms");
      formData.append(`pgcolony_images[${4}]image`, image.file);
    });
    triple?.forEach((image) => {
      formData.append(`pgcolony_images[${5}]section`, "kitchen");
      formData.append(`pgcolony_images[${5}]image`, image.file);
    });
    location?.forEach((image) => {
      formData.append(`pgcolony_images[${6}]section`, "location_map");
      formData.append(`pgcolony_images[${6}]image`, image.file);
    });
    logo?.forEach((image) => {
      formData.append(`pgcolony_images[${7}]section`, "logo");
      formData.append(`pgcolony_images[${7}]image`, image.file);
    });
    try {
      const response = await axios.post(
        ` ${Baseurl}createproperty/`,
        formData,
        UserConfig
      );
      console.log(response);
      navigate("/check", { state: response.data });
      // toast.success("Submitted", {
      //   hideProgressBar: true,
      //   position: "top-center",
      // });
    } catch (error) {
      console.error("Server error", error);
      toast.error("something went wrong", {
        hideProgressBar: true,
        position: "top-center",
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col>
          <Controller
            name="propertyName"
            control={control}
            defaultValue=""
            rules={{ required: "Property Name is required" }}
            render={({ field }) => (
              <Field
                label="Property Name"
                placeholder="Enter Name"
                isInvalid={!!errors.propertyName}
                errorMessage={errors.propertyName?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Controller
            name="propertyLocation"
            control={control}
            defaultValue=""
            rules={{ required: "Property Location is required" }}
            render={({ field }) => (
              <Field
                label="Property Location"
                placeholder="Enter Location"
                isInvalid={!!errors.propertyLocation}
                errorMessage={errors.propertyLocation?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Controller
            name="numberOfRoom"
            control={control}
            defaultValue=""
            rules={{ required: "Number of room is required" }}
            render={({ field }) => (
              <Field
                label="Number of Rooms"
                placeholder="Number"
                isInvalid={!!errors.numberOfRoom}
                errorMessage={errors.numberOfRoom?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            rules={{ required: "City is required" }}
            render={({ field }) => (
              <Field
                label="City"
                placeholder="Enter City"
                isInvalid={!!errors.city}
                errorMessage={errors.city?.message}
                {...field}
              />
            )}
          />
        </Col>

        <Col md={6}>
          <Controller
            name="TotalFloor"
            control={control}
            defaultValue=""
            rules={{ required: "Total floor is required" }}
            render={({ field }) => (
              <Field
                label="Total Floor"
                placeholder="Floor"
                isInvalid={!!errors.TotalFloor}
                errorMessage={errors.TotalFloor?.message}
                {...field}
              />
            )}
          />
        </Col>
      </Row>
      <Row>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={{ required: "Enter full address" }}
          render={({ field }) => (
            <DescriptionBox
              field={field}
              error={errors.description}
              label={"Address"}
            />
          )}
        />
      </Row>

      <Row>
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          render={({ field }) => (
            <>
              <Col>
                <RadioField
                  label="Category"
                  options={[
                    { value: "new", label: "New" },
                    { value: "resale", label: "Resale" },
                  ]}
                  field={field}
                  isInvalid={!!errors.category}
                  errorMessage={errors.category?.message}
                />
              </Col>
            </>
          )}
        />
      </Row>

      <Row>
        <Controller
          name="status"
          control={control}
          rules={{ required: "Status is required" }}
          render={({ field }) => (
            <>
              <Col>
                <RadioField
                  label="Status"
                  options={[
                    { value: "fully_furnished", label: "Fully Furnished" },
                    { value: "semi_furnished", label: "Semi Furnished" },
                    { value: "unfurnished", label: "Un Furnished" },
                  ]}
                  field={field}
                  isInvalid={!!errors.status}
                  errorMessage={errors.status?.message}
                />
              </Col>
            </>
          )}
        />
      </Row>

      <Row>
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field }) => (
            <>
              <Col>
                <RadioField
                  label="Gender"
                  options={[
                    { value: "boys", label: "Boys" },
                    { value: "girls", label: "Girls" },
                    { value: "both", label: "Both" },
                  ]}
                  field={field}
                  isInvalid={!!errors.gender}
                  errorMessage={errors.gender?.message}
                />
              </Col>
            </>
          )}
        />
      </Row>

      <Row>
        <Controller
          name="tenantsPreferred"
          control={control}
          rules={{ required: "Tenants prefferred is required" }}
          render={({ field }) => (
            <>
              <Col>
                <RadioField
                  label="Tenants Preferred"
                  options={[
                    { value: "students", label: "Students" },
                    { value: "professionals", label: "Professionals" },
                    { value: "both", label: "Both" },
                  ]}
                  field={field}
                  isInvalid={!!errors.tenantsPreferred}
                  errorMessage={errors.tenantsPreferred?.message}
                />
              </Col>
            </>
          )}
        />
      </Row>
      <Row>
        <Controller
          name="roomType"
          control={control}
          rules={{ required: "Room type is required" }}
          render={({ field }) => (
            <>
              <Col>
                <RadioField
                  label="Rooms Types"
                  options={[
                    { value: "A/C_rooms", label: "A/C rooms" },
                    { value: "Non_A/C_rooms", label: "Non A/C rooms" },
                    {
                      value: "A/C_&_Non_A/C_rooms",
                      label: "A/C & non A/C rooms",
                    },
                  ]}
                  field={field}
                  isInvalid={!!errors.roomType}
                  errorMessage={errors.roomType?.message}
                />
              </Col>
            </>
          )}
        />
      </Row>

      <h5 className="py-3">Occupancy </h5>
      <div className="form-shadow px-2 rounded-4 my-4 ">
        <div className="d-flex align-items-center border-bottom py-2">
          <div
            className="d-flex align-items-center flex-wrap"
            style={{ width: "90%" }}
          >
            {selectedLandFacility.map((facility, index) => (
              <span
                key={index}
                className="rounded-pill border p-2 px-3 cursor-pointer mb-2 me-2 d-flex align-items-center text-danger fw-medium gap-3"
                style={{ fontSize: "13px", textTransform: "capitalize" }}
                onClick={() => toggleLandFacility(facility)}
              >
                {facility} <FaTimes color="red" />
              </span>
            ))}
            <input
              type="text"
              className="form-control border-0 ms-2"
              placeholder="Add facilities..."
              style={{ outline: "none", flex: 1 }}
              value={landinputValue}
              onChange={handleInputChangeLand}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleInputAddLand();
                }
              }}
            />
          </div>
        </div>

        <div className="pb-3 d-flex flex-wrap">
          {occupancy.map((facility, index) => (
            <span
              key={index}
              className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-pointer me-2 mb-2 ${
                selectedLandFacility.includes(facility)
                  ? "bg-danger text-white"
                  : ""
              }`}
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              onClick={() => toggleLandFacility(facility)}
            >
              {facility}
            </span>
          ))}
        </div>
      </div>

      <h5 className="py-3">Food Type </h5>
      <div className="form-shadow px-2 rounded-4 my-4 ">
        <div className="d-flex align-items-center border-bottom py-2">
          <div
            className="d-flex align-items-center flex-wrap"
            style={{ width: "90%" }}
          >
            {selectedFood.map((facility, index) => (
              <span
                key={index}
                className="rounded-pill border p-2 px-3 cursor-pointer mb-2 me-2 d-flex align-items-center text-danger fw-medium gap-3"
                style={{ fontSize: "13px", textTransform: "capitalize" }}
                onClick={() => toggleFood(facility)}
              >
                {facility} <FaTimes color="red" />
              </span>
            ))}
            <input
              type="text"
              className="form-control border-0 ms-2"
              placeholder="Add facilities..."
              style={{ outline: "none", flex: 1 }}
              value={foodinputValue}
              onChange={handleInputChangeFood}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleInputAddFood();
                }
              }}
            />
          </div>
        </div>

        <div className="pb-3 d-flex flex-wrap">
          {foodType.map((facility, index) => (
            <span
              key={index}
              className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-pointer me-2 mb-2 ${
                selectedFood.includes(facility) ? "bg-danger text-white" : ""
              }`}
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              onClick={() => toggleFood(facility)}
            >
              {facility}
            </span>
          ))}
        </div>
      </div>

      <h5 className="py-3">Indoor Facilities</h5>
      <div className="form-shadow px-2 rounded-4 my-4 ">
        <div className="d-flex align-items-center border-bottom py-2">
          <div
            className="d-flex align-items-center flex-wrap"
            style={{ width: "90%" }}
          >
            {selectedFacility.map((facility, index) => (
              <span
                key={index}
                className="rounded-pill border p-2 px-3 cursor-pointer mb-2 me-2 d-flex align-items-center text-danger fw-medium gap-3"
                style={{ fontSize: "13px", textTransform: "capitalize" }}
                onClick={() => toggleFacility(facility)}
              >
                {facility} <FaTimes color="red" />
              </span>
            ))}
            <input
              type="text"
              className="form-control border-0 ms-2"
              placeholder="Add facilities..."
              style={{ outline: "none", flex: 1 }}
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleInputAdd();
                }
              }}
            />
          </div>
        </div>

        <div className="pb-3 d-flex flex-wrap">
          {indoorFacilities.map((facility, index) => (
            <span
              key={index}
              className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-pointer me-2 mb-2 ${
                selectedFacility.includes(facility)
                  ? "bg-danger text-white"
                  : ""
              }`}
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              onClick={() => toggleFacility(facility)}
            >
              {facility}
            </span>
          ))}
        </div>
      </div>

      <h5 className="py-3">Outdoor Facilities</h5>
      <div className="form-shadow px-2 rounded-4 my-4 ">
        <div className="d-flex align-items-center border-bottom py-2">
          <div
            className="d-flex align-items-center flex-wrap"
            style={{ width: "90%" }}
          >
            {outSelectedFacility.map((facility, index) => (
              <span
                key={index}
                className="rounded-pill border p-2 px-3 cursor-pointer mb-2 me-2 d-flex align-items-center text-danger fw-medium gap-3"
                style={{ fontSize: "13px", textTransform: "capitalize" }}
                onClick={() => outoggleFacility(facility)}
              >
                {facility} <FaTimes color="red" />
              </span>
            ))}
            <input
              type="text"
              className="form-control border-0 ms-2"
              placeholder="Add facilities..."
              style={{ outline: "none", flex: 1 }}
              value={outInputValue}
              onChange={handleOutInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleOutInputAdd();
                }
              }}
            />
          </div>
        </div>

        <div className="pb-3 d-flex flex-wrap">
          {outdoorFacilities.map((facility, index) => (
            <span
              key={index}
              className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-pointer me-2 mb-2 ${
                outSelectedFacility.includes(facility)
                  ? "bg-danger text-white"
                  : ""
              }`}
              style={{ fontSize: "16px", textTransform: "capitalize" }}
              onClick={() => outoggleFacility(facility)}
            >
              {facility}
            </span>
          ))}
        </div>
      </div>

      <h5 className="py-3">Rent</h5>
      <Form.Label className=" fw-medium fs-5">Single Room Price</Form.Label>
      <Row>
        <Col md={4}>
          <Controller
            name="singleAcRs"
            control={control}
            defaultValue=""
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <Field
                placeholder="for A/C Room"
                isInvalid={!!errors.singleAcRs}
                errorMessage={errors.singleAcRs?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Controller
            name="singleNonAcRs"
            control={control}
            defaultValue=""
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <Field
                placeholder="for Non A/C Room"
                isInvalid={!!errors.singleNonAcRs}
                errorMessage={errors.singleNonAcRs?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Controller
            name="singleRoomPeriod"
            control={control}
            defaultValue=""
            rules={{ required: "Rent Period is required" }}
            render={({ field }) => (
              <BedroomSelect
                placeholder={"Select Rent Period"}
                bedroom={rentPeriod}
                isInvalid={!!errors.singleRoomPeriod}
                errorMessage={errors.singleRoomPeriod?.message}
                {...field}
              />
            )}
          />
        </Col>
      </Row>
      <Form.Label className=" fw-medium fs-5 mt-3">
        Double Sharing Room Price
      </Form.Label>
      <Row>
        <Col md={4}>
          <Controller
            name="doubleAcRs"
            control={control}
            defaultValue=""
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <Field
                placeholder="for A/C Room"
                isInvalid={!!errors.doubleAcRs}
                errorMessage={errors.doubleAcRs?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Controller
            name="doubleNonAcRs"
            control={control}
            defaultValue=""
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <Field
                placeholder="for Non A/C Room"
                isInvalid={!!errors.doubleNonAcRs}
                errorMessage={errors.doubleNonAcRs?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Controller
            name="doubleRoomPeriod"
            control={control}
            defaultValue=""
            rules={{ required: "Rent Period is required" }}
            render={({ field }) => (
              <BedroomSelect
                placeholder={"Select Rent Period"}
                bedroom={rentPeriod}
                isInvalid={!!errors.doubleRoomPeriod}
                errorMessage={errors.doubleRoomPeriod?.message}
                {...field}
              />
            )}
          />
        </Col>
      </Row>

      <Form.Label className=" fw-medium fs-5 mt-3">
        Triple Sharing Room Price
      </Form.Label>
      <Row>
        <Col md={4}>
          <Controller
            name="trippleAcRs"
            control={control}
            defaultValue=""
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <Field
                placeholder="for A/C Room"
                isInvalid={!!errors.trippleAcRs}
                errorMessage={errors.trippleAcRs?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Controller
            name="trippleNonAcRs"
            control={control}
            defaultValue=""
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <Field
                placeholder="for Non A/C Room"
                isInvalid={!!errors.trippleNonAcRs}
                errorMessage={errors.trippleNonAcRs?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Controller
            name="trippleRoomPeriod"
            control={control}
            defaultValue=""
            rules={{ required: "Rent Period is required" }}
            render={({ field }) => (
              <BedroomSelect
                placeholder={"Select Rent Period"}
                bedroom={rentPeriod}
                isInvalid={!!errors.trippleRoomPeriod}
                errorMessage={errors.trippleRoomPeriod?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Controller
            name="securityDeposite"
            control={control}
            defaultValue=""
            rules={{ required: "Security deposite is required" }}
            render={({ field }) => (
              <Field
                label="Security Deposite"
                placeholder="Parking"
                isInvalid={!!errors.securityDeposite}
                errorMessage={errors.securityDeposite?.message}
                {...field}
              />
            )}
          />
        </Col>

        {options?.selectedRole === "agent" && (
          <Col md={6}>
            <Controller
              name="AgentCommision"
              control={control}
              defaultValue=""
              rules={{ required: "Price is required" }}
              render={({ field }) => (
                <Field
                  label="Agent Commision"
                  placeholder="Rs"
                  isInvalid={!!errors.AgentCommision}
                  errorMessage={errors.AgentCommision?.message}
                  {...field}
                />
              )}
            />
          </Col>
        )}
      </Row>

      <Row>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <DescriptionBox
              field={field}
              error={errors.description}
              label={"Description"}
            />
          )}
        />
      </Row>

      <h5 className="my-5 gy-3   fw-medium fs-5">Upload Photos</h5>

      <div className="px-2 rounded-4 mt-4 border border-danger w-100 mx-auto">
        <div className="d-flex justify-content-evenly text-center gap-1 align-items-center border-bottom">
          {pgImgCat.map((imgType) => (
            <div
              className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
                imageCat === imgType &&
                "text-danger border-danger border-bottom"
              }`}
              style={{ fontSize: "20px", width: "20%" }}
              onClick={() => setImageCat(imgType)}
            >
              {imgType}
            </div>
          ))}

          {options.selectedRole === "builder" && (
            <div
              className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
                imageCat === "logo" && "text-danger border-danger border-bottom"
              }`}
              style={{ fontSize: "20px", width: "20%" }}
              onClick={() => setImageCat("logo")}
            >
              Logo
            </div>
          )}
        </div>

        {imageCat === "Exterior View" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-start">
              {exterior?.map((image) => (
                <div key={image.id} className="m-2 position-relative">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Uploaded ${imageCat} image`}
                    className="rounded-3"
                    style={{ maxWidth: "300px", height: "200px" }}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-pill"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center p-0 m-0"
              style={{ height: "250px" }}
            >
              <label
                htmlFor="uploadInput"
                className="text-danger btn border border-danger py-3 px-5 rounded-5"
              >
                Upload Photos
              </label>
              <input
                id="uploadInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
                multiple
              />
            </div>
          </>
        )}

        {/* fmb */}
        {imageCat === "Living Room" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {living.map((image) => (
                <div className="m-2 position-relative">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Uploaded ${imageCat} image`}
                    className="rounded-3"
                    style={{ maxWidth: "300px", height: "200px" }}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-pill"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center p-0 m-0"
              style={{ height: "250px" }}
            >
              <label
                htmlFor="uploadInput"
                className="text-danger btn border border-danger py-3 px-5 rounded-5"
              >
                Upload Photos
              </label>
              <input
                id="uploadInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </>
        )}

        {imageCat === "Bedrooms" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {single.map((image) => (
                <div className="m-2 position-relative">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Uploaded ${imageCat} image`}
                    className="rounded-3"
                    style={{ maxWidth: "300px", height: "200px" }}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-pill"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center p-0 m-0"
              style={{ height: "250px" }}
            >
              <label
                htmlFor="uploadInput"
                className="text-danger btn border border-danger py-3 px-5 rounded-5"
              >
                Upload Photos
              </label>
              <input
                id="uploadInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </>
        )}

        {imageCat === "Bathrooms" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {double.map((image) => (
                <div className="m-2 position-relative">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Uploaded ${imageCat} image`}
                    className="rounded-3"
                    style={{ maxWidth: "300px", height: "200px" }}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-pill"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center p-0 m-0"
              style={{ height: "250px" }}
            >
              <label
                htmlFor="uploadInput"
                className="text-danger btn border border-danger py-3 px-5 rounded-5"
              >
                Upload Photos
              </label>
              <input
                id="uploadInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </>
        )}

        {imageCat === "Kitchen" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {triple.map((image) => (
                <div className="m-2 position-relative">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Uploaded ${imageCat} image`}
                    className="rounded-3"
                    style={{ maxWidth: "300px", height: "200px" }}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-pill"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center p-0 m-0"
              style={{ height: "250px" }}
            >
              <label
                htmlFor="uploadInput"
                className="text-danger btn border border-danger py-3 px-5 rounded-5"
              >
                Upload Photos
              </label>
              <input
                id="uploadInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </>
        )}

        {/* location map */}
        {imageCat === "Location Map" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-end">
              {location.map((image) => (
                <div key={image.id} className="m-2 position-relative">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Uploaded ${imageCat} image`}
                    className="rounded-3"
                    style={{ maxWidth: "300px", height: "200px" }}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-pill"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center p-0 m-0"
              style={{ height: "250px" }}
            >
              <label
                htmlFor="uploadInput"
                className="text-danger btn border border-danger py-3 px-5 rounded-5"
              >
                Upload Photos
              </label>
              <input
                id="uploadInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </>
        )}

        {/*  logo */}
        {imageCat === "logo" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-end">
              {logo.map((image) => (
                <div key={image.id} className="m-2 position-relative">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Uploaded ${imageCat} image`}
                    className="rounded-3"
                    style={{ maxWidth: "300px", height: "200px" }}
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-pill"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center p-0 m-0"
              style={{ height: "250px" }}
            >
              <label
                htmlFor="uploadInput"
                className="text-danger btn border border-danger py-3 px-5 rounded-5"
              >
                Upload Photos
              </label>
              <input
                id="uploadInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </>
        )}
      </div>
      <div className="mt-5 d-grid col-4 mx-auto">
        <button type="submit" className="btn btn-danger rounded-pill py-3">
          Post Property
        </button>
      </div>
    </Form>
  );
}
