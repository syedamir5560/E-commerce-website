import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";


const About = () => {

  const data = {
    name:"Aamir E-commerce"
  }

  return (
    <>

      <HeroSection myData={data} />
   
     

    </>

  )
};

export default About;