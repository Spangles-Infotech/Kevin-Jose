import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OTPInput from "react-otp-input";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUserVerify,
  registerUserVerify,
} from "../../services/user/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Baseurl, UserConfig } from "../request";

export default function OTPBOX({ setShowOTPBox }) {
  const location = useLocation();
  const user = location.state?.processedUserValue;
  const [otp, setOtp] = useState(location?.state?.otp);
  const dispatch = useDispatch();

  const property_id = location.state?.property_id;

  const navigate = useNavigate();

  // Redux state selectors
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  // Display last three digits of phone number as hidden for security
  const displayPhoneNumber = () => {
    const lastThreeDigits = user?.phone?.slice(-3);
    return `*******${lastThreeDigits}`;
  };

  const handleSubmit = async () => {
    if (location.pathname === "/user-register/otp") {
      const userData = {
        username: user?.username,
        email: user?.email,
        phone: user?.phone,
        otp: otp,
      };

      dispatch(registerUserVerify(userData))
        .then((response) => {
          if (response?.error) {
            toast.error("Incorrect OTP", {
              position: "top-center",
              hideProgressBar: true,
            });
          } else {
            toast.success("OTP validated successfully!", {
              position: "top-center",
              hideProgressBar: true,
            });
            setTimeout(() => {
              navigate("/");
              setShowOTPBox(false);
            }, 1000);
          }
        })
        .catch((error) => {
          toast.error("Failed to validate OTP. Please try again.");
          console.error("Error validating OTP:", error);
        });
    } else if (location.pathname === "/user-login/otp") {
      const userData = {
        phone: user?.phone,
        otp: otp,
      };
      dispatch(loginUserVerify(userData))
        .then((response) => {
          if (response?.error) {
            toast.error("Incorrect OTP", {
              position: "top-center",
              hideProgressBar: true,
            });
          } else {
            toast.success("OTP validated successfully!", {
              position: "top-center",
              hideProgressBar: true,
            });
            setTimeout(() => {
              setShowOTPBox(false);
              navigate("/");
            }, 1000);
          }
        })
        .catch((error) => {
          toast.error("Failed to validate OTP. Please try again.");
          console.log(error);
        });
    } else if (location.pathname === "/builder/otp") {
      axios
        .post(
          `${Baseurl}my_simple_add_enquiry/`,
          { otp: otp, property_id },
          UserConfig
        )
        .then((res) => {
          console.log(res);
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
          navigate(-1);
        });
    }
  };

  const renderInput = (inputProps, index) => {
    return (
      <input
        {...inputProps}
        key={index}
        className="otp-input"
        style={{
          width: "4rem",
          height: "4rem",
          margin: "0 0.5rem",
          outline: "none",
          borderRadius: "10px",
          border: "1px solid grey",
          textAlign: "center",
        }}
      />
    );
  };

  return (
    <>
      <Navbar />
      <div
        style={{ marginTop: "10%" }}
        className="container border mx-auto py-5 border-danger rounded-4"
      >
        <div className="text-center text-danger py-3">
          <h5 className="fs-3 fw-semibold">
            Please enter the one-time password
          </h5>
          <h5 className="fs-3 fw-semibold">to verify</h5>
        </div>

        <p className="text-center fs-5 text-secondary fw-medium">
          A code has been sent to {displayPhoneNumber()}
        </p>

        <div className="py-5">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            separator={<span> </span>}
            inputStyle={{ width: "3rem", height: "3.5rem" }}
            containerStyle={{ display: "flex", justifyContent: "space-evenly" }}
            isInputNum={true}
            shouldAutoFocus
            renderInput={renderInput}
          />
        </div>

        <p
          className="text-center  text-secondary fw-medium"
          onClick={() => alert("Resend OTP logic goes here")}
          style={{ cursor: "pointer" }}
        >
          Resend One-Time Password
        </p>
      </div>

      <div className="mt-5 d-grid col-4 mx-auto">
        <button
          type="submit"
          className="btn btn-danger rounded-pill py-3"
          disabled={otp?.length < 6 || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "Validating..." : "Validate"}
        </button>
      </div>
      <Footer />
    </>
  );
}
