import React from "react";

export default function ResidentialView({details}) {
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
            <td>Address</td>
            <td className="fw-semibold">{details?.location}</td>
          </tr>

          <tr>
            <td>Area</td>
            <td className="fw-semibold">
              {details?.residential_properties?.house?.built_up_area ||
                details?.residential_properties?.apartment?.built_up_area}{" "}
              {details?.residential_properties?.house?.built_up_area_unit ||
                details?.residential_properties?.apartment
                  ?.built_up_area_unit}{" "}
            </td>
          </tr>

          <tr>
            <td>Available BHK</td>
            <td className="fw-semibold">
              {details?.residential_properties?.house?.available_bhk ||
                details?.residential_properties?.apartment?.available_bhk}
            </td>
          </tr>

          <tr>
            <td>Type</td>
            <td className="fw-semibold">
              {details?.residential_properties?.residential_type}
            </td>
          </tr>

          <tr>
            <td>Condition</td>
            <td className="fw-semibold">
              {details?.residential_properties?.house?.condition ||
                details?.residential_properties?.apartment?.condition}{" "}
            </td>
          </tr>

          <tr>
            <td>Category</td>
            <td className="fw-semibold">
              {details?.residential_properties?.house?.category_of_project ||
                details?.residential_properties?.apartment?.category_of_project}
            </td>
          </tr>

          {details.residential_properties?.house && (
            <tr>
              <td>Units in project</td>
              <td className="fw-semibold">
                {details?.residential_properties?.house
                  ?.no_of_units_in_project ||
                  details?.residential_properties?.apartment
                    ?.no_of_units_in_project}{" "}
              </td>
            </tr>
          )}
          <tr>
            <td>Total floors</td>
            <td className="fw-semibold">
              {details?.residential_properties?.house?.total_floors ||
                details?.residential_properties?.apartment?.total_floors}{" "}
            </td>
          </tr>

          <tr>
            <td>Status</td>
            <td className="fw-semibold">
              {details?.residential_properties?.house?.status ||
                details?.residential_properties?.apartment?.status}{" "}
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
            <td>Indoor Facilities</td>
            <td className="fw-semibold">
              {(details?.residential_properties?.house?.indoor_facilities
                ?.length > 0
                ? details?.residential_properties?.house?.indoor_facilities
                : details?.residential_properties?.apartment?.indoor_facilities
              )?.map((indoor, ind, arr) => (
                <span key={ind}>
                  {indoor?.facility?.name}
                  {ind < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </td>
          </tr>

          <tr>
            <td>Outdoor Facilities</td>
            <td className="fw-semibold">
              {(details?.residential_properties?.house?.outdoor_facilities
                ?.length > 0
                ? details?.residential_properties?.house?.outdoor_facilities
                : details?.residential_properties?.apartment?.outdoor_facilities
              )?.map((outdoor, ind, arr) => (
                <span key={ind}>
                  {outdoor?.facility?.name}
                  {ind < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </td>
          </tr>
        </thead>
      </table>

      <p className="ps-2">
        <span className="fw-semibold">Description:</span> {details?.description}
      </p>
    </div>
  );
}
