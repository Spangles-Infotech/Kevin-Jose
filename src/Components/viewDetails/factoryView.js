import React from "react";

export default function FactoryView({ details }) {
  const outdoorFacilities =
    details?.commercial_properties?.industrialbuilding?.outdoor_facilities.map(
      (outdoor) => outdoor.facility.name
    ) ||
    details?.commercial_properties?.factory?.outdoor_facilities.map(
      (outdoor) => outdoor.facility.name
    );
  const indoorFacilities =
    details?.commercial_properties?.industrialbuilding?.indoor_facilities.map(
      (outdoor) => outdoor.facility.name
    ) ||
    details?.commercial_properties?.factory?.outdoor_facilities.map(
      (outdoor) => outdoor.facility.name
    );

  const landZone =
    details?.commercial_properties?.industrialbuilding?.land_zone.map(
      (outdoor) => outdoor.name
    ) ||
    details?.commercial_properties?.factory?.land_zone.map(
      (outdoor) => outdoor.name
    );
  return (
    <div className="border container mx-auto px-4 py-3 rounded-4 border-danger mt-3">
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

          {details?.commercial_properties.factory && (
            <tr>
              <td>Type of Factory</td>
              <td className="fw-semibold">
                {details?.commercial_properties?.factory?.type_of_factory}
              </td>
            </tr>
          )}

          <tr>
            <td>Address</td>
            <td className="fw-semibold">{details?.location}</td>
          </tr>

          <tr>
            <td>Furnishing</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.industrialbuilding?.status}

              {details?.commercial_properties?.factory?.status}
            </td>
          </tr>

          <tr>
            <td>Condition</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.industrialbuilding?.condition ||
                details?.commercial_properties?.factory?.condition}
            </td>
          </tr>

          <tr>
            <td>Type</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.industrialbuilding
                ?.category_of_project ||
                details?.commercial_properties?.factory?.category_of_project}
            </td>
          </tr>

          <tr>
            <td>Built Area</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.industrialbuilding
                ?.built_up_area ||
                details?.commercial_properties?.factory?.built_up_area}{" "}
              Sqft
            </td>
          </tr>

          <tr>
            <td>Plot Area</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.industrialbuilding?.plot_area ||
                details?.commercial_properties?.factory?.plot_area}{" "}
              Sqft
            </td>
          </tr>

          <tr>
            <td>Road Width</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.industrialbuilding?.road_width ||
                details?.commercial_properties?.factory?.road_width}{" "}
              {details?.commercial_properties?.industrialbuilding
                ?.road_width_unit ||
                details?.commercial_properties?.factory?.road_width_unit}
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
            <td>Land Zone</td>
            <td className="fw-semibold">{landZone.join(", ")}</td>
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
