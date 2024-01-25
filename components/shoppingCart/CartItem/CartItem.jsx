"use client";
import { urlFor } from "@/sanity/lib/client";
import React from "react";
import CartItemDetails from "./CartItemDetails/CartItemDetails";
import CartItemQuantity from "./CartItemQuantity/CartItemQuantity";
import CartItemRemove from "./CartItemRemove/CartItemRemove";
import NextImage from "@/components/reusable/NextImage/NextImage";

const CartItem = ({ item }) => {
  return (
    <div className="flex w-full bg-grey rounded-[20px] p-2 ">
      {/* <img src={urlFor(item.image && item.image[0])} className="h-20 lg:h-32" /> */}

      <NextImage
        image={item?.image[0]}
        className=""
        alt="shopping cart image"
        width={100}
        height={100}
      />

      <div className="flex  md:justify-between justify-evenly w-full px-2 md:px-6 flex-col">
        <CartItemDetails item={item} />
        <div className="flex items-center justify-between">
          <p className="block font-thin">
            ${(item?.price * item?.quantity).toFixed(2)}
          </p>

          <CartItemQuantity item={item} />
          <CartItemRemove item={item} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
