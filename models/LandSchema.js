const landSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Land", landSchema);
