import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar/SearchBar";
const SearchOverlay =  () => {
  

  return ReactDOM.createPortal(
    <div className="w-screen min-h-screen bg-dark fixed right-0 top-0 z-50 flex-center overflow-auto text-white">
      <div className="w-[1400px] flex flex-col h-screen p-4">
        <div className="flex-center h-[250px] mt-6">
          <h2>Search</h2>
        </div>
        <SearchBar />
        <div className=" flex-center min-h-[500px] bg-black "></div>
      </div>
    </div>,
    document.getElementById("search-portal")
  );
};

export default SearchOverlay;
