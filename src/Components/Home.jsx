import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Properties from "./Properties";
import Exclusive from "./Exclusive";
import Real from "./Real";
import Enquiry from "./Enquiry";
import Footer from "./Footer";
import FeaturedProp from "./FeaturedProp";
import Hero from "./home/hero";
import Loading from "./modal/spinner";

const Home = () => {
  
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedProp />

      <Exclusive />

      <Real />

      <Enquiry />

      <Footer />
    </>
  );
};

export default Home;
 