const commercialSchema = new mongoose.Schema({
  propertyCategory: { type: String, required: true },
  propertyName: { type: String, required: true },
  location: { type: String, required: true },
  city: { type: String },
  builtUpArea: { type: Number, required: true },
  builtUpAreaUnit: { type: String },
  availableFloor: { type: Number },
  floorNumber: { type: Number },
  totalFloors: { type: Number, required: true },
  twoWheelerParking: { type: Number },
  fourWheelerParking: { type: Number },
  category: { type: String, required: true },
  status: { type: String, required: true },
  condition: { type: String, required: true },
  indoorFacility: { type: [String], default: [] },
  outdoorFacility: { type: [String], default: [] },
  exteriorViewImage: {
    type: String,
  },
  interiorViewImage: {
    type: String,
  },
  washRoomImage: {
    type: String,
  },
  floorPlanImage: {
    type: String,
  },
  locationImage: {
    type: String,
  },
});

module.exports = mongoose.model("Commercial", commercialSchema);
