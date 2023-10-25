import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import CardSec from "../Cards Section/CardSec";
import UtilizeAutomation from "../UtilizeAutomation/UtilizeAutomation";
import Contact from "../Contact-us/Contact";
import Footer from "../Foooter/Footer";
import "../Foooter/Footer.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CardSec />
      <UtilizeAutomation />
 
        <Contact />
        <Footer />
    </>
  );
};

export default Home;
