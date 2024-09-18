const Property = require("../models/PropertySchema");
const Plot = require("../models/PlotSchema");
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

    let propertyTypeDetails = "";
    let propertyDetails = null;

    if (propertyType === "plot") {
      const newPlot = await Plot.create({
        propertyName: propertyDetailsData.propertyName,
        location: propertyDetailsData.location,
        length: propertyDetailsData.length,
        lengthUnit: propertyDetailsData.lengthUnit,
        breadth: propertyDetailsData.breadth,
        breadthUnit: propertyDetailsData.breadthUnit,
        toalArea: propertyDetailsData.toalArea,
        toalAreaUnit: propertyDetailsData.toalAreaUnit,
        roadWidth: propertyDetailsData.roadWidth,
        roadWidthUnit: propertyDetailsData.roadWidthUnit,
        direction: propertyDetailsData.direction,
        facilities: propertyDetailsData.facilities,
        category: propertyDetailsData.category,
      });

      propertyTypeDetails = "Plot";
      propertyDetails = newPlot._id;
    }

    const siteImages = req.files["siteImages"] || [];
    const fmbImage = req.file;
    const locationImage = req.file;

    const siteImagePaths = siteImages.map((file) => file.path);
    const locationImagePath = locationImage ? locationImage.path : null;

    const newProperty = await Property.create({
      role,
      firstName,
      mobileNumber,
      email,
      purpose,
      propertyType,
      propertyTypeDetails,
      propertyDetails,
      advanceAmount,
      sellAmount,
      rentAmount,
      agentCommission,
      description,
      siteImages: siteImagePaths,
      fmbImage: fmbImage,
      locationImage: locationImagePath,
    });

    // Respond with the created property
    res.status(201).json({
      message: "Property created successfully",
      property: newProperty,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating property", error: error.message });
  }
};

module.exports = { CreateProperty };
