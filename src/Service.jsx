import React from "react";

import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <section className="set_service">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="text-center mb-5 text-capitalize">our services</h1>
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
