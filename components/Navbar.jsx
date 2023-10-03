import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-8 px-12">
      <div className="">WiredWave</div>
      <div className="flex gap-8">
        <div className="bg-[#212121] p-3 rounded-full">
          <BiSearchAlt size={40} />
        </div>
        <div className="bg-[#212121] p-3 rounded-full relative">
          {" "}
          <AiOutlineShoppingCart size={40} />{" "}
          <span className="absolute w-6 flex justify-center items-center rounded-full bg-[#0074E4] top-1 right-1">
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
