import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { BedroomSelect, Field, RadioField, SelectField } from "./FormComponent";
import { bedroom } from "../Data";

export default function Residential() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const onSubmit = (formValue) => {
    console.log(formValue);
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
        <Col md={6}>
          <Controller
            name="bedroom"
            control={control}
            defaultValue=""
            rules={{ required: "Number of bedroom is required" }}
            render={({ field }) => (
              <BedroomSelect
                label={"Available BHK"}
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
      </Row>
      <Row>
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
                  label="Category of Project"
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
          <Col className={`my-4 ${errors.condition ? "is-invalid" : ""}`}>
            <Form.Label className="mb-4 fw-medium fs-5">Condition</Form.Label>
            <div className="d-flex align-items-center gap-5 custom-radio">
              <Form.Check
                type="radio"
                label="Ready to move"
                value="ready_to_move"
                checked={field.value === "ready_to_move"}
                onChange={(e) => field.onChange(e.target.value)}
                isInvalid={!!errors.condition}
              />
              <Form.Control
                type="text"
                className="w-25 border-0 border-bottom rounded-0 border-danger"
                placeholder="Type others"
                value={
                  field.value !== "ready_to_move" && field.value !== "Others"
                    ? field.value
                    : ""
                }
                onChange={(e) => field.onChange(e.target.value)}
                isInvalid={!!errors.condition}
              />
            </div>
            {errors.condition && (
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors.condition.message}
              </Form.Control.Feedback>
            )}
          </Col>
        )}
      />

      <div className="mt-5 d-grid col-4 mx-auto">
        <button type="submit" className="btn btn-danger rounded-pill py-3">
          Post Property
        </button>
      </div>
    </Form>
  );
}
