import React from "react";

export default function PGHostel({ details }) {
  const outdoorFacilities =
    details?.commercial_properties?.pg_colony?.outdoor_facilities.map(
      (outdoor) => outdoor.facility.name
    ) || [];
  const indoorFacilities =
    details?.commercial_properties?.pg_colony?.indoor_facilities.map(
      (outdoor) => outdoor.facility.name
    ) || [];

  const foodType =
    details?.commercial_properties?.pg_colony?.food_type.map(
      (outdoor) => outdoor.name
    ) || [];
  const occupancy =
    details?.commercial_properties?.pg_colony?.occupancy.map(
      (outdoor) => outdoor.name
    ) || [];
  return (
    <div className="border container mx-auto px-4 py-3 rounded-4 border-danger">
      <h4 className="fw-bold ps-2 pb-2">More Details</h4>
      <table className="table table-borderless w-75">
        <thead>
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
            <td>Location</td>
            <td className="fw-semibold">{details?.location}</td>
          </tr>

          <tr>
            <td>Room Types</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.room_types}
            </td>
          </tr>

          {/* Ac single  */}

          {details?.commercial_properties?.pg_colony
            ?.single_room_price_for_ac && (
            <tr>
              <td>Single room AC</td>
              <td className="fw-semibold">
                {
                  details?.commercial_properties?.pg_colony
                    ?.single_room_price_for_ac_display
                }{" "}
                {
                  details?.commercial_properties?.pg_colony
                    ?.single_room_price_per_month
                }
              </td>
            </tr>
          )}

          {details?.commercial_properties?.pg_colony
            ?.single_room_price_for_nonac && (
            <tr>
              <td>Single room Non AC</td>
              <td className="fw-semibold">
                {
                  details?.commercial_properties?.pg_colony
                    ?.single_room_price_for_nonac_display
                }{" "}
                {
                  details?.commercial_properties?.pg_colony
                    ?.single_room_price_per_month
                }
              </td>
            </tr>
          )}

          {/* double room */}
          {details?.commercial_properties?.pg_colony
            ?.double_room_price_for_ac && (
            <tr>
              <td>Double room AC</td>
              <td className="fw-semibold">
                {
                  details?.commercial_properties?.pg_colony
                    ?.double_room_price_for_ac_display
                }{" "}
                {
                  details?.commercial_properties?.pg_colony
                    ?.double_room_price_per_month
                }
              </td>
            </tr>
          )}

          {details?.commercial_properties?.pg_colony
            ?.double_room_price_for_nonac && (
            <tr>
              <td>Double room Non AC</td>
              <td className="fw-semibold">
                {
                  details?.commercial_properties?.pg_colony
                    ?.double_room_price_for_nonac_display
                }{" "}
                {
                  details?.commercial_properties?.pg_colony
                    ?.double_room_price_per_month
                }
              </td>
            </tr>
          )}
          {/* triple */}
          {details?.commercial_properties?.pg_colony
            ?.triple_room_price_for_ac && (
            <tr>
              <td>Triple room AC</td>
              <td className="fw-semibold">
                {
                  details?.commercial_properties?.pg_colony
                    ?.triple_room_price_for_ac_display
                }{" "}
                {
                  details?.commercial_properties?.pg_colony
                    ?.triple_room_price_per_month
                }
              </td>
            </tr>
          )}

          {details?.commercial_properties?.pg_colony
            ?.triple_room_price_for_nonac && (
            <tr>
              <td>Double room Non AC</td>
              <td className="fw-semibold">
                {
                  details?.commercial_properties?.pg_colony
                    ?.triple_room_price_for_nonac_display
                }{" "}
                {
                  details?.commercial_properties?.pg_colony
                    ?.triple_room_price_per_month
                }
              </td>
            </tr>
          )}

          <tr>
            <td>Security deposit</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.security_deposit}
            </td>
          </tr>

          <tr>
            <td>Tenants preferred</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.tenants_preferred}
            </td>
          </tr>

          <tr>
            <td>Gender</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.gender}
            </td>
          </tr>

          <tr>
            <td>location</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.address}
            </td>
          </tr>

          <tr>
            <td>Category</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.category_of_project}
            </td>
          </tr>

          <tr>
            <td>Status</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.status}
            </td>
          </tr>

          <tr>
            <td>No of rooms</td>
            <td className="fw-semibold">
              {details?.commercial_properties?.pg_colony?.no_of_rooms}
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
            <td>Occupancy</td>
            <td className="fw-semibold">{occupancy.join(", ")}</td>
          </tr>

          <tr>
            <td>Food Type</td>
            <td className="fw-semibold">{foodType.join(", ")}</td>
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
