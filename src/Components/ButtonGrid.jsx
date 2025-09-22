import React from "react";
import Button from "./Button";

const ButtonGrid = ({ onButtonClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="row g-2">
      {buttons.map((btn, i) => (
        <div key={i} className="col-3">
          <Button label={btn} onClick={onButtonClick} />
        </div>
      ))}
    </div>
  );
};

export default ButtonGrid;
