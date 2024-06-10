import React, { Suspense,  useState ,useEffect} from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ModalShow } from "./modal/modal";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
import Loading from "./modal/spinner";

const Plots = React.lazy(() => import("./viewDetails/plotView"));
const Residential = React.lazy(() => import("./viewDetails/residentialView"));
const Commercial = React.lazy(() => import("./viewDetails/commercial"));
const ServiceAppartment = React.lazy(() =>
  import("./viewDetails/serviCeappartment")
);
const PGHOME = React.lazy(() => import("./viewDetails/pgHostel"));
const Industry = React.lazy(() => import("./viewDetails/factoryView"));

const Preview = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState(location.state);
  const [modalShow, setModalShow] = useState(false);
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false);
  const id = details?.id;
  const [isOpen, setIsOpen] = useState(true);


  const handleDelete = () => {
    axios
      .delete(`${Baseurl}properties/${id}`, UserConfig)
      .then((res) => {
        navigate("/form");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteClick = () => {
    setIsDeleteConfirm(true);
    setModalShow(true);
  };

  const confirmDelete = () => {
    handleDelete();
    setModalShow(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(false);
  }, []);

 


  const imageStyles = [
    { width: "440px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "330px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "270px", height: "260px" },
    { width: "200px", height: "260px" },
    {},
  ];

  const indoorFacilities = [
    ...(details?.commercial_properties?.showroom?.indoor_facilities?.map(
      (indoor) => indoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.industrialbuilding?.indoor_facilities?.map(
      (indoor) => indoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.service_apartment?.indoor_facilities?.map(
      (indoor) => indoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.factory?.indoor_facilities?.map(
      (indoor) => indoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.pg_colony?.indoor_facilities?.map(
      (indoor) => indoor.facility.name
    ) || []),
  ];

  const outdoorFacilities = [
    ...(details?.commercial_properties?.showroom?.outdoor_facilities?.map(
      (outdoor) => outdoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.industrialbuilding?.outdoor_facilities?.map(
      (outdoor) => outdoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.service_apartment?.outdoor_facilities?.map(
      (outdoor) => outdoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.factory?.outdoor_facilities?.map(
      (outdoor) => outdoor.facility.name
    ) || []),
    ...(details?.commercial_properties?.pg_colony?.outdoor_facilities?.map(
      (outdoor) => outdoor.facility.name
    ) || []),
  ];


  
  if (loading) {
    return <Loading />;
  }


  console.log(details);
  return (
    <>
      <Navbar />

      <div
        className=" container postion-relative  mx-auto"
        style={{ marginTop: "6.7%" }}
      >
        <span
          className="position-absolute"
          style={{ top: "18%" }}
          onClick={() => navigate("/")}
        >
          <FiArrowLeft size={25} color="red" />
        </span>
        <div
          className={`w-50 mx-auto d-flex   justify-content-between p-2 ${
            isOpen ? "visible" : "invisible"
          }`}
          style={{ backgroundColor: "rgba(255, 240, 209, 1)" }}
        >
          <div className="d-flex align-items-center ">
            <img src="assets\k.png" />
          </div>
          <div className=" ">
            <span
              style={{ fontSize: "14px", color: "rgba(178, 157, 30, 1)" }}
              className="fw-semibold"
            >
              Wait For Approval
            </span>
            <br />
            <span style={{ fontSize: "10px" }}>
              We have sent your post for approval. Your post will go live after
              approval is verified.
            </span>
          </div>
          <div className="d-flex align-items-center ">
            <IoCloseCircleOutline
              color="red"
              size={25}
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div
          className={`w-50 mx-auto d-flex   justify-content-between bg-warning py-1 ${
            isOpen ? "visible" : "invisible"
          }`}
        ></div>
      </div>

      <div className="border container mx-auto px-4 py-5 rounded-4 border-danger">
        <h2 className="fw-bold text-danger" style={{ fontSize: "40px" }}>
          {details?.sale_price && <>{details.sale_price}</>}
          {details?.rent && <>{details.rent}</>}
          {details?.lease_amount && <>{details.lease_amount}</>}
          {details?.commercial_properties?.pg_colony
            ?.single_room_price_for_nonac_display && (
            <>
              {
                details.commercial_properties.pg_colony
                  .single_room_price_for_nonac_display
              }{" "}
              <span className="fs-6">Onwards</span>
            </>
          )}
        </h2>

        <p className="text-end text-secondary" style={{ fontSize: "12px" }}>
          Posted {details?.created_at}
        </p>

        {/* plot heading */}
        {details?.plot_properties && (
          <p className="fw-medium">
            {details?.plot_properties?.total_area}{" "}
            {details?.plot_properties?.total_area_unit}{" "}
            {details?.plot_properties?.plot_type} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* land heading*/}
        {details?.land_properties && (
          <p className="fw-medium">
            {details?.land_properties?.total_area}{" "}
            {details?.land_properties?.total_area_unit}{" "}
            {details?.land_properties?.land_type} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* residential --> house heading*/}
        {details?.residential_properties?.house && (
          <p className="fw-medium">
            {details?.residential_properties?.house?.available_bhk}{" "}
            {details?.residential_properties?.residential_type?.toUpperCase()}{" "}
            for {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}
        {/* residential --> apartment heading*/}
        {details?.residential_properties?.apartment && (
          <p className="fw-medium">
            {details?.residential_properties?.apartment?.available_bhk}{" "}
            {details?.residential_properties?.residential_type?.toUpperCase()}{" "}
            for {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> industrial heading*/}
        {details?.commercial_properties?.industrialbuilding && (
          <p className="fw-medium">
            {details?.commercial_properties?.industrialbuilding?.built_up_area}{" "}
            {
              details?.commercial_properties?.industrialbuilding
                ?.built_up_area_unit
            }{" "}
            {details?.commercial_properties?.commercial_type?.toUpperCase()} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> factory*/}
        {details?.commercial_properties?.factory && (
          <p className="fw-medium">
            {details?.commercial_properties?.factory?.built_up_area}{" "}
            {details?.commercial_properties?.factory?.built_up_area_unit}{" "}
            {details?.commercial_properties?.commercial_type?.toUpperCase()} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> pg colony*/}
        {details?.commercial_properties?.pg_colony && (
          <p className="fw-medium">
            {details?.commercial_properties?.commercial_type}{" "}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> showroom*/}
        {details?.commercial_properties?.showroom && (
          <p className="fw-medium">
            {details?.commercial_properties?.showroom?.built_up_area}{" "}
            {details?.commercial_properties?.showroom?.built_up_area_unit}{" "}
            {details?.commercial_properties?.commercial_type?.toUpperCase()} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/* commercial --> service*/}
        {details?.commercial_properties?.service_apartment && (
          <p className="fw-medium">
            {details?.commercial_properties?.showroom?.built_up_area}{" "}
            {details?.commercial_properties?.showroom?.built_up_area_unit}{" "}
            {details?.commercial_properties?.commercial_type?.toUpperCase()} for{" "}
            {details?.you_are_here_to === "sell" && <span>Sale</span>}
            {details?.you_are_here_to === "rent" && <span>Rent</span>}
            {details?.you_are_here_to === "lease" && <span>Lease</span>} in{" "}
            {details?.location}
          </p>
        )}

        {/*plot  image*/}
        {details?.plot_properties?.plot_images.map((img, index) => (
          <img
            src={img.image}
            alt={`Image ${index + 1}`}
            style={imageStyles[index] || {}}
            className="mx-2 img-fluid rounded-3 mt-2"
            key={index}
          />
        ))}

        {/* land image  */}
        {details?.land_properties?.land_images.map((img, index) => (
          <img
            src={img.image}
            alt={`Image ${index + 1}`}
            style={imageStyles[index] || {}}
            className="mx-2 img-fluid rounded-3 mt-2"
            key={index}
          />
        ))}

        {/* residential apartment image*/}
        {details?.residential_properties?.apartment?.apartment_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* residential house image*/}
        {details?.residential_properties?.house?.house_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial industrialbuilding image*/}
        {details?.commercial_properties?.industrialbuilding?.industrialbuilding_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial factory image*/}
        {details?.commercial_properties?.factory?.factory_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial office image*/}
        {details?.commercial_properties?.showroom?.showroom_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial  pg hostel*/}
        {details?.commercial_properties?.pg_colony?.pgcolony_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}

        {/* commercial  pg hostel*/}
        {details?.commercial_properties?.service_apartment?.service_apartment_images.map(
          (img, index) => {
            return (
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                style={imageStyles[index] || {}}
                className="mx-2 img-fluid rounded-3 mt-2"
                key={index}
              />
            );
          }
        )}
      </div>

      {/* table */}
      <Suspense fallback={<div>Loading...</div>}>
        {(details?.property_type === "plot" ||
          details?.property_type === "land") && <Plots details={details} />}
        {details?.property_type === "residential" && (
          <Residential details={details} />
        )}
        {details?.commercial_properties?.commercial_type ===
          "service apartment" && <ServiceAppartment details={details} />}

        {(details?.commercial_properties?.commercial_type ===
          "industrialbuilding" ||
          details?.commercial_properties?.commercial_type === "factory") && (
          <Industry details={details} />
        )}

        {details?.commercial_properties?.showroom && (
          <Commercial details={details} />
        )}

        {details?.commercial_properties?.pg_colony && (
          <PGHOME details={details} />
        )}
      </Suspense>

      <div className="container my-4 text-end ">
        <button
          className="btn border-0 p-2 px-5 py-3 p rounded-pill bg-danger text-white"
          onClick={() => handleDeleteClick(details?.id)}
        >
          Delete
        </button>
        <ModalShow
          show={modalShow}
          onHide={() => setModalShow(false)}
          onDeleteConfirm={confirmDelete}
          isDeleteConfirm={isDeleteConfirm}
        />
      </div>
      <Footer />
    </>
  );
};

export default Preview;
