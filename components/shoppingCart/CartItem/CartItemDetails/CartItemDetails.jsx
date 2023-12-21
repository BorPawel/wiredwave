import React from "react";

const CartItemDetails = ({ item }) => {
  return (
    <div className="flex flex-col">
      <p className="font-bold">{item.name}</p>
      <span className="flex items-center gap-2">
        <p className="font-thin">Color: </p>
        <span
          className="w-5 h-5 rounded-full"
          style={{
            backgroundColor: item.color,
          }}
        ></span>
      </span>
      <p className="block md:hidden font-thin">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItemDetails;
