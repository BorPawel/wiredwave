"use client";
import BottomLight from "@/components/categoriesHomepage/categories/Tile/ProductTitle/Lights/BottomLight/BottomLight";
import TopLight from "@/components/categoriesHomepage/categories/Tile/ProductTitle/Lights/TopLight/TopLight";
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className=" relative overflow-hidden flex justify-center items-center ">
      <TopLight />
      <div className="w-3/4   flex justify-center items-center gap-2 flex-col ">
       { item?.image && <img
          src={urlFor(item?.image && item?.image[0])}
          alt={item?.name}
          className="md:w-3/4 p-2 aspect-square hover:scale-110 duration-200 object-cover"
     
          />}
        <div className="w-full md:w-3/4   flex flex-col gap-1">
          <p  className=" text-sm md:text-lg">{item?.name}</p>

          <p>${item?.price?.toFixed(2)}</p>
        </div>
      </div>
          
    </div>
  );
};

export default ProductCard;
