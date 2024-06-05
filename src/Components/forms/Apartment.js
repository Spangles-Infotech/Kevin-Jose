import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import {
  BedroomSelect,
  DescriptionBox,
  Field,
  RadioField,
  SelectField,
} from "./FormComponent";
import {
  bedroom,
  indoorFacilities,
  outdoorFacilities,
  residentialImagesCat,
} from "../Data";
import { FaTimes } from "react-icons/fa";
import { Baseurl, UserConfig } from "../request";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Apartment({ options, user }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  const navigate = useNavigate();
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

  const [imageCat, setImageCat] = useState("Exterior View");

  const [exterior, setExterior] = useState([]);
  const [living, setLiving] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [bathrooms, setBathrooms] = useState([]);
  const [Kitchen, setKitchen] = useState([]);
  const [building, setBuilding] = useState([]);
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
      const imagesToAdd = files.slice(0, 1 - bedrooms.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setBedrooms([...bedrooms, ...newImages]);
    } else if (imageCat === "Bathrooms") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - bathrooms.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setBathrooms([...bathrooms, ...newImages]);
    } else if (imageCat === "Kitchen") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - Kitchen.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setKitchen([...Kitchen, ...newImages]);
    } else if (imageCat === "Building Plan") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - building.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setBuilding([...building, ...newImages]);
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
      const filteredImages = bedrooms.filter((image) => image.id !== id);
      setBedrooms(filteredImages);
    } else if (imageCat === "Bathrooms") {
      const filteredImages = bathrooms.filter((image) => image.id !== id);
      setBathrooms(filteredImages);
    } else if (imageCat === "Kitchen") {
      const filteredImages = Kitchen.filter((image) => image.id !== id);
      setKitchen(filteredImages);
    } else if (imageCat === "Building Plan") {
      const filteredImages = building.filter((image) => image.id !== id);
      setBuilding(filteredImages);
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
    formData.append("property_type", "residential");
    formData.append("you_are_here_to", options?.selectedActivity);
    formData.append("owner", options?.selectedActivity === "sell");
    formData.append("agent", options?.selectedActivity === "rent");
    formData.append("builder", options?.selectedActivity === "lease");
    formData.append("title", formValue?.propertyName);
    formData.append("description", formValue?.description);
    formData.append("location", formValue?.propertyLocation);
    formData.append("advance", parseInt(formValue?.AdvanceAmount));
    formData.append("residential.residential_type", options?.selectedSubType);
    // activity  conditions -------->
    if (options?.selectedActivity === "sell") {
      formData.append("sale_price", formValue?.salePrice);
    } else if (options?.selectedActivity === "rent") {
      formData.append("rent", formValue?.rentPrice);
    } else if (options?.selectedActivity === "lease") {
      formData.append("lease_amount", formValue?.leasePrice);
      formData.append("lease_period", formValue?.leasePeriod);
      formData.append("lease_period_unit", formValue?.leasePeriod?.unit);
    }

    // Role condition ------>
    if (options?.selectedRole === "agent") {
      formData.append("agent_commission", formValue?.AgentCommision);
    }
    // house and appartment
    if (options.subTypeCat === "optionTwo") {
      formData.append("city", formValue?.city);
      formData.append("apartment.available_bhk", formValue?.bedroom);
      formData.append(
        "apartment.built_up_area",
        parseInt(formValue?.totalArea.value)
      );
      formData.append(
        "apartment.built_up_area_unit",
        formValue?.totalArea.unit
      );
      formData.append(
        "apartment.plot_area",
        parseInt(parseInt(formValue?.plotArea.value))
      );
      formData.append("apartment.plot_area_unit", formValue?.plotArea.unit);
      formData.append("apartment.total_floors", parseInt(formValue.totalFloor));

      formData.append("apartment.category_of_project", formValue?.category);
      formData.append("apartment.condition", formValue?.condition);
      formData.append("apartment.status", formValue?.status);
      formData.append(
        "apartment.floor_number",
        parseInt(formValue?.floorNumber)
      );
      selectedFacility.forEach((element, index) => {
        formData.append(
          `apartment.indoor_facilities[${index}]facility.name`,
          element
        );
      });
      outSelectedFacility.forEach((element, index) => {
        formData.append(
          `apartment.outdoor_facilities[${index}]facility.name`,
          element
        );
      });
      exterior?.forEach((image) => {
        formData.append(`apartment_images[${0}]section`, "exterior_view");
        formData.append(`apartment_images[${0}]image`, image.file);
      });

      living?.forEach((image) => {
        formData.append(`apartment_images[${1}]section`, "livingroom");
        formData.append(`apartment_images[${1}]image`, image.file);
      });
      bedrooms?.forEach((image) => {
        formData.append(`apartment_images[${2}]section`, "bedrooms");
        formData.append(`apartment_images[${2}]image`, image.file);
      });
      bathrooms?.forEach((image) => {
        formData.append(`apartment_images[${3}]section`, "bathrooms");
        formData.append(`apartment_images[${3}]image`, image.file);
      });
      Kitchen?.forEach((image) => {
        formData.append(`apartment_images[${4}]section`, "kitchen");
        formData.append(`apartment_images[${4}]image`, image.file);
      });

      building?.forEach((image) => {
        formData.append(`apartment_images[${5}]section`, "building_plan");
        formData.append(`apartment_images[${5}]image`, image.file);
      });
      location?.forEach((image) => {
        formData.append(`apartment_images[${6}]section`, "location_map");
        formData.append(`apartment_images[${6}]image`, image.file);
      });
      logo?.forEach((image) => {
        formData.append(`apartment_images[${6}]section`, "logo");
        formData.append(`apartment_images[${6}]image`, image.file);
      });
    } else {
      formData.append("house.available_bhk", formValue?.bedroom);
      formData.append(
        "house.built_up_area",
        parseInt(formValue?.totalArea?.value)
      );
      formData.append("house.built_up_area_unit", formValue?.totalArea?.unit);
      formData.append(
        "house.no_of_units_in_project",
        parseInt(formValue?.noUnit)
      );
      formData.append("house.total_floors", formValue?.totalFloor);
      formData.append("house.category_of_project", formValue?.category);

      formData.append("house.condition", formValue?.condition);
      formData.append("house.status", formValue?.status);

      selectedFacility.forEach((element, index) => {
        formData.append(
          `house.indoor_facilities[${index}]facility.name`,
          element
        );
      });
      outSelectedFacility.forEach((element, index) => {
        formData.append(
          `house.outdoor_facilities[${index}]facility.name`,
          element
        );
      });

      exterior?.forEach((image) => {
        formData.append(`house_images[${0}]section`, "exterior_view");
        formData.append(`house_images[${0}]image`, image.file);
      });

      living?.forEach((image) => {
        formData.append(`house_images[${1}]section`, "livingroom");
        formData.append(`house_images[${1}]image`, image.file);
      });
      bedrooms?.forEach((image) => {
        formData.append(`house_images[${2}]section`, "bedrooms");
        formData.append(`house_images[${2}]image`, image.file);
      });
      bathrooms?.forEach((image) => {
        formData.append(`house_images[${3}]section`, "bathrooms");
        formData.append(`house_images[${3}]image`, image.file);
      });
      Kitchen?.forEach((image) => {
        formData.append(`house_images[${4}]section`, "kitchen");
        formData.append(`house_images[${4}]image`, image.file);
      });

      building?.forEach((image) => {
        formData.append(`house_images[${5}]section`, "building_plan");
        formData.append(`house_images[${5}]image`, image.file);
      });
      location?.forEach((image) => {
        formData.append(`house_images[${6}]section`, "location_map");
        formData.append(`house_images[${6}]image`, image.file);
      });
      logo?.forEach((image) => {
        formData.append(`house_images[${6}]section`, "logo");
        formData.append(`house_images[${6}]image`, image.file);
      });
    }

    try {
      const response = await axios.post(
        ` ${Baseurl}createproperty/`,
        formData,
        UserConfig
      );
      navigate("/check", { state: response.data });
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
        <Col md={6}>
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
      </Row>
      <Row>
        {options?.subTypeCat === "optionTwo" && (
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
        )}

        <Col md={6}>
          <Controller
            name="bedroom"
            control={control}
            defaultValue=""
            rules={{ required: "Number of bedroom is required" }}
            render={({ field }) => (
              <BedroomSelect
                label={"Available BHK"}
                placeholder={"Select available BHK"}
                bedroom={bedroom}
                isInvalid={!!errors.bedroom}
                errorMessage={errors.bedroom?.message}
                {...field}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Controller
            name="totalArea"
            control={control}
            rules={{ required: "Total area is required" }}
            render={({ field }) => (
              <SelectField
                label={"Built Up Area"}
                type={"number"}
                width={"75%"}
                placeholder="Total Area"
                unit={[{ be: "sqft", fe: "Sqft" }]}
                field={field}
                isInvalid={!!errors.totalArea}
                errorMessage={errors.totalArea?.message}
              />
            )}
          />
        </Col>

        {options?.subTypeCat === "optionTwo" && (
          <Col md={6}>
            <Controller
              name="plotArea"
              control={control}
              rules={{ required: "Plot area is required" }}
              render={({ field }) => (
                <SelectField
                  label={"Plot Area"}
                  type={"number"}
                  width={"75%"}
                  placeholder="Plot Area"
                  unit={[{ be: "sqft", fe: "Sqft" }]}
                  field={field}
                  isInvalid={!!errors.plotArea}
                  errorMessage={errors.plotArea?.message}
                />
              )}
            />
          </Col>
        )}
      </Row>
      <Row>
        {options?.subTypeCat === "" && (
          <Col md={6}>
            <Controller
              name="noUnit"
              control={control}
              defaultValue=""
              rules={{ required: "Number of units required" }}
              render={({ field }) => (
                <Field
                  label="Number of Units in the Project"
                  placeholder="Number of Units in the Project"
                  isInvalid={!!errors.noUnit}
                  errorMessage={errors.noUnit?.message}
                  {...field}
                />
              )}
            />
          </Col>
        )}
        <Col md={6}>
          <Controller
            name="totalFloor"
            control={control}
            defaultValue=""
            rules={{ required: "Total Floor is required" }}
            render={({ field }) => (
              <Field
                label={"Total Floors"}
                placeholder="Floor"
                isInvalid={!!errors.totalFloor}
                errorMessage={errors.totalFloor?.message}
                {...field}
              />
            )}
          />
        </Col>
        {options?.subTypeCat === "optionTwo" && (
          <Col md={6}>
            <Controller
              name="floorNumber"
              control={control}
              defaultValue=""
              rules={{ required: "Floor Number is required" }}
              render={({ field }) => (
                <Field
                  label="Floor Number"
                  placeholder="Floor Number"
                  isInvalid={!!errors.floorNumber}
                  errorMessage={errors.floorNumber?.message}
                  {...field}
                />
              )}
            />
          </Col>
        )}
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
    

      <Controller
        name="condition"
        control={control}
        rules={{ required: "Condition is required" }}
        render={({ field }) => (
          <>
            <Col>
              <RadioField
                label="Condition"
                options={[
                  { value: "ready_to_move", label: "Ready to move" },
                  { value: "under_construction", label: "Under Construction" },
               
                ]}
                field={field}
                isInvalid={!!errors.condition}
                errorMessage={errors.condition?.message}
              />
            </Col>
          </>
        )}
      />

      <h5>Indoor Facilities</h5>
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

      <h5>Outdoor Facilities</h5>
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

      <Row>
        {options?.selectedActivity === "sell" && (
          <Col md={6}>
            <Controller
              name="salePrice"
              control={control}
              defaultValue=""
              rules={{ required: "Sale Price is required" }}
              render={({ field }) => (
                <Field
                  type={"number"}
                  label="Sale Price"
                  placeholder="Rs"
                  isInvalid={!!errors.salePrice}
                  errorMessage={errors.salePrice?.message}
                  {...field}
                />
              )}
            />
          </Col>
        )}
        {options?.selectedActivity === "rent" && (
          <Col md={6}>
            <Controller
              name="rentPrice"
              control={control}
              defaultValue=""
              rules={{ required: "Rent Price is required" }}
              render={({ field }) => (
                <Field
                  type={"number"}
                  label="Rent Amount"
                  placeholder="Rs"
                  isInvalid={!!errors.rentPrice}
                  errorMessage={errors.rentPrice?.message}
                  {...field}
                />
              )}
            />
          </Col>
        )}

        {options?.selectedActivity === "lease" && (
          <Col md={6}>
            <Controller
              name="leasePrice"
              control={control}
              defaultValue=""
              rules={{ required: "Lease amount is required" }}
              render={({ field }) => (
                <Field
                  type={"number"}
                  label="Lease Amount"
                  placeholder="Rs"
                  isInvalid={!!errors.leasePrice}
                  errorMessage={errors.leasePrice?.message}
                  {...field}
                />
              )}
            />
          </Col>
        )}
        <Col md={6}>
          <Controller
            name="AdvanceAmount"
            control={control}
            defaultValue=""
            rules={{ required: "Advance amount is required" }}
            render={({ field }) => (
              <Field
                label="Advance Amount"
                type={"number"}
                placeholder="Rs"
                isInvalid={!!errors.propertyLocation}
                errorMessage={errors.propertyLocation?.message}
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
              rules={{ required: "Agent commision amount is required" }}
              render={({ field }) => (
                <Field
                  label="Agent Commision"
                  type={"number"}
                  placeholder="Rs"
                  isInvalid={!!errors.AgentCommision}
                  errorMessage={errors.AgentCommision?.message}
                  {...field}
                />
              )}
            />
          </Col>
        )}

        {options?.selectedActivity === "lease" && (
          <Col md={6}>
            <Form.Label className="mb-3 fw-medium fs-5">
              Lease Period
            </Form.Label>
            <Controller
              name="leasePeriod"
              control={control}
              rules={{ required: "Lease period is required" }}
              render={({ field }) => (
                <SelectField
                  type={"number"}
                  placeholder="Month/Year"
                  width={"50%"}
                  unit={[
                    { be: "m", fe: "Per Month" },
                    { be: "ft", fe: "Per Year" },
                  ]}
                  field={field}
                  isInvalid={!!errors.leasePeriod}
                  errorMessage={errors.leasePeriod?.message}
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
            <DescriptionBox field={field} error={errors.description} />
          )}
        />
      </Row>

      <h5 className="my-5 gy-3   fw-medium fs-5">Upload Photos</h5>

      <div className="px-2 rounded-4 mt-4 border border-danger w-100 mx-auto">
        <div className="d-flex justify-content-evenly text-center gap-1 align-items-center border-bottom">
          {residentialImagesCat.map((imgType) => (
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
              {bedrooms.map((image) => (
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
              {bathrooms.map((image) => (
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
              {Kitchen.map((image) => (
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

        {imageCat === "Building Plan" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {building.map((image) => (
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
