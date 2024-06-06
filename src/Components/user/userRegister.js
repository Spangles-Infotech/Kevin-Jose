import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useForm, Controller } from "react-hook-form";
import { Field } from "../forms/FormComponent";
import { Form, Col, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserReq } from "../../services/user/userSlice";
import { toast } from "react-toastify";

export default function UserRegister() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (userValue) => {
    const processedUserValue = {
      ...userValue,
      phone: `+${userValue.phone}`,
    };

    dispatch(registerUserReq(processedUserValue))
      .then((response) => {
        navigate("otp", {
          state: { processedUserValue, otp: response.payload.message },
        });
      })
      .catch((error) => {
        toast.error("Failed to register user. Please try again later.");
        console.error("Error registering user:", error);
      });
  };

  return (
    <>
      <Navbar />

      <div className="container" style={{ marginTop: "10%" }}>
        <div className="text-center">
          <h3 className="mt-5 pt-5 mx-1 text-lg-start bigvalue underline">
            Enter your Details
          </h3>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <Field
                    label="Name"
                    placeholder="Enter Name"
                    isInvalid={!!errors.username}
                    errorMessage={errors.username?.message}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col md={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <Field
                    label="Email"
                    placeholder="Enter Email"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    {...field}
                  />
                )}
              />
            </Col>

            <Col md={6}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{
                  required: "Phone number is required",
                  validate: (value) => {
                    if (value && value.length < 10) {
                      return "Phone number must be at least 10 digits";
                    }
                    return true;
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <div className="mb-3">
                    <label className="form-label pb-3 fw-medium">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"in"}
                      value={value}
                      onChange={onChange}
                      className={`w-100 ${errors.phone ? "is-invalid" : ""}`}
                      inputStyle={{
                        borderColor: errors.phone ? "red" : "#D7242A",
                        borderRadius: "10px",
                        paddingBottom: "4.2%",
                        paddingTop: "4.2%",
                      }}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback d-block">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                )}
              />
            </Col>
          </Row>

          <div className="mt-5 d-grid col-4 mx-auto">
            <button type="submit" className="btn btn-danger rounded-pill py-3">
              Get OTP
            </button>
          </div>
        </Form>
        <div className="text-center mt-3">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-danger link-underline-danger">
              Login
            </Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
