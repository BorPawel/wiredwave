import { getCategoryWithParams } from "@/lib/getData/getData";
import React from "react";
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";
const ProductGrid = async ({ params }) => {
  const products = await getCategoryWithParams(params);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3  gap-2 gap-y-6 md:gap-4 ">
      {products.map((item) => (
        <Link
          href={`/product/${item.category.toLowerCase()}/${item.slug.current}`}
        >
          <ProductCard item={item} />
          <div className="w-full md:w-3/4   flex flex-col gap-1">
            <p className=" text-sm lg:text-lg">{item?.name}</p>

            <p className="lg:text-2xl">${item?.price?.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
