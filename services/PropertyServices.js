 
const createPlot = async (propertyDetailsData) => {
    return await Plot.create({
      propertyName: propertyDetailsData.propertyName,
      location: propertyDetailsData.location,
      length: propertyDetailsData.length,
      lengthUnit: propertyDetailsData.lengthUnit,
      breadth: propertyDetailsData.breadth,
      breadthUnit: propertyDetailsData.breadthUnit,
      toalArea: propertyDetailsData.toalArea,
      toalAreaUnit: propertyDetailsData.toalAreaUnit,
      roadWidth: propertyDetailsData.roadWidth,
      roadWidthUnit: propertyDetailsData.roadWidthUnit,
      direction: propertyDetailsData.direction,
      facilities: propertyDetailsData.facilities,
      category: propertyDetailsData.category,
    });
  };
  
   
  const createLand = async (propertyDetailsData) => {}
    
  
  const createResidential = async (propertyDetailsData) => {
   
  };
  
  const createCommercial = async (propertyDetailsData) => {
  
  };


  module.exports = {createPlot}
  