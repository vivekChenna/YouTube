import React from "react";

const Button = ({ ButtonValue }) => {
  return (
    <div className="btn-div">
      <button className="button-list-btn">{ButtonValue}</button>
    </div>
  );
};

export default Button;
