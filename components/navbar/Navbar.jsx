import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useStateContext } from "@/context/StateContext";
import ShoppingCart from "../shoppingCart/ShoppingCart";
const Navbar = () => {
  const {showCartHandler, cartItems, showCart, totalQuantities } = useStateContext();

  return (
    <nav className="w-full flex justify-between items-center p-4 md:p-6 px-8 md:px-12 fixed z-50">
      <div className="">WiredWave</div>
      <div className="flex gap-4 md:gap-6 lg:gap-8">
        <div className="bg-grey p-3 rounded-full">
          <BiSearchAlt className="text-2xl md:text-3xl lg:text-4xl" />
        </div>
        <div className="bg-grey p-3 rounded-full relative">
          {" "}
          <AiOutlineShoppingCart className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" onClick={showCartHandler}/>{" "}
          <span className="absolute w-6 flex justify-center items-center rounded-full bg-blue top-0 right-0">
          {totalQuantities}
          </span>
        </div>
      </div>
      {showCart && <ShoppingCart/> }
    </nav>
  );
};

export default Navbar;
