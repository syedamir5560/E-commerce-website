import { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./Context/productcontext";


const About = () => {

  const myName=useProductContext()

  const data = {
    name: "Aamir Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;