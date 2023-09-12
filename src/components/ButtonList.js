import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const ButtonData = [
    {
      id: 1,
      ButtonValue: "All",
    },
    {
      id: 2,
      ButtonValue: "Music",
    },
    { id: 3, ButtonValue: "Gaming" },
    { id: 4, ButtonValue: "Entertainment" },
    { id: 5, ButtonValue: "Comedy" },
    { id: 6, ButtonValue: "Dance" },
    { id: 7, ButtonValue: "Virat Kohli" },
    { id: 8, ButtonValue: "News" },
    { id: 9, ButtonValue: "JavaScript" },
    { id: 10, ButtonValue: "C++" },
  ];

  return (
    <div className="ButtonList">
      {ButtonData.map((btn) => {
        return <Button key={btn.id} {...btn} />;
      })}
    </div>
  );
};

export default ButtonList;
