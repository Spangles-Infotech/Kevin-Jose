import React, { useState } from "react";

import "../Components/Budget.css";
const RealBudget = ({
  name,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const [selectedCar, setSelectedCar] = useState("volvo");

  const handleChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    if (newMinPrice <= maxPrice - 100000000) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice >= minPrice + 100000000) {
      setMaxPrice(newMaxPrice);
    }
  };

//   const handleMinAreaChange = (e) => {
//     const newMinPrice = parseInt(e.target.value);
//     if (newMinPrice <= maxArea - 100000) {
//       setMinArea(newMinPrice);
//     }
//   };

//   const handleMaxAreaChange = (e) => {
//     const newMaxPrice = parseInt(e.target.value);
//     if (newMaxPrice >= minArea + 100000) {
//       setMaxArea(newMaxPrice);
//     }
//   };

  return (
    <div className="wrapper">
     
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
                <option value="sq.yard">sq.yard</option>
                <option value="sq.m">sq.m</option>
                <option value="Acre">Acre</option>
                <option value="Bigha">Bigha</option>
                <option value="Hectare">Hectare</option>
                <option value="Marla">Marla</option>
                <option value="Kanal">Kanal</option>
                <option value="Biswa1">Biswa1</option>
                <option value="Biswa2">Biswa2</option>
                <option value="Ground">Ground</option>
                <option value="Aankadam">Aankadam</option>
                <option value="Chatak">Chatak</option>
                <option value="Kottah">Kottah</option>
                <option value="Ground">Ground</option>
                <option value="Kottah">Kottah</option>
                <option value="Marla">Marla</option>
                <option value="Cent">Cent</option>
                <option value="Perch">Perch</option>
                <option value="Guntha">Guntha</option>
                <option value="Are">Are</option>
              </select>

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
                left: `${(minPrice / 1000000) * 100}%`,
                right: `${100 - (maxPrice / 1000000) * 100}%`,
              }}
            ></div>
          </div>
          <div className="range-input">
            <input
              type="range"
              className="range-min"
              min="0"
              max="1000000"
              value={minPrice}
              step="100"
              onChange={handleMinPriceChange}
            />
            <input
              type="range"
              className="range-max"
              min="0"
              max="1000000"
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
