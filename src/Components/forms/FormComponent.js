import {
  Card,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

import React, { forwardRef } from "react";

// normal input

export const Field = ({
  label,
  type,
  className,
  placeholder,
  isInvalid,
  errorMessage,
  ...props
}) => (
  <Col className="my-3">
    <Form.Group controlId={props.name}>
      <Form.Label className="mb-3 fw-medium fs-5">{label}</Form.Label>
      <Form.Control
        className={`  border-danger form-control-lg  ${
          errorMessage ? "is-invalid" : ""
        }`}
        type={type}
        isInvalid={isInvalid}
        placeholder={placeholder}
        {...props}
        required
      />

      {isInvalid && (
        <Form.Control.Feedback type="invalid" className="d-block">
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  </Col>
);

//   select box included

// export const SelectField = ({ placeholder, unit, field, isInvalid, errorMessage }) => (
//   <Col className="my-3">
//     <InputGroup className="mb-3">
//       <Form.Control
//         aria-label="Text input with dropdown button"
//         className={`border-danger w-75 border-end-0 form-control-lg ${isInvalid ? 'is-invalid' : ''}`}
//         placeholder={placeholder}
//         {...field}
//       />
//       <Form.Select
//         aria-label="Default select example"
//         className={`border-danger border-start-0 ${isInvalid ? 'is-invalid' : ''}`}
//         {...field}
//       >
//         {unit?.map((unit, index) => (
//           <option key={index} value={unit.be}>{unit.fe}</option>
//         ))}
//       </Form.Select>
//       {isInvalid && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
//     </InputGroup>
//   </Col>
// );

export const SelectField = ({
  placeholder,
  unit,
  field,
  isInvalid,
  errorMessage,
  type,
  width,
  label,
}) => {
  const { value = { value: "", unit: unit[0].be }, onChange } = field;

  return (
    <Col className="my-3">
      <Form.Label className=" mb-3 fw-medium fs-5">{label}</Form.Label>
      <InputGroup className="">
        <Form.Control
          aria-label="Text input with dropdown button"
          className={`border-danger  border-end-0 form-control-lg ${
            isInvalid ? "is-invalid" : ""
          }`}
          style={{ width: width }}
          placeholder={placeholder}
          value={value.value}
          type={type}
          onChange={(e) => onChange({ ...value, value: e.target.value })}
        />
        <Form.Select
          aria-label="Default select example"
          className={`border-danger border-start-0  `}
          value={value.unit}
          onChange={(e) => onChange({ ...value, unit: e.target.value })}
        >
          {unit?.map((unit, index) => (
            <option key={index} value={unit.be}>
              {unit.fe}
            </option>
          ))}
        </Form.Select>
        {isInvalid && (
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </InputGroup>
    </Col>
  );
};

export const RadioField = ({
  label,
  options,
  className,
  name,
  field,
  isInvalid,
  errorMessage,
}) => (
  <Col className={`my-4 ${className}`}>
    <Form.Label className="mb-4 fw-medium fs-5">{label}</Form.Label>
    <div className="d-flex align-items-center gap-5 custom-radio">
      {options.map((option) => (
        <Form.Check
          key={option.value}
          type="radio"
          id={option.value}
          label={option.label}
          className={`me-3 ${isInvalid ? "is-invalid" : ""}`}
          name={name}
          value={option.value}
          checked={field.value === option.value}
          onChange={(e) => field.onChange(e.target.value)}
        />
      ))}
    </div>
    {isInvalid && (
      <Form.Control.Feedback type="invalid" className="d-block">
        {errorMessage}
      </Form.Control.Feedback>
    )}
  </Col>
);

export const DescriptionBox = ({ field, error }) => (
  <Col>
    <h5 className="mb-3 fw-medium fs-5">Description</h5>
    <textarea
      className={`form-control mb-4  border-danger ${
        error ? "is-invalid" : ""
      }`}
      {...field}
      placeholder="Type something...."
      id="description"
      rows="5"
      style={{ height: "200px" }}
    ></textarea>
    {error && <div className="invalid-feedback">{error.message}</div>}
  </Col>
);

 

export const BedroomSelect = ({
  label,
  bedroom,
  isInvalid,
  errorMessage,
  ...field
}) => (
  <>
    <Form.Label className="my-3 fw-medium fs-5">{label}</Form.Label>
    <Form.Select
      size="lg"
      aria-label="Default select example"
      className={`border-danger ${isInvalid ? "is-invalid" : ""}`}
      defaultValue={bedroom && bedroom.length > 0 ? bedroom[0].be : ""}
      {...field}
    >
      <option>Select Number of bedroom</option>
      {bedroom?.map((room, ind) => (
        <option key={ind} value={room.be}>
          {room.fe}
        </option>
      ))}
    </Form.Select>
    {isInvalid && (
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    )}
  </>
);

export default BedroomSelect;
