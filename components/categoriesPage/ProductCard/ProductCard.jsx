import { urlFor } from "@/sanity/lib/client";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ item }) => {
  return (
    <div className="aspect-square">
      <div className="w-full h-full p-4 shadow rounded flex justify-center items-center gap-2 flex-col">
        <img
          src={urlFor(item.image && item.image[0])}
          alt={item.name}
          className="w-3/4"
        />
        <div className="w-3/4">
          <p>{item.name}</p>
          <div className="flex justify-between w-full">
            <p>$ {item.price.toFixed(2)}</p>
            <div className="flex">
              <p>{item.stars} </p>
              <AiFillStar className="text-2xl md:text-3xl text-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
