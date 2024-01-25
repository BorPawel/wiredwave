"use client";
import NextImage from "@/components/reusable/NextImage/NextImage";

import React from "react";

const SaleImage = ({ image }) => {
  return (
    <div className="flex justify-center items-center w-full md:w-1/3 h-[200px] md:h-[400px]">
      <NextImage
        image={image}
        alt="sales banner image"
        className="z-20 h-[300px] md:h-auto md:w-full"
        width={500}
        height={500}
      />
    </div>
  );
};

export default SaleImage;
