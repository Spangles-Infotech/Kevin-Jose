import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/myproperties");
  };

  const handlepost = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/mobile");
    } else {
      navigate("/post");
    }
  };
  const [showModal, setShowModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const notify = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNavigate = () => {
    navigate("/mobile");
    setShowModal(false);
  };
  const handleNavigate1 = () => {
    navigate("/new-path");
    setShowModal(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
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
            <div className="d-lg-flex  mx-5 px-5 my-2">
              <div className="dropdown">
                <ul
                  className="dropdown-menu gap-2"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleCartClick}>
                  <BsCart4 size={20} />
                </a>
              </li>
              <div>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={notify}>
                    <FiUser size={20} />
                  </a>
                </li>
                {}

                {/* modal */}
                <Modal show={showModal} onHide={handleCloseModal} size="sm">
                  <Modal.Body>
                    <div className="justify-content-end mb-3">
                      <Button
                        variant=""
                        className="me-2"
                        onClick={handleNavigate}
                        style={{ color: "#DC0000" }}
                      >
                        Sign up
                      </Button>
                    </div>
                    <div className="justify-content-end mb-3">
                      <Button
                        variant=""
                        className="me-2"
                        onClick={handleNavigate1}
                        style={{ color: "#DC0000" }}
                      >
                        Log In
                      </Button>
                    </div>
                  </Modal.Body>
                </Modal>

                <ToastContainer />
              </div>
            </ul>
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
