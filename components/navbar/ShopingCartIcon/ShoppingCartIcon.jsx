import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
const ShoppingCartIcon = () => {
    const { showCartHandler, totalQuantities } = useStateContext()
  return (
    <div className=" p-3 rounded-full relative ">
      {" "}
      <AiOutlineShoppingCart
        className="text-2xl md:text-3xl lg:text-4xl cursor-pointer"
        onClick={showCartHandler}
      />{" "}
      <span className="absolute w-6 flex justify-center items-center rounded-full bg-blue text-white top-0 right-0 ">
        {totalQuantities}
      </span>
    </div>
  );
};

export default ShoppingCartIcon;
