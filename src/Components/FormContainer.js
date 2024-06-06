import React, { Suspense, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { activity, propType, role, subType, subTypeTwo } from "./Data";
import PhoneInput from "react-phone-input-2";

// Lazy loading of form components
const Plots = React.lazy(() => import("./forms/Plots"));
const Apartment = React.lazy(() => import("./forms/Apartment"));
const CommercialCommon = React.lazy(() => import("./forms/commercial/common"));
const Industrial = React.lazy(() => import("./forms/commercial/Industrial"));
const PgHostel = React.lazy(() => import("./forms/commercial/PgHostel"));

export const InputField = ({
  label,
  type = "text",
  className,
  placeholder,
  value,
  ...props
}) => (
  <div className="col-12 col-md-6 mb-4">
    <label className="form-label fw-medium pb-3">{label}</label>
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={`form-control border-danger form-control-lg ${className}`}
      {...props}
    />
  </div>
);

const PhoneField = ({ label, value, ...props }) => (
  <div className="col-12 col-md-6 mb-3">
    <label className="form-label pb-3 fw-medium " >{label}</label>
    <PhoneInput
      value={`${value}`}
      className="w-100  "
      inputStyle={{
        borderColor: "#D7242A",
        borderRadius:"10px",
       paddingBottom:"4.2%",
       paddingTop:"4.2%"
      }}
      {...props}
    />
  </div>
);

export default function FormContainer() {
  const [options, setOptions] = useState({
    selectedRole: "owner",
    selectedActivity: "sell",
    selectedType: "plot",
    selectedSubType: "",
    subTypeCat: "",
  });

  const user = {
    name: "Arjun",
    email: "arjunnks123@gmail.com",
    phone: "+918220526561",
  };

  const handleRoleSelect = (role) => {
    setOptions({ ...options, selectedRole: role });
  };

  const handleActivitySelect = (activity) => {
    setOptions({ ...options, selectedActivity: activity });
  };

  const handleTypeSelect = (type) => {
    setOptions({ ...options, selectedType: type, selectedSubType: "" });
  };

  const handleSubTypeSelect = (subType, two) => {
    if (two) {
      setOptions({
        ...options,
        selectedSubType: subType,
        subTypeCat: "optionTwo",
      });
    } else {
      setOptions({
        ...options,
        selectedSubType: subType,
        subTypeCat: "optionOne",
      });
    }
  };

  console.log(options);

  return (
    <>
      <Navbar />

      <div className="container mx-auto" style={{ marginTop: "10%" }}>
        <div className="text-center pt-3">
          <h2 className="underline bigvalue">Start posting your property</h2>
        </div>

        <div className="pt-5">
          <p className="fw-medium fs-4">You Are</p>
          <div className="d-flex flex-wrap gap-3 pt-3">
            {role.map((itm, indx) => (
              <div
                key={indx}
                className={`rounded-pill px-5 py-3 text-capitalize ${
                  options.selectedRole === itm
                    ? "active-button-form"
                    : "inactive-button-form"
                }`}
                onClick={() => handleRoleSelect(itm)}
              >
                {itm}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <form>
            <div className="row">
              <InputField
                label="First Name"
                placeholder="Enter your first name"
                value={user.name}
              />
              <InputField
                label="Last Name"
                placeholder="Enter your last name"
              />
              <PhoneField label="Phone" country="in" value={user.phone} />
              <InputField
                label="Email"
                placeholder="Enter your Email"
                value={user.email}
              />
            </div>
          </form>
        </div>

        <div className="pt-3">
          <p className="fw-medium fs-4">You are here to</p>
          <div className="d-flex flex-wrap gap-3 pt-3">
            {activity.map((itm, indx) => (
              <div
                key={indx}
                className={`rounded-pill px-5 py-3 text-capitalize ${
                  options.selectedActivity === itm
                    ? "active-button-form"
                    : "inactive-button-form"
                }`}
                onClick={() => handleActivitySelect(itm)}
              >
                {itm}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-3">
          <p className="fw-medium fs-4">Property Type</p>

          <div className=" form-shadow px-2 rounded-5 mt-4">
            <div className="d-flex justify-content-evenly text-center gap-1 align-items-center border-bottom">
              {propType.map((itm, indx) => (
                <div
                  key={indx}
                  onClick={() => handleTypeSelect(itm.be)}
                  className={`text-capitalize cursor-point text-secondary border-3 fw-medium py-3 ${
                    options.selectedType === itm.be
                      ? "border-bottom border-danger text-danger"
                      : "border-bottom"
                  }`}
                  style={{ fontSize: "20px", width: "20%" }}
                >
                  {itm.fe}
                </div>
              ))}
            </div>
            <div className="p-3 py-5">
              {subType[options.selectedType]?.map((itm, indx) => (
                <span
                  className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
                    options.selectedSubType === itm.be &&
                    "border-danger text-danger"
                  }`}
                  style={{ fontSize: "16px", textTransform: "capitalize" }}
                  key={indx}
                  onClick={() => handleSubTypeSelect(itm.be)}
                >
                  {itm.fe}
                </span>
              ))}
            </div>

            {subTypeTwo[options.selectedType] && (
              <div className="p-3 border-top border-2 py-5">
                {subTypeTwo[options.selectedType]?.map((itm, indx) => (
                  <span
                    className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
                      options.selectedSubType === itm.be &&
                      "border-danger text-danger"
                    }`}
                    style={{ fontSize: "16px", textTransform: "capitalize" }}
                    key={indx}
                    onClick={() => handleSubTypeSelect(itm.be, "two")}
                  >
                    {itm.fe}
                  </span>
                ))}
                {(options.selectedActivity === "rent" ||
                  options.selectedActivity === "lease") &&
                  options.selectedType === "commercial_property" && (
                    <>
                      <span
                        className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
                          options.selectedSubType === "service_apartment" &&
                          "border-danger text-danger"
                        }`}
                        style={{
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                        onClick={() => handleSubTypeSelect("service_apartment")}
                      >
                        Service Apartment
                      </span>
                    </>
                  )}
                {options.selectedActivity === "rent" &&
                  options.selectedType === "commercial_property" && (
                    <>
                      <span
                        className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
                          options.selectedSubType === "PG_home" &&
                          "border-danger text-danger"
                        }`}
                        style={{
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                        onClick={() => handleSubTypeSelect("PG_home")}
                      >
                        PG Home
                      </span>
                      <span
                        className={`rounded-pill border p-2 px-3 text-secondary fw-medium cursor-point ${
                          options.selectedSubType === "PG_hostel" &&
                          "border-danger text-danger"
                        }`}
                        style={{
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                        onClick={() => handleSubTypeSelect("PG_hostel")}
                      >
                        PG Hostel
                      </span>
                    </>
                  )}
              </div>
            )}
          </div>
        </div>

        {/* forms rendering */}

        <div className="mt-4 pt-3">
          <Suspense fallback={<div>Loading...</div>}>
            {(options.selectedType === "plot" ||
              options.selectedType === "land") &&
              options.selectedSubType !== "" && (
                <Plots options={options} user={user} />
              )}
            {options.selectedType === "residential_property" &&
              options.selectedSubType !== "" && (
                <Apartment options={options} user={user} />
              )}
            {options.selectedType === "commercial_property" &&
              options?.subTypeCat === "optionOne" &&
              options.selectedSubType !== "" &&
              options.selectedSubType !== "service_apartment" &&
              options.selectedSubType !== "PG_home" &&
              options.selectedSubType !== "PG_hostel" && (
                <CommercialCommon options={options} user={user} />
              )}
            {options.selectedType === "commercial_property" &&
              options?.subTypeCat === "optionTwo" &&
              (options.selectedSubType === "factory" ||
                options.selectedSubType === "industrialbuilding" ||
                options.selectedSubType === "industrial_shed") && (
                <Industrial options={options} user={user} />
              )}

            {options.selectedSubType === "service_apartment" && (
              <Industrial options={options} user={user} />
            )}

            {(options.selectedSubType === "PG_home" ||
              options.selectedSubType === "PG_hostel") && (
              <PgHostel options={options} user={user} />
            )}
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}
