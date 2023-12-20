import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown/Dropdown";
const SortButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleDropdown = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center gap-2 relative cursor-pointer" onClick={toggleDropdown}>
      <span>Sort by</span> <IoIosArrowDown className="text-xl" />
      {isClicked ? <Dropdown /> : null}
    </div>
  );
};

export default SortButton;
