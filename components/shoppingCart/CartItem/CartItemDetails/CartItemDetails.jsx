import React from "react";
import CartItemQuantity from "../CartItemQuantity/CartItemQuantity";
import CartItemRemove from "../CartItemRemove/CartItemRemove";

const CartItemDetails = ({ item }) => {
  return (
    <div className="flex  md:justify-between justify-evenly w-full px-2 md:px-6 flex-col">
      <p className="font-bold">{item?.name}</p>
      <div className="flex items-center justify-between">
        <p className="block font-thin">
          $ {(item?.price * item?.quantity).toFixed(2)}
        </p>

        <CartItemQuantity item={item} />
        <CartItemRemove item={item} />
      </div>
      <span className="flex items-center gap-2">
        <p className="font-thin">Color: </p>
        <span
          className="w-5 h-5 rounded-full"
          style={{
            backgroundColor: item?.color,
          }}
        ></span>
      </span>
    </div>
  );
};

export default CartItemDetails;
