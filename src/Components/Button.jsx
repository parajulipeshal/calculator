import React from "react";

const Button = ({ label, onClick }) => {
  const getClass = () => {
    if (label === "=") return "btn btn-success w-100";
    if (label === "C") return "btn btn-danger w-100";
    return "btn btn-secondary w-100";
  };

  return (
    <button className={getClass()} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
