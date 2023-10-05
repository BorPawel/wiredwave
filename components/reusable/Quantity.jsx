import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
const Quantity = () => {
  const { decQty, incQty,qty } = useStateContext();

  return (
    <div className="flex w-16 justify-between items-center m-4">
      <span onClick={decQty}>
        {" "}
        <AiOutlineMinus />
      </span>
      <span className="w-1/3 flex justify-center items-center">{qty}</span>
      <span>
        <AiOutlinePlus onClick={incQty} />
      </span>
    </div>
  );
};

export default Quantity;
