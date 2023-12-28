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
    console.log(selectedBox)
    if (isChecked) {
      router.replace(`/category?category=${category}`, undefined, {
        shallow: true,
      });
    } else {
    }
  };

  return (
    <div className="w-[250px] flex flex-col gap-2 ">
      {categoryArr.map((item) => (
        <Checkbox
          key={item}
          value={item}
          isChecked={selectedBox === item.toLowerCase()}
          onChange={handleCheckboxChange}
        />
      ))}
      <PriceRange />
      {/* <ClearButton /> */}
    </div>
  );
};

export default Sidebar;
