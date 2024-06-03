import React from "react";
import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
export const Data = [
  {
    id: 1,
    villa: "4 BHK Villa",
    value: "₹ 90 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p1,
  },
  {
    id: 2,
    villa: "6 BHK Villa",
    value: "₹ 1.85 cr",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p2,
  },
  {
    id: 3,
    villa: "2 BHK Villa",
    value: "₹ 90 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p3,
  },
  {
    id: 4,
    villa: "3 BHK Villa",
    value: "₹ 90 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p2,
  },
  {
    id: 5,
    villa: "4 BHK Villa",
    value: "₹ 90 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p3,
  },
  {
    id: 6,
    villa: "3 BHK Villa",
    value: "₹ 90 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p1,
  },
  {
    id: 7,
    villa: "4 BHK Villa",
    value: "₹ 95 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p2,
  },
  {
    id: 8,
    villa: "4 BHK Villa",
    value: "₹ 100 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p3,
  },
  {
    id: 9,
    villa: "4 BHK Villa",
    value: "₹ 100 Lac",
    title: "In AA Jayam Flats, Perumbakkam",
    feet: "1200 sqft",
    own: "Posted by owner",
    hrs: "22hrs ago",
    thumbnail: p3,
  },
];

// form

export const role = ["owner", "agent", "builder"];
export const activity = ["sell", "rent", "lease"];
export const propType = [
  {
    fe: "plot",
    be: "plot",
    name: "plot",
  },
  {
    fe: "land",
    be: "land",
    name: "land",
  },
  {
    fe: "Residential Property",
    be: "residential_property",
    name: "residential",
  },
  {
    fe: "commercial prooperty",
    be: "commercial_property",
    name: "commercial",
  },
];

export const subType = {
  plot: [
    {
      fe: "Residential plot",
      be: "residential_plot",
    },
    {
      fe: "Commercial plot",
      be: "commercial_plot",
    },
    {
      fe: "Industrial plot",
      be: "industrial_plot",
    },
  ],
  land: [
    {
      fe: "Residential land",
      be: "residential_land",
    },
    {
      fe: "Industrial land",
      be: "industrial_land",
    },
    {
      fe: "Agricultural land",
      be: "agricultural_land",
    },
    {
      fe: "Plantation",
      be: "plantation",
    },
    {
      fe: "Estate",
      be: "estate",
    },
    {
      fe: "Farm land",
      be: "farm_land",
    },
  ],
  residential_property: [
    {
      fe: "House",
      be: "house",
    },
    {
      fe: "Villa",
      be: "villa",
    },
    {
      fe: "Bungalow",
      be: "bungalow",
    },
    {
      fe: "Duplex house",
      be: "duplex_house",
    },
    {
      fe: "Row house",
      be: "row_house",
    },
    {
      fe: "Pent house",
      be: "pent_house",
    },
    {
      fe: "Farm house",
      be: "farm_house",
    },
  ],
  commercial_property: [
    {
      fe: "Office",
      be: "office",
    },
    {
      fe: "Shop",
      be: "shop",
    },
    {
      fe: "Showroom",
      be: "showroom",
    },
    {
      fe: "Godown",
      be: "godown",
    },
    {
      fe: "Shed",
      be: "shed",
    },
    {
      fe: "Co-working Space",
      be: "co_working_space",
    },
    {
      fe: "Commercial complex",
      be: "commercial_complex",
    },
  ],
};

export const subTypeTwo = {
  residential_property: [
    {
      fe: "Flat",
      be: "flat",
    },
    {
      fe: "Appartment",
      be: "appartment",
    },
    {
      fe: "BuilderFloor Apartment",
      be: "builder_floor_apartment",
    },

    {
      fe: " Multi storey Apartment",
      be: "multi_storey_apartment",
    },
    {
      fe: "Luxury Apartment",
      be: "luxury_apartment",
    },

    {
      fe: " Studio Apartment",
      be: "studio_apartment",
    },
  ],
  commercial_property: [
    {
      fe: "Industrial Building",
      be: "industrialbuilding",
    },
    {
      fe: "Industrial shed",
      be: "industrial_shed",
    },
    {
      fe: "factory",
      be: "factory",
    },
    {
      fe: "Service Apartment",
      be: "service_apartment",
    },
  ],
};

export const Facilities = [
  "road",
  "park",
  "street light",
  "Avenue Trees",
  "security",
  "Compound",
  " Drainage",
  "Bore well",
  "Corner Plot",
  " water",
];

export const plotFilter = ["Facing", "Posted By", "Area"];
export const residentialFilter = [
  "Bedroom",
  "Furnishing",
  "Condition",
  "Posted By",
];
export const commercialFilter = ["Category", "Furnishing", "Condition"];

export const directions = [
  { value: "east", label: "East" },
  { value: "west", label: "West" },
  { value: "north", label: "North" },
  { value: "south", label: "South" },
  { value: "north_east", label: "North-east" },
  { value: "north_west", label: "North-west" },
  { value: "south_east", label: "South-east" },
  { value: "south_west", label: "South-west" },
];

export const people = ["owner", "agent", "builder"];

export const bedroom = [
  {
    fe: "1 BHK",
    be: "1BHK",
  },
  {
    fe: "2 BHK",
    be: "2BHK",
  },
  {
    fe: "3 BHK",
    be: "3BHK",
  },
  {
    fe: "4 BHK",
    be: "4BHK",
  },
];

export const furnishing = [
  {
    fe: "Fully Furnished",
    be: "fully_furnished",
  },
  {
    fe: "Semi Furnished",
    be: "semi_furnished",
  },
  {
    fe: "Un Furnished",
    be: "unfurnished",
  },
];

export const condition = [
  {
    fe: " Ready to Move ",
    be: "ready_to_move",
  },
  {
    fe: " Under Construction ",
    be: "under_construction",
  },
];

export const category = [
  {
    fe: "New",
    be: "new",
  },
  {
    fe: " Resale ",
    be: "resale",
  },
];
