"use client";
import React, { useState } from "react";
import Checkbox from "./checkbox/Checkbox";
import PriceRange from "./PriceRange/PriceRange";
import { useRouter, useSearchParams } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const categoryArr = [
    "Wireless",
    "Gaming",
    "Clip-On",
    "Open-Ear",
    "Earbuds",
  ];

  const [selectedBox, setSelectedBox] = useState(searchParams.get('category'));
  
  const handleCheckboxChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;
    setSelectedBox(category);
  
    if (isChecked) {
      router.replace(`/category?category=${category}`, undefined, {
        shallow: true,
      });
    } else {
    }
  };

  return (
    <div className="w-full flex justify-evenly mb-12 md:items-center flex-row md:flex-col md:w-[200px] gap-5 ">
      {categoryArr.map((item) => (
        <Checkbox
          key={item}
          value={item}
          isChecked={selectedBox === item.toLowerCase()}
          onChange={handleCheckboxChange}
        />
      ))}
      {/* <PriceRange /> */}
      {/* <ClearButton /> */}
    </div>
  );
};

export default Sidebar;
