import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const getUnit = (value) => {
  if (value >= 10000000) {
    return "Crores";
  } else if (value >= 100000) {
    return "Lakhs";
  } else {
    return "Rs";
  }
};

export default function PriceRange() {
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10000");

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && parseInt(value) >= 0)) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && parseInt(value) <= 1000000000)) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="wrapper mt-1 rounded-bottom-3 bg-white">
      <div className="price-input">
        <div className="field">
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Min Price"
              aria-label="Min Price"
              aria-describedby="basic-addon2"
              className="border-secondary border-end-0"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="border-secondary bg-white"
            >
              {getUnit(minPrice)}
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="separator">-</div>
        <div className="field">
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Max Price"
              aria-label="Max Price"
              aria-describedby="basic-addon2"
              className="border-secondary border-end-0"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="border-secondary bg-white"
            >
              {getUnit(maxPrice)}
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <div className="slider">
        <div
          className="progress"
          style={{
            left: `${(parseInt(minPrice) / 1000000000) * 100}%`,
            right: `${100 - (parseInt(maxPrice) / 1000000000) * 100}%`,
          }}
        ></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="1000000000"
          value={minPrice === "" ? 0 : minPrice}
          step="10000"
          onChange={handleMinPriceChange}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="1000000000"
          value={maxPrice === "" ? 1000000000 : maxPrice}
          step="10000"
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
}
