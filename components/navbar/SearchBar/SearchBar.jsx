"use client";
import React, { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar = () => {
  const searchbarRef = useRef(null);

  return (
    <div className=" p-3 rounded-full  flex justify-around" ref={searchbarRef}>
      <BiSearchAlt className="text-2xl md:text-3xl lg:text-4xl cursor-pointer  " />
    </div>
  );
};

export default SearchBar;
