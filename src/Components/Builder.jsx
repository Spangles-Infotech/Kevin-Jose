import React, { Suspense, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
import { useParams } from "react-router-dom";
import Loading from "./modal/spinner";

const Plots = React.lazy(() => import("./viewDetails/plotView"));
const Residential = React.lazy(() => import("./viewDetails/residentialView"));
const Commercial = React.lazy(() => import("./viewDetails/commercial"));
const ServiceAppartment = React.lazy(() =>
  import("./viewDetails/serviCeappartment")
);
const PGHOME = React.lazy(() => import("./viewDetails/pgHostel"));
const Industry = React.lazy(() => import("./viewDetails/factoryView"));

const Builder = ({ setShowOTPBox }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("customer");
  const handleContact = () => {
    if (token) {
      try {
        axios
          .post(
            `${Baseurl}my_simple_enquiry_otp_generation/`,
            { property_id: id },
            UserConfig
          )
          .then((res) => {
            console.log(res);
            setShowOTPBox(true);
            navigate("/builder/otp",{state:{ otp:res.data.message ,property_id :id }});
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/user-login");
    }
  };

  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    axios
      .get(`${Baseurl}properties/${id}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />

      <div
        className="border container mx-auto px-4 py-5 rounded-4 border-danger"
        style={{ marginTop: "8%" }}
      >
        <h2 className="fw-bold text-danger" style={{ fontSize: "40px" }}>
          {details?.sale_price}
          {details?.rent}
          {details?.lease_amount}
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

        {details?.commercial_properties?.pg_colony && (
          <p className="fw-medium">
            {details?.commercial_properties?.commercial_type}{" "}
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

        {/* commercial  servicep*/}
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

        {details?.commercial_properties?.service_apartment?.service_apartment_images?.map(
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

        {details?.commercial_properties?.pg_colony?.pgcolony_images?.map(
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
      <Suspense fallback={<Loading />}>
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
          className="border-0 p-2 px-5 py-3 rounded-pill bg-danger text-white"
          onClick={handleContact}
        >
          Contact Number
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Builder;
