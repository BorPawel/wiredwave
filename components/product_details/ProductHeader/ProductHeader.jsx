import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductHeader = ({ product }) => {
  return (
    <div className="flex flex-col justify-start items-center w-full md:hidden pl-6">
      <h3 className="text-4xl font-medium lg:text-5xl">{product?.name}</h3>
      <div className="flex items-center gap-4">
        <AiFillStar className="text-4xl md:text-5xl text-blue" />
        <span className="text-xl md:text-2xl">{product?.stars}</span>
        <span>({product?.reviews} reviews)</span>
      </div>
    </div>
  );
};

export default ProductHeader;
