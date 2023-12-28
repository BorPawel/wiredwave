'use client'
import { urlFor } from "@/sanity/lib/client";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ item }) => {
  
  return (
    <div className="aspect-auto">
      <div className="w-full h-full p-4 shadow rounded flex justify-center items-center gap-2 flex-col">
        <img
          src={urlFor(item?.image && item.image[0])}
          alt={item?.name}
          className="md:w-3/4"
        />
        <div className="md:w-3/4 text-sm md:text-lg flex flex-col gap-1">
          <p className="">{item?.name}</p>
          <div className="flex justify-between w-full flex-col md:flex-row">
            <p>${item?.price?.toFixed(2)}</p>
            {/* <div className="flex justify-start items-center gap-1">
              <p>{item?.stars} </p>
              <AiFillStar className="text-xl md:text-3xl text-blue" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
