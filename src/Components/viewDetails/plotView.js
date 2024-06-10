import React, { useEffect } from "react";

export default function PlotView({ details }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="border container mx-auto px-4 py-3 rounded-4 border-danger">
        <h4 className="fw-bold ps-2 pb-2">More Details</h4>

        <table className="table table-borderless w-75">
          <tbody>
            {details?.you_are_here_to === "sell" && (
              <>
                <tr>
                  <td>Sale Price</td>
                  <td className="fw-semibold">{details?.sale_price}</td>
                </tr>
                <tr>
                  <td>Price per sqft</td>
                  <td className="fw-semibold">
                    {details?.sale_price_per_sqft}
                  </td>
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
              <td>Address</td>
              <td className="fw-semibold">{details?.location}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td className="fw-semibold">
                {details?.plot_properties?.total_area ||
                  details?.land_properties?.total_area}{" "}
                {details?.plot_properties?.total_area_unit ||
                  details?.land_properties?.total_area_unit}{" "}
              </td>
            </tr>
            <tr>
              <td>Length</td>
              <td className="fw-semibold">
                {details?.plot_properties?.length ||
                  details?.land_properties?.length}{" "}
                {details?.plot_properties?.length_unit ||
                  details?.land_properties?.length_unit}{" "}
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td className="fw-semibold">
                {details?.plot_properties?.plot_type ||
                  details?.land_properties?.land_type}
              </td>
            </tr>
            <tr>
              <td>Breadth</td>
              <td className="fw-semibold">
                {details?.plot_properties?.breadth ||
                  details?.land_properties?.breadth}{" "}
                {details?.plot_properties?.breadth_unit ||
                  details?.land_properties?.breadth_unit}{" "}
              </td>
            </tr>
            <tr>
              <td>Road Width</td>
              <td className="fw-semibold">
                {details?.plot_properties?.road_width ||
                  details?.land_properties?.road_width}{" "}
                {details?.plot_properties?.road_width_unit ||
                  details?.land_properties?.road_width_unit}{" "}
              </td>
            </tr>
            <tr>
              <td>Approval</td>
              <td className="fw-semibold">
                {details?.plot_properties?.approval ||
                  details?.land_properties?.approval}
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
              <td>Facilities</td>
              <td className="fw-semibold">
                {details?.plot_properties?.facilities?.map((facility, ind) => (
                  <span key={ind}>{facility?.name} </span>
                )) ||
                  details?.land_properties?.facilities?.map((facility, ind) => (
                    <span key={ind}>{facility?.name} </span>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="ps-2">
          <span className="fw-semibold">Description:</span>{" "}
          {details?.description}
        </p>
      </div>
    </>
  );
}
