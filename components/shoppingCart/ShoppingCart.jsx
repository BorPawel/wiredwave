import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
const ShoppingCart = () => {
  const { showCartHandler } = useStateContext();
  return (
    <div className="w-screen bg-[rgba(0,0,0,0.5)] fixed right-0 top-0 z-100 flex items-end justify-end">
      <div className="h-screen w-[600px] bg-slate-50 relative">
        <AiOutlineArrowLeft
          className="text-3xl text-blue cursor-pointer"
          onClick={showCartHandler}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
