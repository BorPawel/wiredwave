'use client'
import React, { useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar = () => {
  const [isSearchbarFocused, setIsSearchbarFocused] = useState(false);
  const searchbarRef = useRef(null);
  const searchInputRef = useRef(null);
  const toggleSearchbar = () => {
    setIsSearchbarFocused((prev) => !prev);
    if (isSearchbarFocused) {
      searchbarRef.current.style.width = "60px";
    } else {
      searchbarRef.current.style.width = "400px";
    }
  };

  return (
    <div
      className="bg-grey p-3 rounded-full  flex justify-around"
      ref={searchbarRef}
    >
      <BiSearchAlt
        className="text-2xl md:text-3xl lg:text-4xl cursor-pointer text-white "
        onClick={toggleSearchbar}
      />
      {isSearchbarFocused ? (
        <input
          className="w-[300px] rounded-[20px] bg-dark px-2 border-[1px]"
          ref={searchInputRef}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
