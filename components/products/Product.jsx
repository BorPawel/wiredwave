import Link from "next/link";
import React from "react";

import { urlFor } from "@/sanity/lib/client";
import { AiFillStar } from "react-icons/ai";
const Product = ({ product: { name, image, slug, price,stars } }) => {
  return (
    <div className="w-[350px] md:w-[320px] lg:w-[350px] bg-grey rounded-3xl flex flex-col justify-between p-6">
      <Link href={`/product/${slug}`}>
        <img src={urlFor(image[0])} alt="" className="w-full" />
      </Link>
      <div className="flex justify-between items-end">
        <div>
          <p>{name}</p>
          <span>${price.toFixed(2)}</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <AiFillStar/>
          {stars}
        </div>
      </div>
    </div>
  );
};

export default Product;
