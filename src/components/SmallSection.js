import React from "react";
import { useNavigate } from "react-router-dom";

const SmallSection = ({ name, icon }) => {
  const navigate = useNavigate();

  return (
    <div
      className="smallSection"
      onClick={() => {
        navigate("/");
      }}
    >
      <div>{icon}</div>
      <p>{name}</p>
    </div>
  );
};

export default SmallSection;
