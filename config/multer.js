const multer = require('multer');
const path = require('path');

// File filter function to accept only image files with specific extensions
const fileFilter = (acceptedTypes) => {
  return (req, file, cb) => {
    if (acceptedTypes.includes(path.extname(file.originalname).toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  };
};

// Single storage configuration for all images
const propertyImagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/property/'); // All images saved in the same folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename based on timestamp
  }
});

// Accepted file extensions
const acceptedImageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

// multer instance for uploading property-related images
const uploadPropertyImages = multer({
  storage: propertyImagesStorage,
  fileFilter: fileFilter(acceptedImageExtensions),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit per image
});

// Export the multer instance
module.exports = {
  uploadPropertyImages
};
