'use client'
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const SaleImage = ({ image }) => {
  return (
    <div className="flex justify-center items-center w-full md:w-1/3 h-[200px] md:h-[400px]">
      <img
        src={urlFor(image)}
        alt=""
        className="z-20 h-[300px] md:h-auto md:w-full"
      />
    </div>
  );
};

export default SaleImage;
