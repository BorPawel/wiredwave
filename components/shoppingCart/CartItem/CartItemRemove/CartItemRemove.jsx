import { useStateContext } from "@/context/StateContext";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const CartItemRemove = ({ item }) => {
    const { deleteItemFromCart } =
    useStateContext();
  return (
    <div className="hidden md:flex">
      <FaTrashAlt
        className="text-red-600 cursor-pointer "
        onClick={() => deleteItemFromCart(item)}
      />
    </div>
  );
};

export default CartItemRemove;
