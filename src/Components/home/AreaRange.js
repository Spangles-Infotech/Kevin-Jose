import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function AreaRange({lowArea,highArea}) {
  const [minArea, setMinArea] = useState("0");
  const [maxArea, setMaxArea] = useState("1000");

  const handleMinAreaChange = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && parseInt(value) >= 0)) {
      setMinArea(value);
      lowArea(value)
    }
  };

  const handleMaxAreaChange = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && parseInt(value) <= 10000)) {
      setMaxArea(value);
      highArea(value)
    }
  };

  return (
    <div className="wrapper border-top border-2 rounded-bottom-5 bg-white">
      <div className="price-input">
        <div className="field">
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              value={minArea}
              onChange={handleMinAreaChange}
              placeholder="Min Area (Sqft)"
              aria-label="Min Area (Sqft)"
              aria-describedby="basic-addon2"
              className="border-secondary border-end-0"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="border-secondary bg-white"
            >
              Sqft
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="separator">-</div>
        <div className="field">
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              value={maxArea}
              onChange={handleMaxAreaChange}
              placeholder="Max Area (Sqft)"
              aria-label="Max Area (Sqft)"
              aria-describedby="basic-addon2"
              className="border-secondary border-end-0"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="border-secondary bg-white"
            >
              Sqft
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <div className="slider">
        <div
          className="progress"
          style={{
            left: `${(parseInt(minArea) / 10000) * 100}%`,
            right: `${100 - (parseInt(maxArea) / 10000) * 100}%`,
          }}
        ></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="10000"
          value={minArea === "" ? 0 : minArea}
          step="100"
          onChange={handleMinAreaChange}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="10000"
          value={maxArea === "" ? 10000 : maxArea}
          step="100"
          onChange={handleMaxAreaChange}
        />
      </div>
    </div>
  );
}
