import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/logo.png";
import logo1 from "../Images/logo1.png";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import Navigation from "./Navigation";
import Properties from "./Properties";
import Exclusive from "./Exclusive";
import Real from "./Real";
import Enquiry from "./Enquiry";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/myproperties");
  };

  const handlepost = () => {
    const token = localStorage.getItem("customer");
    if (!token) {
      navigate("/user-login");
    } else {
      navigate("/form");
    }
  };

  const getTokenFromLocalStorage = localStorage.getItem("customer");

  const handleLogout = () => {
    localStorage.removeItem("customer");

    toast.success("You have successfully logged out", {
      hideProgressBar: true,
      position: "top-center",
    });
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top  ">
        <div className="container-fluid mx-5 px-5">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex gap-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleCartClick}>
                  <BsCart4 size={20} />
                </a>
              </li>
            </ul>{" "}
            <div>
              <div class="btn-group position-relative">
                <button
                  class="btn  text-white  border-0   "
                  style={{ outline: "none" }}
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  <FiUser size={20} />
                </button>
                {getTokenFromLocalStorage ? (
                  <ul class="dropdown-menu border-0 rounded-4">
                    <div className="d-flex px-4 py-2 gap-3 mx-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <img
                          src="assets\Group.png "
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center  gap-1 ">
                        <span className="fw-medium">Rajesh</span>
                        <span className="fw-light">rajesh123@gmail.com</span>
                        <span className="fw-light">+91 90879 56762</span>
                      </div>
                    </div>

                    <div className=" d-flex justify-content-center align-items-center text-danger fw-semibold py-2">
                      <span className="cursor-point" onClick={handleLogout}>
                        Log Out
                      </span>
                    </div>
                  </ul>
                ) : (
                  <ul class="dropdown-menu">
                    <li>
                      <Link to="/user-login" class="dropdown-item ">
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link to="/user-register" class="dropdown-item">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <ToastContainer />
            </div>
            <button
              className="d-flex  align-items-center justify-content-center rounded-pill py-1 px-3 bg-light border-0 gap-1   fw-medium position-relative"
              onClick={handlepost}
              style={{ fontSize: "18px", color: "rgba(86, 86, 86, 1)" }}
            >
              Post Your Property
              <span
                className="rounded-4 px-2  text-secondary  mb-1"
                style={{
                  backgroundColor: "rgba(254, 199, 43, 1)",
                  fontSize: "10px",
                }}
              >
                Free
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
