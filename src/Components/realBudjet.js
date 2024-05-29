import React, { useState } from "react";

import "../Components/Budget.css";
const RealBudget = ({ name, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const [selectedCar, setSelectedCar] = useState("volvo");

  const handleChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    if (newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice >= minPrice && newMaxPrice <= 1000000000) {
      setMaxPrice(newMaxPrice);
    }
  };

  return (
    <div className="wrapper">
      <>
        <div className="price-input">
          <div className="field">
            <input
              type="number"
              className="input-min"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="separator">-</div>
          <div className="field">
            <input
              type="number"
              className="input-max"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <div className="slider">
          <div
            className="progress"
            style={{
              left: `${(minPrice / 1000000000) * 100}%`,
              right: `${100 - (maxPrice / 1000000000) * 100}%`,
            }}
          ></div>
        </div>
        <div className="range-input">
          <input
            type="range"
            className="range-min"
            min="0"
            max="1000000000"
            value={minPrice}
            step="100"
            onChange={handleMinPriceChange}
          />
          <input
            type="range"
            className="range-max"
            min="0"
            max="1000000000"
            value={maxPrice}
            step="100"
            onChange={handleMaxPriceChange}
          />
        </div>
      </>
    </div>
  );
};

export default RealBudget;
