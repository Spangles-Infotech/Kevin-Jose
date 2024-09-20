const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define ProfileSchema
const profileSchema = new Schema({
  Name: { type: String, trim: true },
  EmployeeCode: { type: String, unique: true, trim: true },
  Designation: { type: String, trim: true },
  ProfileImage: { type: String, trim: true },
  JoiningDate: { type: String, trim: true },
  Gender: { type: String, enum: ["Male", "Female", "Others"], trim: true },
  EducationQualification: {
    type: [Object]
  },
  PhoneNumber: { type: String, trim: true },

  MaritalStatus: {
    type: String,
    enum: ["Married", "Unmarried", "Divorced", "Widowed", "Others"],
    trim: true
  },
  DateofBirth: { type: String, trim: true },
  LastWorkingDate: { type: String, trim: true },
  ReportingManager: { type: String, trim: true },
  Salary: { type: String, trim: true },
  WorkTime: {
    StartTime: { type: String, trim: true },
    EndTime: { type: String, trim: true }
  },
  WeekOff: { type: String, trim: true },

  AlternativePhoneNumber: { type: String, trim: true },
  EmailOffice: { type: String, trim: true },
  EmailPersonal: { type: String, trim: true },
  EmailAlternative: { type: String, trim: true },
 

  BloodGroup: {
    type: String,
    enum: [
      "A Positive",
      "A Negative",
      "AB Positive",
      "AB Negative",
      "B Positive",
      "B Negative",
      "O Positive",
      "O Negative"
    ]
  },
  AadhaarNumber: { type: String },
  AddressPresent: {
    AddressLine1: { type: String, minlength: 0, maxlength: 500 },
    AddressLine2: { type: String, minlength: 0, maxlength: 500 },
    City: { type: String, trim: true },
    District: { type: String, trim: true },
    State: { type: String, trim: true },
    Country: { type: String, trim: true },
    ZipCode: { type: String }
  },
  AddressPermanent: {
    AddressLine1: { type: String, minlength: 0, maxlength: 500 },
    AddressLine2: { type: String, minlength: 0, maxlength: 500 },
    City: { type: String, trim: true },
    District: { type: String, trim: true },
    State: { type: String, trim: true },
    Country: { type: String, trim: true },
    ZipCode: { type: String }
  },
  AccountNumber: { type: String },
  IFSCCode: { type: String, trim: true },
  BankName: { type: String, trim: true },
  PANNumber: { type: String, trim: true },
  workType: {
    type: String,
    enum: ["Office", "Remote"],
    trim: true
  },
  Status: {
    type: String,
    enum: ["Active", "Waiting", "In Active"],
    default: null,
    trim: true
  },
  ReasonForInactive: { type: String, trim: true },
  Username: { type: String, unique: true, trim: true },
  Password: { type: String,  select: false },
  EmployeeType: { type: String },
});





const Profiles = mongoose.model("Profile", profileSchema);

module.exports =  Profiles;
