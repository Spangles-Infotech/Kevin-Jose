import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { BedroomSelect, Field } from "./FormComponent";
import { bedroom } from "../Data";
export default function Apartment() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
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
      </Row>
    </Form>
  );
}
