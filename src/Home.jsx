import React from "react";
import Img1 from "../src/image/hom_img.png";
import Common from "./Common";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Common
        name="grow your business with"
        btn="get started"
        visit="/service"
        imgsrc={Img1}
      />
      <Service />
      <About />
      <Contact />
    </>
  );
};
export default Home;
