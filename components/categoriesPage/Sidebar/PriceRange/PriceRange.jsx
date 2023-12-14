import React from "react";

const PriceRange = () => {
  return (
    <div className="py-2 flex flex-col gap-2">
      <p>Price Range</p>
      <div className="flex flex-col gap-2">
        <input
          className="w-1/2 h-9 rounded-md p-2 border-[2px] bg-dark"
          placeholder="0$"
        />
        <input
          className="w-1/2 h-9 rounded-md p-2 border-[2px] bg-dark"
          placeholder="10000$"
        />
      </div>
    </div>
  );
};

export default PriceRange;
