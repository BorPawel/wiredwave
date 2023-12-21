import { useStateContext } from "@/context/StateContext";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const CartHeader = () => {
  const { showCartHandler } = useStateContext();
  return (
    <>
      <div className="flex-center h-[250px] mt-6">
        <h2>Your Cart</h2>
      </div>
      <div className="text-3xl p-2 pl-4 my-6 cursor-pointer">
        <IoIosArrowBack onClick={showCartHandler} />
      </div>
    </>
  );
};

export default CartHeader;
