import React from "react";
import Img1 from "../src/image/abt_img.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="welcome to about page"
        btn="contact now"
        visit="/contact"
        imgsrc={Img1}
      />
    </>
  );
};
export default About;
