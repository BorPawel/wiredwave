import React, { useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
const Categories = () => {
  const categoriesArray = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];
  const liClass = "categories font-bold md:self-center cursor-pointer";

  const { categoryHandler, category } = useStateContext();

  useEffect(() => {
    const categories = document.querySelectorAll(".categories");
    console.log(category)
    categoriesArray.forEach(
      (item, index) => item === category && categories[index].classList.add("active")
    );
  }, []);
 
  return (
    <div className=" my-16 md:text-lg">
      <ul className=" h-24 flex justify-around p-4">
        {categoriesArray.map((item, index) => (
          <li
            className={
              index % 2 === 0 ? `${liClass} self-start` : `${liClass} self-end`
            }
            key={index}
            onClick={() => categoryHandler(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
