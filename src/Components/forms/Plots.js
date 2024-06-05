import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Facilities, subType } from "../Data";
import { FaTimes } from "react-icons/fa";
import {
  DescriptionBox,
  Field,
  RadioField,
  SelectField,
} from "./FormComponent";
import { Baseurl, UserConfig } from "../request";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Plots({ user, options }) {
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
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const handleInputAdd = () => {
    if (
      inputValue.trim() !== "" &&
      !selectedFacility.includes(inputValue.trim())
    ) {
      setSelectedFacility([...selectedFacility, inputValue.trim()]);
      setInputValue("");
    }
  };

  const [imageCat, setImageCat] = useState("siteview");
  const [siteImages, setSiteImages] = useState([]);
  const [fmbImages, setFmbImages] = useState([]);
  const [locationImages, setLocationImages] = useState([]);

  const handleImageUpload = (event) => {
    if (imageCat === "siteview") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 6 - siteImages.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setSiteImages([...siteImages, ...newImages]);
    } else if (imageCat === "fmb") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - fmbImages.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setFmbImages([...fmbImages, ...newImages]);
    } else if (imageCat === "location") {
      const files = Array.from(event.target.files);
      const imagesToAdd = files.slice(0, 1 - locationImages.length);
      const newImages = imagesToAdd.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setLocationImages([...locationImages, ...newImages]);
    }
  };

  const handleRemoveImage = (id) => {
    if (imageCat === "siteview") {
      const filteredImages = siteImages.filter((image) => image.id !== id);
      setSiteImages(filteredImages);
    } else if (imageCat === "fmb") {
      const filteredImages = fmbImages.filter((image) => image.id !== id);
      setFmbImages(filteredImages);
    } else if (imageCat === "location") {
      const filteredImages = locationImages.filter((image) => image.id !== id);
      setLocationImages(filteredImages);
    }
  };

  console.log(user.phone);

  const onSubmit = async (formValue) => {
    console.log(formValue);
    try {
      if (selectedFacility.length === 0) {
        toast.warn("Add atleast one facility", {
          hideProgressBar: true,
        });
      }
      const formData = new FormData();
      formData.append("name", user?.name);
      formData.append("phone", user?.phone);
      formData.append("email", user?.email);
      formData.append("property_type", options?.selectedType);
      formData.append("you_are_here_to", options?.selectedActivity);
      formData.append("owner", options?.selectedActivity === "sell");
      formData.append("agent", options?.selectedActivity === "rent");
      formData.append("builder", options?.selectedActivity === "lease");
      formData.append("title", formValue?.propertyName);
      formData.append("description", formValue?.description);
      formData.append("location", formValue?.propertyLocation);
      formData.append("advance", parseInt(formValue?.AdvanceAmount));

      // activity  conditions -------->
      if (options?.selectedActivity === "sell") {
        formData.append("sale_price", formValue?.salePrice);
      } else if (options?.selectedActivity === "rent") {
        formData.append("rent", formValue?.rentPrice);
      } else if (options?.selectedActivity === "lease") {
        formData.append("lease_amount", formValue?.leasePrice);
        formData.append("lease_period", formValue?.leasePeriod?.value);
        formData.append("lease_period_unit", formValue?.leasePeriod?.unit);
      }

      // Role condition ------>

      if (options?.selectedRole === "agent") {
        formData.append("agent_commission", formValue?.AgentCommision);
      }

      // plot ----------->

      if (options?.selectedType === "plot") {
        formData.append("plot.plot_type", options?.selectedSubType);
        formData.append("plot.length", parseInt(formValue?.plotLength?.value));
        formData.append(
          "plot.breadth",
          parseInt(formValue?.ploatBreadth?.value)
        );
        formData.append(
          "plot.road_width",
          parseInt(formValue?.roadWidth?.value)
        );
        formData.append("plot.total_area", formValue?.totalArea?.value);
        formData.append("plot.direction_facing", formValue?.direction);
        formData.append("plot.approval", formValue?.category);
        formData.append("plot.breadth_unit", formValue?.ploatBreadth?.unit);
        formData.append("plot.length_unit", formValue?.plotLength?.unit);
        formData.append("plot.road_width_unit", formValue?.roadWidth?.unit);
        formData.append("plot.total_area_unit", formValue?.totalArea?.unit);
        selectedFacility.forEach((element, index) => {
          formData.append(`plot.facilities[${index}]name`, element);
        });
        if (siteImages) {
          siteImages.forEach((image, index) => {
            formData.append(`plot_images[${index}]section`, "siteview");
            formData.append(`plot_images[${index}]image`, image.file);
          });
        }
        if (fmbImages) {
          fmbImages.forEach((image) => {
            formData.append(`plot_images[${7}]section`, "FMB");
            formData.append(`plot_images[${7}]image`, image.file);
          });
        }
        if (locationImages) {
          locationImages.forEach((image) => {
            formData.append(`plot_images[${8}]section`, "location_map");
            formData.append(`plot_images[${8}]image`, image.file);
          });
        }
      }

      // land--------------->

      if (options?.selectedType === "land") {
        formData.append("land.land_type", options?.selectedSubType);
        formData.append("land.length", parseInt(formValue?.plotLength?.value));
        formData.append(
          "land.breadth",
          parseInt(formValue?.ploatBreadth?.value)
        );
        formData.append(
          "land.road_width",
          parseInt(formValue?.roadWidth?.value)
        );
        formData.append("land.total_area", formValue?.totalArea?.value);
        formData.append("land.direction_facing", formValue?.direction);
        formData.append("land.approval", formValue?.category);
        formData.append("land.breadth_unit", formValue?.ploatBreadth?.unit);
        formData.append("land.length_unit", formValue?.plotLength?.unit);
        formData.append("land.road_width_unit", formValue?.roadWidth?.unit);
        formData.append("land.total_area_unit", formValue?.totalArea?.unit);
        selectedFacility.forEach((element, index) => {
          formData.append(`land.facilities[${index}]name`, element);
        });
        if (siteImages) {
          siteImages.forEach((image, index) => {
            formData.append(`land_images[${index}]section`, "siteview");
            formData.append(`land_images[${index}]image`, image.file);
          });
        }
        if (fmbImages) {
          fmbImages.forEach((image) => {
            formData.append(`plot_images[${7}]section`, "FMB");
            formData.append(`plot_images[${7}]image`, image.file);
          });
        }
        if (locationImages) {
          locationImages.forEach((image) => {
            formData.append(`land_images[${8}]section`, "location_map");
            formData.append(`land_images[${8}]image`, image.file);
          });
        }
      }

      const response = await axios.post(
        `${Baseurl}createproperty/`,
        formData,
        UserConfig
      );
      navigate("/check", { state: response.data });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        hideProgressBar: true,
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

      {/* <Row>
        <Col md={6}>
          <Controller
            name="plotLength"
            control={control}
            defaultValue=""
            rules={{ required: "Plot Length is required" }}
            render={({ field }) => (
              <SelectField
                type={"number"}
                placeholder="Length"
                unit={[
                  { be: "ft", fe: "ft" },
                  { be: "m", fe: "mt" },
                ]}
                field={field}
                isInvalid={!!errors.plotLength}
                errorMessage={errors.plotLength?.message}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Controller
            name="plotBreadth"
            control={control}
            defaultValue=""
            rules={{ required: "Plot Breadth is required" }}
            render={({ field }) => (
              <SelectField
                type={"number"}
                placeholder="Breadth"
                unit={[
                  { be: "ft", fe: "ft" },
                  { be: "m", fe: "mt" },
                ]}
                isInvalid={!!errors.plotBreadth}
                errorMessage={errors.plotBreadth?.message}
                field={field}
              />
            )}
          />
        </Col>
      </Row> */}

      <h5 className="mt-3 fw-semibold">Plot Size</h5>
      <Row>
        <Controller
          name="plotLength"
          control={control}
          rules={{ required: "Total Length required" }}
          render={({ field }) => (
            <SelectField
              type={"number"}
              width={"75%"}
              placeholder="Length"
              unit={[
                { be: "m", fe: "mt" },
                { be: "ft", fe: "ft" },
              ]}
              field={field}
              isInvalid={!!errors.plotLength}
              errorMessage={errors.plotLength?.message}
            />
          )}
        />
        <Controller
          name="ploatBreadth"
          control={control}
          rules={{ required: "Ploat Breadth is required" }}
          render={({ field }) => (
            <SelectField
              type={"number"}
              placeholder="Breadth"
              width={"75%"}
              unit={[
                { be: "m", fe: "mt" },
                { be: "ft", fe: "ft" },
              ]}
              field={field}
              isInvalid={!!errors.ploatBreadth}
              errorMessage={errors.ploatBreadth?.message}
            />
          )}
        />
      </Row>
      <Row>
        <Controller
          name="totalArea"
          control={control}
          rules={{ required: "Total area is required" }}
          render={({ field }) => (
            <SelectField
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
        <Controller
          name="roadWidth"
          control={control}
          rules={{ required: "Road width is required" }}
          render={({ field }) => (
            <SelectField
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
      </Row>

      <Row>
        {/* <Controller
          name="direction"
          control={control}
          rules={{ required: "Direction is required" }}
          render={({ field }) => (
            <RadioField
              label="Direction Facing"
              options={[
                { value: "east", label: "East" },
                { value: "west", label: "West" },
                { value: "north", label: "North" },
                { value: "south", label: "South" },
                { value: "north_east", label: "North-east" },
                { value: "north_west", label: "North-west" },
                { value: "south_east", label: "South-east" },
                { value: "south_west", label: "South-west" },
              ]}
              field={field}
              isInvalid={!!errors.direction}
              errorMessage={errors.direction?.message}
            />
          )}
        /> */}
        <Controller
          name="direction"
          control={control}
          rules={{ required: "Direction is required" }}
          render={({ field }) => (
            <RadioField
              label="Direction Facing"
              options={[
                { value: "east", label: "East" },
                { value: "west", label: "West" },
                { value: "north", label: "North" },
                { value: "south", label: "South" },
                { value: "north_east", label: "North-east" },
                { value: "north_west", label: "North-west" },
                { value: "south_east", label: "South-east" },
                { value: "south_west", label: "South-west" },
              ]}
              field={field}
              isInvalid={!!errors.direction}
              errorMessage={errors.direction?.message}
            />
          )}
        />
      </Row>

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
          {Facilities.map((facility, index) => (
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

      <Row>
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          render={({ field }) => (
            <RadioField
              label="Category"
              options={[
                { value: "approved", label: "Approved" },
                { value: "unapproved", label: "Unapproved" },
              ]}
              field={field}
              isInvalid={!!errors.category}
              errorMessage={errors.category?.message}
            />
          )}
        />
      </Row>

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
                    { be: "month", fe: "Per Month" },
                    { be: "year", fe: "Per Year" },
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

      {/* images */}

      <h5 className="my-5 gy-3   fw-medium fs-5">Upload Photos</h5>

      <div className="px-2 rounded-4 mt-4 border border-danger w-100 mx-auto">
        <div className="d-flex justify-content-evenly text-center gap-1 align-items-center border-bottom">
          <div
            className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
              imageCat === "siteview" &&
              "text-danger border-danger border-bottom"
            }`}
            style={{ fontSize: "20px", width: "20%" }}
            onClick={() => setImageCat("siteview")}
          >
            Site View
          </div>
          <div
            className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
              imageCat === "fmb" && "text-danger border-danger border-bottom"
            } `}
            style={{ fontSize: "20px", width: "20%" }}
            onClick={() => setImageCat("fmb")}
          >
            FMB
          </div>{" "}
          <div
            className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
              imageCat === "location" &&
              "text-danger border-danger border-bottom"
            }`}
            style={{ fontSize: "20px", width: "20%" }}
            onClick={() => setImageCat("location")}
          >
            Location Map
          </div>
        </div>

        {imageCat === "siteview" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-start">
              {siteImages.map((image) => (
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
        {imageCat === "fmb" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-center">
              {fmbImages.map((image) => (
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
        {imageCat === "location" && (
          <>
            {/* Render uploaded images */}
            <div className="d-flex flex-wrap justify-content-end">
              {locationImages.map((image) => (
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
