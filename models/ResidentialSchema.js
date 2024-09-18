const residentialSchema = new mongoose.Schema(
  {
    propertyCategory: { type: String, required: true },
    propertyName: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: String },
    availableBHK: { type: String, required: true },
    builtUpArea: { type: Number, required: true },
    builtUpAreaUnit: { type: String },
    plotArea: { type: Number },
    plotAreaUnit: { type: String },
    numOfUnits: { type: Number },
    totalFloors: { type: Number, required: true },
    floorNumber: { type: Number },
    category: { type: String, required: true },
    status: { type: String, required: true },
    condition: { type: String, required: true },
    indoorFacility: { type: [String], default: [] },
    outdoorFacility: { type: [String], default: [] },
    exteriorViewImage: {
      type: String,
    },
    livingRoomImage: {
      type: String,
    },
    bedroomsImage: {
      type: String,
    },
    kitchenImage: {
      type: String,
    },
    masterPlanImage: {
      type: String,
    },
    locationImage: {
      type: String,
    },
    floorPlanImage: {
      type: String,
    },
    logoImage: {
      type: String,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Residential", residentialSchema);
