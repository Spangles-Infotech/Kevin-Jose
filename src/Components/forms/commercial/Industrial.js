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
  bedroom,
  bedroomBox,
  indoorFacilities,
  landZone,
  outdoorFacilities,
  pgImgCat,
} from "../../Data";
import { Baseurl, UserConfig } from "../../request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Industrial({ options, user }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  const navigate = useNavigate();

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

  const [imageCat, setImageCat] = useState("Exterior View");

  const [exterior, setExterior] = useState([]);
  const [interior, setInterior] = useState([]);
  const [washroom, setWashroom] = useState([]);
  const [kitchen, setKitchen] = useState([]);
  const [floorPlan, setFloorPlan] = useState([]);
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
    } else if (imageCat === "Interior" || imageCat === "Living Room") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - interior.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setInterior([...interior, ...newImages]);
    } else if (imageCat === "Washroom" || imageCat === "Bedrooms") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - washroom.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setWashroom([...washroom, ...newImages]);
    } else if (imageCat === "Floor Plan" || imageCat === "Bathrooms") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - floorPlan.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setFloorPlan([...floorPlan, ...newImages]);
    } else if (imageCat === "Kitchen") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - kitchen.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setKitchen([...kitchen, ...newImages]);
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
    } else if (imageCat === "Interior" || imageCat === "Living Room") {
      const filteredImages = interior.filter((image) => image.id !== id);
      setInterior(filteredImages);
    } else if (imageCat === "Washroom" || imageCat === "Bedrooms") {
      const filteredImages = washroom.filter((image) => image.id !== id);
      setWashroom(filteredImages);
    } else if (imageCat === "Floor Plan" || imageCat === "Bathrooms") {
      const filteredImages = floorPlan.filter((image) => image.id !== id);
      setFloorPlan(filteredImages);
    } else if (imageCat === "Location Map") {
      const filteredImages = location.filter((image) => image.id !== id);
      setLocation(filteredImages);
    } else if (imageCat === "Kitchen") {
      const filteredImages = kitchen.filter((image) => image.id !== id);
      setKitchen(filteredImages);
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
    formData.append("you_are_here_to", options?.selectedActivity);
    formData.append("owner", options?.selectedRole === "owner");
    formData.append("agent", options?.selectedRole === "agent");
    formData.append("builder", options?.selectedRole === "builder");
    formData.append("title", formValue?.PropertyName);
    formData.append("description", formValue?.description);
    formData.append("location", formValue?.propertyLocation);
    formData.append("advance", parseInt(formValue?.AdvanceAmount));
    formData.append("city", formValue?.city);
    formData.append("commercial.commercial_type", options?.selectedSubType);
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

    // factory
    if (options?.selectedSubType === "factory") {
      formData.append(
        "factory.built_up_area",
        parseInt(formValue?.totalArea?.value)
      );
      formData.append("factory.built_up_area_unit", formValue?.totalArea?.unit);
      formData.append("factory.address", formValue?.address);

      formData.append("factory.type_of_factory", formValue?.typeOfFactory);
      formData.append(
        "factory.plot_area",
        parseInt(formValue?.plotArea?.value)
      );
      formData.append("factory.plot_area_unit", formValue?.plotArea?.unit);
      formData.append(
        "factory.road_width",
        parseInt(formValue?.roadWidth?.value)
      );
      formData.append("factory.road_width_unit", formValue?.roadWidth?.unit);
      formData.append("factory.condition", formValue?.condition);

      formData.append("factory.status", formValue?.status);

      outSelectedFacility.forEach((element, index) => {
        formData.append(
          `factory.outdoor_facilities[${index}]facility.name`,
          element
        );
      });

      selectedFacility.forEach((element, index) => {
        formData.append(
          `factory.indoor_facilities[${index}]facility.name`,
          element
        );
      });

      selectedLandFacility.forEach((element, index) => {
        formData.append(`factory.land_zone[${index}]name`, element);
      });

      exterior?.forEach((image) => {
        formData.append(`factory_images[${1}]section`, "exterior_view");
        formData.append(`factory_images[${1}]image`, image.file);
      });
      interior?.forEach((image) => {
        formData.append(`factory_images[${2}]section`, "interior_view");
        formData.append(`factory_images[${2}]image`, image.file);
      });
      washroom?.forEach((image) => {
        formData.append(`factory_images[${3}]section`, "washroom");
        formData.append(`factory_images[${3}]image`, image.file);
      });
      floorPlan?.forEach((image) => {
        formData.append(`factory_images[${4}]section`, "floor_plan");
        formData.append(`factory_images[${4}]image`, image.file);
      });
      location?.forEach((image) => {
        formData.append(`factory_images[${5}]section`, "location_map");
        formData.append(`factory_images[${5}]image`, image.file);
      });
      logo?.forEach((image) => {
        formData.append(`factory_images[${6}]section`, "logo");
        formData.append(`factory_images[${6}]image`, image.file);
      });
    } else if (
      options?.selectedSubType === "industrialbuilding" ||
      options?.selectedSubType === "industrial_shed"
    ) {
      formData.append(
        "industrialbuilding.built_up_area",
        parseInt(formValue?.totalArea?.value)
      );
      formData.append(
        "industrialbuilding.built_up_area_unit",
        formValue?.totalArea?.unit
      );
      formData.append("industrialbuilding.address", formValue?.address);

      formData.append(
        "industrialbuilding.plot_area",
        parseInt(formValue?.plotArea?.value)
      );
      formData.append(
        "industrialbuilding.plot_area_unit",
        formValue?.plotArea?.unit
      );
      formData.append(
        "industrialbuilding.road_width",
        parseInt(formValue?.roadWidth?.value)
      );
      formData.append(
        "industrialbuilding.road_width_unit",
        formValue?.roadWidth?.unit
      );
      formData.append("industrialbuilding.condition", formValue?.condition);

      formData.append("industrialbuilding.status", formValue?.status);

      outSelectedFacility.forEach((element, index) => {
        formData.append(
          `industrialbuilding.outdoor_facilities[${index}]facility.name`,
          element
        );
      });

      selectedFacility.forEach((element, index) => {
        formData.append(
          `industrialbuilding.indoor_facilities[${index}]facility.name`,
          element
        );
      });

      selectedLandFacility.forEach((element, index) => {
        formData.append(`industrialbuilding.land_zone[${index}]name`, element);
      });

      exterior?.forEach((image) => {
        formData.append(
          `industrialbuilding_images[${1}]section`,
          "exterior_view"
        );
        formData.append(`industrialbuilding_images[${1}]image`, image.file);
      });
      interior?.forEach((image) => {
        formData.append(
          `industrialbuilding_images[${2}]section`,
          "interior_view"
        );
        formData.append(`industrialbuilding_images[${2}]image`, image.file);
      });
      washroom?.forEach((image) => {
        formData.append(`industrialbuilding_images[${3}]section`, "washroom");
        formData.append(`industrialbuilding_images[${3}]image`, image.file);
      });
      floorPlan?.forEach((image) => {
        formData.append(`industrialbuilding_images[${4}]section`, "floor_plan");
        formData.append(`industrialbuilding_images[${4}]image`, image.file);
      });
      location?.forEach((image) => {
        formData.append(
          `industrialbuilding_images[${5}]section`,
          "location_map"
        );
        formData.append(`industrialbuilding_images[${5}]image`, image.file);
      });
      logo?.forEach((image) => {
        formData.append(`industrialbuilding_images[${6}]section`, "logo");
        formData.append(`industrialbuilding_images[${6}]image`, image.file);
      });
    } else if (options?.selectedSubType === "service_apartment") {
      formData.append(
        "service_apartment.built_up_area",
        parseInt(formValue?.totalArea?.value)
      );
      formData.append(
        "service_apartment.built_up_area_unit",
        formValue?.totalArea?.unit
      );
      formData.append("service_apartment.address", formValue?.address);

      formData.append("service_apartment.status", formValue?.status);
      formData.append("service_apartment.floor_number", formValue?.floorNumber);
      formData.append(
        "service_apartment.no_of_flats",
        formValue?.numberOfFlats
      );
      formData.append(
        "service_apartment.available_floors",
        formValue?.numberOfFlats
      );
      formData.append(
        "service_apartment.maximum_persons_allowed",
        formValue?.maxPerson
      );
      formData.append(
        "service_apartment.total_floors",
        parseInt(formValue?.totalFloor)
      );
      formData.append(
        "service_apartment.no_of_car_parking",
        parseInt(formValue?.carParking)
      );

      outSelectedFacility.forEach((element, index) => {
        formData.append(
          `service_apartment.outdoor_facilities[${index}]facility.name`,
          element
        );
      });

      selectedFacility.forEach((element, index) => {
        formData.append(
          `service_apartment.indoor_facilities[${index}]facility.name`,
          element
        );
      });

      selectedLandFacility.forEach((element, index) => {
        formData.append(
          `service_apartment.availability_of_flats[${index}]option_name`,
          element
        );
      });

      exterior?.forEach((image) => {
        formData.append(
          `service_apartment_images[${0}]section`,
          "exterior_view"
        );
        formData.append(`service_apartment_images[${0}]image`, image.file);
      });
      interior?.forEach((image) => {
        formData.append(`service_apartment_images[${1}]section`, "interior");
        formData.append(`service_apartment_images[${1}]image`, image.file);
      });
      washroom?.forEach((image) => {
        formData.append(`service_apartment_images[${3}]section`, "washroom");
        formData.append(`service_apartment_images[${3}]image`, image.file);
      });
      floorPlan?.forEach((image) => {
        formData.append(`service_apartment_images[${4}]section`, "floor_plan");
        formData.append(`service_apartment_images[${4}]image`, image.file);
      });
      kitchen?.forEach((image) => {
        formData.append(`service_apartment_images[${4}]section`, "floor_plan");
        formData.append(`service_apartment_images[${4}]image`, image.file);
      });
      location?.forEach((image) => {
        formData.append(
          `service_apartment_images[${5}]section`,
          "location_map"
        );
        formData.append(`service_apartment_images[${5}]image`, image.file);
      });
      logo?.forEach((image) => {
        formData.append(`service_apartment_images[${6}]section`, "logo");
        formData.append(`service_apartment_images[${6}]image`, image.file);
      });
    }

    try {
      const response = await axios.post(
        ` ${Baseurl}createproperty/`,
        formData,
        UserConfig
      );
      console.log(response);
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

      {options?.selectedSubType === "factory" && (
        <Row>
          <Col>
            <Controller
              name="typeOfFactory"
              control={control}
              defaultValue=""
              rules={{ required: "Type of factory is required" }}
              render={({ field }) => (
                <Field
                  label="Type of Factory"
                  placeholder="Enter type"
                  isInvalid={!!errors.typeOfFactory}
                  errorMessage={errors.typeOfFactory?.message}
                  {...field}
                />
              )}
            />
          </Col>
        </Row>
      )}

      <Row>
        <Col md={6}>
          <Controller
            name="PropertyName"
            control={control}
            defaultValue=""
            rules={{ required: "property name is required" }}
            render={({ field }) => (
              <Field
                label="Property Name"
                placeholder="Property Name"
                isInvalid={!!errors.PropertyName}
                errorMessage={errors.PropertyName?.message}
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

        {options?.selectedSubType !== "service_apartment" ? (
          <>
            <Col md={6}>
              <Controller
                name="plotArea"
                control={control}
                rules={{ required: "Plot area is required" }}
                render={({ field }) => (
                  <SelectField
                    label={"Plot/Land Area"}
                    type={"number"}
                    width={"75%"}
                    placeholder="Total Area"
                    unit={[{ be: "sqft", fe: "Sqft" }]}
                    field={field}
                    isInvalid={!!errors.plotArea}
                    errorMessage={errors.plotArea?.message}
                  />
                )}
              />
            </Col>
            <Col md={6}>
              <Controller
                name="roadWidth"
                control={control}
                rules={{ required: "Road width is required" }}
                render={({ field }) => (
                  <SelectField
                    label={"Road Width"}
                    type={"number"}
                    width={"75%"}
                    placeholder="Road width"
                    unit={[
                      { be: "ft", fe: "ft" },
                      { be: "m", fe: "mt" },
                    ]}
                    field={field}
                    isInvalid={!!errors.roadWidth}
                    errorMessage={errors.roadWidth?.message}
                  />
                )}
              />
            </Col>
          </>
        ) : (
          <>
            <Col md={6}>
              <Controller
                name="numberOfFlats"
                control={control}
                defaultValue=""
                rules={{ required: "Number of flat is required" }}
                render={({ field }) => (
                  <Field
                    label="Number of Flats "
                    placeholder="Number"
                    isInvalid={!!errors.numberOfFlats}
                    errorMessage={errors.numberOfFlats?.message}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col md={6}>
              <Controller
                name="totalFloor"
                control={control}
                defaultValue=""
                rules={{ required: "Total floor is required" }}
                render={({ field }) => (
                  <Field
                    label="Total Floors"
                    placeholder="Number"
                    isInvalid={!!errors.totalFloor}
                    errorMessage={errors.totalFloor?.message}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col md={6}>
              <Controller
                name="floorNumber"
                control={control}
                defaultValue=""
                rules={{ required: "Floor number is required" }}
                render={({ field }) => (
                  <Field
                    label="Floor Number"
                    placeholder="Number"
                    isInvalid={!!errors.floorNumber}
                    errorMessage={errors.floorNumber?.message}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col md={6}>
              <Controller
                name="maxPerson"
                control={control}
                defaultValue=""
                rules={{ required: "Maximum person is required" }}
                render={({ field }) => (
                  <Field
                    label="Maximum Persons Allowed "
                    placeholder="Number"
                    isInvalid={!!errors.maxPerson}
                    errorMessage={errors.maxPerson?.message}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col md={6}>
              <Controller
                name="carParking"
                control={control}
                defaultValue=""
                rules={{ required: "Number of car parking is required" }}
                render={({ field }) => (
                  <Field
                    label="Number of Car Parking"
                    placeholder="Parking"
                    isInvalid={!!errors.carParking}
                    errorMessage={errors.carParking?.message}
                    {...field}
                  />
                )}
              />
            </Col>
          </>
        )}
      </Row>

      {options?.selectedSubType !== "service_apartment" && (
        <>
          <h5 className="py-3">Land Zone</h5>
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
              {landZone.map((facility, index) => (
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
                      {
                        value: "under_construction",
                        label: "Under Construction",
                      },
                    ]}
                    field={field}
                    isInvalid={!!errors.condition}
                    errorMessage={errors.condition?.message}
                  />
                </Col>
              </>
            )}
          />
        </>
      )}

      {options?.selectedSubType === "service_apartment" && (
        <>
          <h5 className="py-3">Land Zone</h5>
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
              {bedroomBox.map((facility, index) => (
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
        </>
      )}
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
            <Controller
              name="leasePeriod"
              control={control}
              rules={{ required: "Lease period is required" }}
              render={({ field }) => (
                <SelectField
                  type={"number"}
                  placeholder="Month/Year"
                  width={"50%"}
                  label={"Lease Period"}
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
          {/* {options?.selectedSubType === "service_apartment" ? ( */}
          {/* <>
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
            </>
          ) : ( */}
          <>
            {CommercialImagesCat.map((imgType) => (
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
          </>
          {/* )} */}

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
        {(imageCat === "Interior" || imageCat === "Living Room") && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {interior.map((image) => (
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

        {(imageCat === "Washroom" || imageCat === "Bedrooms") && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {washroom.map((image) => (
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

        {(imageCat === "Floor Plan" || imageCat === "Bathrooms") && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {floorPlan.map((image) => (
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
              {kitchen.map((image) => (
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
