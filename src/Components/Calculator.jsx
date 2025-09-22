import React, { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-3" style={{ width: "300px" }}>
        <h3 className="text-center mb-3">Calculator</h3>
        <Display value={input} />
        <ButtonGrid onButtonClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
