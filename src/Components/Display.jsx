import React from "react";

const Display = ({ value }) => {
  return (
    <input
      type="text"
      className="form-control mb-3 text-end"
      value={value}
      readOnly
    />
  );
};

export default Display;
