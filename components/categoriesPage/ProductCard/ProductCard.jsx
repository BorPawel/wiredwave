"use client";
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="aspect-auto">
      <div className="w-full h-full  shadow rounded flex justify-center items-center gap-2 flex-col">
        <img
          src={urlFor(item?.image && item.image[0])}
          alt={item?.name}
          className="md:w-3/4 p-2"
        />
        <div className="md:w-3/4  text-sm md:text-lg flex flex-col gap-1">
          <p>{item?.name}</p>

          <p>${item?.price?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
