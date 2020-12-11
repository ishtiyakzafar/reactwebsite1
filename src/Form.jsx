import React from "react";

const Form = (props) => {
  const inputdata = (event) => {
    props.onSelect(event);
  };

  return (
    <>
      <div className="mb-2 input_box">
        <label for="exampleFormControlInput1" className="form-label">
          {props.name}
        </label>
        <input
          type={props.type1}
          className="form-control"
          name={props.name1}
          value={props.value1}
          onChange={inputdata}
          id="exampleFormControlInput1"
          placeholder={`Enter your ${props.name}`}
        />
      </div>
    </>
  );
};
export default Form;
