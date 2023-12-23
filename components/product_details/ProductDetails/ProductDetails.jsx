import Button from "@/components/reusable/button/Button";
import FreeShipping from "@/components/svg/FreeShipping";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Reviews } from "../reviews/Reviews";

const ProductDetails = ({ product }) => {
  return (
    <div className="w-full lg:w-5/12 flex flex-col items-start gap-2 lg:mt-8 p-4 md:p-2">
      <h3 className="hidden md:block text-4xl font-medium lg:text-5xl">
        {product?.name}
      </h3>
      <Reviews stars={product?.stars} reviews={product?.reviews} />
      <p className="hidden md:block text-sm md:w-3/4 pr-2 my-6">
        {product?.shortDesc}
      </p>

      <span className="h-[2px] w-full lg:w-3/4 mb-8 lg:mt-3 bg-grey"></span>

      <p className="block md:hidden text-sm lg:w-3/4 pr-2 mb-8 ">
        {product?.shortDesc}
      </p>

      <div className="flex flex-col gap-8 w-full  ">
        <p className="font-bold w-1/2 text-5xl">${product?.price}</p>
        <div className="flex justify-around lg:justify-start items-center w-full lg:items-start gap-2  lg:gap-10 flex-wrap ">
          <Button buttonText="Add to Cart" />
          <Button buttonText="Buy Now" />
        </div>
      </div>

      <span className="h-[2px] w-full lg:w-3/4 my-8 bg-grey"></span>

      <div className="w-full grid grid-cols-2 place-items-center lg:place-items-start gap-4">
        <span className="flex-center gap-3">
          <FreeShipping />
          <p>Free Shipping</p>
        </span>
        <span className="flex-center gap-3">
          <LiaShippingFastSolid className="text-[35px]" />
          <p>24h delivery</p>
        </span>
        <span className="flex-center gap-3">
          <MdOutlineSecurity className="text-[35px]" />
          <p>All time security</p>
        </span>
        <span className="flex-center gap-3">
          <BiSupport className="text-[35px]" />
          <p>Support help</p>
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
