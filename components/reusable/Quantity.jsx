import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
const Quantity = () => {
  const { decQty, incQty,qty } = useStateContext();

  return (
    <div className="flex justify-between items-center">
      <span className=" p-2 cursor-pointer hover:text-red-600" onClick={decQty}>
        {" "}
        <AiOutlineMinus />
      </span>
      <span className="w-1/3 flex justify-center items-center p-4">{qty}</span>
      <span className=" p-2 cursor-pointer hover:text-green-600">
        <AiOutlinePlus onClick={incQty} />
      </span>
    </div>
  );
};

export default Quantity;
