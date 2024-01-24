"use client";
import React, { useState } from "react";
import CategoryButton from "./CategoryButton/CategoryButton";
import { useRouter, useSearchParams } from "next/navigation";
const SidebarMobile = () => {
  const categoryArr = ["Wireless", "Gaming", "Clip-On", "Open-Ear", "Earbuds"];
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedBox, setSelectedBox] = useState(searchParams.get("category"));

  const handleCheckboxChange = (event) => {
    event.preventDefault();

    const category = event.target.textContent;
    setSelectedBox(category);
    router.replace(`/category?category=${category.toLowerCase()}`, undefined, {
      shallow: true,
    });
  };

  const categories = categoryArr.map((item, index) => (
    <CategoryButton
      key={index}
      text={item}
      active={selectedBox.toLowerCase() === item.toLowerCase()}
      onClick={(e) => handleCheckboxChange(e)}
    >
      {item}
    </CategoryButton>
  ));
  return (
    <div className="flex justify-evenly items-center w-full flex-wrap gap-4 my-4">
      {categories}
    </div>
  );
};

export default SidebarMobile;
