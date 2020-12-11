import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id='header' className=" home_page d-flex align-items-center  home_about ">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-10 mx-auto ">
              <div className="row ">
                <div className="col-md-10 col-lg-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className='text-capitalize '>
                    {props.name} <strong className='compName'>zafarWorld</strong>
                  </h1>
                  <p className='py-2'>We are the best service provider in web design</p>
                  <div className="btn_home">
                    <NavLink className='text-capitalize ' to={props.visit}>{props.btn}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 oredr-1 order-lg-2 home_img  ">
                  <img src={props.imgsrc} alt="home"  className="img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
