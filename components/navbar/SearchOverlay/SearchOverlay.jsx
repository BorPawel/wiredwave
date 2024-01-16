"use client";
import { useStateContext } from "@/context/StateContext";
import React from "react";
import ReactDOM from "react-dom";
import { IoIosArrowBack } from "react-icons/io";
const SearchOverlay = () => {
  const { showSearchOverlayHandler } = useStateContext();
  return ReactDOM.createPortal(
    <div className="w-screen min-h-screen bg-dark fixed right-0 top-0 z-50 flex-center overflow-auto text-white">
      <div className="w-[1400px] flex flex-col h-screen">
        <div className="flex-center h-[250px] mt-6">
          <h2>Search</h2>
        </div>
        <IoIosArrowBack
          onClick={showSearchOverlayHandler}
          className="text-3xl cursor-pointer"
        />
        <div className="w-full flex-center  ">
          <input className="w-1/2 bg-dark border-[1px] border-white  rounded-md p-2" />
        </div>

        <div className="w-full flex-center ">
            
        </div>
      </div>
    </div>,
    document.getElementById("search-portal")
  );
};

export default SearchOverlay;
