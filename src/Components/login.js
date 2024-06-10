import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { Baseurl } from "./request";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../services/user/userSlice";
import { toast } from "react-toastify";
import { user } from "@nextui-org/react";

const Login = ({ setShowOTPBox }) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const processedUserValue = {
      phone: `+${phoneNumber}`,
    };
    dispatch(loginUser(processedUserValue))
      .then((res) => {
        if (res?.error) {
          toast.warn("User not found! Sign up", {
            position: "top-center",
            hideProgressBar: true,
          });
        } else {
          setShowOTPBox(true);
          navigate("otp", {
            state: { processedUserValue, otp: res.payload.message },
          });
        }
      })
      .catch((error) => {
        toast("error");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="text-center">
          <h3 className="mt-5 pt-5 mx-1 text-lg-start bigvalue underline">
            Enter your Mobile Number
          </h3>
        </div>
        <Form
          className="mx-auto my-5"
          style={{ maxWidth: "450px", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <PhoneInput
            country={"in"}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            inputStyle={{
              borderColor: "red",
              borderRadius: "5px",
              paddingBottom: "6%",
              paddingTop: "6%",
            }}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
          />
          <div className="d-flex justify-content-center pt-3">
            <p>
              Don’t have an account?{" "}
              <span
                style={{
                  color: "red",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/user-register")}
              >
                Sign up
              </span>
            </p>
          </div>
          <div className="mt-5 d-grid col-4 mx-auto">
            <button type="submit" className="btn btn-danger rounded-pill py-3">
              Get OTP
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
