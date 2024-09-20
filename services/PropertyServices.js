const Plot = require("../models/PlotSchema");
const Land = require("../models/LandSchema");
const Residential = require("../models/ResidentialSchema");
const Commercial = require("../models/CommercialSchema");

// Plot
const createPlot = async (
  propertyDetailsData,
  siteImagePaths,
  fmbImagePath,
  locationImagePath
) => {
  return await Plot.create({
    propertyName: propertyDetailsData.propertyName,
    propertyCategory: propertyDetailsData.propertyCategory,
    location: propertyDetailsData.location,
    length: parseFloat(propertyDetailsData.length) || 0,
    lengthUnit: propertyDetailsData.lengthUnit,
    breadth: parseFloat(propertyDetailsData.breadth) || 0,
    breadthUnit: propertyDetailsData.breadthUnit,
    totalArea: parseFloat(propertyDetailsData.totalArea) || 0,
    totalAreaUnit: propertyDetailsData.totalAreaUnit,
    roadWidth: parseFloat(propertyDetailsData.roadWidth) || 0,
    roadWidthUnit: propertyDetailsData.roadWidthUnit,
    direction: propertyDetailsData.direction,
    facilities: propertyDetailsData.facilities,
    category: propertyDetailsData.category,
    siteImages: siteImagePaths,
    fmbImage: fmbImagePath,
    locationImage: locationImagePath,
  });
};

// Land
const createLand = async (
  propertyDetailsData,
  siteImagePaths,
  fmbImagePath,
  locationImagePath
) => {
  return await Land.create({
    location: propertyDetailsData.location,
    totalArea: parseFloat(propertyDetailsData.totalArea) || 0,
    totalAreaUnit: propertyDetailsData.totalAreaUnit,
    facilities: propertyDetailsData.facilities,
    category: propertyDetailsData.category,
    siteImages: siteImagePaths,
    fmbImage: fmbImagePath,
    locationImage: locationImagePath,
  });
};

// Residential
const createResidential = async (
  propertyDetailsData,
  siteImagePaths,
  locationImagePath
) => {
  return await Residential.create({
    propertyName: propertyDetailsData.propertyName,
    location: propertyDetailsData.location,
    totalArea: parseFloat(propertyDetailsData.totalArea) || 0,
    totalAreaUnit: propertyDetailsData.totalAreaUnit,
    numBedrooms: parseInt(propertyDetailsData.numBedrooms) || 0,
    numBathrooms: parseInt(propertyDetailsData.numBathrooms) || 0,
    facilities: propertyDetailsData.facilities,
    siteImages: siteImagePaths,
    locationImage: locationImagePath,
  });
};

// Commercial
const createCommercial = async (
  propertyDetailsData,
  siteImagePaths,
  locationImagePath
) => {
  return await Commercial.create({
    propertyName: propertyDetailsData.propertyName,
    location: propertyDetailsData.location,
    totalArea: parseFloat(propertyDetailsData.totalArea) || 0,
    totalAreaUnit: propertyDetailsData.totalAreaUnit,
    numFloors: parseInt(propertyDetailsData.numFloors) || 0,
    facilities: propertyDetailsData.facilities,
    siteImages: siteImagePaths,
    locationImage: locationImagePath,
  });
};

module.exports = {
  createPlot,
  createLand,
  createResidential,
  createCommercial,
};
