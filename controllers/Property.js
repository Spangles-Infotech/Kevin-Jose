const Property = require("../models/PropertySchema");
const { createPlot, createLand, createResidential, createCommercial } = require("../services/PropertyServices");
const createError = require("../utils/error");

const CreateProperty = async (req, res, next) => {
  try {
    const {
      role,
      firstName,
      mobileNumber,
      email,
      purpose,
      propertyType,
      advanceAmount,
      sellAmount,
      rentAmount,
      agentCommission,
      description,
      propertyDetailsData,
    } = req.body;

    // Check required fields
    if (
      !role ||
      !firstName ||
      !mobileNumber ||
      !email ||
      !purpose ||
      !propertyType
    ) {
      return next(createError(400, "Please provide required data"));
    }

    // Extract uploaded files
    const siteImages = req.files["siteImages"] || [];
    const fmbImage = req.files["fmbImage"] ? req.files["fmbImage"][0] : null;
    const locationImage = req.files["locationImage"]
      ? req.files["locationImage"][0]
      : null;

    // Extract file paths
    const siteImagePaths = siteImages.map((file) => file.path);
    const fmbImagePath = fmbImage ? fmbImage.path : null;
    const locationImagePath = locationImage ? locationImage.path : null;

    // Initialize property type details and property ID
    let propertyTypeDetails = "";
    let propertyDetails = null;

    // Handle different property types
    switch (propertyType) {
      case "plot":
        const newPlot = await createPlot(propertyDetailsData, siteImagePaths, fmbImagePath, locationImagePath);
        propertyTypeDetails = "Plot";
        propertyDetails = newPlot._id;
        break;

      case "land":
        const newLand = await createLand(propertyDetailsData, siteImagePaths, fmbImagePath, locationImagePath);
        propertyTypeDetails = "Land";
        propertyDetails = newLand._id;
        break;

      case "residential":
        const newResidential = await createResidential(propertyDetailsData, siteImagePaths, locationImagePath);
        propertyTypeDetails = "Residential";
        propertyDetails = newResidential._id;
        break;

      case "commercial":
        const newCommercial = await createCommercial(propertyDetailsData, siteImagePaths, locationImagePath);
        propertyTypeDetails = "Commercial";
        propertyDetails = newCommercial._id;
        break;

      default:
        return next(createError(400, "Invalid property type"));
    }

    // Parse numeric fields
    const parsedAdvanceAmount = parseFloat(advanceAmount) || 0;
    const parsedSellAmount = parseFloat(sellAmount) || 0;
    const parsedRentAmount = parseFloat(rentAmount) || 0;
    const parsedAgentCommission = parseFloat(agentCommission) || 0;

    // Create a new property
    const newProperty = await Property.create({
      role,
      firstName,
      mobileNumber,
      email,
      purpose,
      propertyType,
      propertyTypeDetails,
      propertyDetails,
      advanceAmount: parsedAdvanceAmount,
      sellAmount: parsedSellAmount,
      rentAmount: parsedRentAmount,
      agentCommission: parsedAgentCommission,
      description,
    });

    // Respond with the created property
    res.status(201).json({
      message: "Property created successfully",
      property: newProperty,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error creating property", error: error.message });
  }
};

module.exports = { CreateProperty };

