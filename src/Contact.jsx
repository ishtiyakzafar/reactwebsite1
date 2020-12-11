import React, { useState } from "react";
import Form from "./Form";
import Msgform from "./Msgform";

const Contact = () => {
  const [data, setdata] = useState({
    fname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const enterData = (event) => {
    const { name, value } = event.target;
    setdata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    alert(
      `name : ${data.fname} phone : ${data.phone} email : ${data.email} message : ${data.msg}`
    );
    setdata({
      fname: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <section className="set_contact ">
        <h1 className="my-3 text-center text-capitalize">contact us</h1>

        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-8 col-10 mx-auto">
              <form onSubmit={sendData}>
                <Form
                  value1={data.fname}
                  name1="fname"
                  type1="text"
                  name="Fullname"
                  onSelect={enterData}
                />
                <Form
                  value1={data.phone}
                  name1="phone"
                  type1="number"
                  name=" Phone"
                  onSelect={enterData}
                />
                <Form
                  value1={data.email}
                  name1="email"
                  type1="email"
                  name=" Email"
                  onSelect={enterData}
                />
                <Msgform
                  value1={data.msg}
                  name1="msg"
                  name=" Message"
                  onSelect={enterData}
                />
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
