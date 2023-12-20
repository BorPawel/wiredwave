'use client'
import React, { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Sidebar from "../Sidebar/Sidebar";

const ProductWrapper = ({data}) => {

     const categoryArr = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];
  const [selectedCheckbox, setSelectedCheckbox] = useState("Wireless");
  const [checkedValue, setCheckedValue] = useState("Wireless");


  const handleCheckboxChange = (selectedItem) => {
    setSelectedCheckbox(selectedItem);
    setCheckedValue(selectedItem);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar
        categoryArr={categoryArr}
        selectedCheckbox={selectedCheckbox}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ProductGrid products={data} checkedValue={checkedValue} />
    </div>
  );
};

export default ProductWrapper;
