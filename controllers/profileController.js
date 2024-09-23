const Profiles = require('../models/profileSchema');
const fs = require('fs');
const EmployeeCode = require('../utils/EmployeeCodeGenerater')

// Create new profile
exports.createProfile = async (req, res) => {
    console.log('req.body:', req.body);
    // console.log('req.files:', req.files);
  
    try {
      // Process profile image
      let profileImage = '';
      if (req.files['ProfileImage']) {
        profileImage = req.files['ProfileImage'][0].path;
      }
  
      // Process education qualification files
      const educationFiles = req.files['EducationQualification']?.map((file, index) => ({
        pdf: file.path,
        degree: req.body.EducationQualificationDegree[index] // Access degree directly
      })) || [];
  
      console.log("educationFiles:", educationFiles);

      // Create new profile
      const newProfile = new Profiles({
        Name: req.body.Name,
        EmployeeCode: req.body.EmployeeCode,
        ProfileImage: profileImage,
        EducationQualification: educationFiles,
      });
  
      await newProfile.save();
      return res.status(201).json({ message: 'Profile created successfully', newProfile });
    } catch (error) {
      console.error('Error creating profile:', error); // Log error for debugging
      return res.status(500).json({ message: 'Error creating profile', error });
    }
  };
  





// Get Profile by ID
exports.getProfileById = async (req, res) => {
    try {
      const profile = await Profiles.findById(req.params.id);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving profile', error });
    }
  };
  
//   Update Profile

exports.updateProfile = async (req, res) => {
    try {
      const profile = await Profiles.findById(req.params.id);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      // Handle ProfileImage update
      if (req.files['ProfileImage']) {
        const newProfileImage = req.files['ProfileImage'][0].path;
        if (profile.ProfileImage && fs.existsSync(profile.ProfileImage)) {
          fs.unlinkSync(profile.ProfileImage); // Delete old image
        }
        profile.ProfileImage = newProfileImage;
      }
  
      // Handle EducationQualification update
      if (req.files['EducationQualification']?.length > 0) {
        const newEducationFiles = req.files['EducationQualification'].map((file, index) => ({
          pdf: file.path,
          degree: req.body[`EducationQualification[${index}][Degree]`] // Match degree
        }));
  
        // Delete old files
        profile.EducationQualification.forEach(item => {
          if (fs.existsSync(item.pdf)) {
            fs.unlinkSync(item.pdf); // Delete old file
          }
        });
  
        profile.EducationQualification = newEducationFiles;
      }
  
      // Update other fields
      Object.assign(profile, req.body);
  
      await profile.save();
      res.status(200).json({ message: 'Profile updated successfully', profile });
    } catch (error) {
      res.status(500).json({ message: 'Error updating profile', error });
    }
  };
// Delete Profile

exports.deleteProfile = async (req, res) => {
    try {
      const profile = await Profiles.findById(req.params.id);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      // Delete profile image if exists
      if (profile.ProfileImage && fs.existsSync(profile.ProfileImage)) {
        fs.unlinkSync(profile.ProfileImage);
      }
  
      // Delete education qualification files
      profile.EducationQualification.forEach(item => {
        if (fs.existsSync(item.pdf)) {
          fs.unlinkSync(item.pdf); // Delete file
        }
      });
  
      await profile.remove();
     return res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting profile', error });
    }
  };
  

  // EmployeeCodeGenerate
  exports.EmployeeCodeGenerate = async (req, res) => {
    try {
      const code = await EmployeeCode()

      if (code) {
        return  res.status(200).json({"code":code});
        
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error Employee Code Generate ', error });
    }};
  // 