const multer = require('multer');
const path = require('path');

// File filter function
const fileFilter = (acceptedTypes) => {
  return (req, file, cb) => {
    if (acceptedTypes.includes(path.extname(file.originalname).toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  };
};

// site images
const siteImagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/site/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

//  FMB images.
const fmbImagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/fmb/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// location images
const locationImagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/location/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Accepted file extensions
const acceptedImageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

// instance
const uploadSiteImages = multer({
  storage: siteImagesStorage,
  fileFilter: fileFilter(acceptedImageExtensions),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

const uploadFmbImage = multer({
  storage: fmbImagesStorage,
  fileFilter: fileFilter(acceptedImageExtensions),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

const uploadLocationImage = multer({
  storage: locationImagesStorage,
  fileFilter: fileFilter(acceptedImageExtensions),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

module.exports = {
  uploadSiteImages,
  uploadFmbImage,
  uploadLocationImage
};
