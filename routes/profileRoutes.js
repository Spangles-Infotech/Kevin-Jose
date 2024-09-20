const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'ProfileImage') {
      cb(null, 'uploads/profileImages/');
    } else if (file.fieldname === 'EducationQualification') {
      cb(null, 'uploads/educationQualifications/');
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Routes for Profile CRUD operations
router.post('/create', upload.fields([
  { name: 'ProfileImage', maxCount: 1 },
  { name: 'EducationQualification', maxCount: 2 }
]), profileController.createProfile);

router.get('/:id', profileController.getProfileById);

router.put('/:id', upload.fields([
  { name: 'ProfileImage', maxCount: 1 },
  { name: 'EducationQualification', maxCount: 10 }
]), profileController.updateProfile);

router.delete('/:id', profileController.deleteProfile);

module.exports = router;
