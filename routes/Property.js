const { CreateProperty } = require("../controllers/Property");
const router = require("express").Router();
const {uploadPropertyImages} = require("../config/multer")

//  Create
router.post(
  "/create",
  uploadPropertyImages.fields([
    { name: "siteImages", maxCount: 6 },
    { name: "fmbImage", maxCount: 1 },
    { name: "locationImage", maxCount: 1 },
  ]),
  CreateProperty
);

// GET
// UPDATE
// DELETE

module.exports = router;
