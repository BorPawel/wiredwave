import React from "react";

const PriceInput = ({placeholder}) => {
  return (
    <input
      className="w-1/2 h-9 rounded-md p-2 border-[2px] bg-dark"
      placeholder={placeholder}
    />
  );
};

export default PriceInput;
