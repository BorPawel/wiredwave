"use client";
import BottomLight from "@/components/categoriesHomepage/categories/Tile/ProductTitle/Lights/BottomLight/BottomLight";
import TopLight from "@/components/categoriesHomepage/categories/Tile/ProductTitle/Lights/TopLight/TopLight";
import NextImage from "@/components/reusable/NextImage/NextImage";

import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className=" relative overflow-hidden flex justify-center items-center">
      <TopLight />
      <div className="w-3/4   flex justify-center  aspect-square items-center gap-2 flex-col ">
        {item?.image && (
          <NextImage
            image={item?.image[0]}
            alt={item?.name}
            className="md:w-3/4 p-2  hover:scale-110 duration-200 object-cover"
            width={200}
            height={200}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
