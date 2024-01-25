import Button from "@/components/reusable/button/Button";

import React from "react";

import { Reviews } from "../reviews/Reviews";
import AddToCard from "./AddToCard/AddToCard";
import Services from "./Services/Services";

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
      <AddToCard product={product} />

      <span className="h-[2px] w-full lg:w-3/4 my-8 bg-grey"></span>

      <Services />
    </div>
  );
};

export default ProductDetails;
