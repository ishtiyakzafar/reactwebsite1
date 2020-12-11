import React from "react";

const Msgform = (props) => {
  const inputdata = (event) => {
    props.onSelect(event);
  };

  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
        {props.name}
        </label>
        <textarea
          className="form-control"
          name={props.name1}
          value={props.value1}
          onChange={inputdata}
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </>
  );
};
export default Msgform;
