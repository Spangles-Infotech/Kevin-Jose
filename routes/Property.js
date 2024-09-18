const { CreateProperty } = require("../controllers/Property");
const router = require("express").Router();
const {
  uploadSiteImages,
  uploadFmbImage,
  uploadLocationImage,
} = require("../config/multer");

// CREATE
router.post(
  "/create",
  uploadSiteImages.array("siteImages", 6),
  uploadFmbImage.single("fmbImage"),
  uploadLocationImage.single("locationImage"),
  CreateProperty
);
// GET
// UPDATE
// DELETE

module.exports = router;
