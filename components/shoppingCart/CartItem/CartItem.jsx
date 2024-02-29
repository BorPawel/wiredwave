"use client";

import React from "react";
import CartItemDetails from "./CartItemDetails/CartItemDetails";

import NextImage from "@/components/reusable/NextImage/NextImage";

const CartItem = ({ item }) => {
  return (
    <div className="flex w-full bg-grey rounded-[20px] p-2 ">
      <NextImage
        image={item?.image[0]}
        className=""
        alt="shopping cart image"
        width={100}
        height={100}
      />

    <CartItemDetails item={item}/>
    </div>
  );
};

export default CartItem;
