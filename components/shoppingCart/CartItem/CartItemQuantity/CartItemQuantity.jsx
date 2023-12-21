import { useStateContext } from "@/context/StateContext";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartItemQuantity = ({ item }) => {
  const { incQtyInCart, decQtyInCart } = useStateContext();
  return (
    <div className="hidden md:flex justify-between items-center gap-2">
      <span
        onClick={() => decQtyInCart(item)}
        className="cursor-pointer hover:text-red-600"
      >
        <AiOutlineMinus />
      </span>
      <span className="w-1/3 flex justify-center items-center mx-[2px]">
        {item.quantity}
      </span>
      <span
        onClick={() => incQtyInCart(item)}
        className="cursor-pointer hover:text-green-600"
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default CartItemQuantity;
