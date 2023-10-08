import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { BiSolidDownArrow } from "react-icons/bi";
import { SpecTable } from "../spec_table/SpecTable";
export function Description({ product }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleDescription = () => {
    setIsToggled((prev) => !prev);
    const desc = document.querySelector(".description");
    const descArrow = document.querySelector(".desc_arrow");
    if (!isToggled) {
      desc.style.maxHeight = desc.scrollHeight + 12 + "px";
      desc.style.paddingTop = "8px";
      descArrow.style.transform = "rotate(180deg)";
    } else {
      desc.style.maxHeight = "0";
      desc.style.paddingTop = "0";
      descArrow.style.transform = "rotate(0deg)";
    }
  };

  return (
    <div className="min-h-[500px] w-full flex flex-col items-center">
      <div
        className="lg:w-3/4 border-y-2  border-grey p-2 cursor-pointer flex flex-col"
        onClick={toggleDescription}
      >
        <div className="flex justify-between items-center ">
          <button className="text-xl md:text-2xl lg:text-3xl">
            Description
          </button>

          <BiSolidDownArrow className="desc_arrow text-xl md:text-2xl lg:text-3xl duration-300" />
        </div>
        <p className="description text-sm max-h-0 overflow-hidden duration-300 ">
          {product?.longDesc}
        </p>
      </div>
      <SpecTable product={product} />
    </div>
  );
}
