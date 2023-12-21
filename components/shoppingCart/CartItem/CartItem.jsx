import { urlFor } from "@/sanity/lib/client";
import React from "react";
import CartItemDetails from "./CartItemDetails/CartItemDetails";
import CartItemQuantity from "./CartItemQuantity/CartItemQuantity";
import CartItemRemove from "./CartItemRemove/CartItemRemove";

const CartItem = ({ item }) => {
  return (
    <div className="flex w-full bg-grey rounded-[20px] p-2" key={index}>
      <img src={urlFor(item.image && item.image[0])} className="h-20 lg:h-32" />
      <div className="flex items-center justify-between w-full px-2 md:px-6">
        <CartItemDetails item={item} />
        <CartItemQuantity item={item} />
        <CartItemRemove item={item} />
      </div>
    </div>
  );
};

export default CartItem;
