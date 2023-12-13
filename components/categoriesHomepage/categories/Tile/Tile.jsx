import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Tile = ({ products, category }) => {
  const findProduct = products.find((item) => item.category === category);
  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-2">
      <div className="h-3/4">
        <img
          src={urlFor(findProduct.image && findProduct.image[0])}
          className="max-w-[200px]"
        />
      </div>

      <div className="h-1/4  flex justify-center items-center ">
        <div className="">{findProduct.category}</div>
      </div>
    </div>
  );
};

export default Tile;
