import React from "react";
import PriceInput from "./PriceInput/PriceInput";

const PriceRange = () => {
  return (
    <div className="py-2 flex flex-col gap-2">
      <p>Price Range</p>
      <div className="flex flex-row md:flex-col gap-2">
       <PriceInput placeholder='0$'/>
       <PriceInput placeholder='10000$'/>
      
      </div>
    </div>
  );
};

export default PriceRange;
