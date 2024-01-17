"use client";

import { useStateContext } from "@/context/StateContext";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { showSearchOverlayHandler } = useStateContext();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="w-full flex-center relative ">
      <div className="absolute left-0">
        <IoIosArrowBack
          onClick={showSearchOverlayHandler}
          className="text-3xl cursor-pointer"
        />
      </div>
      <input
        className="w-1/2 bg-dark border-[1px] border-white rounded-md p-2"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
