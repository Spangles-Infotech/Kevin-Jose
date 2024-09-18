const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema(
  {
    propertyCategory: { type: String, required: true },
    propertyName: { type: String, required: true },
    location: { type: String, required: true },
    length: { type: Number, required: true },
    lengthUnit: { type: String, required: true },
    breadth: { type: Number, required: true },
    breadthUnit: { type: String, required: true },
    toalArea: { type: Number, required: true },
    toalAreaUnit: { type: String, required: true },
    roadWidth: { type: Number, required: true },
    roadWidthUnit: { type: String, required: true },
    direction: {
      type: String,
      required: true,
      enum: ["east", "west", "north", "south"],
    },
    facilities: {
      type: [String],
    },
    category: {
      type: String,
      enum: ["approved", "unapproved"],
    },
    siteImages: {
      type: [String],
      validate: [arrayLimit, "Site images cannot exceed 6 images."],
    },
    fmbImage: { type: String },
    locationImage: { type: String },
  },
  { timestamps: true }
);

function arrayLimit(val) {
  return val.length <= 6;
}

module.exports = mongoose.model("Plot", plotSchema);
