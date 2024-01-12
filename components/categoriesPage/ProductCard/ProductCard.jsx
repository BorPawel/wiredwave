"use client";
import BottomLight from "@/components/categoriesHomepage/categories/Tile/ProductTitle/Lights/BottomLight/BottomLight";
import TopLight from "@/components/categoriesHomepage/categories/Tile/ProductTitle/Lights/TopLight/TopLight";
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="aspect-auto relative overflow-hidden ">
      <TopLight />
      <div className="w-full h-full  shadow rounded flex justify-center items-center gap-2 flex-col ">
       { item?.image && <img
          src={urlFor(item?.image && item?.image[0])}
          alt={item?.name}
          className="md:w-3/4 p-2   hover:scale-110 duration-200"
          />}
        <div className="w-full md:w-3/4  text-sm md:text-lg flex flex-col gap-1">
          <p>{item?.name}</p>

          <p>${item?.price?.toFixed(2)}</p>
        </div>
      </div>
          
    </div>
  );
};

export default ProductCard;
