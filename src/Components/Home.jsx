import React from "react";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Properties from "./Properties";
import Exclusive from "./Exclusive";
import Real from "./Real";
import Enquiry from "./Enquiry";
import Footer from "./Footer";
import FeaturedProp from "./FeaturedProp";


const Home = () => {
  return (
    <>
      <Navbar />

      <Navigation />

      {/* <Properties /> */}
      <FeaturedProp/>

      <Exclusive />

      <Real />

      <Enquiry />

      <Footer />
    </>
  );
};

export default Home;

