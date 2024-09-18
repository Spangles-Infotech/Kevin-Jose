const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["owner", "agent", "builder"],
    },
    firstName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
      enum: ["sell", "rent", "lease"],
    },
    propertyType: {
      type: String,
      required: true,
      enum: ["plot", "land", "residential property", "commercial property"],
    },
    propertyDetails: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "propertyTypeDetails",
    },
    propertyTypeDetails: {
      type: String,
      required: true,
      enum: ["Plot", "Land", "Residential", "Commercial"],
    },
    advanceAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    sellAmount: {
      type: Number,
      min: 0,
    },
    rentAmount: {
      type: Number,
      min: 0,
    },
    agentCommission: {
      type: Number,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    adminApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
