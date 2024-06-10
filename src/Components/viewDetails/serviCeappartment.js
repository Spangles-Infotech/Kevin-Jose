import React from "react";

export default function ServiceAppartment({ details }) {
  const outdoorFacilities =
    details?.commercial_properties?.service_apartment?.outdoor_facilities.map(
      (outdoor) => outdoor.facility.name
    ) || [];
  const indoorFacilities =
    details?.commercial_properties?.service_apartment?.indoor_facilities.map(
      (outdoor) => outdoor.facility.name
    ) || [];

  const availableFlats =
    details?.commercial_properties?.service_apartment?.availability_of_flats.map(
      (outdoor) => outdoor.option_name
    ) || [];
  return (
    <div className="border container mx-auto px-4 py-3 rounded-4 border-danger">
      <h4 className="fw-bold ps-2 pb-2">More Details</h4>
      <table className="table table-borderless w-75">
        <thead>
          {details?.you_are_here_to === "sell" && (
            <>
              <tr>
                <td>Sale Price</td>
                <td className="fw-semibold">{details?.sale_price}</td>
              </tr>

              <tr>
                <td>Price per sqft</td>
                <td className="fw-semibold">{details?.sale_price_per_sqft}</td>
              </tr>
            </>
          )}

          {details?.you_are_here_to === "rent" && (
            <>
              <tr>
                <td>Rent Price</td>
                <td className="fw-semibold">{details?.rent}</td>
              </tr>
            </>
          )}

          {details?.you_are_here_to === "lease" && (
                <>
                <tr>
                  <td>Lease Price</td>
                  <td className="fw-semibold">{details?.lease_amount}</td>
                </tr>
  
                <tr>
                  <td>Lease Period</td>
                  <td className="fw-semibold">{details?.lease_period} {" "} {details?.lease_period_unit}</td>
                </tr>
  
                </>
          )}

          <tr>
            <td>Advance</td>
            <td className="fw-semibold">{details?.advance}</td>
          </tr>
          <tr>
            <td>Property Name</td>
            <td className="fw-semibold">{details?.title}</td>
          </tr>

          <tr>
            <td>Property Type</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.commercial_type}
            </td>
          </tr>

          <tr>
            <td>Address</td>
            <td className="fw-semibold">{details?.location}</td>
          </tr>

          <tr>
            <td>Furnishing</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.service_apartment?.status}
            </td>
          </tr>

          <tr>
            <td>Maxiumum Person</td>
            <td className="fw-semibold">
              {" "}
              {
                details?.commercial_properties?.service_apartment
                  ?.maximum_persons_allowed
              }
            </td>
          </tr>

          <tr>
            <td>Floor Number</td>
            <td className="fw-semibold">
              {" "}
              {
                details?.commercial_properties?.service_apartment?.floor_number
              }{" "}
            </td>
          </tr>

          <tr>
            <td>Available Floors</td>
            <td className="fw-semibold">
              {
                details?.commercial_properties?.service_apartment
                  ?.available_floors
              }{" "}
            </td>
          </tr>

          <tr>
            <td>Total Floors</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.service_apartment?.total_floors}{" "}
            </td>
          </tr>

          <tr>
            <td>Car Parking</td>
            <td className="fw-semibold">
              {
                details?.commercial_properties?.service_apartment
                  ?.no_of_car_parking
              }
            </td>
          </tr>

          <tr>
            <td>Built Area</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.service_apartment?.built_up_area}{" "}
              Sqft
            </td>
          </tr>

          <tr>
            <td>Posted by</td>
            {details?.owner && <td className="fw-semibold">Owner</td>}
            {details?.agent && <td className="fw-semibold">Agent</td>}
            {details?.builder && <td className="fw-semibold">Builder</td>}
          </tr>

          {details?.agent && (
            <tr>
              <td>Agent Commission</td>
              <td className="fw-semibold">{details?.agent_commission}</td>
            </tr>
          )}

          <tr>
            <td>Availability of flats
            </td>
            <td className="fw-semibold">{availableFlats.join(", ")}</td>
          </tr>

          <tr>
            <td>Indoor Facilities</td>
            <td className="fw-semibold">{indoorFacilities.join(", ")}</td>
          </tr>

          <tr>
            <td>Outdoor Facilities</td>
            <td className="fw-semibold">{outdoorFacilities.join(", ")}</td>
          </tr>
        </thead>
      </table>

      <p className="ps-2">
        <span className="fw-semibold">Description:</span> {details?.description}
      </p>
    </div>
  );
}
