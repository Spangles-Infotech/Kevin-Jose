<div className="px-2 rounded-4 mt-4 border border-danger w-100 mx-auto">
<div className="d-flex justify-content-evenly text-center gap-1 align-items-center border-bottom">
  <div
    className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
      imageCat === "siteview" &&
      "text-danger border-danger border-bottom"
    }`}
    style={{ fontSize: "20px", width: "20%" }}
    onClick={() => setImageCat("siteview")}
  >
    Site View
  </div>
  <div
    className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
      imageCat === "fmb" && "text-danger border-danger border-bottom"
    } `}
    style={{ fontSize: "20px", width: "20%" }}
    onClick={() => setImageCat("fmb")}
  >
    FMB
  </div>{" "}
  <div
    className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
      imageCat === "location" &&
      "text-danger border-danger border-bottom"
    }`}
    style={{ fontSize: "20px", width: "20%" }}
    onClick={() => setImageCat("location")}
  >
    Location Map
  </div>
</div>

{imageCat === "siteview" && (
  <>
    <div
      className="d-flex justify-content-center align-items-center p-0 m-0"
      style={{ height: "250px" }}
    >
      <label
        htmlFor="uploadInput"
        className="text-danger btn border border-danger py-3 px-5 rounded-5"
      >
        Upload Photos
      </label>
      <input
        id="uploadInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
        multiple
      />
    </div>

    {/* Render uploaded images */}
    <div className="d-flex flex-wrap justify-content-center">
      {siteImages.map((image) => (
        <div key={image.id} className="m-2 position-relative">
          <img
            src={URL.createObjectURL(image.file)}
            alt={`Uploaded ${imageCat} image`}
            className="rounded-3"
            style={{ maxWidth: "100px", height: "100px" }}
          />
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0"
            onClick={() => handleRemoveImage(image.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  </>
)}

{/* fmb */}
{imageCat === "fmb" && (
  <>
    <div
      className="d-flex justify-content-center align-items-center p-0 m-0"
      style={{ height: "250px" }}
    >
      <label
        htmlFor="uploadInput"
        className="text-danger btn border border-danger py-3 px-5 rounded-5"
      >
        Upload Photos
      </label>
      <input
        id="uploadInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>

    {/* Render uploaded images */}
    <div className="d-flex flex-wrap justify-content-center">
      {fmbImages.map((image) => (
        <div key={image.id} className="m-2 position-relative">
          <img
            src={URL.createObjectURL(image.file)}
            alt={`Uploaded ${imageCat} image`}
            className="rounded-3"
            style={{ maxWidth: "100px", height: "100px" }}
          />
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0"
            onClick={() => handleRemoveImage(image.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  </>
)}

{/* location map */}
{imageCat === "location" && (
  <>
    <div
      className="d-flex justify-content-center align-items-center p-0 m-0"
      style={{ height: "250px" }}
    >
      <label
        htmlFor="uploadInput"
        className="text-danger btn border border-danger py-3 px-5 rounded-5"
      >
        Upload Photos
      </label>
      <input
        id="uploadInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>

    {/* Render uploaded images */}
    <div className="d-flex flex-wrap justify-content-center">
      {locationImages.map((image) => (
        <div key={image.id} className="m-2 position-relative">
          <img
            src={URL.createObjectURL(image.file)}
            alt={`Uploaded ${imageCat} image`}
            className="rounded-3"
            style={{ maxWidth: "100px", height: "100px" }}
          />
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0"
            onClick={() => handleRemoveImage(image.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  </>
)}
</div>  



// form 

// import React, { useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import { activity, propType, role, subType, subTypeTwo } from "./Data";
// import PhoneInput from "react-phone-input-2";
// import Plots from "./forms/Plots";

// export const InputField = ({
//   label,
//   type = "text",
//   className,
//   placeholder,
//   ...props
// }) => (
//   <div className="col-12 col-md-6 mb-4">
//     <label className="form-label fw-medium pb-3">{label}</label>
//     <input
//       type={type}
//       placeholder={placeholder}
//       className={`form-control border-danger ${className}`}
//       {...props}
//     />
//   </div>
// );

// const PhoneField = ({ label, ...props }) => (
//   <div className="col-12 col-md-6 mb-3">
//     <label className="form-label pb-3 fw-medium">{label}</label>
//     <PhoneInput
//       className="w-100"
//       inputStyle={{
//         borderColor: "#D7242A",
//         borderRadius: "4px",
//       }}
//       {...props}
//     />
//   </div>
// );

// export default function FormContainer() {

//   const [options,setOptions] = useState({
//     selectedRole : "owner",
//     selectedActivity:"sell",
//     selectedType:"plot",
//     selectedSubType:""
//   })
//   // const [selectedRole, SetSelectedRole] = useState("owner");
//   // const [selectedActivity, SetSelectedActivity] = useState("sell");
//   // const [selectedType, SetSelectedType] = useState("plot");
//   // const [selectedSubType, SetSelectedSubType] = useState("");
//   return (
//     <>
//       <Navbar />

//       <div className="container mx-auto" style={{ marginTop: "10%" }}>
//         <div className="text-center pt-3">
//           <h2 className="underline bigvalue">Start posting your property</h2>
//         </div>

//         <div className="pt-5">
//           <p className="fw-medium fs-4">You Are</p>
//           <div className="d-flex flex-wrap gap-3 pt-3  ">
//             {role.map((itm, indx) => (
//               <div
//                 key={indx}
//                 className={`rounded-pill px-5 py-3 text-capitalize ${
//                   selectedRole === itm
//                     ? "active-button-form"
//                     : "inactive-button-form"
//                 }`}
//                 onClick={() => SetSelectedRole(itm)}
//               >
//                 {itm}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-5">
//           <form>
//             <div className="row">
//               <InputField
//                 label="First Name"
//                 placeholder="Enter your first name"
//               />
//               <InputField
//                 label="Last Name"
//                 placeholder="Enter your last name"
//               />
//               <PhoneField label="Phone" country="in" />
//               <InputField label="Email" placeholder="Enter your Email" />
//             </div>
//           </form>
//         </div>

//         <div className="pt-3">
//           <p className="fw-medium fs-4">You are here to</p>
//           <div className="d-flex flex-wrap gap-3 pt-3  ">
//             {activity.map((itm, indx) => (
//               <div
//                 key={indx}
//                 className={`rounded-pill px-5 py-3 text-capitalize ${
//                   selectedActivity === itm
//                     ? "active-button-form"
//                     : "inactive-button-form"
//                 }`}
//                 onClick={() => SetSelectedActivity(itm)}
//               >
//                 {itm}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-5 pt-3">
//           <p className="fw-medium fs-4">Property Type</p>

//           <div className=" form-shadow px-2 rounded-4 mt-4">
//             <div className="d-flex justify-content-evenly text-center gap-1 align-items-center border-bottom">
//               {propType.map((itm, indx) => (
//                 <div
//                   key={indx}
//                   onClick={() => SetSelectedType(itm.be)}
//                   className={`text-capitalize  cursor-point  text-secondary border-3 fw-medium py-3 ${
//                     selectedType === itm.be
//                       ? "border-bottom border-danger text-danger "
//                       : "border-bottom"
//                   }`}
//                   style={{ fontSize: "20px", width: "20%" }}
//                 >
//                   {itm.fe}
//                 </div>
//               ))}
//             </div>
//             <div className="p-3 py-5">
//               {subType[selectedType]?.map((itm, indx) => (
//                 <span
//                   className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
//                     selectedSubType === itm.be && "border-danger text-danger"
//                   }`}
//                   style={{ fontSize: "16px", textTransform: "capitalize" }}
//                   key={indx}
//                   onClick={() => SetSelectedSubType(itm.be)}
//                 >
//                   {itm.fe}
//                 </span>
//               ))}
//             </div>

//             {subTypeTwo[selectedType] && (
//               <div className="p-3 border-top border-2 py-5">
//                 {subTypeTwo[selectedType]?.map((itm, indx) => (
//                   <span
//                     className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
//                       selectedSubType === itm.be && "border-danger text-danger"
//                     }`}
//                     style={{ fontSize: "16px", textTransform: "capitalize" }}
//                     key={indx}
//                     onClick={() => SetSelectedSubType(itm.be)}
//                   >
//                     {itm.fe}
//                   </span>
//                 ))}
//                 {(selectedActivity === "rent" ||
//                   selectedActivity === "lease") &&
//                   selectedType === "commercial_property" && (
//                     <>
//                       <span
//                         className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
//                           selectedSubType === "pg_home" &&
//                           "border-danger text-danger"
//                         }`}
//                         style={{
//                           fontSize: "16px",
//                           textTransform: "capitalize",
//                         }}
//                         onClick={() => SetSelectedSubType("pg_home")}
//                       >
//                         PG Home
//                       </span>
//                       <span
//                         className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
//                           selectedSubType === "pg_hostel" &&
//                           "border-danger text-danger"
//                         }`}
//                         style={{
//                           fontSize: "16px",
//                           textTransform: "capitalize",
//                         }}
//                         onClick={() => SetSelectedSubType("pg_hostel")}
//                       >
//                         PG Hostel
//                       </span>
//                     </>
//                   )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* forms rendering */}

//         <div className="mt-4 pt-3">
          
//           <Plots />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
