import React from "react";

const CartItemDetails = ({ item }) => {
  return (
    <div className="flex flex-col  gap-1">
      <p className="font-bold">{item?.name}</p>
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
