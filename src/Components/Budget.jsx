import React, { useState } from "react";

import "../Components/Budget.css";
const Budget = ({ name, minArea, setMinArea, maxArea, setMaxArea }) => {
  const [selectedCar, setSelectedCar] = useState("volvo");

  const handleChange = (event) => {
    setSelectedCar(event.target.value);
  };

  // const handleMinAreaChange = (e) => {
  //   const newMinPrice = parseInt(e.target.value);
  //   if (newMinPrice <= maxArea - 100000) {
  //     setMinArea(newMinPrice);
  //   }

  // };

  const handleMinAreaChange = (e) => {
    const newMinArea = parseInt(e.target.value);  
    if (newMinArea < maxArea) { 
      setMinArea(newMinArea);
    }
  };

  // const handleMaxAreaChange = (e) => {
  //   const newMaxPrice = parseInt(e.target.value);
  //   if (newMaxPrice >= minArea + 100000) {
  //     setMaxArea(newMaxPrice);
  //   }
  // };

  
  const handleMaxAreaChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice > minArea && newMaxPrice <= 1000000 ) {
      setMaxArea(newMaxPrice);
    }
  };

  return (
    <div className="wrapper">
      {name && (
        <>
          <div className="price-input">
            <div className="field">
              <select
                name="cars"
                id="cars"
                value={selectedCar}
                onChange={handleChange}
              >
                <option value="sqft">sqft</option>
              </select>

              <input
                type="number"
                className="input-min"
                value={minArea}
                onChange={handleMinAreaChange}
              />
            </div>
            <div className="separator">-</div>
            <div className="field">
              <input
                type="number"
                className="input-max"
                value={maxArea}
                onChange={handleMaxAreaChange}
              />
            </div>
          </div>
          <div className="slider">
            <div
              className="progress"
              style={{
                left: `${(minArea / 1000000) * 100}%`,
                right: `${100 - (maxArea / 1000000) * 100}%`,
              }}
            ></div>
          </div>
          <div className="range-input">
            <input
              type="range"
              className="range-min"
              min="0"
              max="1000000"
              value={minArea}
              step="100"
              onChange={handleMinAreaChange}
            />
            <input
              type="range"
              className="range-max"
              min="0"
              max="1000000"
              value={maxArea}
              step="100"
              onChange={handleMaxAreaChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Budget;
